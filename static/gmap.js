$(function(){
	'user strick';
	var map,marker,infowindow,infowindow2,ib;
	var infowindow3=new google.maps.InfoWindow();
	var marker_created=[];
	var mapDiv=document.getElementById('map');
	var myLatLng=new google.maps.LatLng(41.214378,32.652107);
	var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;
	var directionDistance = new google.maps.DistanceMatrixService;
	

  
	function initMap(){
		
         map = new google.maps.Map(mapDiv, {
          
          center: myLatLng,
		  zoom: 15,
		  zoomControl:false,
		  streetViewControl:false,
		  scrollwheel:true,
        });
		 marker=new google.maps.Marker({
			position:myLatLng,
			map:map,
			title:'Hello World',
			icon:'static/img/icon.jpg',
			draggable:true,
		});
		var contentString = '<div id="container-infobox">'+
          
           
            
			
            '<center><span class="yazi">Kamyon</span></center>'
			
			
				
            
            '</div>';
		infowindow=new google.maps.InfoWindow({
			content:contentString,
			maxwidth:300,
		});
		infowindow=new InfoBox({
			 content: contentString
			,disableAutoPan: false
			
			,pixelOffset: new google.maps.Size(-140, 0)
			,zIndex: null
			,position:marker.getPosition()
			,boxStyle: { 
			
			  opacity: 1
			  ,width: "280px"
			 }
			,closeBoxMargin: "10px 2px 2px 2px"
			,closeBoxURL: "https://www.google.com/intl/en_us/mapfiles/close.gif"
			,infoBoxClearance: new google.maps.Size(1, 1)
		
		});
		marker.addListener('click',function(){
			infowindow.open(map,marker);
		});
		map.addListener('click',function(){
			infowindow.close();
		});
		google.maps.event.addDomListener(marker,'dragstart',function(event){
			console.log('Başlangıc ',event);
		});
		google.maps.event.addDomListener(marker,'dragend',function(event){
			console.log('Bitis ',event.latLng.lat(),event.latLng.lng());
			getNewMarker();
			map.setZoom(15);
		});
		
		var customMapType=new google.maps.StyledMapType([
		{stylers:[{hue:'#D2E4C8'}]},
			{
				featureType:'water',
				stylers:[{color:''}]
			}
		
		]);
		var customMapTypeId='custom_style';
		map.mapTypes.set(customMapTypeId,customMapType);
		map.setMapTypeId(customMapTypeId);
		geolocate();
	}; //End initMap
		function ZoomControl(){
		var zoomInButton=document.getElementById('zoom-in');
		var zoomOutButton=document.getElementById('zoom-out');
		google.maps.event.addDomListener(zoomInButton,'click',function(){
			map.setZoom(map.getZoom()+1);
		});
		google.maps.event.addDomListener(zoomOutButton,'click',function(){
			map.setZoom(map.getZoom()-1);
		});
	}
		function GeolocationControl(){
		var geoButton=document.getElementById('current-location');
		google.maps.event.addDomListener(geoButton,'click',geolocate);
	};
		function geolocate(){
		if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
			  console.log(position);
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
            map.setCenter(pos);
			marker.setPosition(pos);
       
          });
        } else{
			alert('fsdfds');
		};
	};
	
	function getNewMarker(allData){
		var veriyigetir=JSON.parse(document.getElementById('veriyigetir').innerHTML);
		
		Array.prototype.forEach.call(veriyigetir,function(data2){
			
		Array.prototype.forEach.call(allData,function(data){
			
			
			
		
			if(data.name=="Fen Edebiyat Fakültesi"){

			if(data2.sensor1>-1 && data2.sensor1<6){
			var contentString = '<div id="container-infobox">'+
			
            '<center><a href="#" class="direction">'+data.name+'</a></center>'+
		
            '<center><span class="yazi"> % 25 </span></center>'+
            
            '</div>';
			}
			if(data2.sensor1>5 && data2.sensor1<11){
			var contentString = '<div id="container-infobox">'+
			
            '<center><a href="#" class="direction">'+data.name+'</a></center>'+
		
            '<center><span class="yazi1"> %50 </span></center>'+
            
            '</div>';
			}
			if(data2.sensor1>10 && data2.sensor1<15){
			var contentString = '<div id="container-infobox">'+
			
            '<center><a href="#" class="direction">'+data.name+'</a></center>'+
		
            '<center><span class="yazi2"> %75 </span></center>'+
            
            '</div>';
			}
			if(data2.sensor1>16 && data2.sensor1<21){
			var contentString = '<div id="container-infobox">'+
			
            '<center><a href="#" class="direction">'+data.name+'</a></center>'+
		
            '<center><span class="yazi3"> %100 </span></center>'+
            
            '</div>';
			}
			}
			if(data.name=="İktisadi Ve İdari Birimler"){
			if(data2.sensor2>-1 && data2.sensor2<25){
			var contentString = '<div id="container-infobox">'+
			
            '<center><a href="#" class="direction">'+data.name+'</a></center>'+
		
            '<center><span class="yazi"> %'+data2.sensor2+'</span></center>'+
            
            '</div>';
			}
			if(data2.sensor2>24 && data2.sensor2<50){
			var contentString = '<div id="container-infobox">'+
			
            '<center><a href="#" class="direction">'+data.name+'</a></center>'+
		
            '<center><span class="yazi1"> %'+data2.sensor2+'</span></center>'+
            
            '</div>';
			}
			if(data2.sensor2>49 && data2.sensor2<75){
			var contentString = '<div id="container-infobox">'+
			
            '<center><a href="#" class="direction">'+data.name+'</a></center>'+
		
            '<center><span class="yazi2"> %'+data2.sensor2+'</span></center>'+
            
            '</div>';
			}
			if(data2.sensor2>74 && data2.sensor2<101){
			var contentString = '<div id="container-infobox">'+
			
            '<center><a href="#" class="direction">'+data.name+'</a></center>'+
		
            '<center><span class="yazi3"> %'+data2.sensor2+'</span></center>'+
            
            '</div>';
			}
			}
			if(data.name=="Toki Konutları"){
			if(data2.sensor3>-1 && data2.sensor3<25){
			var contentString = '<div id="container-infobox">'+
			
            '<center><a href="#" class="direction">'+data.name+'</a></center>'+
		
            '<center><span class="yazi"> %'+data2.sensor3+'</span></center>'+
            
            '</div>';
			}
			if(data2.sensor3>24 && data2.sensor3<50){
			var contentString = '<div id="container-infobox">'+
			
            '<center><a href="#" class="direction">'+data.name+'</a></center>'+
		
            '<center><span class="yazi1"> %'+data2.sensor3+'</span></center>'+
            
            '</div>';
			}
			if(data2.sensor3>49 && data2.sensor3<75){
			var contentString = '<div id="container-infobox">'+
			
            '<center><a href="#" class="direction">'+data.name+'</a></center>'+
		
            '<center><span class="yazi2"> %'+data2.sensor3+'</span></center>'+
            
            '</div>';
			}
			if(data2.sensor3>74 && data2.sensor3<101){
			var contentString = '<div id="container-infobox">'+
			
            '<center><a href="#" class="direction">'+data.name+'</a></center>'+
		
            '<center><span class="yazi3"> %'+data2.sensor3+'</span></center>'+
            
            '</div>';
			}
			}
			if(data.name=="Mühendislik Fakültesi"){
			if(data2.sensor4>-1 && data2.sensor4<25){
			var contentString = '<div id="container-infobox">'+
			
            '<center><a href="#" class="direction">'+data.name+'</a></center>'+
		
            '<center><span class="yazi"> %'+data2.sensor4+'</span></center>'+
            
            '</div>';
			}
			if(data2.sensor4>24 && data2.sensor4<50){
			var contentString = '<div id="container-infobox">'+
			
            '<center><a href="#" class="direction">'+data.name+'</a></center>'+
		
            '<center><span class="yazi1"> %'+data2.sensor4+'</span></center>'+
            
            '</div>';
			}
			if(data2.sensor4>49 && data2.sensor4<75){
			var contentString = '<div id="container-infobox">'+
			
            '<center><a href="#" class="direction">'+data.name+'</a></center>'+
		
            '<center><span class="yazi2"> %'+data2.sensor4+'</span></center>'+
            
            '</div>';
			}
			if(data2.sensor4>74 && data2.sensor4<101){
			var contentString = '<div id="container-infobox">'+
			
            '<center><a href="#" class="direction">'+data.name+'</a></center>'+
		
            '<center><span class="yazi3"> %'+data2.sensor4+'</span></center>'+
            
            '</div>';
			}
			}
			
			
		var options = {
			 content: contentString
			,disableAutoPan: false
			,maxWidth: 0
			,pixelOffset: new google.maps.Size(-310, -50)
			,zIndex: null
			
			,boxStyle: { 
			
			  opacity: 0.75
			  ,width: "260px"
			  
			 }
			,closeBoxMargin: "5px 2px 2px 2px"
			,closeBoxURL: "https://www.google.com/intl/en_us/mapfiles/close.gif"
			,infoBoxClearance: new google.maps.Size(1, 1)
			,isHidden: false
			,pane: "floatPane"
			,enableEventPropagation: false
		};
	    ib= new InfoBox(options);
		ib.addListener('domready',function(){
			$('.direction').on('click',function(){
				calculateAndDisplayRoute(newMarker);
				$('.infoBox').fadeOut('300');
			});
		})

		var newMarker=new google.maps.Marker({
			position:new google.maps.LatLng(data.lat,data.lng),
			map:map,
		});
		var points=[];
		points.push(newMarker); 

		infoboxOlustur(points);
		/*newMarker.addListener('click',function(){
			$('.infoBox').fadeOut('300');
			ib.open(map,newMarker);
		});*/
			marker_created.push(newMarker);
			console.log(marker_created);
		});
		});
	};
	
	function infoboxOlustur(points){
		fLen = points.length;
		for (i = 0; i < fLen; i++) {
		$('.infoBox').fadeOut('300');
		ib.open(map,points[i]);
		}
	};
	function calculateAndDisplayRoute(newMarker) {
		directionsDisplay.setMap(map);
        directionsService.route({
          origin: marker.getPosition(),
          destination: newMarker.getPosition(),
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
          directionsDisplay.setDirections(response);
		  var m=Math.ceil((response.routes[0].overview_path.length)/2);
		  middle=response.routes[0].overview_path[m];
		  directionDistance.getDistanceMatrix({
			origins: [marker.getPosition()],
			destinations: [newMarker.getPosition()],
			travelMode: 'DRIVING',
          
        }, function(response, status) {
          if (status === 'OK') {
			  var originList=response.originAddresses;
			  var destinationList=response.destinationAddresses;
			  for(var i=0;i<originList.length;i++)
			  {
				  var results=response.rows[i].elements;
				  for(var j=0;j<results.length;j++)
				  {
					  var element=results[j];
					  var dt=element.distance.text;
					  var dr=element.duration.text;
				  };
			  };
			  var content ='<div>'+dt+
			  '<br>'+dr+
			  '<div>';
			  infowindow3.setContent(content);
			   infowindow3.setPosition(middle);
			    infowindow3.open(map);
			  
			  
		  };
		});
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
      }

	initMap();
	ZoomControl();
	GeolocationControl();

	  var allData=JSON.parse(document.getElementById('allData').innerHTML);
       
	getNewMarker(allData);
});