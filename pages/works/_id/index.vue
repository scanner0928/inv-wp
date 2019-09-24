<template>
  <article class="blogContentMain">
    <header class="blogHeader">
      <h1 class="blogTitle">{{post.title.rendered}}</h1>
      <p class="blogHeaderMeta"></p>
      <div class="blogListImg img">img</div>
    </header>
    <div class="blogSingleBody">
      <section v-html="post.content.rendered"></section>
    </div>
  </article>
</template>

<script>
import Meta from "~/assets/mixins/meta";
export default {
  mixins: [Meta],
  data() {
    return {
      meta: {
        title: "Test-Page!",
        description: "ページ個別のディスクリプション",
        type: "article",
        url: "https://example.com/test",
        image: "https://example.com/img/ogp/test.jpg"
      },
      id: this.$route.params.id,
      post: [],
      param: []
    };
  },
  async asyncData({ $axios, params }) {
    const post = await $axios.$get(
      `https://in-visible.net/wp-json/wp/v2/blog/${params.id}`
    );
    return {
      post
    };
  }

  // mounted() {
  //   fetch(`https://in-visible.net/wp-json/wp/v2/blog/${this.id}`).then(
  //     response => {
  //       response.json().then(post => {
  //         this.post = post;
  //       });
  //     }
  //   );
  // }
};
</script>

