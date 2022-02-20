<template>
  <div class="home">
    <h1>Home</h1>
    <!-- if we have an error it will display, otherwise, 
    because error is set to null, nothing will display-->
    <div v-if="error">{{ error }}</div>
    <!-- to add a loading tag, we use posts.length, meaning if we have something in the array  -->
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <!-- While we are waiting for the data, add in the loading -->
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import { ref } from "vue";

export default {
  name: "Home5",
  components: { PostList },
  setup() {
    const posts = ref([]);
    const error = ref(null); // 1. matches with

    const load = async () => {
      // we try and fetch the data
      try {
        // we use the fetch api,and wait for it to get
        // the data. Once er have the data we will store it
        // in the data variable. We now need an endpoint for
        // our fetch method.

        // to check for an error, change the url below
        let data = await fetch("http://localhost:3000/posts");
        // console.log(data); we are just checking to see
        // if we get the data here

        if (!data.ok) {
          // if we dont have the data (ok comes from where we console.log the data)
          // we throw an error
          throw Error("no data available"); // 1. matches with
          // once the error is thrown, it enters into the error
          // block below, throe Error becomes catch (err)
        }
        posts.value = await data.json();
        // we take the data variable we get back, then use
        // json method. We should be able to see the data now
      } catch (err) {
        // if we cant get data, it enters this catch block
        // we set the throw Error message to the value of the
        // above error variable
        error.value = err.message;
        console.log(error.value);
      }
    };

    load();

    return { posts, error };
  },
};
</script>
