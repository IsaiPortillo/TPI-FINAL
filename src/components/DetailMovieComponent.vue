<template>
  <div class="detail" v-if="movie.display">

<VideoComponent :movie="detailMovie" />
    <div class="video">
      <img
            class="card-img-top" id="imagen"
            :src="movie.data.urlImageMovie"
            alt="Card image cap"
          />
    </div>
       
          <a href="#" class="comp-2" id="comp-2">
      <i class='bx bx-money' style='color:#1b6d3f'  ></i>     
       </a>
 

      <a href="#" class="comp-1">
        <i class='bx bx-down-arrow-circle' style='color:#3d627f'  ></i> 
      </a>
         <a href="#" class="comp-2" id="comp-2">
      <i class='bx bx-money' style='color:#1b6d3f'  ></i>     
       </a>
           

          
   <p class="display-4">{{ movie.data.titleMovie }}</p>
 
    <p>{{ movie.data.descriptionMovie }}</p>
    <button class="p-2 bg-danger" v-on:click="setThisNull()">X</button>

  </div>
</template>
<script>
import VideoComponent from "@/components/VideoComponent.vue";

export default {
  props: ["movie"],
  components:{
      VideoComponent,
  },
  methods: {
      setSMovie(movie) {
      this.detailMovie.data = movie;
      this.detailMovie.display = true;
    },
    setThisNull() {

      this.movie.display = false;
    },
  },
};
</script>
<style lang="css">
.detail {
  position: fixed ;
  top: 11vh;
  left: 0rem;
  width: 100vw;
  height: 120vh;
  z-index: 90;
  background: white;
  color: black;
  overflow:auto;
}

#imagen{
  width: 20rem; 
  color: black;
  margin-top: 5%;
}

 .comp-1 {
 position: absolute;
 right: 42rem;
 right: 35%;
 font-size: 45px;
 top: 1%;
 overflow: auto;
  }
  .comp-2{
 position: absolute;
 right: 42rem;
 right: 25%;
 font-size: 45px;
  top: 1%;
  overflow: auto;
  }
  .comp-1 .bx{
    background: var(--bg-color);
    padding: 10px;
    font-size: 2rem;
    border-radius: 50%;
    border: 4px solid rgba(2, 3, 7, 0.4);
    color: var(--main-color);
  }
  .comp-2 .bx{
    background: var(--bg-color);
    padding: 10px;
    font-size: 2rem;
    border-radius: 50%;
    border: 4px solid rgba(2, 3, 7, 0.4);
    color: var(--main-color);
  }
  .comp-1 .bx:hover{
    background: var(--main-color);
    color: var(--bg-color);
    transition: 0.2s all linear;
  }
  .comp-2 .bx:hover{
    background: var(--main-color);
    color: var(--bg-color);
    transition: 0.2s all linear;
  }

</style>
