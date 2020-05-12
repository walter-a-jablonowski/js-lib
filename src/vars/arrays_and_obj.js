// can be used for 2 dim arrays and arr of obj

function arrColumn( arr, col )
{
  return arr.map(x => x[col]);
}


/*-
DEBUG:

  Fiddle document.write( JSON.stringify( flat2Obj( {
    "gigi.gigi2": 1,
    "gigi.gigi2.gigi5": 1,
    "gigi": 1
  })));

-*/
function flat2Obj( obj)
{
  var r = {}, t, parts, part;
  for (var k in obj)
  {
    t = r;
    parts = k.split('.');
    var key = parts.pop();
    while(parts.length)
    { part = parts.shift();
      t = t[part] = t[part] || {};
    }
    t[key] = obj[k];
  }
  
  return r;
}
