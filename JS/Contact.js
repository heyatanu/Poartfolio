var contact_loading=document.getElementById("contact_loading");
function contact_shade(){
  setTimeout(function(){
    contact_loading.style.display='none';
    contacttypeWriter()
 }, 1000);

 setTimeout(function(){
  $("#contactP").slideToggle("slow");
  document.querySelector(".contact_contant").style.display="block";
  document.querySelector(".contact_contant").style.display="grid";
}, 2500);

setTimeout(function(){
  document.querySelector("#contactP").style.display="none";
}, 5000);
}

var cs = 0;
var contacttxt = 'C:\Users\Atanu Dutta> Checkijjbhidb ng ............'; /* The text */
var contactpeed = 50; /* The contactpeed/duration of the effect in milliseconds */

function contacttypeWriter() {
  if (cs < contacttxt.length) {
    document.getElementById("contactP").innerHTML += contacttxt.charAt(cs);
    cs++;
    // if (contacttxt.charAt(cs-1)=='.' ){
    //     contactP.innerHTML += (`<br>`);
    // }
    setTimeout(contacttypeWriter, contactpeed);
  }
}
