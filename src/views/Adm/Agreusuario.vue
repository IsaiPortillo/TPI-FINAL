<template>
  <div class="ma">

        <div class="panel-heading">
          <h3 class="panel-title">Nuevo usuario</h3>
        </div>
        <div class="panel-body">
          <div class="table-container">
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
                    class="form-select" aria-label="Default select example"
                    name="select"
                    id="selectEspecie"
                    onchange=""
                  > 
                    <option value="2">Tiene Rol de Usuario</option>
                    <option value="1">Tiene Rol de Administrador</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-xs-12 col-sm-12 col-md-12">
                <button
                  type="submit"
                  onclick="guardarusuario()"
                  class="btn btn-success btn-block"
                >
                  Guardar
                </button>
                <button
                  type="submit"
                  onclick='window.location.href="Reusuarios.php"'
                  class="btn btn-info btn-block"
                >
                  Atras
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

</template>
<script>
export default {};
</script>
<style lang="">
</style>