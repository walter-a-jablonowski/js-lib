
// see also kb

function rndBase32(length)
{
  var chars = '123456789ABCDEFGHJKMNPQRSTUVWXYZ';  // base 32, no 0 (null), O (upper o), I (upper i) and l (lower L) - cant be confused
  
  var r = '';
  
  for( var i = 0; i < length; i++)
  {
    var rnd = Math.floor( Math.random() * (chars.length + 1) );  // rnd is >= 0 && < 1  ==>  + 1 (32 would never be reached)
    rnd--;                // array idx
    if(rnd < 0)  rnd = 0; // catch negative
    r += chars[rnd];
  }

  return r;
}


/*
var used = [
  '1000'
];
console.log( newCode(used, 4) );
*/
function newCode(used, digits)
{
  var n;

  do {

    n = rndBase32(digits);

  } while( used.includes(n) );

  return n;
}
