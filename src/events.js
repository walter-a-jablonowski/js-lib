
/**
 *  Loaded
 * 
 *  Sources
 * 
 *  - http://youmightnotneedjquery.com/#ready
 *  - http://stackoverflow.com/questions/9899372/pure-javascript-equivalent-to-jquerys-ready-how-to-call-a-function-when-the
 *  - https://www.sitepoint.com/jquery-document-ready-plain-javascript
 *  - or just use code from jquery
 * 
 */

/**
 * Handler func (youmightnotneedjquery.com version)
 * 
 * ```
 * htmlReady( function() { ... } )
 * ```
 */
function htmlReady( fn )
{
  if( document.readyState !== 'loading' )  // completed = fully loaded, see https://www.w3schools.com/jsref/prop_doc_readystate.asp
    fn();
  else
    document.addEventListener('DOMContentLoaded', fn);
  	// window.addEventListener( 'load', fn );
}

/*

from jquery 3.3.1

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}

*/