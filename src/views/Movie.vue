<template>
  <div id="about">
    <div class="text">
      <!-- mensaje principal -->
      <h1>catalogo</h1>
    </div>
    <!--Mensaje que se mostrara con un borde en el bottom-->
    <section class="movies" id="movies">
      <h2 class="heading">Lo mas Reciente</h2>
    </section>
      <!-- llamamos el componente que abrira el detalle de las peliculas-->
    <DetailMovieComponent :movie="detailMovie" />
    <!-- en el contenedor se mostrara las peliculas que se rellenara automaticamente de la api-->
    <div class="container d-block mt-3" >
      <div
        class="card d-inline-flex ms-4 mb-4 " id="dv"
        style="width: 18rem; color: black"
        v-for="(item, index) in listMovies"
        :key="index"
      >
      <!--insertamos la imagen que estara dentro de el contenedor y la pasamos por un boton-->
        <button id="bot" type="submit" v-on:click="setSpecificMovie(item)">
          <img
            class="card-img-top"
            :src="item.urlImageMovie"
            alt="Card image cap"
          />
        </button>
        <!-- declaramos el footer de el contenedor y ahi le insertamos los likes que introducen los usuarios -->
        <div class="card-footer">
          <small class="text-muted">Likes totales: {{ item.likesMovie }}</small>
          <a
            href="#"
            class="corazon"
            v-if="item.likeUserMovie && user!=null"
            v-on:click.prevent="quitarLike(item.id)" 
          > 
            <i class="bx bxs-heart text-danger"></i> <!-- la imagen de corazon se inserta de una font-->
          </a>
          <!--este corazon se mostrara cuando el usuario no le haya dado like a la pelicula-->
          <a
            href="#"
            class="corazon"
            v-if="!item.likeUserMovie && user!=null"
            v-on:click.prevent="darLike(item.id)"
          >
            <i class="bx bx-heart bx-flashing text-danger"></i>
          </a>
        </div>
        <!--aqui se le mostrara el titulo de la pelicula-->
        <div class="card-body">
          <h3 class="card-text">
            {{ item.titleMovie }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import DetailMovieComponent from "@/components/DetailMovieComponent.vue";
import axios from "axios";
export default {
  components: {
    DetailMovieComponent,
  },
  data() {
    return {
      user:{id:1,idRolUser:2},
      listMovies: [],
      detailMovie: {
        data: null,
        display: false,
      },
    };
  },
  methods: {
    setSpecificMovie(movie) {
      this.detailMovie.data = movie;
      this.detailMovie.display = true;
    },
    async getMoviesFromApi() {
      axios
        .get("http://127.0.0.1:8000/api/movies/")
        .then((response) => {
          if (response.status == 200) {
            this.listMovies = response.data;
          }
        })
        .catch((err) => console.log(err));
    },
    async darLike(idMovie) {
      axios
        .post("http://127.0.0.1:8000/api/likes", {
           idUserLike: this.$cookies.get("id"),
          idMovieLike: idMovie,
        })
        .then((response) => {
          console.log(response);
          this.getMoviesFromApi();
        });
    },
    async quitarLike(idMovie) {
      axios
        .delete("http://127.0.0.1:8000/api/likes", {
          data: {
           idUserLike: this.$cookies.get("id"),
            idMovieLike: idMovie,
          },
        })
        .then((response) => {
          console.log(response);
          this.getMoviesFromApi();
        });
    },
    irHome() {
      this.$router.push("/");
    },
  },
  mounted() {
    this.getMoviesFromApi();
  },
};
</script>
<style lang="css">
#about {
  color: white;
}
.text {
  margin-top: 10%;
  margin-bottom: 2%;
}
.text h1 {
  font-size: 70px;
  font-weight: bold;
  text-transform: uppercase;
  border-bottom: 1px solid var(--main-color);
}

.corazon {
  float: right;
  font-size: 20px;
}
.bot {
  border: none;
}
.card {
  width: 100%;
}
#dv:hover{
  transform: translateY(-10px);
  transition: 0.3s all linear;
}
.heading {
  max-width: 968px;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.2rem;
  font-weight: 500;
}
</style>
