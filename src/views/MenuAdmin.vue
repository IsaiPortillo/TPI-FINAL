<template>
  <div>
    <input type="checkbox" id="nav-toggle">
    <div class="container-fluid sidebar">
      <div class="sidebar-brand">
        <h2><span></span> <span>Admin</span></h2>
      </div>
      <div class="sidebar-menu">
        <ul class="navbar-nav">
          <li>
            <router-link to="/">
              <span class="las la-film"></span>
              <span>Catalogo</span>
            </router-link>
          </li>
          <li>
            <router-link to="/peliculas">
              <span class="las la-clipboard-list"></span>
              <span>Peliculas</span>
            </router-link>
          </li>
          <li>
            <router-link to="/usuarios">
                <span class="las la-users"></span>
                <span>Usuarios</span>
            </router-link>
          </li>
          <li>
            <router-link to="/compras">
                <span class="las la-clipboard-list"></span>
                <span>Compras</span>
            </router-link>
          </li>
          <li>
            <router-link to="/rentas">
              <span class="las la-clipboard-list"></span>
              <span>Rentas</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="ma-content">
      <div class="heada">
          <h3>
              <label for="nav-toggle">
                  <span class="las la-bars"></span>
                  <span> REGISTROS </span>
              </label>
              
          </h3>
      </div>
<<<<<<< HEAD

      <div class="ma">
        <h1> Hola Admin </h1>
        <h1> Seleccione una de sus opciones </h1>
      </div>
=======
>>>>>>> 4afd060 (GRUD usuario y pelicula)
      <router-view />
    </div>

  </div>
</template>

<style lang="css">

<<<<<<< HEAD
=======
.reimg{
  width: 100px; 
  height: 100px;
}
>>>>>>> 4afd060 (GRUD usuario y pelicula)

label{
  color: rgb(151, 32, 151);
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
}

.sidebar {
  width: 200px;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  background: rgb(219, 84, 129);
  z-index: 100;
  transition: width 300ms;
}

.sidebar-brand {
  height: 90px;
  padding: 1rem 0rem 1rem 2rem;
  color: #fff;
}

.sidebar-brand span {
  display: inline-block;
  padding-right: 1rem;
}

.sidebar-menu {
  margin-top: 1rem;
}

.sidebar-menu li {
  width: 100%;
  margin-bottom: 1.3rem;
  padding-left: 2rem;
}

.sidebar-menu a {
  display: block;
  color: #fff;
  font-size: 1.2rem;
}

.sidebar-menu a span:first-child {
  font-size: 1.5rem;
  padding-right: 1rem;
}

.heada {
  background: rgb(219, 84, 129);
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 2px 2px 3px 2px rgb(0, 0, 0, 0.2);
  position: fixed;

  left: 200px;
  width: 100%;
  top: 0;
  z-index: 100;
  transition: left 300ms;
}

.ma {
  margin-top: 85px;
  padding: 2rem 1.5rem;
  min-height: calc(100% - 90px);
}

.ma-content {
  transition: margin-left 300ms;
  margin-left: 200px;

}

#nav.toggle {
  display: none;
}

#nav-toggle:checked + .sidebar {
  width: 50px;
}

#nav-toggle:checked ~ .ma-content {
  margin-left: 50px;
}

#nav-toggle:checked ~ .ma-content .heada {
  left: 50px;
}

#nav-toggle:checked + .sidebar .sidebar-brand,
#nav-toggle:checked + .sidebar li {
  padding-left: 0rem;
  padding-right: 4rem;
}

#nav-toggle:checked + .sidebar li a {
  padding-left: 0rem;
}

#nav-toggle:checked + .sidebar .sidebar-brand h2 span:last-child,
#nav-toggle:checked + .sidebar li a span:last-child {
  display: none;
}

#nav-toggle {
  display: none;
}
</style>
