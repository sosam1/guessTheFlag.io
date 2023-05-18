let modoDeJuego = localStorage.getItem("modo de juego")
let respuestasCorrectas = 0
let respuestasIncorrectas = 0
let cuentaBanderas = 1
let paisesJugados = []//para mostrar al final

///se aumentan en la funcion validarRespuesta()

function logicaDelJuego(){

    let paisAlAzarCorrecto = countries[Math.floor(Math.random() * countries.length)]
    let nombreDelPaisCorrecto = paisAlAzarCorrecto.commonName
    let capitalDelPaisCorrecto = paisAlAzarCorrecto.capital
    let opcionesDeRespuesta = [paisAlAzarCorrecto] 

    function generarOpcionesDeRespuesta(){
        countries.splice(countries.indexOf(paisAlAzarCorrecto), 1)
        for(i=1;opcionesDeRespuesta.length<4;i++){
        pais = countries[Math.floor(Math.random() * countries.length)]

        do{
            pais = countries[Math.floor(Math.random() * countries.length)]
        }while(pais.continent != paisAlAzarCorrecto.continent)

        opcionesDeRespuesta.push(pais)
        countries.splice(countries.indexOf(pais), 1)
        }

        opcionesDeRespuesta.forEach(element => countries.push(element)) //devuelvo los paises al array
        countries.splice(countries.indexOf(paisAlAzarCorrecto), 1)
        //Desordeno el array
        opcionesDeRespuesta.sort(function() {return Math.random() - 0.5})
    }

    function cargarBanderaPais(){
        let rutaImagen = paisAlAzarCorrecto.flag
        let flagImg = document.getElementById('flag-img')
        flagImg.src = rutaImagen
    }

    let categoriaDeJuego = localStorage.getItem("categoria") //capital o pais se usa en GenerarBotonesDeRespuesta() y ValidarRespuesta()

    function generarBotonesDeRespuesta(){

        let botonesContainer = document.getElementById("opciones-respuesta-container")

        botonesContainer.innerHTML = ""

        if(categoriaDeJuego == "commonName"){   
            opcionesDeRespuesta.forEach((element, index) =>{
                botonesContainer.innerHTML += ` 
                
                    <button id="opcion${index}" class="btn-opcion">${element.commonName}</button>
                
                `
            })
        }

        if(categoriaDeJuego == "capital"){
            opcionesDeRespuesta.forEach((element, index) =>{
                botonesContainer.innerHTML += ` 
                    
                    <button id="opcion${index}" class="btn-opcion">${element.capital}</button>
                    
                `
            })
        }
        
    }

    let score = document.getElementById("score")
    let contadorDeBanderasContainer = document.getElementById("contador-de-banderas")
    contadorDeBanderasContainer.innerHTML = `${cuentaBanderas} / ${modoDeJuego}`

    function validarRespuesta(botonOpcion){

        botonOpcion.addEventListener("click", function(){

            opcion0.disabled=true
            opcion1.disabled=true
            opcion2.disabled=true
            opcion3.disabled=true

            paisesJugados.push(paisAlAzarCorrecto)

            if(botonOpcion.innerHTML == capitalDelPaisCorrecto && categoriaDeJuego == "capital"){
                botonOpcion.style.background = "#009929"
                respuestasCorrectas++
                score.innerHTML = `Score: ${respuestasCorrectas}`
                tiempoContrareloj += 3
            }else{
                botonOpcion.style.background = "#f52b14"
                //forma tosca de ver cual es el correcto
                if(opcion0.innerHTML == nombreDelPaisCorrecto){
                    opcion0.style.background = "#009929"
                }
                if(opcion1.innerHTML == nombreDelPaisCorrecto){
                    opcion1.style.background = "#009929"
                }
                if(opcion2.innerHTML == nombreDelPaisCorrecto){
                    opcion2.style.background = "#009929"
                }
                if(opcion3.innerHTML == nombreDelPaisCorrecto){
                    opcion3.style.background = "#009929"
                }
                if(categoriaDeJuego == "capital"){ //esto es bastante necesario porque sino suma 2 veces las incorrectas por ser 2 modos de juego
                    respuestasIncorrectas++
                } 
                
            } 

            // ahora valido el modo de juego de capitales
            if(botonOpcion.innerHTML == nombreDelPaisCorrecto && categoriaDeJuego == "commonName"){
                botonOpcion.style.background = "#009929"
                respuestasCorrectas++
                score.innerHTML = `Puntuacion: ${respuestasCorrectas}`
                tiempoContrareloj += 3 
            }else{
                botonOpcion.style.background = "#f52b14"
                //forma tosca de ver cual es el correcto
                if(opcion0.innerHTML == capitalDelPaisCorrecto){
                    opcion0.style.background = "#009929"
                }
                if(opcion1.innerHTML == capitalDelPaisCorrecto){
                    opcion1.style.background = "#009929"
                }
                if(opcion2.innerHTML == capitalDelPaisCorrecto){
                    opcion2.style.background = "#009929"
                }
                if(opcion3.innerHTML == capitalDelPaisCorrecto){
                    opcion3.style.background = "#009929"
                }
                if(categoriaDeJuego == "commonName"){
                    respuestasIncorrectas++
                }
                
            }

            cuentaBanderas++

            //validar modo hardcore
            if(modoDeJuego == "100000" && respuestasIncorrectas > 0){
                setTimeout(function () {
                    localStorage.setItem("paisesJugados", JSON.stringify(paisesJugados))
                    window.location.href = "puntuacion.html"
                }, 1000);
            }

            //reinicia el juego o lo termina segun corresponda
            if(cuentaBanderas > modoDeJuego){
                setTimeout(function () {
                    localStorage.setItem("paisesJugados", JSON.stringify(paisesJugados))
                    window.location.href = "puntuacion.html"
                }, 1000);
            }else{
               reiniciar() 
            }
              
        })

    }

    generarOpcionesDeRespuesta()
    generarBotonesDeRespuesta()
    cargarBanderaPais()

    function reiniciar(){
        setTimeout(function () {
            logicaDelJuego()
    }, 800);
    }

    opcion0.addEventListener("click", validarRespuesta(opcion0))
    opcion1.addEventListener("click", validarRespuesta(opcion1))
    opcion2.addEventListener("click", validarRespuesta(opcion2))
    opcion3.addEventListener("click", validarRespuesta(opcion3))

}

//necesariamente debe estar fuera de logicaDelJuego() sino se bugea el tiempoContrareloj

let timmer = document.getElementById("timmer-container")
let tiempoContrareloj = 15

    function conteo(){
        timmer.innerHTML = tiempoContrareloj
        tiempoContrareloj--
        if(tiempoContrareloj == 0){
            clearInterval()
            localStorage.setItem("paisesJugados", JSON.stringify(paisesJugados))
            window.location.href = "puntuacion.html"
        }
        if(tiempoContrareloj < 10){
            timmer.style.color = "#ff0000"
        }else{
            timmer.style.color = "#000000"
        }
    }

    //Uso esta funcion para que repita conteo() cada segundo
    if(modoDeJuego == "?"){
        let temporizador = setInterval(() =>{
            conteo()
        }, 1000)
    }

logicaDelJuego()

