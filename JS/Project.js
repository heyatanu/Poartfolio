
var project_loading=document.getElementById("project_loading");
function project_shade(){
  setTimeout(function(){
    project_loading.style.display='none';
    projecttypeWriter()
 }, 1000);

 setTimeout(function(){
  $("#projectP").slideToggle("slow");
  document.querySelector(".project_contant").style.display="block";
}, 2500);

 
}

var pps = 0;
var projecttxt = 'C:\Users\Atanu Dutta> Checking proj............'; /* The text */
var projectspeed = 50; /* The projectspeed/duration of the effect in milliseconds */

function projecttypeWriter() {
  if (pps < projecttxt.length) {
    document.getElementById("projectP").innerHTML += projecttxt.charAt(pps);
    pps++;
    // if (projecttxt.charAt(pps-1)=='.' ){
    //     projectP.innerHTML += (`<br>`);
    // }
    setTimeout(projecttypeWriter, projectspeed);
  }
}