import {defineStore} from 'pinia';
export const stateManegment = defineStore('index' , {
    state:()=>{
        return{
            loading: false,
            formData:[],
            dataUser:[],
            cookie:null,
            message:[]
        }
    },
    actions:{
        changeLoading(value){
            this.loading = value;
        },
        setFormData(value){
            this.formData = value;
        },
        setDataUser(value){
            this.dataUser = value.user;
            this.cookie = value.access_token;
        },
        emptyCookie(value){
            this.cookie = value;
            navigateTo('/login');
        },
        setMessage(value){
            this.message = value;
        }
    }
})