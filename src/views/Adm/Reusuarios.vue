<template>
  <div>
    <div class="ma">
      <!-- Modal -->
      <div
        class="modal fade"
        id="ModalAE"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-body">
              <div class="panel-body">
                <div class="row">
                  <div class="col-xs-6 col-sm-6 col-md-6">
                    <div class="form-floating">
                      <input
                        v-model="nombre"
                        type="text"
                        name="nombre"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Nombre"
                        autocomplete="off"
                      />
                      <label for="floatingInput">Nombre</label>
                    </div>
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-6">
                    <div class="form-floating">
                      <input
                        v-model="apellido"
                        type="text"
                        name="apellido"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Apellido"
                        autocomplete="off"
                      />
                      <label for="floatingInput">Apellido</label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-xs-6 col-sm-6 col-md-6">
                    <div class="form-floating">
                      <input
                        v-model="telefono"
                        type="text"
                        name="telefono"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Telefono de usuario  [ejm: +503 4444-5555]"
                        autocomplete="off"
                      />
                      <label for="floatingInput">Telefono de Usuario [ejm: +503 4444-5555]</label>
                    </div>
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-6" >
                    <div class="form-floating" v-if="this.id == ''">
                      <input
                        v-model="contraseña"
                        type="text"
                        name="contraseña"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Contraseña de Usuario"
                        autocomplete="off"
                      />
                      <label for="floatingInput">Contraseña de Usuario</label>
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-xs-6 col-sm-6 col-md-6">
                    <div class="form-floating">
                      <input
                        v-model="usuario"
                        type="text"
                        name="usuario"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Nombre de Usuario"
                        autocomplete="off"
                      />
                      <label for="floatingInput">Nombre de Usuario</label>
                    </div>
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-6">
                    <label>Rol de Usuario</label>
                    <div class="form-group">
                      <select
                        v-model="rol"
                        class="form-select"
                        aria-label="Default select example"
                        name="select"
                        onchange=""
                      >
                        <option value="2">Tiene Rol de Usuario</option>
                        <option value="1">Tiene Rol de Administrador</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="alert alert-secondary" role="alert">
                  <label>{{ result }}</label>
                </div>

                <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-12">
                    <a
                      type="button"
                      class="btnAdm0"
                      data-bs-dismiss="modal"
                      v-on:click="limpiar()"
                    >
                      <i class="bx bxs-exit"></i>
                    </a>
                    <a
                      v-if="this.id == ''"
                      v-on:click="setUsuarioApi()"
                      type="submit"
                      s
                      class="btnAdm1"
                    >
                      <i class="bx bxs-save"></i>
                    </a>
                    <a
                      v-if="this.id != ''"
                      v-on:click="putUsuarioApi()"
                      type="submit"
                      s
                      class="btnAdm1"
                    >
                      <i class="bx bxs-edit-alt"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        type="button"
        class="btnAdm15"
        style="width: 150px"
        data-bs-toggle="modal"
        data-bs-target="#ModalAE"
      >
        <i class="bx bxs-user-plus"></i>
      </a>

      <table id="tabla" class="table table-dark">
        <thead>
          <tr>
            <th>N</th>
            <th>Usuario</th>
            <th>Telefono</th>
            <th>Nombre de Usuario</th>
            <th>Rol</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in listaUsuarios" :key="index">
            <th>{{ index + 1 }}</th>
            <th>{{ item.loginNameUser }}</th>
            <th>{{ item.phoneUser }}</th>
            <th>{{ item.firstNameUser }} {{ item.lastNameUser }}</th>
            <th>{{ item.titleRol }}</th>
            <th>
              <a
                class="btnAdm0"
                v-on:click="eliminar(item.id, item.loginNameUser)"
              >
                <i class="bx bx-trash-alt"></i>
              </a>

              <a
                v-on:click="editar(item.id)"
                type="button"
                class="btnAdm1"
                data-bs-toggle="modal"
                data-bs-target="#ModalAE"
              >
                <i class="bx bx-edit-alt"></i>
              </a>
            </th>
          </tr>
        </tbody>
      </table>
      <router-view />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import $ from "jquery";
import datatable from "datatables.net-bs5";


//Padron modulo
const Usuario = (()=>{

  function telephoneCheck(telef) {
    var struc = new RegExp(/^\+?1?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{4}[-|\s]?\d{4}$/);
    
    return struc.test(telef);
  }

  //funcion
  const usuario = function(result, usu){
      // verifica que los campos nos esten vacios
      if (usu[0].nombre == "" || usu[0].apellido == "" || usu[0].telefono == "" ||
      usu[0].contra == "" || usu.usuario == "" || usu.rol == "") {
        
        // asigna respuesta
        result = "Verifique que los campos no esten vacios";
      }

      else if(!telephoneCheck(usu[0].telefono)){
        // asigna respuesta
        result = "Verifique que el telefono sea valido";
      }
      // de lo contrario
      else{
        // asigna respuesta
        result = "Guardo con Exito"
      }
    // retorna el result
    return result;
    
  }
  // hace publica a la funcion
  return{usuario}

})();

export default {
  //DATOS A UTILIZAR
  data() {
    return {
      // arreglo para la lista de usuario
      listaUsuarios: [],

      // arreglo para la validacion
      Vusu: [],

      // variable de informacion
      result: "Recuerde llenar todos los campos",

      // variables para almacenamiento de datos
      id: "",
      nombre: "",
      apellido: "",
      telefono: "",
      contraseña: "",
      usuario: "",
      rol: "",
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
            info: "Se econtro _TOTAL_ de _MAX_ registros",
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

    getUsuariosApi() {
      axios
        .get("http://127.0.0.1:8000/api/users")
        .then((respuesta) => {
          this.listaUsuarios = respuesta.data;
          //se desctruye el datatable
          $("#tabla").dataTable().fnDestroy();
          //se crea el datatable
          this.tabla();
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    setUsuarioApi() {
      // se almacena la informacion al arreglo
      this.Vusu = [{
                nombre:  this.nombre,
                apellido:  this.apellido,
                telefono:  this.telefono,
                contra:  this.contraseña,
                usuario:  this.usuario,
                rol:  this.rol,
              }]
      //se alamacena lo que retorne de la funcion
      //a la funcion se le envia la variable de informacion y el arreglo Vusu
      this.result = Usuario.usuario(this.result, this.Vusu);

      // se verifica el resutado obtenido
      if (this.result == "Guardo con Exito") {

        axios
          // se indica la API a utilizar
          .post("http://127.0.0.1:8000/api/users", {
            // se asigna valores a los datos de la api
            firstNameUser: this.nombre,
            lastNameUser: this.apellido,
            phoneUser: this.telefono,
            loginNameUser: this.usuario,
            loginPasswordUser: this.contraseña,
            idRolUser: this.rol,
          })
          .then(() => {
            //llama a la funcion de limpiar los campos
            this.limpiar();
            //recarga el metodo
            this.getUsuariosApi();
          });
      }  
    },

    editar(id) {
      this.getUsuariosApi();

      this.listaUsuarios.forEach((user) => {
        if (user.id == id) {
          (this.id = id),
            (this.nombre = user.firstNameUser),
            (this.apellido = user.lastNameUser),
            (this.telefono = user.phoneUser),
            (this.usuario = user.loginNameUser),
            (this.contraseña = user.loginPasswordUser),
            (this.rol = user.idRolUser),
            console.log(user.firstNameUser);
        }
      });
    },

    putUsuarioApi() {
      axios
        .put("http://127.0.0.1:8000/api/users/" + this.id, {
          firstNameUser: this.nombre,
          lastNameUser: this.apellido,
          phoneUser: this.telefono,
          loginNameUser: this.usuario,
          loginPasswordUser: this.contraseña,
          idRolUser: this.rol,
        })
        .then(() => {
          this.getUsuariosApi();

          return (this.result = "Editado con Exito");
        })
        .catch(function (error) {
          console.log(error);
          if (error) {
            return (this.result = "REVISE QUE NO HAYA CAMPOS VACIOS");
          }
        });
    },

    eliminar(id, NameUser) {
      alert("ha eliminado al Usuario: " + NameUser);

      axios.delete("http://127.0.0.1:8000/api/users/" + id).then(() => {
        this.getUsuariosApi();
      });
    },

    limpiar() {
      (this.result = "Recuerde llenar todos los campos"), (this.id = "");
      this.nombre = "";
      this.apellido = "";
      this.telefono = "";
      this.contraseña = "";
      this.usuario = "";
      this.rol = "";
    },
  },
  //METODO INICIADO
  mounted() {
    this.getUsuariosApi();

  },
};
</script>

<style lang="css"></style>
