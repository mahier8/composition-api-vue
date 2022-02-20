<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">stop watching</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from "vue";

export default {
  name: "Home3",
  setup() {
    const search = ref("");
    const names = ref([
      "mario",
      "yoshi",
      "luigi",
      "toad",
      "bowser",
      "koopa",
      "peach",
    ]);

    // watch hook
    const stopWatch = watch(search, () => {
      console.log("watch function ran", search.value);
    });

    const stopWatchEffect = watchEffect(() => {
      console.log("watch effect function ran");
    });

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    const handleClick = () => {
      stopWatch();
      stopWatchEffect();
    };

    return {
      names,
      search,
      matchingNames,
      handleClick,
    };
  },
};
</script>
