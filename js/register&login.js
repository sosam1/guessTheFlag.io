let username = document.getElementById("username")
let email = document.getElementById("email")
let firstPassword = document.getElementById("password1")
let secondPassword = document.getElementById("password2")
let btn = document.getElementById("btnRegistro")
let mensaje = document.getElementById("mensaje-error")


username.addEventListener("keydown", function(){
    if(username.value.length < 4){
        username.style.borderBottom = "solid 1px red";
    }else{
        username.style.borderBottom = "solid 1px green";
    }
})

firstPassword.addEventListener("keydown", function(){
    if(firstPassword.value.length < 6){
        firstPassword.style.borderBottom = "solid 1px red";
    }else{
        firstPassword.style.borderBottom = "solid 1px green";
    }
})

btn.addEventListener("click", function(e){

    if(username.value.length < 4){
        e.preventDefault()
        username.style.borderBottom = "solid 1px red";
    }else{
        username.style.borderBottom = "solid 1px green";
    }

    if(firstPassword.value.length < 6){
        e.preventDefault()
        firstPassword.style.borderBottom = "solid 1px red";
        firstPassword.placeholder = "Password needs 6 characters (min)"
    }else{
        firstPassword.style.borderBottom = "solid 1px green";
    }

    if(secondPassword.value !== firstPassword.value){
        e.preventDefault()
        firstPassword.style.borderBottom = "solid 1px red";
        secondPassword.style.borderBottom = "solid 1px red";
        mensaje.innerHTML = "Both passwords must be equals"
        mensaje.style.color = "red"
    }


})