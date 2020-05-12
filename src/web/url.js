/*@

Implementation for older browser (day view)
Newer use URL or URLSearchParams class

Current: window.location.href

*/
function getURLArgs( url ) /*@*/
{
	var params = {};
	var parser = document.createElement('a');
	
  parser.href = url;
	
  var query = parser.search.substring(1);
	var vars = query.split('&');

	for (var i = 0; i < vars.length; i++)
  {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	
  return params;
}


function getUrlVar(s)
{
  return getUrlVars()[s];
}

function getUrlVars()
{
  var vars = [], hash;
  var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for(var i = 0; i < hashes.length; i++)
  {
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}
