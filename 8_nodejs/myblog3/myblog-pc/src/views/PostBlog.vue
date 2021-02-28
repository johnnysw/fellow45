<template>
  <div class="content">
    <h1>发表文章</h1>
    <div class="form">
      <p>
        分类：
        <select v-model="cateId">
          <option
            v-for="category in cateList"
            :key="category.cate_id"
            :value="category.cate_id"
          >
            {{ category.cate_name }}
          </option>
        </select>
      </p>
      <p>标题：<input type="text" v-model="title" /></p>
      <p>内容：<textarea v-model="content" cols="30" rows="10"></textarea></p>
      <p>
        <button @click="postBlog">确定</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cateList: [],
      cateId: -1,
      title: "",
      content: "",
    };
  },
  created() {
    this.loadCatesData();
  },
  methods: {
    loadCatesData() {
      this.$http.request({
        url: "/blog/getCategories",
      }).then((res) => {
        this.cateList = res.data.categories;
      });
    },
    postBlog() {
      this.$http.request({
        method: "post",
        url: "/blog/post",
        data: {
          cate_id: this.cateId,
          title: this.title,
          content: this.content,
        },
      }).then((res) => {
          console.log(1111);
        //   let {state} = res.data;
        //   if(state === 'success'){
        //       this.$router.push('/');
        //   }
      }).catch(err => {
         
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  text-align: left;
}
</style>