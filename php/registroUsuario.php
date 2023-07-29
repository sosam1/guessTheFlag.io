<?php 

require "dataBase.php";

$username = $_POST["username"];
$email = $_POST["email"];
$password = password_hash($_POST["firstPassword"], PASSWORD_DEFAULT);

$sql = $connection -> query("insert into usuarios(username, email, password)values('$username','$email','$password')");

if($sql == 1){
    echo "Usuario registrado correctamente";
}else{
    echo "Error, no se pudo registrar al usuario";
}
