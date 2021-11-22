<template>
  <div>
    <!-- llamamos el componente que abrira el detalle de las peliculas-->
    <Editarusu :editar="editarusu" />

    <!--Ventana Modal-->
    <input type="checkbox" id="btn-modal" />
    <div class="container-modal">
      <div class="content-modal">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-floating">
              <input
                v-model="usuario"
                type="text"
                name="usuario"
                class="form-control"
                id="floatingInput"
                placeholder="usuario de Usuario"
                autocomplete="off"
              />
              <label for="floatingInput">usuario de Usuario</label>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-floating">
              <input
                v-model="contra"
                type="text"
                name="contra"
                class="form-control"
                id="floatingInput"
                placeholder="Contraseña Actual"
                autocomplete="off"
              />
              <label for="floatingInput">Contraseña Actual</label>
            </div>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-12">
            <div class="form-floating">
              <input
                v-model="ncontra"
                type="text"
                name="ncontra"
                class="form-control"
                id="floatingInput"
                placeholder="Nueva Contraseña"
                autocomplete="off"
              />
              <label for="floatingInput">Nueva Contraseña</label>
            </div>
          </div>

          <div class="alert alert-secondary" role="alert">
            <label>{{ result }}</label>
          </div>
          <div class="row">
            <div class="col-xs-6 col-sm-6 col-md-6">
              <div class="btn-cerrar">
                <label v-on:click="putContra()"><i class="bx bxs-save"></i>Guardar</label>
              </div>
            </div>
             <div class="col-xs-6 col-sm-6 col-md-6">
              <div class="btn-cerrar">
                <label for="btn-modal">Cerrar</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <label for="btn-modal" class="cerrar-modal"></label>
    </div>
    <!--fin Ventana Modal-->

    <div class="ma">
      <p class="parr">Renta</p>
      <a v-on:click="visible = !visible" class="btnh"
        ><i class="bx bx-show"></i
      ></a>
      <p class="parra">Compra</p>
      <a v-on:click="show = !show" class="btnha"><i class="bx bx-show"></i></a>


      <p class="parrc">Cambiar contraseña</p>
      <a class="btnhc">
        <label for="btn-modal"> 
          <i  class='bx bx-edit-alt' style='color:#3d627f'></i> 
        </label>
      </a>

      <p class="parc">Editar Datos</p>

      <a class="btnc" v-on:click="setSpecificUser()">
        <i  class='bx bx-edit-alt' style='color:#3d627f'></i> 
      </a>


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
// se importan los componenetes para poder interactuar con ellos
import Editarusu from "@/components/Editar.vue";

import axios from "axios";
import $ from "jquery";
import datatable from "datatables.net-bs5";

//Padron modulo
const Contra = (()=>{

  //funcion
  const contra = function(result, user, pass, contra){

    // verifica que los campos nos esten vacios
    if (contra[0].usuario == "" || contra[0].contra == "" || contra[0].ncontra == "") {
      
      // asigna respuesta
      result = "Verifique que los campos no esten vacios";
    }
    else if (contra[0].usuario != user) {
      
      // asigna respuesta
      result = "Nombre de usuario incorrecto";
    }
    else if (contra[0].contra != pass) {
      
      // asigna respuesta
      result = "Contraseña de usuario incorrecto";
    }
    else{
      result = "Correcto"
    }
    console.log(user, pass);
    // retorna el result
    return result;
    
  }
  // hace publica a la funcion
  return{contra}

})();

export default {
  //Componenetes con los que se trabaja
  components: {
    //Componenete de editar
    Editarusu,
  },

  //DATOS A UTILIZAR
  data() {
    return {
      //arreglo para el componente editar
      editarusu: {
        data: null,
        display: false,
      },

      // arreglo para la lista de usuario
      listaUsuarios: [],

      usuario: "",
      contra: "",
      ncontra: "",
      user: this.$cookies.get("username"),
      pass:  this.$cookies.get("pass"),

      // variable de informacion
      result: "Recuerde llenar todos los campos",

      visible: false,
      show: false,
      listaRenta: [],
      listaCompra: [],
    };
  },
  
  //METODOS A UTILIZAR
  methods: {

    getUsuariosApi() {
      axios
        .get("http://127.0.0.1:8000/api/users")
        .then((respuesta) => {
          this.listaUsuarios = respuesta.data;

        })
        .catch(function (error) {
          console.log(error);
        });
    },

    //metodo para activar la vista de los detalles
    async setSpecificUser() {
      //ciclo para recorrer la lista de las peliculas
      this.listaUsuarios.forEach((data) => {
        console.log(data.id);
        //comprara el titulo del resultado con el nombre enviado
        if (data.id == this.$cookies.get("id")) {
          //se manda los datos al detailmovie
          this.editarusu.data = data;
          //se hace visible el detailmovie
          this.editarusu.display = true;
        }
      });
    },

    //hace la busqueda de la pelicula segun su nomnre
    async buscar() {
      axios
        .get("http://127.0.0.1:8000/api/users")
        .then((response) => {
          if (response.status == 200) {

            response.data.forEach((usu) => {
              if (usu.id == this.$cookies.get("id")) {
                this.setSpecificUser(usu);
              }
            });

          }
        })
        .catch((err) => console.log(err));
    },

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
            if (renta.idusuarioRent == this.$cookies.get("id")) {
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
            if (compra.idusuarioSale == this.$cookies.get("id")) {
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

    putContra(){

      // se almacena la informacion al arreglo
      this.Vcontr = [{
                usuario: this.usuario,
                contra: this.contra,
                ncontra: this.ncontra,
              }]

      //se alamacena lo que retorne de la funcion
      //a la funcion se le envia la variable de informacion y el arreglo Vusu
      this.result = Contra.contra(this.result, this.user, this.pass, this.Vcontr);

      // se verifica el resutado obtenido
      if (this.result == "Correcto") {
        
        axios
          .put("http://127.0.0.1:8000/api/users-change-password", {
            loginNameUser: this.usuario,
            oldPassword: this.contra,
            newPassword: this.ncontra,
          })
          .then(() => {
            this.result = "Editado con Exito"
          })
      }
    }

  },
  //METODO INICIADO
  mounted() {
    this.getRentasApi();
    this.getComprasApi();
    this.getUsuariosApi();
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

label {
  color: black;
}

.parrc {
  position: absolute;
  top: 15%;
  left: 35.5%;
}

.btnhc {
  position: absolute;
  top: 20%;
  left: 40%;
}
.btnhc .bx {
  background: #560524;
  padding: 10px;
  font-size: 1.8rem;
  border-radius: 50%;
  border: 4px solid rgba(2, 3, 7, 0.4);
  color: #fff;
}
.btnhc .bx:hover {
  background: #034453;
  color: var(--bg-color);
  transition: 0.2s all linear;
}


.parc {
  position: absolute;
  top: 15%;
  left: 58%;
}

.btnc {
  position: absolute;
  top: 20%;
  left: 60%;
}
.btnc .bx {
  background: #560524;
  padding: 10px;
  font-size: 1.8rem;
  border-radius: 50%;
  border: 4px solid rgba(2, 3, 7, 0.4);
  color: #fff;
}
.btnc .bx:hover {
  background: #034453;
  color: var(--bg-color);
  transition: 0.2s all linear;
}

</style>
