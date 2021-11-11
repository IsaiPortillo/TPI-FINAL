<template>
  <div id="app">
    <header>
      <a href="#" class="logo">
        <i class="bx bxs-camera-movie" id="bx"></i>VEX.TV</a
      >
      <div class="bx bx-menu" id="menu-icon"></div>
      <ul class="navbar" >
        <li v-for="(item, index) in routes" :key="index">
          <router-link :to="item.link" id="label"  v-if="!item.secret">{{item.value}}</router-link>
        </li>
      </ul>
      <a href="#" class="btni">Sign In</a>
    </header>

    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      outsideHome:false,
      user:{
        id:1,
        idRolUser:2
      },
      routes: [
        {
          link: "/about",
          value: "Sobre nosotros",
          secret: false,
        },
        {
          link: "/login",
          value: "Iniciar Sesion",
          secret: false
        },
        {
          link: "/edit-movie",
          value: "Editar Pelicula",
          secret:true
        },
      ],
    };
  }, methods: {
    verifyRolUser(){
      if(this.user.idRolUser == 1){
        this.routes.forEach(element => {
          element.secret=false
        });
      }
    },
  }, mounted() {
    this.verifyRolUser()
  }, 
};
</script>
<style lang="css">
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300&display=swap");
/*Configuracion global de la pantalla principal*/
* {
  font-family: "Red Hat Mono", monospace;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  scroll-margin-top: 2rem;
  scroll-behavior: smooth;
}
/* variables*/
:root {
  --main-color: #ff2c1f;
  --text-color: #020307;
  --bg-color: #fff;
}
body {
  background: var(--text-color);
  color: var(--bg-color);
}

header {
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 100px;
  transition: 0.5s;
   background: transparent;
}

#app {
  text-align: center;
  margin-top: 0;
}

.logo {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--bg-color);
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  text-decoration: none;
}
.logo #bx {
  font-size: 24px;
  color: var(--main-color);
  text-decoration: none;  
}
.navbar {
  display: flex;
  column-gap: 5rem;
}
.navbar li {
  position: relative;
}
.navbar a {
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  color: var(--bg-color);
}
.navbar a::after {
  content: "";
  width: 0;
  height: 2px;
  background: var(--main-color);
  position: absolute;
  bottom: -4px;
  left: 0;
  transition: 0.3s all linear;
}
.navbar a:hover::after,
.navbar .h-active::after {
  width: 100%;
}
#menu-icon {
  font-size: 24px;
  cursor: pointer;
  z-index: 1000001;
  display: none;
}
.btni {
  padding: 0.7rem 1.4rem;
  background: #0a5708;
  color: var(--bg-color);
  font-weight: 400;
  border-radius: 0.5rem;
  text-decoration: none;
}
.btni:hover {
  background: #fa1216;
  color: #020307;
}
</style>
