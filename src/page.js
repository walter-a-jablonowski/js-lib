// var byId = function( id ) { return document.getElementById( id ); };
function byId( id )
{
  while( id.charAt(0) == '#')  // # is optional
    id = id.substring(1);

  return document.getElementById( id );
}
