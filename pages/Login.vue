<template>
  <v-container fluid>
        <Message :sendMessage="store.message"></Message>
    <v-row class="h-screen d-flex justify-center align-center">
        <v-col cols="12" md="3">
            <v-form v-on:submit.prevent="sendDataUser">
            <v-card rounded="xl" >
                <v-card-title class="text-center titr text-h4 mt-10">ثبت نام و ورود</v-card-title>
                <v-card-text class="pa-16">
                    <v-text-field class="mt-3" v-model="dataUser.mobile" placeholder="-------۰۹" label="شماره همراه" color="warning" variant="outlined" density="compact"></v-text-field>
                    <v-text-field class="mt-5" v-model="dataUser.password" color="warning" label="کد ملی" variant="outlined" density="compact"></v-text-field>
                    <v-card-actions>
                        <v-btn :loading="store.loading" type="submit" rounded="lg" class="mt-8 titr font-weight-bold" variant="flat" block color="warning">ثبت نام / ورود</v-btn>
                    </v-card-actions>
                </v-card-text>
            </v-card>
            </v-form>
        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {stateManegment} from '~/store/index.js';
export default {
    name:'LoginPage',
    setup(){
        definePageMeta({
            layout:false,
        });
        const store = stateManegment();
        const dataUser = reactive({
            "mobile": '',
            "password": ''
        })
        //متد جهت لاگین و دریافت اطلاعات کاربر
       async function sendDataUser(){
        store.changeLoading(true);
            try {
                const data = await $fetch('/api/Login' , {
                    method:'POST',
                    body:dataUser
                });
                store.setDataUser(data.data);
                 store.setMessage({
                    message:['به آلا خوش آمدید'],
                    color:'success'
                });
                setTimeout(() => {
                    navigateTo('/profile');
                }, 2000);
            } catch (error) {
                store.setMessage({
                    message:Object.values(error.data.data.errors).flat(),
                    color:'error'
                });
            }
            finally{
                setTimeout(() => {
                    store.setMessage([])
                    store.changeLoading(false);
                }, 2000);
            }
        }
        return{sendDataUser , dataUser , store}
    }
}
</script>

<style>
.border{
    border: 1px solid black;
}
</style>