<?php 
    
    include('init.php');

    // Reading JSON POST using PHP
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    $result = array();

    $_SESSION["token"] = "Bearer ".$data["token"];
    $_SESSION["connect"] = "is connected";
    echo json_encode(array("status"=>200, "response"=>$_SESSION["token"]));    

    include('close.php');
?>