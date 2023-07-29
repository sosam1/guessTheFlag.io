let arrayPaisesJugados = JSON.parse(localStorage.getItem("paisesJugados"))

let contenedorDeBanderasJugadas = document.getElementById("flags-container")

arrayPaisesJugados.forEach(element => {
    
    contenedorDeBanderasJugadas.innerHTML += `
    
<<<<<<< HEAD
    <h3>${element.commonName}(${element.capital})</h3>
=======
    <h3>${element.commonName} (${element.capital})</h3>
>>>>>>> master
    <img class="img" src="${element.flag}">
    
    `

});