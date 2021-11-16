<template>
  <div>
    <div class="ma">
      <div>
        <h1> REGISTROS DE RENTAS </h1>
      </div>
      
      <table id="tablaRent" class="table table-dark">
        <thead>
          <tr>
            <th>N</th>
            <th>Nombre Pelicula</th>
            <th>Fecha Rentada</th>
            <th>Fecha Limite</th>
            <th>Precio</th>
            <th>Mora</th>
            <th>Total</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in listaRenta" :key="index">
            <th>{{ index + 1 }}</th>
            <th>{{ item.titleMovie }}</th>
            <th>{{ item.dateRent }}</th>
            <th>{{ item.returnDateRent }}</th>
            <th>{{ item.subtotalRent }}</th>
            <th>{{ item.arrearRent }}</th>
            <th>{{ item.totalRent }}</th>
            <th v-if="item.statusRent != 'done'">Pendiente</th>
            <th v-if="item.statusRent == 'done'">Recibida</th>
          </tr>
        </tbody>
      </table>

      <div>
        <h1>  REGISTROS DE COMPRAS </h1>
      </div>
      <table id="tablaComp" class="table table-dark">
        <thead>
          <tr>
            <th>N</th>
            <th>Nombre Pelicula</th>
            <th>Fecha de Compra</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in listaCompra" :key="index">
            <th>{{ index + 1 }}</th>
            <th>{{ item.titleMovie }}</th>
            <th>{{ item.dateRent }}</th>
            <th>{{ item.subtotalRent }}</th>
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
      listaCompra: [],
    };
  },
  //METODOS A UTILIZAR
  methods: {
    tablaRent() {
      datatable;

      this.$nextTick(() => {
        $("#tablaRent").DataTable({
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

          respuesta.data.forEach((renta) => {
            if (renta.idUserRent == this.$cookies.get("id")) {
              this.listaRenta.push(renta);
            }
          });

          this.tablaRent();
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    tablaComp() {
        datatable;

        this.$nextTick(() => {
            $("#tablaComp").DataTable({
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
        .get("http://127.0.0.1:8000/api/rents")
        .then((respuesta) => {

          respuesta.data.forEach((renta) => {
            if (renta.idUserRent == this.$cookies.get("id")) {
              this.listaCompra.push(renta);
            }

          });

          this.tablaComp();
        })
        .catch(function (error) {
          console.log(error);
        });
    },

  },
  //METODO INICIADO
  mounted() {
    this.getRentasApi();
    this.getComprasApi();
  },
};
</script>

<style>

.ma {
  margin-top: 5%;
  padding: 2rem 1.5rem;
}


.paginate_button
{
  cursor: pointer;
  color:white;
  border: 1px solid transparent;
}


#tablaRent_wrapper,
#tablaComp_wrapper{
  display: inline;
  text-align: left;
}

#tablaRent_wrapper select, #tablaRent_wrapper input,
#tablaComp_wrapper select, #tablaComp_wrapper input{
  background: white;
  color: black;
}

#tablaRent_wrapper label, #tablaComp_wrapper label, .dataTables_info {
  color: white !important;
}


</style>
