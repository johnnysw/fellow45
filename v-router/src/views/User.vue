<template>
  <div>
    <h1>用户详情</h1>
    <p>用户名：{{name}}</p>
    <!-- <p>id：{{ $route.query.id }}</p> -->
    <p>id：{{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      // name: this.$route.query.name,
      name: this.$route.params.name,
      str: "qwe",
    };
  },
};
</script>

<style lang="scss" scoped>
</style>