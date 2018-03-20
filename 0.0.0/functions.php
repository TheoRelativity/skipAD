<?php
function adult_xyz($url)
{
  $url_components = parse_url($url);
  if ( isset($url_components["path"]) )
  {
	$path       = $url_components["path"];
	$path_array = explode("/",$path);
	
	/* minimum number of array length to be a valid zo.ee url */
	if( count($path_array)>=2  )
	{
	  /** Analyze url of form zo.ee/id **/
	  if( $path_array[1] != "ad")
	   return ["excode"=>1,"website"=>"adult_xyz","id"=>$path_array[1]];
	 
	}
  }
  
  return ["excode"=>0,"website"=>"adult_xyz"];
}

function adf_ly($url)
{
  $url_components = parse_url($url);
  if ( isset($url_components["path"]) )
  {
	$path       = $url_components["path"];
	$path_array = explode("/",$path);
	
	/* minimum number of array length to be a valid adf.ly url */
	if( count($path_array)>=2  )
	{
	  /** Analyze url of form adf.ly/id **/
	  if( $path_array[1] != "login")
	   return ["excode"=>1,"website"=>"adf_ly","id"=>$path_array[1]];
	 
	}
  }
  
  return ["excode"=>0,"website"=>"adf_ly"];
}

function threadsphere_bid($url) {
  
  $url_components = parse_url($url);
  if ( isset($url_components["path"]) )
  { 
	$path       = $url_components["path"];
	$path_array = explode("/",$path);
	
	/* minimum number of array length to be a valid threadsphere_bid url */
	if( count($path_array)>=3  )
	 return ["excode"=>1,"website"=>"threadsphere_bid","id"=>$path_array[2]];
	
	
  }
  return ["excode"=>0,"website"=>"threadsphere_bid"];
}
