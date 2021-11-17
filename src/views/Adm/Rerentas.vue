<template lang="">
  <div>
    <div class="ma">
      <table id="tabla" class="table table-dark">
        <thead>
          <tr>
            <th>N</th>
            <th>Nombre Usuario</th>
            <th>Nombre Pelicula</th>
            <th>Fecha Rentada</th>
            <th>Fecha Limite</th>
            <th>Precio</th>
            <th>Mora</th>
            <th>Total</th>
            <th>Estado</th>
            <th>Cambiar</th>

          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in listaRenta" :key="index">
            <th>{{ index + 1 }}</th>
            <th>{{ item.firstNameUser }} {{ item.lastNameUser }}</th>
            <th>{{ item.titleMovie }}</th>
            <th>{{ item.dateRent }}</th>
            <th>{{ item.returnDateRent }}</th>
            <th>{{ item.subtotalRent }}</th>
            <th>{{ item.arrearRent }}</th>
            <th>{{ item.totalRent }}</th>
            <th v-if="item.statusRent == 'done'">
              Recibida
            </th>
            <th v-if="item.statusRent != 'done'">
              Pendiente
            </th>
            <th v-if="item.statusRent != 'done'">
              <a
                class="btnAdm12"
                v-on:click="entrega(item.id)"
              >
               <i class='bx bx-check-circle'></i> 
              </a>
            </th>
            <th v-if="item.statusRent == 'done'">
              <a
                class="btnAdm13"
               v-on:click="eliminar(item.id)"
              >
                 <i class='bx bx-checkbox-minus'></i>
              </a>
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
        .get("http://127.0.0.1:8000/api/rents-all")
        .then((respuesta) => {
          this.listaRenta = respuesta.data;
          //se desctruye el datatable
          $("#tabla").dataTable().fnDestroy();
          //se crea el datatable
          this.tabla();
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    entrega(id) {
      axios.put("http://127.0.0.1:8000/api/rents/done/" + id).then((response) => {
        console.log(response);
        this.getRentasApi();
      });
    },

    eliminar(id) {
      axios.put("http://127.0.0.1:8000/api/rents/cancel/" + id).then((response) => {
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
.btnAdm12 .bx {
  background: var(--bg-color);
  padding: 10px;
  font-size: 1.8rem;
  border-radius: 50%;
  border: 4px solid rgba(2, 3, 7, 0.4);
  color:#19b540;
}
.btnAdm12 .bx:hover {
  background: #068f23;
  color: var(--bg-color);
  transition: 0.2s all linear;
}
.btnAdm13 .bx {
  background: var(--bg-color);
  padding: 10px;
  font-size: 1.8rem;
  border-radius: 50%;
  border: 4px solid rgba(2, 3, 7, 0.4);
  color: var(--main-color);
}
.btnAdm13.bx:hover {
  background: var(--main-color);
  color: var(--bg-color);
  transition: 0.2s all linear;
}
</style>
