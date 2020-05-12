
// Alternative: https://stackoverflow.com/questions/45071353/copy-text-string-on-click/45071478

function copyClipboard(id)
{
  var elem = document.querySelector(id);

  var range = document.createRange();  
  range.selectNodeContents(elem);

  window.getSelection().addRange(range);

  // var success =
  document.execCommand('copy');
  // if(success)
  //   console.log('Successfully copied to clipboard');
  // else
  //   console.log('Unable to copy to clipboard');

  window.getSelection().removeRange(range);
}
