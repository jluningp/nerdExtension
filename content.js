function replaceText(from, to) {
  var escapedBody = escapeText(document.body.innerHTML)
  document.body.innerHTML = document.body.innerHTML.replace(new RegExp(from, 'g'), to);
}

function escapeText(str) {
    // http://kevin.vanzonneveld.net
    // +   original by: booeyOH
    // +   improved by: Ates Goral (http://magnetiq.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Onno Marsman
    return (str+'').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1");
}
function lowercaseReplace() {
return data.replace( new RegExp( "(" + preg_quote( search ) + ")" , 'gi' ), "<b>$1</b>" )
}

replaceText("Trump", "Drumpf")
