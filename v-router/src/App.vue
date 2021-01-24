<template>
  <div id="app">
    <router-link to="/">Course</router-link> |
    <router-link to="/about">About</router-link> |
    <!-- 
      路由传参：
        path + query : 地址栏【能】够看到参数，刷新页面时参数【不会】丢失
        name + params : 地址栏【不能】够看到参数，刷新页面时参数【会】丢失
        url + params : 地址栏【能】够看到参数，刷新页面时参数【不会】丢失
     -->
    <!-- <router-link :to="{ path:'/user',query:{ name:'xiaoming',id:1001 } }">用户详情页</router-link> -->
    <router-link :to="{ name:'User',params:{ name:'xiaoming',id:1001 } }">用户详情页</router-link> |
    <router-link to="/detail/10086/21800">课程详情</router-link>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  font-weight: bold;
  color: #2c3e50;

  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
