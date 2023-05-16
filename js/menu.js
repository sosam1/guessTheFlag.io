let opcion0 = document.getElementById("opcion0")
let opcion1 = document.getElementById("opcion1")
let opcion2 = document.getElementById("opcion2")
let opcion3 = document.getElementById("opcion3")
let opcion4 = document.getElementById("opcion4")

let modoPais = document.getElementById("modo-pais")
let modoCapital = document.getElementById("modo-capital")

function categoriaDeJuego(){
    if(modoPais.checked){
        localStorage.setItem("categoria", "commonName")
    }else{
        localStorage.setItem("categoria", "capital")
    }
}

opcion0.addEventListener("click", function(){

    localStorage.setItem("modo de juego", "10")
    localStorage.setItem("puntuacion", 0)
    categoriaDeJuego()
})

opcion1.addEventListener("click", function(){

    localStorage.setItem("modo de juego", "20")
    localStorage.setItem("puntuacion", 0)
    categoriaDeJuego()
})

opcion2.addEventListener("click", function(){

    localStorage.setItem("modo de juego", "50")
    localStorage.setItem("puntuacion", 0)
    categoriaDeJuego()
})

opcion3.addEventListener("click", function(){

    localStorage.setItem("modo de juego", "100000")
    localStorage.setItem("puntuacion", 0)
    categoriaDeJuego()

})

opcion4.addEventListener("click", function(){

    localStorage.setItem("modo de juego", "?")
    localStorage.setItem("puntuacion", 0)
    categoriaDeJuego()
})

function irAlJuego(){
    window.location.href = "juego.html"
}

function irAlMenu(){
    window.location.href= "index.html"
}