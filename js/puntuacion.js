let arrayPaisesJugados = JSON.parse(localStorage.getItem("paisesJugados"))

let contenedorDeBanderasJugadas = document.getElementById("flags-container")

arrayPaisesJugados.forEach(element => {
    
    contenedorDeBanderasJugadas.innerHTML += `
    
    <h3>${element.commonName}(${element.capital})</h3>
    <img class="img" src="${element.flag}">
    
    `

});