<template>
  <footer>
    <router-link to="/">剧集</router-link>
    <router-link to="/music">音乐</router-link>
    <router-link to="/book">书籍</router-link>
    <router-link to="/chat">聊天</router-link>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  background: rgb(126, 23, 23);
  span {
    position: absolute;
    left: 0;
  }
}
</style>