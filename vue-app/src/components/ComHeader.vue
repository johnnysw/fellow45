<template>
  <header :style="{backgroundColor:curMenu.bgColor}">
    <span @click="goHome">《 首页</span>
    {{curMenu.name}}
  </header>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState(["curMenu"]),
  },
  methods: {
    ...mapMutations(["setCurMenu"]),
    goHome() {
      this.$router.push("/");
      this.setCurMenu({
        name: "剧集",
        bgColor: "#ff0000",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  position: fixed;
  top:0;
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