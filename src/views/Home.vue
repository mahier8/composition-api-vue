<template>
  <!-- This part is similar to react -->
  <div class="home">
    Hello world
    <p>My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">You clicked me</button>
  </div>
</template>

<script>
export default {
  name: "Home",
  // 1. we first need to create a setup hook/function
  setup() {
    // 2. we then add in any javaScript we need
    console.log("setup");

    let name = "mahier";
    let age = 35;

    const handleClick = () => {
      console.log("clicked");
    };

    // 3. finally, we return whatever javascript we added,
    // and want to make available to the component template

    // return { name: name, age: age };
    // remember, we can shorten the variables above like this
    return { name, age, handleClick };
  },
};
</script>
