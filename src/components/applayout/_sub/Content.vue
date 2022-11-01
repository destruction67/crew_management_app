<template>
  <div>
    <main>
    <router-view/>
    </main>
<!--    <base-app-footer></base-app-footer>-->
  </div>
</template>

<script>
export default {
  name: 'Content',


};
</script>

<style scoped>
input {
  outline: none;
  border: solid 1px green;
}

input:invalid {
  border: solid 1px red;
}
</style>
