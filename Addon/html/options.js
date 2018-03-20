function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    idr: document.querySelector("#idr").value
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#idr").value = result.idr || "";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.local.get("idr");
  getting.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);

document.getElementById("aggiorna_dati").addEventListener("click", () =>
{
 
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function()
  {
	 
	if (this.readyState == 4 && this.status == 200)
	{
      console.log(this.responseText);	 
	  var partner_data = JSON.parse(this.responseText);
	  browser.storage.local.set({idr: partner_data.idr});
	  document.getElementById("idr").value = partner_data.idr;
	}
  }
  xhttp.open("GET", "http://localhost/grape/1.2/core/addon/partnermenu/get_partner_id.php?token="+document.getElementById("token").value, false);
  xhttp.send(); 

}); 