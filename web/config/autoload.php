<?php 
   //
    define('API_URL', "https://api-customotel.herokuapp.com");
    
    define('APIKEY', "ornela-7111cd5742ae490ea3a9");
    define('TOKEN', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOm51bGwsImhvc3RlbElkIjo1LCJhcGlLZXkiOiJvcm5lbGEtNzExMWNkNTc0MmFlNDkwZWEzYTkiLCJpYXQiOjE2MTkxMzkyMTgsImV4cCI6MTY1MDY3NTIxOH0.23ZndL2xqzFPqkLWw4gQ1f5PyLIo74a9SwYpAhgjSGE");

    //configuration public
    $base  = "https://".$_SERVER['HTTP_HOST'];
    $base .= str_replace(basename($_SERVER['SCRIPT_NAME']),"",$_SERVER['SCRIPT_NAME']);
    define('BASE_URL', $base.'public/');
    define('REQUEST', $base.'controllers/');
?>