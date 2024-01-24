export default defineEventHandler(async(event)=>{
    const token = getCookie(event , 'token');
    const url = useRuntimeConfig();
    try {
        const data = await $fetch(`${url.baseUrl}/megaroute/getUserFormData`,{
            headers:{
                'Authorization': `Bearer ${token}`
            },
        })
        return data;
    } catch (error) {
        return error;
    }
})