<template>
  <v-container>
    <Message :sendMessage="store.message"></Message>
    <v-row>
        <v-col class="mx-auto" cols="12" md="9">
            <v-card rounded="xl">
                <v-card-title class="font-weight-bold mt-5">مشخصات حساب</v-card-title>
                <v-card-text>
                    <v-row class="mt-5">
                        <v-col cols="12" md="6">
                            <v-text-field v-model="user.id" disabled variant="outlined" density="compact" label="شناسه کاربر"></v-text-field>
                        </v-col>
                        <v-col cols="12" md="6">
                            <v-text-field v-model="user.mobile" disabled variant="outlined" density="compact" label="شماره موبایل"></v-text-field>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
        </v-col>
        
        <v-col class="mx-auto" cols="12" md="9">
                            <v-card rounded="xl">
                                <v-card-title class="font-weight-bold mt-5">مشخصات فردی</v-card-title>
                            <v-card-text>
                                <v-row class="mt-5">
                                    <v-col cols="12" md="6">
                                        <v-text-field v-model="user.first_name" clearable variant="outlined" color="warning" density="compact" label="نام"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field v-model="user.last_name" variant="outlined" clearable color="warning" density="compact" label="نام خانوادگی"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-select v-model="user.province" :items="store.formData.provinces" item-title="title" item-value="id" v-on:update:modelValue="setCites" variant="outlined" clearable color="warning" density="compact" label="استان"></v-select>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-select v-model="user.shahr" :items="cities"  item-title="title" item-value="id" variant="outlined" clearable color="warning" density="compact" label="شهر"></v-select>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-select v-model="user.gender" :items="store.formData.genders" item-title="title" item-value="id" variant="outlined" clearable color="warning" density="compact" label="جنسیت"></v-select>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field disabled v-model="user.national_code" variant="outlined" clearable color="warning" density="compact" label="کد ملی"></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="9" class="mx-auto">
                            <v-card rounded="xl">
                                <v-card-title class="font-weight-bold mt-5">مشخصات تحصیلی</v-card-title>
                                <v-card-text>
                                    <v-row class="mt-5">
                                        <v-col cols="12" md="6">
                                        <v-select v-model="user.major" variant="outlined" :items="store.formData.majors" item-title="title" item-value="id" clearable color="warning" density="compact" label="رشته تحصیلی"></v-select>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-select v-model="user.grade" variant="outlined" :items="store.formData.grades" item-title="title" item-value="id" clearable color="warning" density="compact" label="مقطع تحصیلی"></v-select>
                                    </v-col>
                                    </v-row>
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="9" class="mx-auto">
                            <v-card rounded="xl">
                                <v-card-title class="font-weight-bold mt-5">اطلاعات تماس</v-card-title>
                                <v-form v-on:submit.prevent="editDataUser">
                                <v-card-text>
                                    <v-row class="mt-5">
                                        <v-col cols="12" md="6">
                                        <v-text-field v-model="user.postal_code" variant="outlined" clearable color="warning" density="compact" label="کد پستی"></v-text-field>
                                    </v-col>
                                    <v-col cols="12" md="6">
                                        <v-text-field v-model="user.email" variant="outlined" clearable color="warning" density="compact" label="ایمیل"></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field v-model="user.address" variant="outlined" clearable color="warning" density="compact" label="آدرس محل سکونت"></v-text-field>
                                    </v-col>
                                    </v-row>
                                </v-card-text>
                                <v-card-actions class="d-flex justify-end mb-5"><v-btn :loading="store.loading" type="submit" variant="flat" class="font-weight-bold ml-3" size="large" color="warning">ثبت تغییرات</v-btn></v-card-actions>
                                </v-form>
                            </v-card>
                        </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {stateManegment} from '~/store/index.js';
export default {
    name:'ProfilePage',
    setup(){
        definePageMeta({
            middleware:['auth']
        });
        const cities = ref([]);
        const store = stateManegment();
        onBeforeMount(()=>{
             getUserFormData(); 
            });
        const user = reactive({
            'first_name':store.dataUser.first_name?store.dataUser.first_name:null,
            'last_name':store.dataUser.last_name?store.dataUser.last_name:null,
            'id':store.dataUser.id?store.dataUser.id:null,
            'mobile':store.dataUser.mobile?store.dataUser.mobile:null,
            'birthdate':store.dataUser.birthdate?store.dataUser.birthdate:null,
            'gender':store.dataUser.gender?store.dataUser.gender.id:null,
            'province':store.dataUser.province?store.dataUser.province:null,
            'shahr':store.dataUser.shahr?store.dataUser.shahr.id:null,
            'national_code':store.dataUser.national_code?store.dataUser.national_code:null,
            'major':store.dataUser.major?store.dataUser.major.id:null,
            'grade':store.dataUser.grade?store.dataUser.grade.id:null,
            'postal_code':store.dataUser.postal_code?store.dataUser.postal_code:null,
            'email':store.dataUser.email?store.dataUser.email:null,
            'address':store.dataUser.address?store.dataUser.address:null,
        })
        // متد جهت تغییر استان و انتخاب شهر توسط کاربر 
        function setCites(){
            user.shahr = null;
            cities.value = store.formData.cities.filter((element)=>{
                return element.province.id == user.province;
            })
        }
        // متد جهت ست کردن شهر و استان با اطلاعات دریافتی از Api
        function changeCities(){
            if(user.shahr){
                let result = store.formData.cities.find((element)=>{
                    return element.id == user.shahr;
                })
           cities.value = store.formData.cities.filter((element)=>{
                return element.province.id == result.province.id;
            })
            user.province = result.province;
            user.shahr = result.id;
            }
        }
        //متد برای دریافت جنسیت شهر و استان و رشته ومقطع تحصیلی
       async function getUserFormData(){
           store.changeLoading(true);
            try {
                const data = await $fetch('api/userFormData');
                store.setFormData(data.data);
                changeCities();
            } catch (error) {
                // console.log(error);
            }
            finally{
                store.changeLoading(false);
            }
        }
        //متد برای تغییر اطلاعات کاربر
       async function editDataUser(){
        store.changeLoading(true);
            try {
                const data = await $fetch('api/editDataUser',{
                    method:'PUT',
                    body:{
                "first_name": user.first_name,
                "last_name": user.last_name,
                "address": user.address,
                "school": "string",
                "major_id": user.major,
                "grade_id": user.grade,
                "gender_id": user.gender,
                "shahr_id": user.shahr,
                "id":user.id
              }
                });
                store.setDataUser(data.data);
                store.setMessage({
                    message:['تغییرات با موفقیت ذخیره شد'],
                    color:'success'
                });
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
        return{store , cities , setCites , user , editDataUser}
    }
}
</script>

<style>

</style>