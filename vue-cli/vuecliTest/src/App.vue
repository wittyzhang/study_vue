<template>
  <div id="app">
    <img src="./assets/logo.png"><br/>
    <div>
      <button @click="goBack">后退</button>
      <button @click="goTo">前进</button>
      <button @click="goHome">返回首页</button>
    </div>
    <router-link to="/">HEMO</router-link> | 
    <router-link to="/params/123/jspang website is very good">params</router-link> |
    <router-link to="/goHome">goHEMO</router-link> | 
    <router-link to="/goParams/918/i like vue js">go params</router-link> |
    <router-link to="/hi1">hi1</router-link> |
    <router-link to="/jspang">jspang</router-link> |
    <!-- <div>
      <router-link to="/">首页</router-link>
      <router-link to="/hi">Hipage</router-link>
      <router-link :to="{name:'hi1',params:{username:'jspang',id:'888'}}">Hipage 1</router-link>
      <router-link to="/hi/hi2">Hipage 2</router-link>
    </div> -->
    <!-- <p>{{ $route.name }} 1.路由通过name传参</p>
    <p>2.通过 router-link 标签中的to传参</p> -->
    <transition name="fade" mode="out-in">
    <router-view></router-view>
    </transition>
    <!-- <router-view name="left" style="float:left;width:50%;height:300px;background:pink;"></router-view>
    <router-view name="right" style="float:right;width:50%;height:300px;background:green;"></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  methods:{
    goBack() {
      this.$router.go(-1);
    },
    goTo() {
      this.$router.go(1);
    },
    goHome() {
      this.$router.push("/"); //编程式导航
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition: opacity .5s;
}
.fade-leave{
  opacity:1;
}
.fade-leave-active{
  opacity: 0;
  transition: opacity .5s;
}
</style>
