<template>
  <div>
    <h1>about</h1>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log("to", to);
    console.log("from", from);
    console.log("next", next);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log("to", to);
    console.log("from", from);
    console.log("next", next);
    next();
  },
};
</script>

<style lang="scss" scoped>
</style>