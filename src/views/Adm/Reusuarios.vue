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
                        placeholder="Telefono de usuario"
                      />
                      <label for="floatingInput">Telefono de Usuario</label>
                    </div>
                  </div>
                  <div class="col-xs-6 col-sm-6 col-md-6">
                    <div class="form-floating">
                      <input
                        v-model="contraseña"
                        type="text"
                        name="contraseña"
                        class="form-control"
                        id="floatingInput"
                        placeholder="Contraseña de Usuario"
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
                  <label>{{ resultado }}</label>
                </div>

                <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-12">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                      v-on:click="limpiar()"
                    >
                      Cerrar X
                    </button>
                    <button
                      v-if="this.id == ''"
                      v-on:click="setUsuarioApi()"
                      type="submit"
                      s
                      class="btn btn-success btn-block"
                    >
                      Guardar
                    </button>
                    <button
                      v-if="this.id != ''"
                      v-on:click="putUsuarioApi()"
                      type="submit"
                      s
                      class="btn btn-success btn-block"
                    >
                      Editar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        class="btnAdm btn-primary"
        style="width: 150px;"
        data-bs-toggle="modal"
        data-bs-target="#ModalAE"
      >
        Nuevo Usuario
      </button>

      <table id="tabla" class="table table-dark">
        <thead>
          <tr>
            <th>N</th>
            <th>Nombre</th>
            <th>Telefono</th>
            <th>Nombre de Usuario</th>
            <th>Rol</th>
            <th>Opciones</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in listaUsuarios" :key="index">
            <th>{{ index + 1 }}</th>
            <th>{{ item.firstNameUser }} {{ item.lastNameUser }}</th>
            <th>{{ item.phoneUser }}</th>
            <th>{{ item.loginNameUser }}</th>
            <th>{{ item.titleRol }}</th>
            <th>
              <button class="btnAdm btn-danger" v-on:click="eliminar(item.id, item.loginNameUser)">
                Eliminar
              </button>
            </th>
            <th>
              <button
                v-on:click="editar(item.id)"
                type="button"
                class="btnAdm btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#ModalAE"
              >
                Editar
              </button>
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

export default {
  //DATOS A UTILIZAR
  data() {
    return {
      listaUsuarios: [],

      resultado: "Recuerde llenar todos los campos",
      id: "",
      nombre: "",
      apellido: "",
      telefono: "",
      contraseña: "",
      usuario: "",
      rol: ""
    };
  },
  //METODOS A UTILIZAR
  methods: {

    tabla(){

      datatable

        this.$nextTick(() => {
          $('#tabla').DataTable({
            "responsive": true,
            "paging": true,
            "language": {
                "lengthMenu": "Mostrar _MENU_ Registros por pagina",
                "zeroRecords": "No se encontro ningun resitro que coincida",
                "info": "Se econtro _TOTAL_ de _MAX_ registros",
                "infoEmpty": "No se encontro ningun registro",
                "search": "Buscar",
                "searchPlaceholder": "Dato a buscar",
                "infoFiltered": "(de un total de _MAX_ registro)",
                "paginate": {
                    "previus": "Anterior",
                    "next": "Siguiente"
                }
            }
        });
      });

    },

    getUsuariosApi() {
      axios
        .get("http://127.0.0.1:8000/api/users")
        .then((respuesta) => {
          console.log(respuesta.data);
          this.listaUsuarios = respuesta.data;
          this.tabla();

        })
        .catch(function (error) {
          console.log(error);
        });
    },

    setUsuarioApi(){
      axios
      .post("http://127.0.0.1:8000/api/users", {
          firstNameUser: this.nombre,
          lastNameUser: this.apellido,
          phoneUser: this.telefono,
          loginNameUser: this.usuario,
          loginPasswordUser: this.contraseña,
          idRolUser: this.rol,
        })
        .then((respuesta) => {
          console.log(respuesta);
          this.limpiar();
          this.getUsuariosApi();
          return this.resultado = "Guardo con Exito"
              

        });
    },

    
    editar(id) {
      this.getUsuariosApi();

      console.log(id);

      console.log(this.listaUsuarios);

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
      console.log("id" + this.id);

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

            return (this.resultado = "Editado con Exito");

        })
        .catch(function (error) {
          console.log(error);
          if(error){
            return (this.resultado = "REVISE QUE NO HAYA CAMPOS VACIOS");
          }
        });
    },

    eliminar(id, NameUser) {

      alert("ha eliminado al Usuario: "+NameUser )

      axios.delete("http://127.0.0.1:8000/api/users/" + id).then((response) => {
        console.log(response);
        this.getUsuariosApi();
      });
    },

    limpiar() {
      this.resultado = "Recuerde llenar todos los campos",
      this.id = "";
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

    console.info(new Date());
    var hoy= new Date();

    console.log(hoy)

  },
};
</script>

<style lang="css"></style>
