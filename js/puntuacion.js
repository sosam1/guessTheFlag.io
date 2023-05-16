let arrayPaisesJugados = JSON.parse(localStorage.getItem("paisesJugados"))
console.log(arrayPaisesJugados)

let contenedorDeBanderasJugadas = document.getElementById("flags-container")

arrayPaisesJugados.forEach(element => {
    
    contenedorDeBanderasJugadas.innerHTML += `
    
    <h3>${element.commonName}(${element.capital})</h3>
    <img src="${element.flag}">
    
    `

});