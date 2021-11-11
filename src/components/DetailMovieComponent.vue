<template>
  <div class="detail" v-if="movie.display">
    <p class="display-4">{{ movie.data.titleMovie }}</p>
    <p>{{ movie.data.descriptionMovie }}</p>
    <button class="p-2 bg-danger" v-on:click="setThisNull()">X</button>
  </div>
</template>
<script>
export default {
  props: ["movie"],
  methods: {
    setThisNull() {
      this.movie.display = false;
    },
  },
};
</script>
<style lang="css">
.detail {
  position: fixed;
  top: 10vh;
  left: 0rem;
  width: 100vw;
  height: 100vh;
  z-index: 70;
  background: white;
  color: black;
}
</style>
