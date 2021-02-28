<template>
  <div class="content">
    <div class="blog-info">
      <h1 class="blog-title">{{ blog.title }}</h1>
      <div class="other-info">
        <span class="post-time"> {{ blog.post_time }} </span>
        <span class="read-count"> {{ blog.read_count }} 阅读 </span>
      </div>
      <div class="blog-content">{{ blog.content }}</div>
    </div>

    <div class="comment-info">
      <div class="comment-title">
        评论
        <button id="btn-post-comment">发表评论</button>
      </div>
      <div class="input-content">
        <textarea name="content" id="content" cols="30" rows="10"></textarea>
        <button id="btn-post">评论</button>
      </div>
      <div class="comment-list">
        <div class="comment-box">
          <span>评论内容：</span>
          <div class="comment-content">评论内容...</div>
          <div class="other-info">
            <span class="create-time"> &nbsp;&nbsp; 2019-02-12 </span>
            <span class="comment-author"> lisi </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogDetail",
  data() {
    return {
      blog: {},
    };
  },
  created(){
      this.getBlogDetail();
  },
  methods: {
    getBlogDetail() {
      let blogId = this.$route.params.blogId;
      this.axios({
        url: "http://localhost:3000/blog/detail",
        params: {
          blogId,
        },
      }).then((res) => {
        let { state, blog } = res.data;
        this.blog = blog;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.content {
  display: block;
  text-align: left;
}

.blog-info .other-info {
  height: 40px;
}

.comment-info {
  margin-top: 20px;
}

#btn-post-comment {
  float: right;
}

.input-content {
  position: relative;
  display: none;
}

.input-content textarea {
  width: 100%;
}

#btn-post {
  position: absolute;
  right: 10px;
  bottom: 10px;
}

.comment-box {
  margin-top: 10px;
  background: #ccc;

  .other-info {
    height: 40px;
  }

  .other-info span {
    float: right;
  }
}
</style>