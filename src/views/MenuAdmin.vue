<template>
  <div class="Admin">
    <input type="checkbox" id="nav-toggle" />
    <div class="container-fluid sidebar">
      <div class="sidebar-menu">
        <div class="sidebar-brand">
          <h2><span></span> <span>Admin</span></h2>
        </div>
        <ul class="navbar-nav">
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
          <span class="las"></span>
        </h3>
      </div>
      <router-view />
    </div>
  </div>
</template>

<style lang="css">
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

.paginate_button {
  cursor: pointer;
  color: white;
  border: 1px solid transparent;
}

.paginate_button a {
  border-color: transparent !important;
  background: #48307a !important;
  color: white;
}

.pagination li:hover,
.paginate_button a:hover {
  border-color: transparent;
  background: rgb(109, 31, 109) !important;
  color: white !important;

  border-radius: 2px;
}

#tabla_wrapper {
  display: inline;
  text-align: left;
}
.las {
  text-decoration: none;
}

#tabla_wrapper select,
#tabla_wrapper input {
  background: white;
  color: black;
}

#tabla_wrapper label,
.dataTables_info {
  color: white !important;
}

.reimg {
  width: 100px;
  height: 100px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
}

label {
  color: black;
}

.sidebar {
  width: 15.3%;
  position: fixed;
  top: 0;
  float: left;
  text-align: left;
  height: 100%;
  background: var(--text-color);
  transition: 0.5s;
}

.sidebar-brand {
  height: 20%;
  padding: 1rem 0rem 1rem 2rem;
  color: #fff;
}

.sidebar-brand span {
  display: inline-block;
  padding-right: 1rem;
}
.sidebar-menu {
  margin-top: 4rem;
}

.sidebar-menu li {
  width: 100%;
  position: relative;
  margin-bottom: 2rem;
  left: 10%;
}
.ma-content {
  position: relative;
  padding-left: 5%;
  padding-right: 5%;
  font-size: 15px;
  margin-top: 2%;
}

.sidebar-menu a {
  display: block;
  color: #fff;
  font-size: 1.2rem;
  text-decoration: none;
}

.sidebar-menu a span:first-child {
  font-size: 1.5rem;
  padding-right: 1rem;
}

.heada {
  background: var(--text-color);
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  position: fixed;
  border: none;

  left: 15.3%;
  width: 100%;
  top: 0;
  z-index: 100;
  transition: left 300ms;
}

.ma {
  margin-top: 5%;
  padding: 2rem 1.5rem;
}

.ma-content {
  transition: margin-left 300ms;
  margin-left: 15%;
}
</style>
