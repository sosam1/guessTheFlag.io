<?php 

$server = "localhost:3307";
$user = "root";
$password = "";
$dataBase = "guess_the_flag";

$connection = new mysqli($server, $user, $password, $dataBase);

if($connection->connect_errno){
    die("Conexio Fallida" . $connection->connect_errno );
} else{
    echo "Conectado";
}
