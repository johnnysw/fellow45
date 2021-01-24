<template>
  <div>
    <h1>课程</h1>
    <router-link to="/fe">前端</router-link> |
    <router-link to="/rd">后端</router-link>
    <!-- <router-link to="/about/aa">后端</router-link> -->
    <transition name="bounce" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "course",
};
</script>

<style lang="scss" scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>