<template>
  <header>
    <v-toolbar density="compact">
        <v-toolbar-title>مدرسه آنلاین آلا</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn v-on:click="logOut" class="text-error" variant="plain">خروج</v-btn>
    </v-toolbar>
  </header>
</template>

<script>
import {stateManegment} from '~/store/index.js';
export default {
    name:'HeaderComponent',
    setup(){
      const store = stateManegment();
     function logOut(){
        store.emptyCookie(null);
      }
      return{logOut}
    }
}
</script>

<style>

</style>