<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Pagina de pruebas</title>

    <link href="https://fonts.googleapis.com/css?family=Poppins:400,700" rel="stylesheet"> 

    <style>
        body {
            margin: 0;
            padding: 0;
        }

        .app{
            font-family: 'Poppins', sans-serif;
            height: 100vh;
            display: grid;
            justify-items: center;
            align-items: center;
            background-color: cornflowerblue;
        }

        h1{
            margin: 0;
            padding: 10px 20px;
            background-color: #1e1e1e;
            border-radius: 10px;
            color: #e1e1e1;
        }

        #btn{
            background-color: #e1e1e1;
            color: #1e1e1e;
            width: 150px;
            text-align: center;
            user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            cursor: pointer;
            padding: 20px 30px;
            transition: all .3s ease;
            margin: 10px auto;
            border-radius: 10px;
        }

        #btn:hover {
            background-color: #1e1e1e;
            color: #e1e1e1;
        }
    </style>
</head>
<body>
    <div class="app">
        <div class="cont">
            <h1>Esto es sólo para pruebas</h1>
            <div id="btn">¡Mostrar puntos!</div>
        </div>
    </div>

    <script>

    let btn = document.getElementById('btn');

    const getApiPoints = () => new Promise((resolve, reject) => {
        console.log('Obteniendo puntos...');
        // Hacemos el llamado a AJAX
        let xhr = new XMLHttpRequest();
        // Enviamos la petición a la ruta
        xhr.open('GET', '/api/trying', true);

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    console.log('Obtenidos!');
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject({error: 'Oops! something gone wrong'})
                }
            }
        }
        xhr.send();
    });    

    const drawInMap = resp => {
        console.log(resp);
    };

    btn.addEventListener('click', function(e) {
        getApiPoints()
            .then(resp => drawInMap(resp))
            .catch(err => console.log(err));
    });
    </script>
</body>
</html>