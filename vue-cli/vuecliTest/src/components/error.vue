<template>
  <div>
      <h2>{{ msg }}</h2>
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'Hi',
  data () {
      return {
        msg: '404 页面没找到'
      }
  }
}
</script>

<style>

</style>


