<?php 
   session_start();
   ini_set('display_errors',1);
   error_reporting(1);
   
   setlocale(LC_TIME, 'fr', 'fr_FR', 'fr_FR.ISO8859-1');

   //include configurations
   include_once('config/autoload.php');

   //require models
   require_once('models/common.php');

   //instentiation
   $cmn = new Common();

   //routing
   $page = $_GET['p'];
   $views = scandir('views');

   if(isset($_GET['p'])){
       if(in_array($_GET['p'].".phtml",$views)){
           $displayedPage = $page;
       }else{
           header('location:?p=404');
       }
   }else{
       header('location:?p=login');
   }

   switch($displayedPage){
       case 'login':
       case '404':
           $location = 'auth';
        break;
       default :
           $location = 'member';
        break;
   }
   
   include_once('views/components/'.$location.'/header.phtml');
   include_once('views/'.$displayedPage.'.phtml');
   include_once('views/components/'.$location.'/footer.phtml');
   
   unset($db);
   unset($GLOBALS);
?>