// Search
document.getElementById("hs-store-search-input").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // Überprüfen, ob die Eingabetaste gedrückt wurde
      event.preventDefault(); // Verhindern, dass das Formular gesendet wird
      hsstoresearchcontent(); // Funktion zum Durchführen der Suche aufrufen
    }
});

function hsstoresearchcontent() {
    var hscontent = document.getElementById('hs-store-content');
    var hsstoresearchcontentb = document.getElementById('hs-store-search-content-b').innerHTML;
    hscontent.innerHTML = hsstoresearchcontentb;

    var input = document.getElementById('hs-store-search-input');
    var filter = input.value.toUpperCase();
    var ul = document.getElementById('hs-store-search-ul');
    var li = ul.getElementsByTagName('li');
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
}

// App Images
function hsstorechangeimage(imgs) {
  var hsstoreexpandedimage = document.getElementById('hs-store-expanded-image');
  var hsstoreexpandedimagetext = document.getElementById('hs-store-expanded-image-text');
  hsstoreexpandedimage.src = imgs.src;
  hsstoreexpandedimagetext.innerHTML = imgs.alt;
  hsstoreexpandedimage.style.display = "block";
}

// Scroll
function hsstorescrollright(hsstorescrollcontainerID) {
  var hsstorecontainerscroll = document.getElementById(hsstorescrollcontainerID);
  hsstorecontainerscroll.scrollLeft += 1000;
}