<template>
  <div class="home">
    <h1>home</h1>
    <h2>refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">update ninja one</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">update ninja one</button>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";

export default {
  name: "Home2",
  setup() {
    const ninjaOne = ref({ name: "mario", age: 30 });
    const ninjaTwo = reactive({ name: "luigi", age: 35 });

    const updateNinjaOne = () => {
      ninjaOne.value.age = 40;
    };

    // in this case we dont need to add the .value first, we can
    // access the properties directly
    const updateNinjaTwo = () => {
      ninjaTwo.age = 50;
    };

    return { ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo };
  },
};
</script>

<style></style>
