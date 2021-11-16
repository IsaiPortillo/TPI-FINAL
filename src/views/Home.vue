<template id="scroll">
  <div id="home">
    <!-- llamamos el componente que abrira el detalle de las peliculas-->
    <DetailMovieComponent :movie="detailMovie" />

    <!--Ventana Modal-->
    <input type="checkbox" id="btn-modal" />
    <div class="container-modal">
      <div class="content-modal">
        <!--Muestra el trailer con la url obtenida-->
        <iframe :src="this.urltrailer" style="width: 480px; height: 270px">
        </iframe>
        <div class="btn-cerrar">
          <label for="btn-modal">Cerrar</label>
        </div>
      </div>
      <label for="btn-modal" class="cerrar-modal"></label>
    </div>
    <!--fin Ventana Modal-->

    <vue-flux
      :options="vfOptions"
      :images="listImgMovies"
      :transitions="vfTransitions"
      :captions="listTitleMovies"
      ref="slider"
    >
      <template v-slot:preloader>
        <flux-preloader />
      </template>

      <template v-slot:caption>
        <flux-caption id="home-text" v-slot="captionProps">
          <!--Muestra el titulo de las peliculas-->
          {{ captionProps.text }}

          <!--activa el componenete DetailMovie-->
          <a v-on:click="setSpecificMovie(captionProps.text)" class="btn"
            >Reservar Ahora</a
          >
          <!--activa el modal del trailer-->
          <a class="play">
            <label for="btn-modal">
              <i v-on:click="trailer(captionProps.text)" class="bx bx-play"></i>
            </label>
          </a>
        </flux-caption>
      </template>
    </vue-flux>
  </div>
</template>
<script>
//se importa la iformacion del componente DetailMovieComponent
import DetailMovieComponent from "@/components/DetailMovieComponent.vue";
import axios from "axios";
import { VueFlux, FluxCaption, FluxPreloader } from "vue-flux";

export default {
  components: {
    //se indican los componentes a utilizar
    VueFlux,
    FluxCaption,
    FluxPreloader,
    DetailMovieComponent,
  },
  data() {
    return {
      vfOptions: {
        autoplay: true,
      },

      vfTransitions: ["fall", "fade", "book", "wave"],
      vfCaptions: [
        "Halloween Kills",
        "Caption for image 2",
        "Caption for image 3",
      ],

      //almacena todas las imagenes de las peliculas
      listImgMovies: [],
      //almacena todos los titulos de las peliculas
      listTitleMovies: [],
      //almacena toda la informacion de las peliculas
      listaPeliculas: [],
      //almacena la url del trailer en espesifico 
      urltrailer: "",
      
      // arreglo de los datos necesarios apra el detail
      detailMovie: {
        //almacena la informacion de los datos
        data: null,
        //da la acion de mostrarse o no
        display: false,
      },
    };
  },

  methods: {
    //metodo para activar la vista de los detalles
    async setSpecificMovie(nombre) {
      //ciclo para recorrer la lista de las peliculas
      this.listaPeliculas.forEach((data) => {
        //comprara el titulo del resultado con el nombre enviado
        if (data.titleMovie == nombre) {
          //se manda los datos al detailmovie
          this.detailMovie.data = data;
          //se hace visible el detailmovie
          this.detailMovie.display = true;
        }
      });
    },

    //metodo para obtener el trailer
    async trailer(nombre) {
      //ciclo para recorrer la lista de las peliculas
      this.listaPeliculas.forEach((data) => {
        //comprara el titulo del resultado con el nombre enviado
        if (data.titleMovie == nombre) {
          this.urltrailer = data.urlTrailerMovie;

          console.log(this.urltrailer);
        }
      });
    },

    //hace la busqueda de la pelicula segun su nomnre
    async buscar(nombre) {
      axios
        .get("http://127.0.0.1:8000/api/movies")
        .then((response) => {
          if (response.status == 200) {
            response.data.forEach((pelis) => {
              if (pelis.titleMovie == nombre) {
                this.setSpecificMovie(pelis);
              }
            });
          }
        })
        .catch((err) => console.log(err));
    },

    async getMoviesFromApi() {
      axios
        .get("http://127.0.0.1:8000/api/movies")
        .then((response) => {
          if (response.status == 200) {
            this.listaPeliculas = response.data;
            this.listImgMovies = [];
            this.listTitleMovies = [];
            response.data.forEach((element) => {
              this.listImgMovies.push(element.urlImageMovie);
              this.listTitleMovies.push(element.titleMovie);
            });
          }
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    this.getMoviesFromApi();
  },
};
</script>
<style lang="css">
#home {
  overflow: hidden;
  overflow-y: none;
}

.conatiner {
  width: 100%;
  min-width: 640px;
  position: relative;
  display: flex;
  align-items: center;
  background: rgba(2, 3, 7, 0.4);
}
.conatiner img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

#home-text {
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
.play .bx {
  background: var(--bg-color);
  padding: 10px;
  font-size: 2rem;
  border-radius: 50%;
  border: 4px solid rgba(2, 3, 7, 0.4);
  color: var(--main-color);
}
.play .bx:hover {
  background: var(--main-color);
  color: var(--bg-color);
  transition: 0.2s all linear;
}
</style>
