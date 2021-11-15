<template>
<!-- el v-if compara si esta activado para mostrarse o no -->
    <div class="Compra" v-if="movie.display">

<!-- Boton para que se oculte la vista de la renta -->
      <button class="p-2 bg-danger" v-on:click="setThisNull()">Cerrar X</button>
      <button class="p-2" v-on:click="setRentaApi()" >Comprar</button>

      <p class="display-4"> Hola {{ this.$cookies.get("nameUser") }}</p>

      <p class="display-4">Pelicula: {{ movie.data.titleMovie }}</p>

      <p class="display-4">Fecha: {{ this.fecha }}</p>

      <p class="display-4"> Precio de Compra: {{ movie.data.purchasePriceMovie }}</p>

      <img
          class="card-img-top" id="imagen"
          :src="movie.data.urlImageMovie"
          alt="Card image cap"
        />

    </div>
</template>

<script>

import axios from "axios";
import moment from "moment";

export default {
  props: ["movie"],
  data() {
    return {
      fecha: moment().format("Y-MM-DD"),
    }
  },
  methods: {
    setThisNull() {
      this.movie.display = false;
    },
    setRentaApi(){

      this.fecha = moment().format("Y-MM-DD");
      console.log(this.$cookies.get("id"));

      axios
      .post("http://127.0.0.1:8000/api/rents", {

          idUserRent: this.$cookies.get("id"),
          idMovieRent: this.movie.data.id,
          dateRent: this.fecha,
          subtotalRent: this.movie.data.rentalPriceMovie,
          statusRent: "in-progress"

        })
        .then((respuesta) => {
          console.log(respuesta);
          alert("Realizado");

        }).catch((err)=>{

          console.log(this.movie.data.rentalPriceMovie);

          alert(err);
        });

    }
    
  },
  mounted() {

  },
};
</script>
<style lang="css">
    
    .Compra {
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
  width: 10rem; 
  color: black;
  margin-top: 2%;
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