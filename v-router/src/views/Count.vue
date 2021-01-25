<template>
  <div>
    <h1>vuex</h1>
    <p>mycount: {{mycount}} </p>
    <p>mapstate-count: {{count}} </p>
    <p>$store-count: {{$store.state.count}} </p>

    <!-- <button v-on:click="$store.commit('add')">+1</button> -->
    <button v-on:click="add1">+1</button>
    <button v-on:click="addNum1(5)">+5</button>

  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    // 对需要的 state 中的内容进行映射
    ...mapState(["count"]),
  },
  data() {
    return {
      mycount: this.$store.state.count,
    };
  },
  methods: {
    add1() {
      this.$store.commit("add");
    },
    addNum1(num) {
      this.$store.commit("addNum", num);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>