<template>
  <div>
    
    <div class="ma">

      <router-link to="/pelicula" class="btn btn-info btn-block">
        <span class="las la-clipboard-list"></span>
        <span>Nueva Pelicula</span>
      </router-link>

      <table class="table table-dark">
        <thead>
          <tr class="table-secondary">
            <th>N</th>
            <th>Titulo</th>
            <th>Portada</th>
            <th>Descripcion</th>
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
            <th>{{ index+1 }}</th>
            <th>{{ item.titleMovie }}</th>
            <th><button> <img :src = item.urlImageMovie > </button></th>
            <th>{{ item.descriptionMovie }}</th>
            <th>{{ item.rentalPriceMovie }}</th>
            <th>{{ item.purchasePriceMovie }}</th>
            <th>{{ item.stockMovie }}</th>
            <th>{{ item.availabilityMovie }}</th>
            <th>
              <button class="btn btn-danger">Eliminar</button>
            </th>
            <th>
              <button class="btn btn-success">Editar</button>
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
export default {
  //DATOS A UTILIZAR
  data() {
    return {
      listaPeliculas: [],
    };
  },
  //METODOS A UTILIZAR
  methods: {
    getPeliculasApi() {
      axios.get("http://127.0.0.1:8000/api/movies").then((respuesta) => {
        console.log(respuesta);
        this.listaPeliculas = respuesta.data;
      });
    },
  },
  //METODO INICIADO
  mounted() {
    this.getPeliculasApi();
  },

}

/*
$(document).ready( function () {
      $('#peliculas').DataTable({
        "color":"",
        "responsive": true,
        "paging": true,
        "language": {
            "lengthMenu": "Mostrar _MENU_ Registros por pagina",
            "zeroRecords": "No se encontro ningun resitro que coincida",
            "info": "Mostrando _TOTAL_ de _MAX_ registros",
            "infoEmpty": "No se encontro ningun registro",
            "search": "Buscar",
            "searchPlaceholder": "Nombre de Usuario",
            "infoFiltered": "(de un total de _MAX_ registro)",
            "paginate": {
                "previus": "Anterior",
                "next": "Siguiente"
            }
        }

      });
  });
*/
</script>

<style lang="">
</style>