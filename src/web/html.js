// htmlEncode('<b>test</b>')
// "&lt;b&gt;test&lt;/b&gt;"
function htmlEncode(value)
{
  // create a in-memory div, set it's inner text(which jQuery automatically encodes)
  // then the encoded contents back out. The div never exists on the page.
  return $('<div/>').text(value).html();
}

function htmlDecode(value)
{
  return $('<div/>').html(value).text();
}
