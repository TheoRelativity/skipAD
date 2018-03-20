var update= new Date();

/*=== FUNZIONI ===*/
	function getParameterByName(name, url) {
		
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
			results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
	function onError(err){
    console.error(err);
}

function copyMe(el,el1) { el.select(); document.execCommand("Copy"); el1.innerHTML="LINK COPIATO"; }


function onGot(item)
{
 console.log(item);
}

function onError(error) {
  console.log(`Error: ${error}`);
}
/*== FUNZIONI ==*/



function logTabs(tabs) {
    
	let tab = tabs[0];
    
	
	

	/*==== RICONOSCIMENTO TUBO ===*/
	var xr_base_url="http://xraccoon.com/watch/?";
	var tubo = "sconosciuto";
	var video_id = "";
 
	if (tab.url.match(/pornhub\.com/g) !== null) tubo = "ph";
	else if (tab.url.match(/youporn\.com/g) !== null) tubo = "yp";
	else if (tab.url.match(/redtube\.com/g) !== null) tubo = "rt";
	else if (tab.url.match(/xtube\.com/g) !== null) tubo = "xt";
	else if (tab.url.match(/tube8\.com/g) !== null) tubo = "t8";
	else if (tab.url.match(/spankwire\.com/g) !== null) tubo = "sw";

	if(tubo=="ph")
	{
		 video_id = getParameterByName('viewkey',tab.url);
		 
	}
	else if(tubo=="yp")
	{
		var path = tab.url.split("/");
		video_id = path[4];	
	}
	else if(tubo=="rt")
	{
		var path = tab.url.split("/");
		video_id = path[3];	
	}
	else if(tubo=="t8")
	{
		var path = tab.url.split("/");
		video_id = path[5];	
	}
	else if(tubo=="sw")
	{
		var path = tab.url.split("/");
		video_id = path[4].substring(5);		
	}
	
	
 if(tubo!="sconosciuto" && video_id!="" && video_id!="undefined" && video_id != null )
 {
	document.getElementById("dati").innerHTML = '<img src="../icons/ldn.gif" />';
	var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
		{
			if (this.readyState == 4 && this.status == 200) {
			   var video = JSON.parse(this.responseText);
			   if(video.status==200)
			   {   
				
				   var copy_link = document.createElement("li");
				   copy_link.innerHTML = 'COPIA LINK';
				   copy_link.onclick = function() {  copyMe(document.getElementById("xr_link"),copy_link); }
				   document.getElementById("pulsanti").appendChild(copy_link);
				   
				   if(tubo=="sw") var bth = "http:" + video.bth;
				   else var bth = video.bth;
				   
				   document.getElementById("dati").innerHTML = 
				   '<div class="title-bar"><h5>'+video.ttl+'</h5></div><img src="'+ bth +'" />'
				   +'<input id="xr_link" value="" ></input>';
				    
					
				   let gettingItem = browser.storage.local.get("idr");
				   gettingItem.then(function(item)
				   { 
				     if(typeof(item.idr) !="undefined" && item.idr!="") var video_link_params = '?idr='+item.idr+'&t='+video.tb+'&id='+video.id;
					 else 
					 { 
						var video_link_params = '?t='+video.tb+'&id='+video.id;
						var errors_block = document.createElement("div");
						errors_block.id = "errors";
					    errors_block.innerHTML = "Attenzione, non hai settato il parametro IDR che ti permette di guadagnare.";
						document.getElementById("more").appendChild(errors_block);
					    
					 }
					 document.getElementById("xr_link").value = 'http://xraccoon.com/watch/'+video_link_params;
					 
					 
					 var watch_video = document.createElement("li");
				     watch_video.innerHTML = 'VIDEO CORRELATI';
				     watch_video.onclick = function() { window.open('http://xraccoon.com/watch/'+video_link_params) }
				     document.getElementById("pulsanti").appendChild(watch_video);
					 
				   }, onError);
				   
				   
			   } 
			   else document.getElementById("dati").innerHTML = "<p style='color:red'>IMPOSSIBILE TROVARE IL VIDEO IN CACHE. VIDEO ID: " + video_id +"<br> TUBO: " + tubo + "</p>";
			} 
		};
   xhttp.open("GET", "http://localhost/grape/1.2/core/addon/partnermenu/get_video_status.php?t="+tubo+"&id="+video_id, false);
   xhttp.send(); 
 }
 else
 {
	document.getElementById("dati").innerHTML = '<div class="title-bar"><h4>Nessun video trovato</h4></div>'; 
 }
	
   
}



browser.tabs.query({currentWindow: true, active: true}).then(logTabs, onError);

document.getElementById("options").addEventListener("click", () =>
{
 browser.runtime.openOptionsPage()
}); 