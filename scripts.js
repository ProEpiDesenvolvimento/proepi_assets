function loadDIV() {
  var Docu = document.body;

  var InsertDIV = document.createElement('div');
  InsertDIV.setAttribute('id', "myModal_artt");
  InsertDIV.setAttribute('class', "modal_artt");

  var InsertSPAN = document.createElement('span');
  InsertSPAN.setAttribute('class', "close_artt");
  InsertSPAN.setAttribute('onclick', "document.getElementById('myModal_artt').style.display='none'");
  InsertSPAN.innerHTML = "&times;"
  //var contSPAN = document.createTextNode("&times;");
  //InsertSPAN.appendChild(contSPAN);

  var InsertIMG = document.createElement('img');
  InsertIMG.setAttribute('class', "modal-content_artt");
  InsertIMG.setAttribute('id', 'img01_artt');

  Docu.appendChild(InsertDIV);
  InsertDIV.appendChild(InsertSPAN);
  InsertDIV.appendChild(InsertIMG);
}

 loadDIV()
 
// JavaScript Document
function showImg() {
// Get the modal
var modal = document.getElementById('myModal_artt');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = $('.myImg');
var modalImg = $("#img01_artt");
//var captionText = document.getElementById("caption");

//console.warn(img)

$('.myImg').click(function(){

    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    //captionText.innerHTML = this.alt;
    
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close_artt")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
}

function loadCSS(url) {
  var lnk = document.createElement('link');
  lnk.setAttribute('type', "text/css" );
  lnk.setAttribute('rel', "stylesheet" );
  lnk.setAttribute('href', "https://cdn.jsdelivr.net/gh/gabrieldouurado/script_proepi/style_v2.css" );
  
  document.getElementsByTagName("head").item(0).appendChild(lnk);
  
}


 loadCSS(URL)


 
