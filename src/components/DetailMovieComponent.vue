<template>
  <div class="detail" v-if="movie.display">
    <div class="video">
<!--iframe width="1303" height="499" :src="movie.data.urlTrailerMovie" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe--> 
    <img
            class="card-img-top" id="imagen"
            :src="movie.data.urlImageMovie"
            alt="Card image cap"
          />
    </div>
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
#imagen{
  width: 30rem; 
  color: black;
  margin-top: 3%;
}

</style>
