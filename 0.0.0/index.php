<?php
 require('functions.php');

 if(isset($_GET["u"]) && $_GET["u"]!="")
 {
   /* Analizza URL */
   $url            = $_GET["u"];
   $url_components = parse_url($url);
   
   if( isset( $url_components["host"] ) )
   {
	 $hostname = $url_components["host"];
	 switch($hostname)
	 {   
	     case "zo.ee": 
			$dati = adult_xyz($url);
			$tabella = "adult_xyz";
			break;
		case "adf.ly":
			$dati = adf_ly($url);
			$tabella = "adf_ly";
			break;
		case "threadsphere.bid":
			$dati = threadsphere_bid($url);
			$tabella = "threadsphere_bid";
			$search_mode = "link_id";
			break;
	 }
	 
	 if ( isset($dati) )
	 {
		if( $dati["excode"] == 1 )
		{
		  $conn = new mysqli("host","database_name","database_password","database_user");
		  
		   if ($conn->connect_error)
			file_put_contents("errors.txt","Connection error. Error: " . $conn->error . "\n", FILE_APPEND);
		  
		  if ( !isset($search_mode) )
		   $sql = 
			 "SELECT * FROM {$tabella} WHERE link_hash LIKE '". md5($url) ."'";
		  else 
		   $sql = 
			 "SELECT * FROM {$tabella} WHERE link_id LIKE '{$dati["id"]}'";
			 
		  $result = $conn->query($sql);

		  if ($result->num_rows > 0)
		  {
			  
			while($row = $result->fetch_assoc())
			 echo json_encode(["exc"=>1,"d"=>$row["destination"]]);
			
		  } else file_put_contents("errors.txt","Connection error. Error: " . $conn->error . "\n", FILE_APPEND);
		  
		} 
	 }
   }
      
	
 }

?>
