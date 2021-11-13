<template>
  <div class="detail" v-if="movie.display">
    <div class="video">
     <iframe :src='movie.data.urlTrailerMovie' style='width:480px; height:270px'>
    </iframe>
      <img
            class="card-img-top" id="imagen"
            :src="movie.data.urlImageMovie"
            alt="Card image cap"
          />
    </div>

          <a href="#" class="play-1">
        <i class="bx bx-play"></i>
        
      </a>
   <p class="display-4">{{ movie.data.titleMovie }}</p>
 
    <p>{{ movie.data.descriptionMovie }}</p>
    <button class="p-2 bg-danger" v-on:click="setThisNull()">X</button>

    <div id="bott">
      <p> prueba </p>
    </div>
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
  top: 11vh;
  bottom: 50%;
  left: 0rem;
  width: 100vw;
  height: 100vh;
  z-index: 80;
  background: white;
  color: black;
  overflow: auto;
}
#bott{
  margin-bottom: 50%;
}
#imagen{
  width: 30rem; 
  color: black;
  margin-top: 3%;
}
 .play-1{
 position: absolute;
 right: 4rem;
 right: 30%;
 top: 10%;
  }
  .play-1 .bx{
    background: var(--bg-color);
    padding: 10px;
    font-size: 2rem;
    border-radius: 50%;
    border: 4px solid rgba(2, 3, 7, 0.4);
    color: var(--main-color);
  }
  .play-1 .bx:hover{
    background: var(--main-color);
    color: var(--bg-color);
    transition: 0.2s all linear;
  }

</style>
