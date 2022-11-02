var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

let sellerGri = document.getElementsByClassName('sellerGrid')[0]
let list = document.getElementsByClassName('list')
let Grid = document.getElementsByClassName('gridview')

function gridView(){
  sellerGri.classList.remove('sellerList')
    sellerGri.classList.add('sellerGrid')
}

// List View
function listView(){
    sellerGri.classList.remove('sellerGrid')
    sellerGri.classList.add('sellerList')
}



