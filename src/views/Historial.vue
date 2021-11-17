<template>
  <div>
    <div class="ma">
      <p class="parr">Renta</p>
      <a v-on:click="visible = !visible" class="btnh"
        ><i class="bx bx-show"></i
      ></a>
      <p class="parra">Compra</p>
      <a v-on:click="show = !show" class="btnha"><i class="bx bx-show"></i></a>

      <div v-show="visible" class="alt">
        <a v-on:click="visible = !visible" class="btnhi"
          ><i class="bx bx-hide"></i
        ></a>
        <div>
          <h1>REGISTROS DE RENTAS</h1>
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
      </div>
      <div v-show="show" class="alt">
        <a v-on:click="show = !show" class="btnhis"
          ><i class="bx bx-hide"></i
        ></a>
        <div>
          <h1>REGISTROS DE COMPRAS</h1>
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
              <th>{{ item.dateSale }}</th>
              <th>{{ item.totalSale }}</th>
            </tr>
          </tbody>
        </table>
      </div>
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
      visible: false,
      show: false,
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

    getRentasApi() {
      axios
        .get("http://127.0.0.1:8000/api/rents-all")
        .then((respuesta) => {
          respuesta.data.forEach((renta) => {
            if (renta.idUserRent == this.$cookies.get("id")) {
              this.listaRenta.push(renta);
            }
          });
          //se desctruye el datatable
          $("#tabla").dataTable().fnDestroy();
          //se crea el datatable
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
    //funcion
    getComprasApi() {
      axios
        .get("http://127.0.0.1:8000/api/sales-all")
        .then((respuesta) => {
          respuesta.data.forEach((compra) => {
            if (compra.idUserSale == this.$cookies.get("id")) {
              this.listaCompra.push(compra);
            }
          });
          //se desctruye el datatable
          $("#tabla").dataTable().fnDestroy();
          //se crea el datatable
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

.paginate_button {
  cursor: pointer;
  color: white;
  border: 1px solid transparent;
}

#tablaRent_wrapper,
#tablaComp_wrapper {
  display: inline;
  text-align: left;
}

#tablaRent_wrapper select,
#tablaRent_wrapper input,
#tablaComp_wrapper select,
#tablaComp_wrapper input {
  background: white;
  color: black;
}

#tablaRent_wrapper label,
#tablaComp_wrapper label,
.dataTables_info {
  color: white !important;
}
.btnhi {
  position: absolute;
  top: 20%;
  left: 15%;
}
.btnhi .bx {
  background: #055620;
  padding: 10px;
  font-size: 1.8rem;
  border-radius: 50%;
  border: 4px solid rgba(2, 3, 7, 0.4);
  color: #ffff;
}
.btnhi .bx:hover {
  background: #0d0270;
  color: var(--bg-color);
  transition: 0.2s all linear;
}
.btnhis {
  position: absolute;
  top: 20%;
  left: 25%;
}
.btnhis .bx {
  background: #055620;
  padding: 10px;
  font-size: 1.8rem;
  border-radius: 50%;
  border: 4px solid rgba(2, 3, 7, 0.4);
  color: #fff;
}
.btnhis .bx:hover {
  background: #0d0270;
  color: #fff;
  transition: 0.2s all linear;
}
.btnha {
  position: absolute;
  top: 20%;
  left: 25%;
}
.btnha .bx {
  background: #560524;
  padding: 10px;
  font-size: 1.8rem;
  border-radius: 50%;
  border: 4px solid rgba(2, 3, 7, 0.4);
  color: #ffff;
}
.btnha .bx:hover {
  background: #034453;
  color: var(--bg-color);
  transition: 0.2s all linear;
}
.parr {
  position: absolute;
  top: 15%;
  left: 15%;
}
.parra {
  position: absolute;
  top: 15%;
  left: 25%;
}
.btnh {
  position: absolute;
  top: 20%;
  left: 15%;
}
.btnh .bx {
  background: #560524;
  padding: 10px;
  font-size: 1.8rem;
  border-radius: 50%;
  border: 4px solid rgba(2, 3, 7, 0.4);
  color: #fff;
}
.btnh .bx:hover {
  background: #034453;
  color: var(--bg-color);
  transition: 0.2s all linear;
}
.alt {
  margin-top: 10%;
  margin-left: 15%;
  width: 70%;
}
</style>
