<template>
  <div>
<vue-flux
   :options="vfOptions"
   :images="listImgMovies"
   :transitions="vfTransitions"
   :captions="listTitleMovies"
   ref="slider">

   <template v-slot:preloader>
      <flux-preloader />
   </template>


      <template v-slot:caption >
        
      <flux-caption id="home-text"/>
      <a href="#" class="btn">Reservar Ahora</a>
      <a href="#" class="play">
        <i class="bx bx-play"></i>
      </a>
   </template>

</vue-flux>
      </div>
</template>
<script>
import axios from "axios"
import {
   VueFlux,
   FluxCaption,
   FluxPreloader,
} from 'vue-flux';

export default {
   components: {
      VueFlux,
      FluxCaption,
      FluxPreloader,
   }, data() {
     return {
       
       vfOptions: {
         autoplay: true
      },
     
      vfTransitions: [ 'fall', 'fade', 'book', 'wave' ],
      vfCaptions: [
         'Halloween Kills',
         'Caption for image 2',
         'Caption for image 3',
      ],
      
     listImgMovies:[],
     listTitleMovies:[]
     }
   },

   methods: {
     async getMoviesFromApi(){
       axios.get("http://127.0.0.1:8000/api/movies")
       .then((response)=>{
         if(response.status ==200){
           this.listImgMovies = [];
           this.listTitleMovies =[]
           response.data.forEach(element => {
             this.listImgMovies.push(element.urlImageMovie)
             this.listTitleMovies.push(element.titleMovie);
           });
         }
       }).catch((err)=>console.log(err))
     }
   }, mounted() {
     this.getMoviesFromApi()
   },

   
}
</script>
<style lang="css">
  
  .conatiner{
    width: 100%;
    min-width: 640px;
    position: relative;
    display: flex;
    align-items: center;
    background: rgba(2, 3, 7, 0.4);
  }
  .conatiner img{
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  #home-text{
    width: 40%;
    height: 5%;
    margin-top: 25%;
    margin-left: 0;
    font-weight: 700;
    font-size: 7rem;
    background: fixed;
    z-index: 1000;
    padding: 0 150px;
    color: #fff;
    margin-bottom: 1rem;
  }

  .btn {
    margin-top: 5%;
    margin-left: 11%;
    width: 15%;
    padding: 0.7rem 1.4rem;
  background: var(--main-color);
  color: var(--bg-color);
  font-weight: 400;
  border-radius: 0.5rem;
  }
  .play {
 position: absolute;
 right: 4rem;
 bottom: 20%;
  }
  .play .bx{
    background: var(--bg-color);
    padding: 10px;
    font-size: 2rem;
    border-radius: 50%;
    border: 4px solid rgba(2, 3, 7, 0.4);
    color: var(--main-color);
  }
  .play .bx:hover{
    background: var(--main-color);
    color: var(--bg-color);
    transition: 0.2s all linear;
  }
</style>
