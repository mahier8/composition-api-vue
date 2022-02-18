<template>
  <!-- This part is similar to react -->
  <div class="home">
    Hello world
    <!-- <p ref="para">My name is {{ name }} and my age is {{ age }}</p> -->
    <!-- using refs fro reactivity -->
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">You clicked me</button>
    <button @click="age++">add 1 to age</button>
    <input type="text" v-model="name" name="" id="" />
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  name: "Home",
  // 1. we first need to create a setup hook/function
  setup() {
    // 2. we then add in any javaScript we need

    // const para = ref(null);
    // this ref has to start with null
    // console.log(para, para.value);

    const name = ref("mahier");
    const age = ref(35);

    const handleClick = () => {
      // all im doing here is adding a class
      // para.value.classList.add("test");
      // para.value.textContent = "hello ninjas";

      // using refs for reactivity
      name.value = "Angel";
      age.value = 29;
    };

    // 3. finally, we return whatever javascript we added,
    // and want to make available to the component template

    // return { name: name, age: age };
    // remember, we can shorten the variables above like this
    return { name, age, handleClick };
  },
  data() {
    return {
      score: 5,
    };
  },
};
</script>
