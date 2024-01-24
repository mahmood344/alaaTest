<template>
<div class="message">
<v-alert max-width="400" class="text-center mt-3" density="compact" :color="sendMessage.color" :type="sendMessage.color" v-for="(message , index) in sendMessage.message" :key="index">
    {{ message }}
</v-alert>
</div>

</template>
<script>
export default {
    name:'MessageComponent',
    props:['sendMessage'],
}
</script>

<style>
.message{
    z-index: 1000;
    position: absolute;
}
</style>