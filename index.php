
<!DOCTYPE html>
<html>
<head>
	<title>Kampüs Akıllı Çöp Sistemi</title>
	<meta content="text/html;charset=utf-8" http-equiv="Content-Type">
<meta content="utf-8" http-equiv="encoding">
	<link rel="stylesheet" type="text/css" href="static/style.css">
	<link rel="stylesheet" type="text/css" href="plugin/fontawesome-free-5.0.10/web-fonts-with-css/css/fontawesome-all.min.css">
    
	   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<body>
	<div id="map"></div>
	<div class="control-left-wrapper">
		<div class="zoom-in" id="zoom-in"><i class="fa fa-plus"></i></div>
		<div class="zoom-out" id="zoom-out"><i class="fa fa-minus"></i></div>
		<div class="current-location" id="current-location"><i class="fa fa-paper-plane"></i></div>
	</div>
	<script type="text/javascript" src="plugin/jquery-1.12.3.min.js"></script>
	<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA2GXj4oCyV_FByQ4D9jgAsgdGFWC1rpaM"
     ></script>


<script type="text/javascript" src="static/gmap.js">
	

</script>
<script type="text/javascript" src="plugin/infobox.js"></script>

<?php
                require 'education.php';
                    $edu=new education;
                    $coll=$edu->getCollegesBlankLatLng();
                    $coll=json_encode($coll,true);
                    echo '<div id="data">'.$coll.'</div>';

                    $allData=$edu->getAllColleges();
                    $allData=json_encode($allData,true);
                    echo '<div id="allData">'.$allData.'</div>';
					 $veriyigetir=$edu->verial();
                    $veriyigetir=json_encode($veriyigetir,true);
                    echo '<div id="veriyigetir">'.$veriyigetir.'</div>';
                   
            ?>
	
	
	

</body>
</html>