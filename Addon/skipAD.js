/*=== FUNZIONI ===*/
function skip(website,url) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var obj = JSON.parse(this.responseText);
	  if (obj.exc != 0) window.location.href = obj.d;
    }
	
  };
  xhttp.open("GET", "http://localhost/skipAD/1/index.php?w="+website+"&u="+url, false);
  xhttp.send();
}

function save(website,url,referrer) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      
    }
	
  };
  xhttp.open("GET", "http://localhost/skipAD/1/save.php?w="+website+"&u="+url+"&r="+referrer, true);
  xhttp.send();
}
/*== FUNZIONI ==*/


/*==== RICONOSCIMENTO SITO ===*/

var page_url = document.createElement('a');
var website = "undefined";
var url = window.location.href;
var referrer = document.referrer;
page_url.setAttribute('href', window.location.href);



if (referrer.match(/zo\.ee/g) !== null) save("adult_xyz",url,referrer);

if (page_url.hostname.match(/zo\.ee/g) !== null) skip("adult_xyz",url);

if (referrer.match(/threadsphere\.bid/g) !== null) save("threadsphere_bid",url,referrer);
if (page_url.hostname.match(/threadsphere\.bid/g) !== null) { skip("threadsphere_bid",url) }

