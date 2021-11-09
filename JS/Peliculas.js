const Catalogo = (() => {

    function crearcard(peliculas){

        // INDICANDO CONTENEDOR POR MEDIO DE ID
        conteform = document.getElementById("card")
      
        // CICLO PARA RECORRER TODO EL CATALO, Y SE OPTIENE EL INDEX 
        // PARA QUE AYUDE A ASIGNAR ID DIFERENTES
        peliculas.forEach((pelicula, index) => {

            //INICIO DE CREACION DE FORMULARIO

            // SE CREA ELEMENTO
            form = document.createElement("form")
            // SE ASIGNA ATRIBUTOS
            form.setAttribute('id','form'+index);
            // SE ASIGNA ATRIBUTOS
            form.setAttribute('action','');
            // SE ASIGNA ATRIBUTOS
            form.setAttribute('method','get');
            // SE ALMACENA TODA LA INFORMACION EN EL CONTENEDOR
            conteform.appendChild(form)
            //FIN DE CREACION DE FORMULARIO


            //INCIO DE CREACION DE BOTTON

            // INDICANDO CONTENEDOR POR MEDIO DE ID
            conteboton = document.getElementById('form'+index)
            // SE CREA ELEMENTO
            boton = document.createElement("button")
            // SE ASIGNA ATRIBUTOS
            boton.setAttribute('id','boton'+index);
            // SE ASIGNA ATRIBUTOS
            boton.setAttribute('type','sumit');
            // SE ASIGNA ATRIBUTOS
            boton.setAttribute('class','btn btn-xs');
            // SE ALMACENA TODA LA INFORMACION EN EL CONTENEDOR
            conteboton.appendChild(boton)

            //FIN DE CREACION DE BOTTON

            //INICIO DE CREACION DE IMG

            // INDICANDO CONTENEDOR POR MEDIO DE ID
            conteimg = document.getElementById('boton'+index)
            // SE CREA ELEMENTO
            img = document.createElement("img")
            // SE ASIGNA ATRIBUTOS
            img.setAttribute('class','ratio ratio-21x9');
            // SE ASIGNA ATRIBUTOS
            img.setAttribute('src',pelicula.imgURL);
            // SE ASIGNA ATRIBUTOS
            img.setAttribute('alt','Portada');
            // SE ALMACENA TODA LA INFORMACION EN EL CONTENEDOR
            conteimg.appendChild(img)
            //FIN DE CREACION DE IMG

            //INICIO DE CREACION DE DIV PARA INFORMACION

            // INDICANDO CONTENEDOR POR MEDIO DE ID
            contediv = document.getElementById('boton'+index)
            // SE CREA ELEMENTO
            div = document.createElement("div")
            // SE ASIGNA ATRIBUTOS
            div.setAttribute('id','div'+index);
            // SE ASIGNA ATRIBUTOS
            div.setAttribute('class','card-body');
            // SE ALMACENA TODA LA INFORMACION EN EL CONTENEDOR
            contediv.appendChild(div)
            //FIN DE CREACION DE DIV PARA INFORMACION


            //INICIO DE CREACION DE INFORMACION

            // INDICANDO CONTENEDOR POR MEDIO DE ID
            conteinfo = document.getElementById('boton'+index)
            // SE CREA ELEMENTO
            info = document.createElement("h5")
            // SE ASIGNA ATRIBUTOS
            info.setAttribute('class','card-title');
            // SE INGREGA LA SIGUIENTE INFORMACION PARA QUE SEA MOSTRADA
            info.innerHTML = pelicula.nombre
            // SE ALMACENA TODA LA INFORMACION EN EL CONTENEDOR
            conteinfo.appendChild(info)

        
        });

    }

    //HACIENDO LA FUNCION PUBLICA
    return {crearcard}

})();

//ARREGLO QUE TIENE LAS PELICULAS
let peliculas = [
    {id: 1, nombre: "Venom", img: "https://img.repelis.id/cover/venom-let-there-be-carnage-2-1633400762.jpg", 
    descipcion:"Secuela de la película “Venom”, el villano principal de la película será Carnage"},

    {id: 2, nombre: "Viuda Negra", img: "https://img.repelis.id/cover/black-widow-2-1625845322.jpg", 
    descipcion:"se enfrenta a las partes más oscuras de su historia cuando surge una peligrosa conspiración con vínculos con su pasado."},
    
    {id: 3, nombre: "Dune", img: "https://img.repelis.id/cover/dune-2-1632022099.jpg", 
    descipcion:"El hijo de una familia noble trata de vengarse de la muerte de su padre al mismo tiempo que salva un planeta rico en especias que se le encomienda proteger."},
];

//VERIFICA SI EXITE EL ELEMENTO CARD PARA SABER SI ESTA EN EL CATALOGO CATALOGO
if (document.getElementById('card')) {

    axios
    //FUNCION QUE SE LE INDICA DE DONDE SE OBTIENE LOS DATOS
    .get("../JS/peli.json")
    //FUNCION QUE MUESTRA EL RESULTADO
    .then(res => {

        console.log(res.data.peliculas)
        //LLAMADO A LA FUNCION DE CREAR LAS PELICULAS DE LA CLASE CATALOGO
        Catalogo.crearcard(res.data.peliculas)

    })
    //SI DA ALGUN ERROR LO INDICARA
    .catch(err => {
        console.log("Estamos en el catch",err)
    })
    //AL TERMINAR LA ACCION INDICARA
    .finally(() => {
        console.log("Finalizado")
    })

}


//FUNCION PARA COLOCAR EL HEADER (HTML DENTRO DE OTRO HTML CON JS)
$(function(){
    $("#header").load("header.php");
});