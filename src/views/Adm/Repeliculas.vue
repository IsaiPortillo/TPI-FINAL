<template>
  <div>
    <div class="ma">
      <!-- llamamos el componente que abrira el detalle de las peliculas-->
      <DetailMovieComponent :movie="detailMovie" />

      <!-- Modal -->
      <div
        class="modal"
        id="Eliminar"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
          <!--Muestra el trailer con la url obtenida-->
            <div class="row">
              <h3>Para eliminar la pelicula</h3>
              <h3>{{titulo}}</h3>
              <h3>Debe colocar su contraseña</h3>
              <h3>como Administrador</h3>
              <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="form-floating">
                  <input
                    v-model="vacontraseña"
                    type="password"
                    name="vacontraseña"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Contraseña Actual"
                    autocomplete="off"
                  />
                  <label for="floatingInput">Contraseña Actual</label>
                </div>
              </div>
              <div class="alert alert-secondary" role="alert">
                <label>{{ result }}</label>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-12">
                <a
                  type="button"
                  class="btnAdm0"
                  data-bs-dismiss="modal"
                  v-on:click="limpiar()"
                >
                  <i class="bx bxs-exit"></i>
                </a>
                <a
                  v-on:click="eliminar(id)"
                  type="submit"
                  s
                  class="btnAdm1"
                >
                  <i class="bx bx-trash-alt"></i>
                </a>
              </div> 
            </div>
          </div>
        </div>
      </div>
      <!--fin Ventana Modal-->

      <!-- Modal -->
      <div
        class="modal fade"
        id="ModalAE"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-body">
              <div class="panel-body">
                <div class="table-container">
                  <div class="row">
                    <div class="col-xs-6 col-sm-6 col-md-6">
                      <div class="form-floating">
                        <input
                          v-model="titulo"
                          type="text"
                          name="titulo"
                          class="form-control"
                          id="floatingInput"
                          placeholder="titulo de la pelicula"
                          autocomplete="off"
                        />
                        <label for="floatingInput">titulo de la pelicula</label>
                      </div>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6">
                      <div class="form-floating">
                        <input
                          v-model="imgURL"
                          type="text"
                          name="imgURL"
                          class="form-control"
                          id="floatingInput"
                          placeholder="URL de la imagen de la pelicula"
                          autocomplete="off"
                        />
                        <label for="floatingInput"
                          >URL de la imagen de la pelicula</label
                        >
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-6 col-sm-6 col-md-6">
                      <div class="form-floating">
                        <textarea
                          v-model="descripcion"
                          name="descripcion"
                          class="form-control"
                          id="floatingInput"
                          placeholder="Descripcion de la pelicula"
                          autocomplete="off"
                        ></textarea>
                        <label for="floatingInput"
                          >Descripcion de la pelicula</label
                        >
                      </div>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6">
                      <div class="form-floating">
                        <input
                          v-model="traURL"
                          type="text"
                          name="traURL"
                          class="form-control"
                          id="floatingInput"
                          placeholder="URL de la imagen de la pelicula"
                          autocomplete="off"
                        />
                        <label for="floatingInput"
                          >URL del trailer de la pelicula</label
                        >
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-6 col-sm-6 col-md-6">
                      <div class="form-floating">
                        <input
                          v-model.number="preciorenta"
                          type="number"
                          name="preciorenta"
                          class="form-control"
                          id="floatingInput"
                          placeholder="Precio de renta de la pelicula"
                          autocomplete="off"
                        />
                        <label for="floatingInput"
                          >Precio de renta de la pelicula</label
                        >
                      </div>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6">
                      <div class="form-floating">
                        <input
                          v-model.number="preciocompra"
                          type="number"
                          name="preciocompra"
                          class="form-control"
                          id="floatingInput"
                          placeholder="Precio de compra de la pelicula"
                          autocomplete="off"
                        />
                        <label for="floatingInput"
                          >Precio de compra de la pelicula</label
                        >
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-6 col-sm-6 col-md-6">
                      <div class="form-floating">
                        <input
                          v-model.number="stock"
                          type="number"
                          name="stock"
                          class="form-control"
                          id="floatingInput"
                          placeholder="Cantidad de la pelicula en stock"
                          autocomplete="off"
                        />
                        <label for="floatingInput"
                          >Cantidad de la pelicula en stock</label
                        >
                      </div>
                    </div>
                    <div class="col-xs-6 col-sm-6 col-md-6">
                      <label>Disponibilidad de la Pelicula</label>
                      <div class="form-group">
                        <select
                          v-model="disponibilidad"
                          class="form-select"
                          aria-label="Default select example"
                          name="select"
                          onchange=""
                        >
                          <option value="1">Pelicula Disponible</option>
                          <option value="0">Pelicula No Disponible</option>
                        </select>
                      </div>
                    </div>
                    <h1>Para Confirmar la accion tiene que ingresar</h1>
                    <div class="col-xs-12 col-sm-12 col-md-12">
                      <div class="form-floating">
                        <input
                          v-model="vacontraseña"
                          type="password"
                          name="vacontraseña"
                          class="form-control"
                          id="floatingInput"
                          placeholder="Contraseña de Usuario Actual"
                          autocomplete="off"
                        />
                        <label for="floatingInput">Contraseña de Usuario Actual</label>
                      </div>
                    </div>
                  </div>
                  <div class="alert alert-secondary" role="alert">
                    <label>{{ result }}</label>
                  </div>
                  <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                      <a
                        type="button"
                        class="btnAdm0"
                        data-bs-dismiss="modal"
                        v-on:click="limpiar()"
                      >
                        <i class="bx bxs-exit"></i>
                      </a>
                      <a
                        v-if="this.id == ''"
                        v-on:click="setPeliculasApi()"
                        type="submit"
                        s
                        class="btnAdm1"
                      >
                        <i class="bx bxs-save"></i>
                      </a>
                      <a
                        v-if="this.id != ''"
                        v-on:click="putPeliculasApi()"
                        type="submit"
                        s
                        class="btnAdm1"
                      >
                        <i class="bx bxs-edit-alt"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        type="button"
        class="btnAdm15"
        style="width: 150px"
        data-bs-toggle="modal"
        data-bs-target="#ModalAE"
      >
        <i class="bx bxs-layer-plus"></i>
      </a>

      <!-- TABLA DE PELICULAS REGISTRADAS-->
      <table id="tabla" class="table table-dark">
        <thead>
          <tr>
            <th>N</th>
            <th>Titulo</th>
            <th>Portada</th>
            <th>Likes</th>
            <th>Precio Renta</th>
            <th>Precio Compra</th>
            <th>Stock</th>
            <th>Estado</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in listaPeliculas" :key="index">
            <th>{{ index + 1 }}</th>
            <th>{{ item.titleMovie }}</th>
            <th>
              <button v-on:click="setSpecificMovie(item)">
                <img class="reimg" :src="item.urlImageMovie" />
              </button>
            </th>
            <th>{{ item.likesMovie }}</th>
            <th>{{ item.rentalPriceMovie }}</th>
            <th>{{ item.purchasePriceMovie }}</th>
            <th>{{ item.stockMovie }}</th>
            <th v-if="item.availabilityMovie == 1">Disponible</th>
            <th v-if="item.availabilityMovie == 0">No Disponible</th>
            <th style="white-space: nowrap">
              <a
                class="btnAdm0"
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#Eliminar"
                v-on:click="selec(item.id)"
              >
                <i class="bx bx-trash-alt"></i>
              </a>
              <a
                v-on:click="selec(item.id)"
                type="button"
                class="btnAdm1"
                data-bs-toggle="modal"
                data-bs-target="#ModalAE"
              >
                <i class="bx bx-edit-alt"></i>
              </a>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
    <router-view />
  </div>
</template>

<script>
//se importa la iformacion del componente DetailMovieComponent
import DetailMovieComponent from "@/components/DetailMovieComponent.vue";
import axios from "axios";
import $ from "jquery";
import datatable from "datatables.net-bs5";


//Padron modulo
const Movie = (()=>{

  //funcion
  const movie = function(result, peli, pass){

      // verifica que los campos nos esten vacios
      if (peli[0].titulo == "" || peli[0].descrip == "" || peli[0].img == "" ||
      peli[0].tra == "" || peli[0].stock == "" || peli[0].prerent == "" || 
      peli[0].precomp == "" || peli[0].vacontra == "") {
        // asigna respuesta
        result = "Verifique que los campos no esten vacios";
      }
      // verifica que los campos nos esten vacios
      else if (pass != peli[0].vacontra ) {
        // asigna respuesta
        result = "Contraseña de usuario incorrecto";
      }

      // de lo contrario
      else{
        // asigna respuesta
        result = "Correcto"
      }
    // retorna el resultado
    return result;
    
  }

  const eliminar = function(result, pass, Adpass){

    // verifica que los campos nos esten vacios
    if (pass == "" || Adpass == "") {
      // asigna respuesta
      result = "Verifique que los campos no esten vacios";
    }

    // verifica que los campos nos esten vacios
    if (pass != Adpass ) {
      // asigna respuesta
      result = "Contraseña de usuario incorrecto";
    }

    else{
      result = "Correcto"
    }

    return result;

  }

  // hace publica a la funcion
  return{movie, eliminar}

})();

export default {
  //se indican los componentes a utilizar
  components: {
    DetailMovieComponent,
  },
  //DATOS A UTILIZAR
  data() {
    return {
      // arreglo para la lista de peliculas
      listaPeliculas: [],

      // arreglo para la validacion
      Vpeli: [],

      // arreglo de los datos necesarios apra el detail
      detailMovie: {
        //almacena la informacion de los datos
        data: null,
        //da la acion de mostrarse o no
        display: false,
      },

      // variable de informacion
      result: "Recuerde llenar todos los campos",

      //al macena la contraseña de la cookie
      pass:  this.$cookies.get("pass"),

      // variables para almacenamiento de datos
      id: "",
      titulo: "",
      descripcion: "",
      imgURL: "",
      traURL: "",
      stock: "",
      preciorenta: "",
      preciocompra: "",
      disponibilidad: "",
      vacontraseña: "",
    };
  },
  //METODOS A UTILIZAR
  methods: {
    //metodo para activar la vista de los detalles
    setSpecificMovie(data) {
      //se manda los datos al detailmovie
      this.detailMovie.data = data;
      //se hace visible el detailmovie
      this.detailMovie.display = true;
    },

    validar(){
      // se almacena la informacion al arreglo
      this.Vpeli = [{
                titulo:  this.titulo,
                descrip:  this.descripcion,
                img:  this.imgURL,
                tra:  this.traURL,
                stock:  this.stock,
                prerent:  this.preciorenta,
                precomp:  this.preciocompra,
                disp:  this.disponibilidad,
                vacontra: this.vacontraseña
              }]
      //se alamacena lo que retorne de la funcion
      //a la funcion se le envia la variable de informacion y el arreglo Vpeli
      this.result = Movie.movie(this.result, this.Vpeli, this.pass);
    },

    tabla() {
      datatable;

      // creador de datatable
      this.$nextTick(() => {
        $("#tabla").DataTable({
          responsive: true,
          paging: true,
          language: {
            lengthMenu: "Mostrar _MENU_ Registros por pagina",
            zeroRecords: "No se encontro ningun resitro que coincida",
            info: "Mostrando _TOTAL_ de _MAX_ registros",
            infoEmpty: "No se encontro ningun registro",
            search: "Buscar",
            searchPlaceholder: "Dato a buscar",
            infoFiltered: "(de un total de _MAX_ registro)",
            paginate: {
              previus: "Anterior",
              next: "Siguiente",
            },
          },
        });
      });
    },

    getPeliculasApi() {
      axios
        .get("http://127.0.0.1:8000/api/movies-all")
        .then((respuesta) => {

          this.listaPeliculas = respuesta.data;
          //se desctruye el datatable
          $("#tabla").dataTable().fnDestroy();
          //se crea el datatable
          this.tabla();
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    setPeliculasApi() {
      this.validar()

      // se verifica el resutado obtenido
      if (this.result == "Correcto") {
        
        axios
          // se indica la API a utilizar
          .post("http://127.0.0.1:8000/api/movies", {
            // se asigna valores a los datos de la api
            titleMovie: this.titulo,
            descriptionMovie: this.descripcion,
            urlImageMovie: this.imgURL,
            urlTrailerMovie: this.traURL,
            stockMovie: this.stock,
            rentalPriceMovie: this.preciorenta,
            purchasePriceMovie: this.preciocompra,
            availabilityMovie: this.disponibilidad,
          })
          // se fue un exito se inicia
          .then(() => {

            //llama a la funcion de limpiar los campos
            this.limpiar();
            //recarga el metodo
            this.getPeliculasApi();

          })
          //si da algun error
          .catch(function (error) {
            console.log(error);
            if (error) {
              return (this.result = "REVISE QUE NO HAYA CAMPOS VACIOS");
            }
          });
      }
    },

    selec(id) {
      this.listaPeliculas.forEach((pelis) => {
        if (pelis.id == id) {
          (this.id = id),
            (this.titulo = pelis.titleMovie),
            (this.descripcion = pelis.descriptionMovie),
            (this.imgURL = pelis.urlImageMovie),
            (this.traURL = pelis.urlTrailerMovie),
            (this.stock = pelis.stockMovie),
            (this.preciorenta = pelis.rentalPriceMovie),
            (this.preciocompra = pelis.purchasePriceMovie),
            (this.disponibilidad = pelis.availabilityMovie),
            console.log(pelis.titleMovie);
        }
      });
    },

    putPeliculasApi() {
      this.validar()

      if (this.result == "Correcto") {

        axios
          .put("http://127.0.0.1:8000/api/movies/" + this.id, {
            titleMovie: this.titulo,
            descriptionMovie: this.descripcion,
            urlImageMovie: this.imgURL,
            urlTrailerMovie: this.traURL,
            stockMovie: this.stock,
            rentalPriceMovie: this.preciorenta,
            purchasePriceMovie: this.preciocompra,
            availabilityMovie: this.disponibilidad,
          })
          .then((respuesta) => {
            console.log(respuesta);
            this.getPeliculasApi();

            return (this.result = "Editado con Exito");
          })
          .catch(function (error) {
            console.log(error);
            if (error) {
              return (this.result = "REVISE QUE NO HAYA CAMPOS VACIOS");
            }
          });
      }
    },

    // SE LIMINA LOS METODO
    eliminar(id) {

      this.result = Movie.eliminar(this.result, this.pass, this.vacontraseña);
      if (this.result == "Correcto") {
        axios
          .delete("http://127.0.0.1:8000/api/movies/" + id)
          .then((response) => {
            console.log(response);
            this.getPeliculasApi();
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    },

    limpiar() {
      (this.result = "Recuerde llenar todos los campos"), (this.id = "");
      this.titulo = "";
      this.descripcion = "";
      this.imgURL = "";
      this.traURL = "";
      this.stock = "";
      this.preciorenta = "";
      this.preciocompra = "";
      this.disponibilidad = "";
      this.vacontraseña = "";
    },

  },
  //METODO INICIADO
  mounted() {
    // AL ENTRAR A LA VISTA SE INICIA EL METODO
    this.getPeliculasApi();
  },
};
</script>

<style lang="css">

h1, h3{
  color: black;
}

.btnAdm0 .bx {
  background: var(--bg-color);
  padding: 10px;
  font-size: 1.2rem;
  border-radius: 50%;
  border: 4px solid rgba(2, 3, 7, 0.4);
  color: var(--main-color);
}
.btnAdm0 .bx:hover {
  background: var(--main-color);
  color: var(--bg-color);
  transition: 0.2s all linear;
}
.btnAdm1 .bx {
  background: var(--bg-color);
  padding: 10px;
  font-size: 1.2rem;
  border-radius: 50%;
  border: 4px solid rgba(2, 3, 7, 0.4);
  color: #1954b5;
}
.btnAdm1 .bx:hover {
  background: #0a3c8d;
  color: var(--bg-color);
  transition: 0.2s all linear;
}
.btnAdm15 .bx {
  background: var(--bg-color);
  padding: 10px;
  font-size: 1.8rem;
  border-radius: 50%;
  border: 4px solid rgba(2, 3, 7, 0.4);
  color: #19b540;
}
.btnAdm15 .bx:hover {
  background: #068f23;
  color: var(--bg-color);
  transition: 0.2s all linear;
}
</style>
