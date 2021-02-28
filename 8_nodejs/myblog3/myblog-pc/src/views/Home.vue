<template>
  <div class="content">
    <div class="blog-list">
      <div class="blog-box" v-for="blog in blogList" :key="blog.blogId">
        <h2 class="blog-title">
          <router-link :to="{path:'/blog/detail/'+blog.blogId}">{{blog.title}}</router-link>
        </h2>
        <div class="blog-content">{{blog.content}}</div>
        <div class="other-info">
          <span class="post-time"> {{blog.postTime}}} </span>
          <span class="read-count"> {{blog.readCount}}} 阅读 </span>
          <span class="username"> {{blog.username}} </span>
        </div>
      </div>
    </div>
    <div class="sidebar">
      <div class="btns">
        <button id="btn-post">发表文章</button>
      </div>
      <div class="blog-cates">
        <h2>文章分类</h2>
        <ul class="category-list">
          <li v-for="category in cateList" :key="category.cateId">
            <router-link to="">{{category.cateName}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return {
      blogList: [],
      cateList: []
    }
  },
  created() {
    this.loadBlogsData();
  },
  methods: {
    loadBlogsData(){
      this.axios({
        url: 'http://localhost:3000/blog/list'
      }).then(res => {
        let {state, blogs, categories} = res.data;
        this.blogList = blogs;
        this.cateList = categories;
      });
    }
  },
};
</script>

<style scoped lang="scss">
.content {
  text-align: left;
  margin-top: 20px;
}
.blog-list {
  flex: 1;
  margin-right: 20px;

  .blog-box {
    margin-top: 20px;
    padding: 20px;
    height: 220px;
    background: #ccc;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:first-child {
      margin-top: 0;
    }
  }
}

.sidebar {
  width: 220px;
}
</style>
