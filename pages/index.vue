<template>
  <div>Home</div>
</template>

<script>
export default {
  setup(){
    definePageMeta({
            middleware:['auth']
        });
  }
}
</script>

<style>

</style>