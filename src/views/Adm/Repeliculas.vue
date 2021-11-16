<template>
  <div>
    <div class="ma">
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
                          v-model="nombre"
                          type="text"
                          name="nombre"
                          class="form-control"
                          id="floatingInput"
                          placeholder="Nombre de la pelicula"
                        />
                        <label for="floatingInput">Nombre de la pelicula</label>
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
                          v-model.number="stonk"
                          type="number"
                          name="stonk"
                          class="form-control"
                          id="floatingInput"
                          placeholder="Cantidad de la pelicula en stonk"
                        />
                        <label for="floatingInput"
                          >Cantidad de la pelicula en stonk</label
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
                          <option value="0">Pelicula Disponible</option>
                          <option value="1">Pelicula No Disponible</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="alert alert-secondary" role="alert">
                    <label>{{ resultado }}</label>
                  </div>
                  <div class="row">
                    <div class="col-xs-12 col-sm-12 col-md-12">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                        v-on:click="limpiar()"
                      >
                        Cerrar X
                      </button>
                      <button
                        v-if="this.id == ''"
                        v-on:click="setPeliculasApi()"
                        type="submit"
                        s
                        class="btn btn-success btn-block"
                      >
                        Guardar
                      </button>
                      <button
                        v-if="this.id != ''"
                        v-on:click="putPeliculasApi()"
                        type="submit"
                        s
                        class="btn btn-success btn-block"
                      >
                        Editar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        class="btnAdm btn-primary"
        style="width: 150px"
        data-bs-toggle="modal"
        data-bs-target="#ModalAE"
      >
        Nueva Pelicula
      </button>

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
            <th>Stonk</th>
            <th>Estado</th>
            <th>Opciones</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in listaPeliculas" :key="index">
            <th>{{ index + 1 }}</th>
            <th>{{ item.titleMovie }}</th>
            <th>
              <button><img class="reimg" :src="item.urlImageMovie" /></button>
            </th>
            <th>{{ item.likesMovie }}</th>
            <th>{{ item.rentalPriceMovie }}</th>
            <th>{{ item.purchasePriceMovie }}</th>
            <th>{{ item.stockMovie }}</th>
            <th v-if="item.availabilityMovie == 0">Disponible</th>
            <th v-if="item.availabilityMovie == 1">No Disponible</th>
            <th>
              <button class="btnAdm btn-danger" v-on:click="eliminar(item.id)">
                Eliminar
              </button>
            </th>
            <th>
              <button
                v-on:click="editar(item.id)"
                type="button"
                class="btnAdm btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#ModalAE"
              >
                Editar
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
import datatable from "datatables.net-bs5";

export default {
  //DATOS A UTILIZAR
  data() {
    return {
      listaPeliculas: [],

      resultado: "Recuerde llenar todos los campos",
      id: "",
      nombre: "",
      descripcion: "",
      imgURL: "",
      traURL: "",
      stonk: "",
      preciorenta: "",
      preciocompra: "",
      disponibilidad: "",
    };
  },
  //METODOS A UTILIZAR
  methods: {
    tabla() {
      datatable;

      this.$nextTick(() => {
        $("#tabla").DataTable({
          responsive: true,
          destroy: true,
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
        .get("http://127.0.0.1:8000/api/movies")
        .then((respuesta) => {
          console.log(respuesta);
          this.listaPeliculas = respuesta.data;
          this.tabla();
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    setPeliculasApi() {
      axios
        .post("http://127.0.0.1:8000/api/movies", {
          titleMovie: this.nombre,
          descriptionMovie: this.descripcion,
          urlImageMovie: this.imgURL,
          urlTrailerMovie: this.traURL,
          stockMovie: this.stonk,
          rentalPriceMovie: this.preciorenta,
          purchasePriceMovie: this.preciocompra,
          availabilityMovie: this.disponibilidad,
        })
        .then((respuesta) => {
          console.log(respuesta);
          this.limpiar();
          this.getPeliculasApi();
          return (this.resultado = "Guardo con Exito");
        })
        .catch(function (error) {
          console.log(error);
          if (error) {
            return (this.resultado = "REVISE QUE NO HAYA CAMPOS VACIOS");
          }
        });
    },

    editar(id) {
      this.listaPeliculas.forEach((pelis) => {
        if (pelis.id == id) {
          (this.id = id),
            (this.nombre = pelis.titleMovie),
            (this.descripcion = pelis.descriptionMovie),
            (this.imgURL = pelis.urlImageMovie),
            (this.traURL = pelis.urlTrailerMovie),
            (this.stonk = pelis.stockMovie),
            (this.preciorenta = pelis.rentalPriceMovie),
            (this.preciocompra = pelis.purchasePriceMovie),
            (this.disponibilidad = pelis.availabilityMovie),
            console.log(pelis.titleMovie);
        }
      });
    },

    putPeliculasApi() {
      console.log("id" + this.id);

      axios
        .put("http://127.0.0.1:8000/api/movies/" + this.id, {
          titleMovie: this.nombre,
          descriptionMovie: this.descripcion,
          urlImageMovie: this.imgURL,
          urlTrailerMovie: this.traURL,
          stockMovie: this.stonk,
          rentalPriceMovie: this.preciorenta,
          purchasePriceMovie: this.preciocompra,
          availabilityMovie: this.disponibilidad,
        })
        .then((respuesta) => {
          console.log(respuesta);
          this.getPeliculasApi();

          return (this.resultado = "Editado con Exito");
        })
        .catch(function (error) {
          console.log(error);
          if (error) {
            return (this.resultado = "REVISE QUE NO HAYA CAMPOS VACIOS");
          }
        });
    },

    // SE LIMINA LOS METODO
    eliminar(id) {
      axios
        .delete("http://127.0.0.1:8000/api/movies/" + id)
        .then((response) => {
          console.log(response);
          this.getPeliculasApi();
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    limpiar() {
      (this.resultado = "Recuerde llenar todos los campos"), (this.id = "");
      this.nombre = "";
      this.descripcion = "";
      this.imgURL = "";
      this.traURL = "";
      this.stonk = "";
      this.preciorenta = "";
      this.preciocompra = "";
      this.disponibilidad = "";
    },
  },
  //METODO INICIADO
  mounted() {
    // AL ENTRAR A LA VISTA SE INICIA EL METODO
    this.getPeliculasApi();
  },
};
</script>

<style lang="">
</style>