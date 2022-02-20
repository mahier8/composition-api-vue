<template>
  <div class="home">
    <h1>Home</h1>
    <!-- another example of data binding, by passing in props -->
    <PostList :posts="posts" />
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import { ref } from "vue";

export default {
  name: "Home4",
  components: { PostList },
  setup() {
    const posts = ref([
      { title: "welcome to the blog", body: "lorem ipsum", id: 1 },
      {
        title: "top 5 css tips",
        body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid consectetur ab, eveniet laborum fugiat doloremque quis non sequi, fuga perferendis officia similique rerum tempore eos dolores distinctio nam ea beatae.",
        id: 2,
      },
    ]);

    return { posts };
  },
};
</script>
