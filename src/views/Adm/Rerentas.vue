<template lang="">
  <div>
    <div class="ma">
      <table class="table table-dark">
        <thead>
          <tr class="table-secondary">
            <th>N</th>
            <th>Nombre Usuario</th>
            <th>Nombre Pelicula</th>
            <th></th>
            <th>opciones</th>
            <th></th>
          </tr>
        </thead>
        <tbody id="renta">
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
      axios.get("http://127.0.0.1:8000/api/rents").then((respuesta) => {
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

<style lang=""></style>
