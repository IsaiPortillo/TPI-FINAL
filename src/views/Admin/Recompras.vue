<template>
  <div>
    <div class="main">
      <table class="table">
        <thead>
          <tr>
            <th>N</th>
            <th>Nombre Usuario</th>
            <th>Nombre Pelicula</th>
            <th></th>
            <th>opciones</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="compra">
          <tr>
            <th></th>
            <th>
              <button class="btn btn-danger">Eliminar</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  //DATOS A UTILIZAR
  data() {
    return {
      listaPeliculas: [{ nombre: "hola" }],
    };
  },
  //METODOS A UTILIZAR
  methods: {
    getPeliculasApi() {
      axios.get("http://127.0.0.1:8000/api/sales").then((respuesta) => {
        console.log(respuesta);
      });
    },
  },
  //METODO INICIADO
  mounted() {
    this.getPeliculasApi();
  },
};
</script>

<style lang="">
</style>