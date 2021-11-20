<template>
  <div class="admin">
    <div class="row">
      <div class="col-12 col-lg-4">
        <ul>
          <li v-for="(item, index) in routes" :key="index">
            <router-link :to="item.link" id="label" v-if="!item.secret">{{
              item.value
            }}</router-link>
          </li>
        </ul>
      </div>
      <router-view class="col-12 col-lg-8" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      routes: [
        {
          link: "/admin/register-movie",
          value: "Registrar pelicula",
        },
        {
          link: "/admin/update-movie",
          value: "Actualizar pelicula",
        },
      ],
    };
  },
};
</script>
<style lang="css">
.admin {
  margin-top: 10vh;
  padding: 1rem;
}
</style>
