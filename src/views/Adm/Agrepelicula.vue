<template>
  <div class="ma">

        <div class="panel-heading">
          <h3 class="panel-title">Nueva Pelicula</h3>
        </div>
        <div class="panel-body">
          <div id="agregar" class="table-container">
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
                  <label for="floatingInput">URL de la imagen de la pelicula</label>
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
                  <label for="floatingInput">Descripcion de la pelicula</label>
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
                  <label for="floatingInput">URL del trailer de la pelicula</label>
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
                  <label for="floatingInput">Precio de renta de la pelicula</label>
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
                  <label for="floatingInput">Precio de compra de la pelicula</label>
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
                  <label for="floatingInput">Cantidad de la pelicula en stonk</label>
                </div>
              </div>
              <div class="col-xs-6 col-sm-6 col-md-6">
                <label>Disponibilidad de la Pelicula</label>
                <div class="form-group">
                  <select
                    v-model="disponibilidad"
                    class="form-select" aria-label="Default select example"
                    name="select"
                    id="selectEspecie"
                    onchange=""
                  >
                    <option value="0">Pelicula Disponible</option>
                    <option value="1">Pelicula No Disponible</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12">
                <button
                  v-on:click="setPeliculasApi"
                  type="submit"
                  class="btn btn-success btn-block"
                >
                  Guardar
                </button>
              </div>
            </div>
          <div class="alert alert-secondary" role="alert">
            {{resultado}}
          </div>
          </div>
        </div>
      </div>

</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      resultado: "Recuerde llenar todos los campos",
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
  methods: {
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
            
            if(respuesta.status == 400){
              return this.resultado = "REVISE QUE NO HAYA CAMPOS VACIOS"
            }else{
              return this.resultado = "Guardo con Exito"
            }
              

        });
      console.log(this.disponibilidad);
    },
  },
  mounted() {},
};
</script>

<style lang="">
</style>