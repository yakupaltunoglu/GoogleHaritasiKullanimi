<?php
/**
 * 
 */
 class DbConnect
 {
	 	private $host='';
	 	private $dbname='phpp';
	 	private $user='';
	 	private $pass='';

	 	public function connect(){
	 		try{
	 			$conn=new PDO('mysql:host=' . $this->host. ';port=3306; dbname=' . $this->dbname, $this->user, $this->pass);

	 			$conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
	 			$conn->query("SET CHARACTER SET utf8");
	 			
	 			return $conn;
	 		} catch( PDOException $e){
	 			echo 'database error '. $e->getMessage();
	 		}
	 	}
 } 
?>
