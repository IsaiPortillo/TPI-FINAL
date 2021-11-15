<template>
  <div class="Admin" >
    <input type="checkbox" id="nav-toggle">
    <div class="container-fluid sidebar">
      
      <div class="sidebar-menu">
        <div class="sidebar-brand">
          <h2><span></span> <span>Admin</span></h2>
        </div>
        <ul class="navbar-nav">
          <li>
            <router-link to="/Movie">
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
            <span class="las la-bars"></span>
          </h3>
      </div>
      <router-view />
    </div>

  </div>
</template>

<style lang="css">

.btnAdm {
  
  border-radius: 1rem 2rem 1rem 2rem;
  width: 100px; 
  height: 50px;
  background: #48307a;
}

.paginate_button
{
  cursor: pointer;
  color:white;
  border: 1px solid transparent;
}

.paginate_button a{
  
  border-color: transparent !important;
  background: #48307a !important;
  color: white;
}


.pagination li:hover, .paginate_button a:hover{  
  border-color: transparent;
  background: rgb(109, 31, 109) !important;
  color: white !important;
  
  border-radius: 2px;
}

#tabla_wrapper{
  display: inline;
  text-align: left;
}

#tabla_wrapper select, #tabla_wrapper input{
  background: white;
  color: black;
}

#tabla_wrapper label, .dataTables_info {
  color: white !important;
}


.reimg{
  width: 100px; 
  height: 100px;
}

.Admin, .ma {
  background: #203049;;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style-type: none;
  text-decoration: none;
}

label{
  color: black;
}

.sidebar {
  width: 15.3%;
  position: fixed;
  top: 0;
  float: left;
  text-align: left;
  height: 100%;
  background: #48307a;
  transition: width 200ms;
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
  margin-top: 1rem;
}

.sidebar-menu li {
  width: 100%;
  margin-bottom: 2rem;

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
  background: rgb(109, 31, 109);
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 2px 2px 3px 2px rgb(0, 0, 0, 0.2);
  position: fixed;

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
