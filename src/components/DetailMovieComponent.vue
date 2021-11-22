<template>
  <!-- el v-if compara si esta activado para mostrarse o no -->
  <div class="detail" v-if="movie.display">
    <!-- llamamos el componente que abre la vista de la compra-->
    <CompraMovie :movie="CompraMovie" />
    <!-- llamamos el componente que abre la vista de la renta-->
    <RentaMovie :movie="RentaMovie" />

    <!--Ventana Modal-->
    <input type="checkbox" id="btn-modal" />
    <div class="container-modal">
      <div class="content-modal">
        <iframe
          :src="movie.data.urlTrailerMovie"
          style="width: 480px; height: 270px"
        >
        </iframe>
        <div class="btn-cerrar">
          <label for="btn-modal">Cerrar</label>
        </div>
      </div>
      <label for="btn-modal" class="cerrar-modal"></label>
    </div>
    <!--fin Ventana Modal-->
    <div class="video">
      <img
        class="card-img-top"
        id="imagen"
        :src="movie.data.urlImageMovie"
        alt="Card image cap"
      />
    </div>

    <!-- BOTONES -->

    <!-- Boton para activar la vista la renta de la pelicula, y se envia los datos de la pelicula-->
    <div v-if="user != null">
      <a
        href="#"
        class="comp-1"
        type="submit"
        v-on:click="setcompraMovie(movie.data)"
      >
        <i class="bx bx-down-arrow-circle" style="color: #3d627f"></i>
      </a>

      <a 
        href="#"
        class="comp-2"
        id="comp-2"
        type="submit"
        v-on:click="setrentaMovie(movie.data)"
      >
        <i class="bx bx-money" style="color: #1b6d3f"></i>
      </a>
    </div>
    
    <a href="#" class="comp-3">
      <label for="btn-modal">
        <i class="bx bx-play" style="color: #2e79e6"></i>
      </label>
    </a>
    <a class="btoncerrar" v-on:click="setThisNull()">
      <i class="bx bx-x-circle"></i>
    </a>

    <p class="display-4">{{ movie.data.titleMovie }}</p>

    <p id="description">{{ movie.data.descriptionMovie }}</p>
    <!--boton cerrar -->

    <div id="bott"></div>
  </div>
</template>
<script>
// se importan los componenetes para poder interactuar con ellos
import CompraMovie from "@/components/CompraMovie.vue";
import RentaMovie from "@/components/RentaMovie.vue";

export default {
  data() {
    return {
      user: this.$cookies.get("id"),

      //arreglo para el componente compra
      CompraMovie: {
        data: null,
        display: false,
      },
      //arreglo para el componente renta
      RentaMovie: {
        data: null,
        display: false,
      },
    };
  },
  props: ["movie"],
  //Componenetes con los que se trabaja
  components: {
    //Componenete de Compra
    CompraMovie,
    //Componenete de Renta
    RentaMovie,
  },
  methods: {
    setcompraMovie(cmovie) {
      this.CompraMovie.data = cmovie;
      this.CompraMovie.display = true;
    },
    setrentaMovie(rmovie) {
      this.RentaMovie.data = rmovie;
      this.RentaMovie.display = true;
    },
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
  left: 0rem;
  width: 100vw;
  height: 120vh;
  z-index: 90;
  background: white;
  color: black;
  overflow: auto;
}

#imagen {
  width: 20rem;
  color: black;
  margin-top: 3%;
  margin-right: 15%;
}
#bott {
  bottom: 50%;
  margin-bottom: 300px;
}
#description {
  width: 55%;
  position: relative;
  left: 15%;
}

.comp-1 {
  position: absolute;
  right: 42rem;
  right: 20%;
  font-size: 45px;
  top: 40%;
}
.comp-2 {
  position: absolute;
  right: 50rem;
  right: 20%;
  top: 30%;
  font-size: 45px;
}
.comp-3 {
  position: absolute;
  right: 42rem;
  right: 20%;
  top: 20%;
  font-size: 45px;
}
.btoncerrar {
  position: absolute;
  right: 42rem;
  right: 20%;
  top: 1%;
  font-size: 45px;
}
.comp-1 .bx {
  background: var(--bg-color);
  padding: 10px;
  font-size: 2rem;
  border-radius: 50%;
  border: 4px solid rgba(2, 3, 7, 0.4);
  color: var(--main-color);
}
.comp-2 .bx {
  background: var(--bg-color);
  padding: 10px;
  font-size: 2rem;
  border-radius: 50%;
  border: 4px solid rgba(2, 3, 7, 0.4);
  color: var(--main-color);
}
.comp-3 .bx {
  background: var(--bg-color);
  padding: 10px;
  font-size: 2rem;
  border-radius: 50%;
  border: 4px solid rgba(2, 3, 7, 0.4);
  color: var(--main-color);
}
.btoncerrar .bx {
  background: var(--bg-color);
  padding: 10px;
  font-size: 2rem;
  border-radius: 50%;
  border: 4px solid rgba(2, 3, 7, 0.4);
  color: var(--main-color);
}
.comp-1 .bx:hover {
  background: var(--main-color);
  color: var(--bg-color);
  transition: 0.2s all linear;
}
.comp-2 .bx:hover {
  background: var(--main-color);
  color: var(--bg-color);
  transition: 0.2s all linear;
}
.comp-3 .bx:hover {
  background: var(--main-color);
  color: var(--bg-color);
  transition: 0.2s all linear;
}
.btoncerrar .bx:hover {
  background: var(--main-color);
  color: var(--bg-color);
  transition: 0.2s all linear;
}
.boton-modal {
  padding: 40px;
  background-color: #fff;
}
.boton-modal label {
  padding: 10px 15px;
  background-color: #5488a3;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: all 300ms ease;
}
.boton-modal label:hover {
  background-color: #185e83;
}
/*:::Fin Boton-Modal:::*/

/*:::Ventana Modal:::*/
#btn-modal {
  display: none;
}
.container-modal {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(144, 148, 150, 0.8);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 100;
}
#btn-modal:checked ~ .container-modal {
  display: flex;
}
.content-modal {
  width: 100%;
  max-width: 520px;
  padding: 20px;
  background-color: #fff;
  border-radius: 4px;
}
.content-modal h2 {
  margin-bottom: 15px;
}
.content-modal p {
  padding: 15px 0px;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
}
.content-modal .btn-cerrar {
  width: 100%;
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
}
.content-modal .btn-cerrar label {
  padding: 7px 10px;
  background-color: #5488a3;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: all 300ms ease;
}
.content-modal .btn-cerrar label:hover {
  background-color: #185e83;
}
.cerrar-modal {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}
@media screen and (max-width: 800px) {
  .content-modal {
    width: 90%;
  }
}
/*:::Fin Ventana Modal:::*/
</style>
