<template lang="">
  <div>
    <div class="ma">
      <table id="tabla" class="table table-dark">
        <thead>
          <tr id="vol">
            <th>N</th>
            <th>Nombre Usuario</th>
            <th>Nombre Pelicula</th>
            <th>Fecha de Compra</th>
            <th>Precio</th>
            <th>Opcion</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in listaRenta" :key="index">
            <th>{{ index + 1 }}</th>
            <th>{{ item.firstNameUser }} {{ item.lastNameUser }}</th>
            <th>{{ item.titleMovie }}</th>
            <th>{{ item.dateRent }}</th>
            <th>{{ item.subtotalRent }}</th>
            <th v-if="item.statusRent != 'done'">
              <a class="btnAdm" v-on:click="entrega(item.id)">
                <i class='bx bx-trash-alt'></i>
              </a>
            </th>
            <th v-if="item.statusRent == 'done'">
              Recibida
            </th>
          </tr>
        </tbody>
      </table>
    </div>
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
      listaRenta: [],
    };
  },
  //METODOS A UTILIZAR
  methods: {
    tabla() {
      datatable;

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

    getRentasApi() {
      axios
        .get("http://127.0.0.1:8000/api/rents")
        .then((respuesta) => {
          this.listaRenta = respuesta.data;
          this.tabla();
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    entrega(id) {
      axios.put("http://127.0.0.1:8000/api/rents/" + id).then((response) => {
        console.log(response);
        this.getRentasApi();
      });
    },
  },
  //METODO INICIADO
  mounted() {
    this.getRentasApi();
  },
};
</script>

<style lang="css">
.btnAdm .bx {
  background: var(--bg-color);
  padding: 10px;
  font-size: 1.8rem;
  border-radius: 50%;
  border: 4px solid rgba(2, 3, 7, 0.4);
  color: var(--main-color);
}
.btnAdm .bx:hover {
  background: var(--main-color);
  color: var(--bg-color);
  transition: 0.2s all linear;
}
</style>
