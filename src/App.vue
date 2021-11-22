<template>
  <div id="app">
    <header :class="{ change_color: scrollPosition > 50 }">
      <a href="#" class="logo">
        <i class="bx bx-camera-movie bx-tada" id="bx"></i>VEX.TV</a
      >
      <div class="bx bx-menu" id="menu-icon"></div>
      <ul class="navbar" v-if="isLoggedUser">
        <li v-for="(item, index) in routes" :key="index">
          <router-link :to="item.link" id="label" v-if="!item.secret">{{
            item.value
          }}</router-link>
        </li>
      </ul>

      <ul class="navbar" v-if="!isLoggedUser">
        <li v-for="(item, index) in routesUnLogged" :key="index">
          <router-link :to="item.link" id="label" v-if="!item.secret">{{
            item.value
          }}</router-link>
        </li>
      </ul>
      <div>
        <a href="#" class="btni" v-if="!isLoggedUser" v-on:click.prevent="log()"
          >Sign In</a
        >
        <a
          href="#"
          class="btni"
          v-if="isLoggedUser"
          v-on:click.prevent="logOut()"
          >Cerrar</a
        >
      </div>
    </header>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      scrollPosition: null,
      isLoggedUser: false,

      routesUnLogged: [
        {
          link: "/",
          value: "Home",
          secret: false,
        },
        {
          link: "/Movie",
          value: "Catalogo",
          secret: false,
        },
      ],
      routes: [
        {
          link: "/",
          value: "Home",
          secret: false,
        },
        {
          link: "/Movie",
          value: "Catalogo",
          secret: false,
        },
        {
          link: "/Opciones",
          value: "Opciones",
          secret: false,
        },
        {
          link: "/admin",
          value: "Admin",
          secret: true,
        },
      ],
    };
  },
  updated() {
    this.verifyLoggedUser();
    this.verifyRolUser();
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    verifyRolUser() {
      /* let idRolUser = this.$cookies.get("idRolUser")*/
      if (this.$cookies.get("idRolUser") == 1) {
        this.routes.forEach((element) => {
          element.secret = false;
        });
      }
    },
    verifyLoggedUser() {
      if (this.$cookies.get("id") != null) {
        this.isLoggedUser = true;
      } else {
        this.isLoggedUser = false;
      }
    },
    logOut() {
      localStorage.removeItem("id")
      this.$cookies.remove("idRolUser");
      this.$cookies.remove("id");
      this.$cookies.remove("nameUser");
       this.routes= [
        {
          link: "/",
          value: "Home",
          secret: false,
        },
        {
          link: "/Movie",
          value: "Catalogo",
          secret: false,
        },
        {
          link: "/Opciones",
          value: "Opciones",
          secret: false,
        },
        {
          link: "/admin",
          value: "Admin",
          secret: true,
        },
      ],
      this.$router.push("/login");
      
    },
    log() {
      this.$router.push("/login");
    },
  },
  mounted() {
    this.verifyLoggedUser();
    this.verifyRolUser();
    window.addEventListener("scroll", this.updateScroll);
  },
};
</script>
<style lang="css">
body::-webkit-scrollbar {
  width: 7px;
  display: run-in;
}
body::-webkit-scrollbar-thumb {
  background: var(--main-color);
  border-radius: 5px;
}
@import url("https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300&display=swap");
/*Configuracion global de la pantalla principal*/
* {
  font-family: "Red Hat Mono", monospace;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}
.change_color {
  background-color: rgba(34, 34, 34, 0.75);
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
  /* background: var(--main-color);*/
}

#app {
  text-align: center;
  margin-top: 0;
}

.logo {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--bg-color);
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  text-decoration: none;
}
.logo:hover {
  color: #fff;
}
.logo #bx {
  font-size: 40px;
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
  font-size: 1.1rem;
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
  padding: 0.6rem 1.7rem;
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
