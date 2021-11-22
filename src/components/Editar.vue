<template>
  <!-- el v-if compara si esta activado para mostrarse o no -->
  <div class="Editar" v-if="editar.display">
    <div class="row">
        
        <a
            type="button"
            class="btnAdm"
            data-bs-dismiss="modal"
            v-on:click="rellenar()"
        >
            <i class="bx bxs-layer-plus">Rellenar los Campos</i>
        </a>

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
    </div>

    <div class="row">
    <h1>Para Confirmar el cambio tiene que ingresar</h1>
    <div class="col-xs-12 col-sm-12 col-md-12">
        <div class="form-floating">
        <input
            v-model="vacontraseña"
            type="password"
            name="vacontraseña"
            class="form-control"
            id="floatingInput"
            placeholder="Contraseña de Usuario Actual"
            autocomplete="off"
        />
        <label for="floatingInput">Contraseña de Usuario Actual</label>
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
            class="btnAdm"

            v-on:click="setThisNull()"
        >
            <i class="bx bxs-exit"></i>
        </a>

        <a
            type="button"
            class="btnAdm"

            v-on:click="putUsuarioApi()"
        >
            <i class="bx bx-edit-alt"></i>
        </a>
        
        </div>
    </div>
    </div>

</template>
<script>
import axios from "axios";


//Padron modulo
const Usuario = (()=>{

  function telephoneCheck(telef) {
    var struc = new RegExp(/^\+?1?\s*?\(?\d{3}(?:\)|[-|\s])?\s*?\d{4}[-|\s]?\d{4}$/);
    
    return struc.test(telef);
  }

  //funcion
  const usuario = function(result, usu, pass, vapass){

      // verifica que los campos nos esten vacios
      if (usu[0].nombre == "" || usu[0].apellido == "" || usu[0].telefono == "" ||
      usu[0].usuario == "" || usu[0].rol == "" || usu[0].vacontra == "") {
        
        // asigna respuesta
        result = "Verifique que los campos no esten vacios";
      }

      else if (!telephoneCheck(usu[0].telefono)){
        // asigna respuesta
        result = "Verifique que el telefono sea valido";
      }

      // verifica que los campos nos esten vacios
      else if (pass == "" || vapass == "") {
        // asigna respuesta
        result = "Verifique que los campos no esten vacios";
      }

      // verifica que los campos nos esten vacios
      else if (pass != vapass ) {
        // asigna respuesta
        result = "Contraseña de usuario incorrecto";
      }

      // de lo contrario
      else{
        // asigna respuesta
        result = "Correcto"
      }
    // retorna el result
    return result;
    
  }

  // hace publica a la funcion
  return{usuario}

})();

export default {
  props: ["editar"],
  data() {
    return {

    // arreglo para la lista de usuario
      listaUsuarios: [],

      // arreglo para la validacion
      Vusu: [],

      // variable de informacion
      result: "Recuerde llenar todos los campos",
        user: this.$cookies.get("id"),
      //al macena la contraseña de la cookie
      pass:  this.$cookies.get("pass"),

      // variables para almacenamiento de datos
      id: "",
      nombre: "",
      apellido: "",
      telefono: "",
      contraseña: "",
      usuario: "",
      rol: "",
      vacontraseña: "",
    };
  },
  methods: {
    setThisNull() {
      this.editar.display = false;
    },

    validar(){
      // se almacena la informacion al arreglo
      this.Vusu = [{
                nombre:  this.nombre,
                apellido:  this.apellido,
                telefono:  this.telefono,
                usuario:  this.usuario,
                rol:  this.rol,
                vacontra: this.vacontraseña
              }]
      //se alamacena lo que retorne de la funcion
      //a la funcion se le envia la variable de informacion y el arreglo Vusu
      this.result = Usuario.usuario(this.result, this.Vusu, this.pass, this.vacontraseña);
    },

    rellenar(){
        if (this.editar.data != null) {
                 
            this.id = this.editar.data.id;
            this.nombre = this.editar.data.firstNameUser;
            this.apellido = this.editar.data.lastNameUser;
            this.telefono = this.editar.data.phoneUser;
            this.usuario = this.editar.data.loginNameUser;
            this.rol = this.editar.data.idRolUser;
            this.vacontraseña = "";
            //al macena la contraseña de la cookie
            this.pass = this.$cookies.get("pass")
        }
    },

    putUsuarioApi() {
    this.validar();

      // se verifica el resutado obtenido
      if (this.result == "Correcto") {
      
      axios
        .put("http://127.0.0.1:8000/api/users/" + this.id, {
          firstNameUser: this.nombre,
          lastNameUser: this.apellido,
          phoneUser: this.telefono,
          loginNameUser: this.usuario,
          loginPasswordUser: this.vacontraseña,
          idRolUser: this.rol,
        })
        .then(() => {
          this.$cookies.set("username", this.usuario);
          return (this.result = "Editado con Exito");
        })
        .catch(function (error) {
          console.log(error);
          return (this.result = "REVISE QUE NO HAYA CAMPOS VACIOS");
        });
      }
    },
  },
  mounted() {this.rellenar()},
};
</script>

<style scoped>
.change_color {
  background-color: red;
}
</style>
<style lang="css">
.Editar {
  position: fixed;
  top: 11vh;
  bottom: 50%;
  left: 0rem;
  width: 100vw;
  height: 100vh;
  z-index: 70;
  background: white;
  color: black;
  overflow: auto;
}

.btnAdm .bx {
  background: var(--bg-color);
  padding: 10px;
  font-size: 1.2rem;
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
