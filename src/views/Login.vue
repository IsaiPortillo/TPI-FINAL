<template>
<div id="bd">
 <div class="container-1">
        <div class="bg">
            <div class="box 1">
            <h2>Tienes una cuenta?</h2>
            <button class="btn 1" id="btn-1" v-on:click="iniciarsesion()">Iniciar Sesion</button>
            </div>
            <div class="box 2">
            <h2>No tienes una cuenta?</h2>
            <button class="btn 2" id="btn-2" v-on:click="registrar()">Registrarse</button>
            </div>
        </div>
        <div class="formbx" :class="{'activo' : active}">
            <div class="form log">
                <form>
                <h3>Sing In</h3>
                <input type="text" placeholder="Nombre de Usuario">
                <input type="password" placeholder="Password">
                <input type="submit" value="Login">
                <a href="#" class="olvido"> Olvidaste tu contraseña?</a>
                </form>
            </div>
            <div class="form" id="reg">
                 <form>
                <h3>Sing Up</h3>
                <input type="text" placeholder="Nombre de Usuario">
                <input type="email" placeholder="Email">
                <input type="password" placeholder="contraseña">
                <input type="password" placeholder="Confirme contraseña">
                <input type="submit" value="Registro">
                </form>
        </div>
    </div>
</div>
 </div>
</template>
<script>
export default {
    data() {
        return {
            active: false
        }
    },
    methods: {
        iniciarsesion(){
            this.active = false;
        },
        registrar(){
            this.active = true;
        }
    },

}
</script>
<style lang="css">
    
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Mono:wght@300&display=swap');
*

{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:'Red Hat Mono', Tahoma, Geneva, Verdana, sans-serif;

}

#bd{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    transition: 0.4s;
}


.container-1{
    position: relative;
    width: 800px;
    height: 500px;
    margin: 20px;
}
#btn-1{
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
#btn-2{
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

.bg{
    position: absolute;
    top: 40px;
    width: 100%;
    height: 420px;
    display: flex;
    justify-content: center;
    align-items: center;
    background:rgba(255, 255, 255, 0.2);
    box-shadow: 0 5px 45px rgba(0, 0, 0, 0.15);
}
.bg .box{
    position: relative;
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column  ;
}
.bg .box h2{
    color: #fff;
    font-size: 1.2em;
    font-weight: 500;
    margin-bottom: 10px;
}
.bg .box button{
    cursor: pointer;
    padding: 10px 20px;
    background: #fff;
    color: #333;
    font-size: 16px;
    font-weight: 500;
    border: none;
}

.formbx{
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

.formbx.activo{
    left: 51.5%;
}
.formbx.activo .log{
    transition-delay: 0.25s;
}
.formbx.activo .log{
    left: -100%;
    transition-delay: 0s;
}
.formbx #reg{
    left: 100%;
    transition-delay: 0.25s;
}
.formbx.activo #reg{
    left: 0;
    transition-delay: 0s;
}

.formbx .form{
    position: absolute;
    left: 0;
    width: 100%;
    padding: 50px;
    transition: 0.5s;
}
.formbx .form form{
    width: 100%;
    display: flex;
    flex-direction: column;
}
.formbx .form form h3{
    font-size: 1.5em;
    color: #333;
    margin-bottom: 20px;
    font-weight: 500;
}
.formbx .form form input{
    width: 100%;
    margin-bottom: 20px;
    padding: 10px;
    outline: none;
    font-size: 16px;
    border: 1px solid #333;
}
.formbx .form form input[type="submit"]{
    background:#03a9f4;
    border: none;
    color: #fff;
    max-width: 100px;
    cursor: pointer;
}
.formbx.activo #reg input[type="submit"]{
    background: #f43648;
}
.formbx .form form .olvido{
    color: #333;
}

@media(max-width: 991px) {
    .container{
        max-width: 400px;
        height: 650px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container .bg{
        top: 0;
        height: 100%;
        height: 500px;
    }
    .formbx{
        width: 100%;
        height: 500px;
        top: 0;
        box-shadow: navajowhite;
    }
}
</style>