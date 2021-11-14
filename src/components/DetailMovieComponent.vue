<template>
  <div class="detail" v-if="movie.display">

<!--Ventana Modal-->
    <input type="checkbox" id="btn-modal">
    <div class="container-modal">
        <div class="content-modal">
     <iframe :src='movie.data.urlTrailerMovie' style='width:480px; height:270px'>
    </iframe>
            <div class="btn-cerrar">
                <label for="btn-modal">Cerrar</label>
            </div>
        </div>
        <label for="btn-modal" class="cerrar-modal"></label>
    </div>
    <!--fin Ventana Modal-->
    <div class="video">

      <img
            class="card-img-top" id="imagen"
            :src="movie.data.urlImageMovie"
            alt="Card image cap"
          />
    </div>
         <a href="#" class="comp-1" id="comp-2">
      <i class='bx bx-money' style='color:#1b6d3f'  ></i>     
       </a>
     <a href="#" class="comp-2" id="comp-2">
      <i class='bx bx-money' style='color:#1b6d3f'  ></i>     
       </a>
      <a href="#" class="comp-3">
            <label for="btn-modal">
           <i class='bx bx-play' style='color:#2E79E6'  ></i> 
        </label>
      </a>
    

          
   <p class="display-4">{{ movie.data.titleMovie }}</p>
 
    <p>{{ movie.data.descriptionMovie }}</p>
    <button class="p-2 bg-danger" v-on:click="setThisNull()">X</button>
      <div id="bott"></div>
  </div>
</template>
<script>
export default {
  props: ["movie"],
  methods: {
    setThisNull() {
      this.movie.display = false;
    },
  },
};
</script>
<style lang="css">
.detail {
  position: fixed ;
  top: 11vh;
  left: 0rem;
  width: 100vw;
  height: 120vh;
  z-index: 90;
  background: white;
  color: black;
  overflow:auto;
}

#imagen{
  width: 20rem; 
  color: black;
  margin-top: 3%;
}
#bott{
  bottom: 50%;
  margin-bottom: 300px;
}

 .comp-1 {
 position: absolute;
 right: 42rem;
 right: 30%;
 font-size: 45px;
 top: 40%;
  }
  .comp-2{
 position: absolute;
 right: 50rem;
 right: 30%;
 top: 30%;
 font-size: 45px;
  }
   .comp-3{
 position: absolute;
 right: 42rem;
 right: 30%;
 top: 20%;
 font-size: 45px;
  }
  .comp-1 .bx{
    background: var(--bg-color);
    padding: 10px;
    font-size: 2rem;
    border-radius: 50%;
    border: 4px solid rgba(2, 3, 7, 0.4);
    color: var(--main-color);
  }
  .comp-2 .bx{
    background: var(--bg-color);
    padding: 10px;
    font-size: 2rem;
    border-radius: 50%;
    border: 4px solid rgba(2, 3, 7, 0.4);
    color: var(--main-color);
  }
   .comp-3 .bx{
    background: var(--bg-color);
    padding: 10px;
    font-size: 2rem;
    border-radius: 50%;
    border: 4px solid rgba(2, 3, 7, 0.4);
    color: var(--main-color);
  }
  .comp-1 .bx:hover{
    background: var(--main-color);
    color: var(--bg-color);
    transition: 0.2s all linear;
  }
  .comp-2 .bx:hover{
    background: var(--main-color);
    color: var(--bg-color);
    transition: 0.2s all linear;
  }
   .comp-3 .bx:hover{
    background: var(--main-color);
    color: var(--bg-color);
    transition: 0.2s all linear;
  }
  .boton-modal{
    padding: 40px;
    background-color: #fff;
}
.boton-modal label{
    padding: 10px 15px;
    background-color: #5488a3;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    transition: all 300ms ease;
}
.boton-modal label:hover{
    background-color: #185E83;
}
/*:::Fin Boton-Modal:::*/

/*:::Ventana Modal:::*/
#btn-modal{
    display: none;
}
.container-modal{
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0; left: 0;
    background-color: rgba(144, 148, 150, 0.8);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 100;
}
#btn-modal:checked ~ .container-modal{
    display: flex;
}
.content-modal{
    width: 100%;
    max-width: 520px;
    padding: 20px;
    background-color: #fff;
    border-radius: 4px;
}
.content-modal h2{
    margin-bottom: 15px;
}
.content-modal p{
    padding: 15px 0px;
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
}
.content-modal .btn-cerrar{
    width: 100%;
    margin-top: 15px;
    display: flex;
    justify-content: flex-end;
}
.content-modal .btn-cerrar label{
    padding: 7px 10px;
    background-color: #5488a3;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    transition: all 300ms ease;
}
.content-modal .btn-cerrar label:hover{
    background-color:#185E83;
}
.cerrar-modal{
    width:100%;
    height: 100vh;
    position: absolute;
    top:0; left: 0;
    z-index: -1;
}
@media screen and (max-width:800px) {
    .content-modal{
        width: 90%;
    }
}
/*:::Fin Ventana Modal:::*/



</style>
