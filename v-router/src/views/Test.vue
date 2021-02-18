import router from '../router';
<template>
  <div>
    <h1>活动页面</h1>
    <button @click="goBack">后退一步</button>
    <button @click="go">后退两步</button>
    <button @click="goHome">回到首页</button>

  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.back();
    },
    go() {
      this.$router.go(-2);
    },
    goHome() {
      // this.$router.push('/');
      // this.$router.push({
      //   path:'/user',
      //   query:{
      //     name:'haha',
      //     id:666
      //   }
      // });
      this.$router.push({
        name:'User',
        params:{
          name:'haha',
          id:666
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>