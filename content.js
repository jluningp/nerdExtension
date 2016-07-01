function replaceText(from, to) {
  var escapedBody = escapeText(document.body.innerHTML)
  document.body.innerHTML = lowercaseReplace(from, to)
  //document.body.innerHTML = document.body.innerHTML.replace(new RegExp(from, 'g'), to);
}

function escapeText(str) {
    // http://kevin.vanzonneveld.net
    // +   original by: booeyOH
    // +   improved by: Ates Goral (http://magnetiq.com)
    // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
    // +   bugfixed by: Onno Marsman
    return (str+'').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1");
}
function lowercaseReplace(from, to) {
    return document.body.innerHTML.replace( new RegExp( "(" + escapeText(from) + ")" , 'gi' ), to)
}

var dict =
{
    "union-find": "work: O(log(n))",
    "union find": "work: O(log(n))",
    "avl tree search": "work: O(log(n))",
    "linear search": "work: O(n)",
    "binary search": "work: O(log(n))",
    "euclid's algorithm" : "work: O(log(a+b))",
    "kruskal's algorithm": "work: O(E*log(E))",
    "foldr": "work: O(n), span O(n)",
    "foldl": "work: O(n), span O(n)",
    "map": "work: O(n), span O(1)",
    "bfs": "work: O(|E|)",
    "breadth-first search": "work: O(|E|)",
    "dfs": "work: O(|E|)",
    "depth-first search": "work: O(|E|)"
}

function replaceAll() {
  var keys = [];
  for (var key in dict) {
    if (dict.hasOwnProperty(key)) {
      keys.push(key);
    }
  }
  replaceAllKeys(keys)
}


function replaceAllKeys(keys) {
   for(var i = 0; i < keys.length; i++) {
      var toSet = keys[i] + " <b>(" + dict[keys[i]] + ")</b>";
      replaceText(keys[i], toSet);
   }
}

replaceText("donald trump", "Donald Drumpf")

replaceAll()
