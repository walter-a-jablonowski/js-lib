
function basename(path)
{
  return path.replace( /.*//, "" );
}

function dirname(path)
{
  return path.match( /.*// );
}
