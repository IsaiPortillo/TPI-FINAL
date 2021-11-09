<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.login.css">
    <title>Peliculas</title>
</head>
<body>


    <div class="container">
        <div class="bg">
            <div class="box 1">
            <h2>Tienes una cuenta?</h2>
            <button class="btn 1" id="btn1">Iniciar Sesion</button>
            </div>
            <div class="box 2">
            <h2>No tienes una cuenta?</h2>
            <button class="btn 2" id="btn2">Registrarse</button>
            </div>
        </div>
        <div class="formbx">
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
    <script>
        const btn1 = document.querySelector('#btn1');
        const btn2 = document.querySelector('#btn2');
        const formbx = document.querySelector('.formbx');
        const body = document.querySelector('body');

        btn2.onclick = function(){
            formbx.classList.add('activo');
            body.classList.add('activo');
        }
        btn1.onclick = function(){
            formbx.classList.remove('activo');
            body.classList.remove('activo');
        }
    </script>
</body>
</html>