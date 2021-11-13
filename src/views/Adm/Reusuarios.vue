<template>

  <div>

    <div id="usuario" class="ma">
      <router-link to="/usuario" class="btn btn-info btn-block">
        <span class="las la-clipboard-list"></span>
        <span>Nuevo Usuario</span>
      </router-link>

      <table class="table table-dark">
        <thead>
          <tr class="table-secondary">
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
            <th>{{ index+1 }}</th>
            <th>{{ item.firstNameUser }} {{ item.lastNameUser }}</th>
            <th>{{item.phoneUser}}</th>
            <th>{{ item.loginNameUser }}</th>
            <th>{{ item.idRolUser }}</th>
            <th>
              <button class="btn btn-danger">Eliminar</button>
            </th>
            <th>
              <button class="btn btn-success">Editar</button>
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

export default {
  //DATOS A UTILIZAR
  data() {
    return {
      listaUsuarios: [],
    };
  },
  //METODOS A UTILIZAR
  methods: {
    getUsuariosApi() {
      axios.get("http://127.0.0.1:8000/api/users").then((respuesta) => {
        console.log(respuesta.data);
        this.listaUsuarios = respuesta.data;
      })
      .catch(function (error) {
      // handle error
      console.log(error);
      })
      .then(function () {
      // always executed
      });
    }
  },
  //METODO INICIADO
  mounted() {
    this.getUsuariosApi();
  },



  };
</script>

<style lang="css"></style>
