export default defineEventHandler(async(event)=>{
    const token = getCookie(event , 'token');
    const body = await readBody(event);
    const url = useRuntimeConfig();
    try {
        const data = await $fetch(`${url.baseUrl}/user/${body.id}` , {
            headers:{
                'Authorization': `Bearer ${token}`
            },
            method:"PUT",
            body:body
        });
        return data;
    } catch (error) {
        if(error.data.message == 'Unauthorized.'){
            setCookie(event,'token','',{
                httpOnly:true,
                secure:true,
                maxAge:new Date(),
                path:'/'
            })
        }
        return error;
    }
})