<template>
  <div class="post">
    <h3>{{ post.title }}</h3>
    <p>{{ snippet }}</p>
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
