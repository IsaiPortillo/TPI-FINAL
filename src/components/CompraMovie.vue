<template>
  <!-- el v-if compara si esta activado para mostrarse o no -->
  <div class="Compra" v-if="movie.display">
    <div id="text">
      <!-- mensaje principal -->
      <h1>Compra</h1>
    </div>
    <!-- Boton para que se oculte la vista de la renta -->

    <img
      class="card-img-top"
      id="imagen"
      :src="movie.data.urlImageMovie"
      alt="Card image cap"
    />
    <a href="#" class="comp-2" type="submit" v-on:click="setThisNull()">
      <i class="bx bx-x-circle"></i>
    </a>

    <a href="#" class="comp-1" type="submit" v-on:click="setSaleApi()">
      <i class="bx bx-money" style="color: #08712b"></i>
    </a>

    <p class="display-4">Pelicula: {{ movie.data.titleMovie }}</p>

    <p class="display-4">Fecha: {{ this.fecha }}</p>

    <p class="display-4">
      Precio de Compra: {{ movie.data.purchasePriceMovie }}
    </p>
    <div id="bott1"></div>
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
    };
  },
  methods: {
    setThisNull() {
      this.movie.display = false;
    },
    setSaleApi() {
      this.fecha = moment().format("Y-MM-DD");
      console.log(this.$cookies.get("id"));

      axios
        .post("http://127.0.0.1:8000/api/sales", {
          idUserSale: this.$cookies.get("id"),
          idMovieSale: this.movie.data.id,
          dateSale: this.fecha,
        })
        .then((respuesta) => {
          console.log(respuesta);
          alert("Realizado");
        })
        .catch((err) => {
          console.log(this.movie.data.purchasePriceMovie);

          alert(err);
        });
    },
  },
  mounted() {},
};
</script>

<style scoped>
.change_color {
  background-color: red;
}
</style>
<style lang="css">
.Compra {
  position: fixed;
  top: 11vh;
  bottom: 50%;
  left: 0rem;
  width: 100vw;
  height: 100vh;
  z-index: 70;
  background: white;
  color: black;
  overflow: auto;
}

#bott {
  margin-bottom: 50%;
}
#imagen {
  width: 10rem;
  color: black;
  margin-top: 2%;
}
.play-1 {
  position: absolute;
  right: 4rem;
  right: 30%;
  top: 10%;
}
.play-1 .bx {
  background: var(--bg-color);
  padding: 10px;
  font-size: 2rem;
  border-radius: 50%;
  border: 4px solid rgba(2, 3, 7, 0.4);
  color: var(--main-color);
}
.play-1 .bx:hover {
  background: var(--main-color);
  color: var(--bg-color);
  transition: 0.2s all linear;
}
</style>
