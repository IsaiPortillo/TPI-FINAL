<template>
  <div class="about" id="about">
    <div class="text">
      <!-- mensaje principal -->
      <h1>catalogo</h1>
      <div class="fieldS" id="searchform">
        <input
          type="text"
          id="searchterm"
          placeholder="Nombre de la Pelicula"
        />
        <button type="button" id="search">Buscar!</button>
      </div>
    </div>
    <form>
      <div class="container-fluid" id="con">
        <div class="row">
          <div class="col-6 col-md-4 col-xl-3">
            <div class="field">
              <select name="type" class="tipo" id="" required>
                <option></option>
                <option value="Albabéticamente" selected>
                  Alfabéticamente
                </option>
                <option value="Popularidad">Popularidad</option>
                <option value="Disponibilidad">Disponibilidad</option>
              </select>
            </div>
          </div>
          <div class="col-6 col-md-4 col-xl-3" id="ordenA">
            <div class="field">
              <select name="orderAD" id="ordenAD" required>
                <option></option>
                <option value="Ascendente" selected>Ascendente</option>
                <option value="Descendente">Descendente</option>
              </select>
            </div>
          </div>
          <div class="col-12 col-md-2 col-xl-2">
            <div class="field">
              <input class="btn-account" type="submit" value="Filtrar" />
            </div>
          </div>
        </div>
      </div>
    </form>
    <!--Mensaje que se mostrara con un borde en el bottom-->
    <section class="movies" id="movies"></section>

    <!-- llamamos el componente que abrira el detalle de las peliculas-->
    <DetailMovieComponent :movie="detailMovie" />
    <!-- en el contenedor se mostrara las peliculas que se rellenara automaticamente de la api-->

    <div class="container d-block mt-3">
      <div
        class="card d-inline-flex ms-4 mb-4"
        id="dv"
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
        <div class="card-foote" id="ft">
          <small class="text-muted">Likes totales: {{ item.likesMovie }}</small>

          <a
            href="#"
            class="corazon bg-danger"
            v-if="item.likeUserMovie && user != null"
            v-on:click="quitarLike(item.id)"
          >
            <i class="bx bxs-heart text-danger"></i>
            <!-- la imagen de corazon se inserta de una font-->
          </a>
          <!--este corazon se mostrara cuando el usuario no le haya dado like a la pelicula-->
          <a
            href="#"
            class="corazon"
            v-if="!item.likeUserMovie && user != null"
            v-on:click="darLike(item.id)"
          >
            <i class="bx bx-heart bx-flashing text-danger"></i>
          </a>
        </div>
        <!--aqui se le mostrara el titulo de la pelicula-->
        <div id="te">
          <div class="card-body">
            <h3 class="card-text">
              {{ item.titleMovie }}
            </h3>
          </div>
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
      user: this.$cookies.get("id"),
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
      console.log(this.$cookies.get("id"));
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
  overflow-y: visible;
}
#te {
  margin-top: 30px;
  width: 200px;
  height: 150px;
  position: relative;
}
.text {
  margin-top: 10%;
}
#text {
  margin-top: 4%;
  margin-bottom: 2%;
}
#ft {
  position: absolute;
  bottom: 40%;
}
.card-body {
  position: absolute;
  top: 40%;
  right: 5%;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 200px;
}
.card-body h3 {
  margin: auto;
  text-align: center;
  font-size: 35px;
}
.card {
  display: -ms-grid;
  display: grid;
  grid-gap: 40px 20px;
  -ms-grid-columns: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 40px 0;
}
.text h1 {
  font-size: 70px;
  font-weight: bold;
  text-transform: uppercase;
  border-bottom: 1px solid var(--main-color);
}
#text h1 {
  font-size: 70px;
  font-weight: bold;
  text-transform: uppercase;
  border-bottom: 1px solid var(--main-color);
}
.container .card {
  background: #fefefe;
  padding: 20px;
  border-radius: 5px;
  -webkit-box-shadow: 10px 10px 20px rgba(170, 170, 170, 0.16);
  box-shadow: 10px 10px 20px rgba(170, 170, 170, 0.16);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
  position: relative;
  min-height: 195px;
  margin-top: 50px;
  -webkit-transition: 0.3s ease all;
  transition: 0.3s ease all;
}
.container .card img {
  vertical-align: top;
  border-radius: 7px;
  position: absolute;
  top: -50px;
  left: 20px;
  width: calc(100% - 40px);
  max-height: 165px;
  -o-object-fit: cover;
  object-fit: cover;
}
.corazon {
  float: right;
  font-size: 20px;
}
#movies {
  margin-top: 5%;
}
#bot {
  border: none;
}
.fit-image {
  width: 100%;
  object-fit: cover;
  height: 300px;
}
.card {
  width: 100%;
}
#dv:hover {
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
.filter {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 6px;
  width: 100%;
  background: #2c2c2c;
  border-radius: 15px;
}

.filter form {
  width: 100%;
  padding: 30px 10px;
}
.field select {
  width: 100%;
}

.field select:focus {
  color: #f13030;
  background: #2c2c2c;
}

/* Estilos del option, al pasar mouse sobre la opcion*/
.field option:hover {
  color: #2c2c2c;
  background: #f13030;
}

.field select {
  color: #fff;
  height: 100%;
  width: 100%;
}

/* Estilos de de input, textarea, select, elementos medianos*/
.field select {
  background-color: #2c2c2c;
  color: #fff;
  height: 46px;
  width: 100%;
  outline: none;
  font-size: 17px;
  padding-left: 20px;
  border: 1px solid rgb(66, 66, 66);
  border-radius: 15px;
}

/* Estilos de input, select, textarea, inputs medianos al mostrar foco*/
.field select:focus {
  border-color: #f13030;
}

/* Estilos de input, select, textarea, inputs medianos al contener datos validos*/
.field select:valid {
  border-color: #84dcc6;
}

/* Estilos de label flotantes en contendores normales, medianos y automaticos*/
.field label {
  position: absolute;
  top: 50%;
  left: 20px;
  color: #999999;
  font-weight: 400;
  font-size: 17px;
  pointer-events: none;
}

/* Estilos de boton de alquiler*/
.btn-account {
  box-shadow: 0 1px 0 #e62d2d, 0 2px 0 #d82a2a, 0 3px 0 #cc2727, 0 4px 0 #c02424,
    0 5px 0 #b32121, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15);
  background: #f13030;
  color: #1d1d1d;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  margin: 0px 0px;
  padding: 0.5rem;
  border: 0;
  transition: all 0.5s;
  border-radius: 10px;
  width: 150px;
  position: relative;
}

/* Estilos de boton de alquiler*/

/* Estilos de boton de alquiler, incluir icono*/
.btn-account::after {
  font-weight: 400;
  position: absolute;
  left: 80%;
  top: 54%;
  right: 0;
  bottom: 0;
  opacity: 0;
}

.row {
  margin-left: 25%;
  margin-top: -3%;
}

/* Estilos de boton de alquiler, incluir icono*/

/* Estilos de boton de alquiler, transicion*/
.btn-account:hover {
  background: #2c2c2c;
  transition: all 0.5s;
  border-radius: 10px;
  box-shadow: 0 1px 0 #2b2b2b, 0 2px 0 #272727, 0 3px 0 #202020, 0 4px 0 #181818,
    0 5px 0 #0f0f0f, 0 6px 1px rgba(0, 0, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.3), 0 3px 5px rgba(0, 0, 0, 0.2),
    0 5px 10px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.2),
    0 20px 20px rgba(0, 0, 0, 0.15);
  color: #ffffff;
}

.btn-account:hover.btn-account::after {
  opacity: 1;
  transition: all 0.5s;
  color: #ffffff;
}

/*busqueda*/

@import url(http://fonts.googleapis.com/css?family=Montserrat+Alternates);

* {
  margin: 0;
  padding: 0;
  font: 12pt Arial;
}

.fieldS {
  display: flex;
  position: realtive;
  margin: 5em auto;
  margin-top: -6%;
  margin-left: 70%;
  width: 25%;
  flex-direction: row;
  box-shadow: 1px 1px 0 rgb(22, 160, 133), 2px 2px 0 rgb(22, 160, 133),
    3px 3px 0 rgb(22, 160, 133), 4px 4px 0 rgb(22, 160, 133),
    5px 5px 0 rgb(22, 160, 133), 6px 6px 0 rgb(22, 160, 133),
    7px 7px 0 rgb(22, 160, 133);
}

.fieldS > input[type="text"],
.field > button {
  display: block;
  font: 1em "Montserrat Alternates";
}

.fieldS > input[type="text"] {
  flex: 1;
  padding: 0.6em;
  border: 0.2em solid rgb(26, 188, 156);
}

.fieldS > button {
  padding: 0.6em 0.8em;
  background-color: rgb(26, 188, 156);
  color: white;
  border: none;
}
</style>
