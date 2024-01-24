export default defineEventHandler(async(event)=>{
    const body = await readBody(event);
    const url = useRuntimeConfig();
    try {
        const data = await $fetch(`${url.baseUrl}/login` , {
            method:'POST',
            body:body
        });
        setCookie(event,'token',data.data.access_token,{
            httpOnly:true,
            secure:true,
            maxAge:new Date(data.data.token_expires_at),
            path:'/'
        })
        return data;
    } catch (error) {
        return error;
    }
})