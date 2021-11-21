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
            <th>Estado</th>
            <th>Opcion</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in listaCompra" :key="index">
            <th>{{ index + 1 }}</th>
            <th>{{ item.firstNameUser }} {{ item.lastNameUser }}</th>
            <th>{{ item.titleMovie }}</th>
            <th>{{ item.dateSale }}</th>
            <th>{{ item.totalSale }}</th>
            <th v-if="item.statusSale == 'done'">
                Comprada
            </th>
            <th v-if="item.statusSale != 'done'">
                No Comprada
            </th>
            <th v-if="item.statusSale != 'done'">
              <button class="btnAdm btn-danger" v-on:click="hecho(item.id)">
                Comprada
              </button>
            </th>
            <th v-if="item.statusSale == 'done'">
              <button class="btnAdm btn-danger" v-on:click="cancelado(item.id)">
                No Comprada
              </button>
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
      listaCompra: [],
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

    getComprasApi() {
      axios
        .get("http://127.0.0.1:8000/api/sales-all")
        .then((respuesta) => {
          this.listaCompra = respuesta.data;
          //se desctruye el datatable
          $("#tabla").dataTable().fnDestroy();
          //se crea el datatable
          this.tabla();
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    hecho(id) {
      axios.put("http://127.0.0.1:8000/api/sales/done/" + id).then((response) => {
        console.log(response);
        this.getComprasApi();
      });
    },

    cancelado(id) {
      axios.put("http://127.0.0.1:8000/api/sales/cancel/" + id).then((response) => {
        console.log(response);
        this.getComprasApi();
      });
    },

  },
  //METODO INICIADO
  mounted() {
    this.getComprasApi();
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
