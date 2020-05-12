// Nachkommastellen

String.prototype.decimalDigits = function(num, decSign)
{
  var s = num.toString();
  return s.substring( s.indexOf('.') + 1);
}


// missing in js

String.prototype.roundPrecicion = function(num, precicion)
{
  precision = 10 * precision;
  return Math.round(num * precision) / precision;
}
