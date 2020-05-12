/**
 * - Print
 * - Trim
 * - Pad
 */


// Print

// 'bla {la}'.fill( {la: 1} );

String.prototype.fill = function(args)
{
  a = this;
  for(k in args)
    a = a.replace('{' + k + '}', args[k]);

  return a;
}


// Trim

// trimLeft() trimStart() might be available on old devices (blank only)

// Trim char
// Currently only one char, trim('a').trim('b')

String.prototype.trimChar = function(char)
{
  string = string.ltrim(string, char);
  string = string.rtrim(string, char);

  return string;
}


String.prototype.ltrim = function(char)
{
  var string = String(this);
  char = char || ' ';

  while( string.charAt(0) == char)
    string = string.substring(1);

  return string;
}


String.prototype.rtrim = function(char)
{
  var string = String(this);
  char = char || ' ';

  while( string.charAt(string.length-1) == char)
    string = string.substring( 0, string.length-1 );

  return string;
}


// Pad

String.prototype.lPad = function(size, sign)  // using unusual name
{
  var s = String(this);
  while( s.length < size ) {  s = sign + s;  }
  return s;
}
