var skills_loading=document.getElementById("skills_loading");
function skill_shade(){
  setTimeout(function(){
    skills_loading.style.display='none';
    skilltypeWriter()
 }, 1000);

 setTimeout(function(){
  $("#skillP").slideToggle("slow");
  document.querySelector(".skills_contant").style.display="block";
  document.querySelector(".skills_contant").style.display="grid";
}, 2500);

 
}

var ss = 0;
var skilltxt = 'C:\Users\Atanu Dutta> Checking ............'; /* The text */
var skillspeed = 50; /* The skillspeed/duration of the effect in milliseconds */

function skilltypeWriter() {
  if (ss < skilltxt.length) {
    document.getElementById("skillP").innerHTML += skilltxt.charAt(ss);
    ss++;
    // if (skilltxt.charAt(ss-1)=='.' ){
    //     skillP.innerHTML += (`<br>`);
    // }
    setTimeout(skilltypeWriter, skillspeed);
  }
}