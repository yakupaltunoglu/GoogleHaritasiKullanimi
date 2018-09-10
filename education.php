<?php

/**
* 
*/
class education
{
		private $Id;
		private $name;
		private $address;
		private $type;
		private $lat;
		private $lng;
		private $conn;
		private $tableName="uni";

		function setId($Id) { $this->Id = $Id; }
		function getId() { return $this->Id; }
		function setName($name) { $this->name = $name; }
		function getName() { return $this->name; }
		function setAddress($address) { $this->address = $address; }
		function getAddress() { return $this->address; }
		function setType($type) { $this->type = $type; }
		function getType() { return $this->type; }
		function setLat($lat) { $this->lat = $lat; }
		function getLat() { return $this->lat; }
		function setLng($lng) { $this->lng = $lng; }
		function getLng() { return $this->lng; }



		public function __construct()
		{
			require_once('DbConnect.php');
			$conn=new DbConnect;
			$this->conn=$conn->connect();
		}

		public function getCollegesBlankLatLng(){
			$sql="SELECT * FROM $this->tableName WHERE lat IS NULL AND lng IS NULL";
			$stmt=$this->conn->prepare($sql);
			$stmt->execute();
 			return $stmt->fetchAll(PDO::FETCH_ASSOC);
		}
		public function getAllColleges(){
			$sql="SELECT * FROM $this->tableName ";
			$stmt=$this->conn->prepare($sql);
			$stmt->execute();
 			return $stmt->fetchAll(PDO::FETCH_ASSOC);
		}
			public function verial(){
			$sql="SELECT * FROM sensor_tablosus ORDER BY Id DESC LIMIT 1 ";
			$stmt=$this->conn->prepare($sql);
			$stmt->execute();
 			return $stmt->fetchAll(PDO::FETCH_ASSOC);
		}
		

		public function updateCollegeWithLatLng(){
			$sql="UPDATE $this->tableName SET lat= :lat, lng= :lng WHERE Id= :Id";
			$stmt=$this->conn->prepare($sql);
			$stmt->bindParam(':lat',$this->lat);
			$stmt->bindParam(':lng',$this->lng);
			$stmt->bindParam(':Id',$this->Id);
			if($stmt->execute())
			{
				return true;
			}else{
				return false;
			}
		}


}


?>