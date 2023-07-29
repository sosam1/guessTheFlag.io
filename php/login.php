<?php 

require("dataBase.php");

$username = $_POST["loginUsername"];
$password = $_POST["loginPassword"];

$results = $connection -> query("select * from usuarios where username = '$username'");
$row = $results -> fetch_array(MYSQLI_ASSOC);

if($results -> num_rows > 0){
    if(password_verify($password, $row["password"])){
        echo "login completado";
    }else{
        echo "La cagaste";
    }
};
