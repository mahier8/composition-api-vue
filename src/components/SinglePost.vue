<template>
  <div class="post">
    <router-link
      :to="{
        name: 'Details',
        params: {
          id: post.id,
        },
      }"
    >
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <!-- This is to show the tags, in the db.json -->
    <!-- we loop through all the tags and display each set -->
    <span v-for="tag in post.tags" :key="tag">
      <!-- no we read the tags inside the span tags -->
      #{{ tag }}
    </span>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      // we are only trying to present some of the text in
      // the post, therefore we use the substring method
      return props.post.body.substring(0, 100) + "...";
    });

    return { snippet };
  },
};
</script>

<style></style>
