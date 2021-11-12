<template>
  <div id="bd">
    <div class="container-1">
      <div class="bg">
        <div class="box 1">
          <h2>Tienes una cuenta?</h2>
          <button class="btn 1" id="btn-1" v-on:click="iniciarsesion()">
            Iniciar Sesion
          </button>
        </div>
        <div class="box 2">
          <h2>No tienes una cuenta?</h2>
          <button class="btn 2" id="btn-2" v-on:click="registrar()">
            Registrarse
          </button>
        </div>
      </div>
      <div class="formbx" :class="{ activo: active }">
        <div class="form log">
          <form v-on:submit.prevent="login">
            <h3>Sing In</h3>
            <input
              type="text"
              placeholder="Nombre de Usuario"
              v-model="username"
            />
            <input type="password" placeholder="Password" v-model="password" />
            <input type="submit" value="Login" />
            <div class="alert alert-danger" role="alert" v-if="error">
              {{ error_msg }}
            </div>
            <div class="alert alert-success" role="alert" v-if="succ">
              {{ success_msg }}
            </div>
            <a href="#" class="olvido"> Olvidaste tu contraseña?</a>
          </form>
        </div>
        <div class="form" id="reg">
          <form v-on:submit.prevent="register">
            <h3>Sing Up</h3>
            <input type="text" placeholder="Nombre" v-model="firstNameUser" />
            <input type="text" placeholder="Apellido" v-model="lastNameUser" />
            <input type="text" placeholder="Telefono" v-model="phoneUser" />
            <input
              type="text"
              placeholder="Nombre de Usuario"
              v-model="loginNameUser"
            />
            <input
              type="password"
              placeholder="contraseña"
              v-model="loginPasswordUser"
            />
            <input type="submit" value="Registro" />
            <div class="alert alert-danger" role="alert" v-if="error">
              {{ error_msg }}
            </div>
            <div class="alert alert-success" role="alert" v-if="succ">
              {{ success_msg }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      active: false,
      username: "",
      password: "",
      error: false,
      error_msg: "",
      succ: false,
      success_msg: "",
        id: "",
      firstNameUser: "",
      lastNameUser: "",
      phoneUser: "",
      loginNameUser: "",
      loginPasswordUser: "",
      idRolUser: "2",
    };
  }, 
  methods: {
    iniciarsesion() {
      this.active = false;
    },
     irHome() {
      this.$router.push("/");
    },
    registrar() {
      this.active = true;
    },
    login() {

   
      let json = {
        username: this.username,
        password: this.password,
      };
      axios
        .post("http://127.0.0.1:8000/api/login", json)
        .then((response) => {
          if (response.status == 200) {
            //entra aca si todo esta correcto
            this.error = false;
            this.succ = true;
            this.$cookies.set("idRolUser",response.data.idRolUser)
            this.$cookies.set("id",response.data.id)
            this.$cookies.set("nameUser",response.data.firstNameUser + response.data.lastNameUser)
            this.irHome()
            this.success_msg = "Logueado";
            console.log("Logueado");
          }
        })
        .catch((err) => {
          //aca es todo lo que da si hay un error
          console.log(err);
          if (err.response.status == 401) {
            //aca se verifica si se realizo la peticion y obtuvo respuesta erronea
            this.error = true;
            this.succ = false;
            this.error_msg = "Credenciales erroreas";
          } else if (err.request) {
            //entra si se hizo la request pero no recibio respuesta dedl servidor
            this.error = true;
            this.error_msg = "Problemas para realizar la peticion";
          }
        });
    },
    register(){
        let json = {
        id: this.id,
        firstNameUser: this.firstNameUser,
        lastNameUser: this.lastNameUser,
        phoneUser: this.phoneUser,
        loginNameUser: this.loginNameUser,
        loginPasswordUser: this.loginPasswordUser,
        idRolUser: this.idRolUser,
      };
      axios
        .post("http://127.0.0.1:8000/api/users", json)
        .then((data) => {
          if (data.status == 201) {
            //entra aca si todo esta correcto
            this.error = false;
            this.succ = true;
            this.success_msg = "Registro Exitoso";
            console.log("Registrado");
          }
        })
        .catch((err) => {
          //aca es todo lo que da si hay un error
          console.log(err);
          if (err.response.status == 401) {
            //aca se verifica si se realizo la peticion y obtuvo respuesta erronea
            this.error = true;
            this.succ = false;
            this.error_msg = "Credenciales erroreas";
          } else if (err.request) {
            //entra si se hizo la request pero no recibio respuesta dedl servidor
            this.error = true;
            this.error_msg = "Problemas para realizar la peticion";
          }
        });

    },
  },
};
</script>
<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Red Hat Mono", Tahoma, Geneva, Verdana, sans-serif;
}

#bd {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  transition: 0.4s;
}

.container-1 {
  position: relative;
  width: 800px;
  height: 500px;
  margin: 20px;
}
#btn-1 {
  padding: 0.7rem 1.4rem;
  background: #0a5708;
  color: var(--bg-color);
  font-weight: 400;
  border-radius: 0.5rem;
  width: 50%;
  text-decoration: none;
}
#btn-1:hover {
  background: #073605;
  color: #fff;
}
#btn-2 {
  padding: 0.7rem 1.4rem;
  background: #060563;
  color: var(--bg-color);
  font-weight: 400;
  border-radius: 0.5rem;
  width: 50%;
  text-decoration: none;
}
#btn-2:hover {
  background: #050446;
  color: #fff;
}

.bg {
  position: absolute;
  top: 40px;
  width: 100%;
  height: 420px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.15);
}
.bg .box {
  position: relative;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.bg .box h2 {
  color: #fff;
  font-size: 1.2em;
  font-weight: 500;
  margin-bottom: 10px;
}
.bg .box button {
  cursor: pointer;
  padding: 10px 20px;
  background: #fff;
  color: #333;
  font-size: 16px;
  font-weight: 500;
  border: none;
}

.formbx {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: #fff;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.25);
  transition: 1s ease-in-out;
  overflow: hidden;
}

.formbx.activo {
  left: 51.5%;
}
.formbx.activo .log {
  transition-delay: 0.25s;
}
.formbx.activo .log {
  left: -100%;
  transition-delay: 0s;
}
.formbx #reg {
  left: 100%;
  transition-delay: 0.25s;
}
.formbx.activo #reg {
  left: 0;
  transition-delay: 0s;
}

.formbx .form {
  position: absolute;
  left: 0;
  width: 100%;
  padding: 50px;
  transition: 0.5s;
}
.formbx .form form {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.formbx .form form h3 {
  font-size: 1.5em;
  color: #333;
  margin-bottom: 20px;
  font-weight: 500;
}
.formbx .form form input {
  width: 100%;
  margin-bottom: 20px;
  padding: 10px;
  outline: none;
  font-size: 16px;
  border: 1px solid #333;
}
.formbx .form form input[type="submit"] {
  background: #03a9f4;
  border: none;
  color: #fff;
  max-width: 100px;
  cursor: pointer;
}
.formbx.activo #reg input[type="submit"] {
  background: #f43648;
}
.formbx .form form .olvido {
  color: #333;
}

@media (max-width: 991px) {
  .container {
    max-width: 400px;
    height: 650px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .container .bg {
    top: 0;
    height: 100%;
    height: 500px;
  }
  .formbx {
    width: 100%;
    height: 500px;
    top: 0;
    box-shadow: navajowhite;
  }
}
</style>
