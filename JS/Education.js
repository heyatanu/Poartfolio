// var education_loading=document.getElementById("education_loading");
// setTimeout(function(){ 
//     education_loading.style.display="none";
//     document.querySelector(".education_contant").style.display="block";
//  }, 2000);


 
var education_loading=document.getElementById("education_loading");
function education_shade(){
  setTimeout(function(){
    education_loading.style.display='none';
    educationtypeWriter()
 }, 1000);

 setTimeout(function(){
  $("#educationP").slideToggle("slow");
  document.querySelector(".education_contant").style.display="block";
  document.querySelector(".education_contant").style.display="grid";
}, 2500);
setTimeout(function(){
  document.querySelector("#educationP").style.display="none";
}, 5000);
 
}

var ees = 0;
var educationtxt = 'C>Users>root>host> Checking  ............'; /* The text */
var educationpeed = 50; /* The educationpeed/duration of the effect in milliseconds */

function educationtypeWriter() {
  if (ees < educationtxt.length) {
    document.getElementById("educationP").innerHTML += educationtxt.charAt(ees);
    ees++;
    // if (educationtxt.charAt(ees-1)=='.' ){
    //     educationP.innerHTML += (`<br>`);
    // }
    setTimeout(educationtypeWriter, educationpeed);
  }
}
