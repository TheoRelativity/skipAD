<?php

 require("functions.php");
 
 if ( isset($_GET["w"]) && isset($_GET["u"]) && isset($_GET["r"]) )
 {
	$website           = $_GET["w"];
	$final_destination = $_GET["u"];
	$referrer          = $_GET["r"];
    
    switch( $website )
	{
	  case "adult_xyz":
	  case "adf_ly":
	  case "threadsphere_bid":
	    
		$dati 	 = $website($referrer);
		if ( $dati["excode"] == 1 )
		{
		 $link_id = $dati["id"];
		 $tabella = $website;
		}
	}
	
	if ( isset($tabella) )
	{
	  
	  $conn = new mysqli("localhost","skipAD","asdwqe__!165184_?asd98sad8","skipad");
	
	  if ($conn->connect_error)
		file_put_contents("errors.txt","Connection error. Error: " . $conn->error . "\n", FILE_APPEND);
	
	  /* 
	  **
	   * For security issues
	   *
	  **/
	  mysqli_set_charset($conn,"utf8");
	  
	  $conn->real_escape_string($website);
	  $conn->real_escape_string($final_destination);
	  $conn->real_escape_string($referrer);
	  $conn->real_escape_string($link_id);
	  
	  $sql = 
		"INSERT INTO {$tabella} (link, link_hash, link_id, destination) ".
		"VALUES ('{$referrer}', '" . md5($referrer) ."', '{$link_id}', '{$final_destination}') ON DUPLICATE KEY UPDATE destination = '{$final_destination}'";
	  
	  if ($conn->query($sql) === TRUE)
        echo "New record created successfully";
	  else
		file_put_contents("errors.txt","Connection error. Error: " . $conn->error . "\n", FILE_APPEND);
	
	  $conn->close();
	
	}
	
	
	
	
 } 
