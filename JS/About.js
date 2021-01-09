var about_loading=document.getElementById("about_loading");

setTimeout(function(){ 
    about_loading.style.display="none";
    document.querySelector(".about_contant img").style.display="block";
    about_name_fun()
 }, 2000);
 setTimeout(function(){ 
    about_dis_fun()
 }, 3000);

 var ab = 0;
 var about_name = 'Atanu Dutta'; /* The text */
 var about_name_speed = 50; /* The about_name_speed/duration of the effect in milliseconds */
 
 function about_name_fun() {
   if (ab < about_name.length) {
     document.getElementById("about_name").innerHTML += about_name.charAt(ab);
     ab++;
     setTimeout(about_name_fun, about_name_speed);
   }
 }
 var ab_dis = 0;
 var about_dis = 'This is some dis about you . Some ramdom text here .'; /* The text */
 var about_dis_speed = 50; /* The about_dis_speed/duration of the effect in milliseconds */
 
 function about_dis_fun() {
   if (ab_dis < about_dis.length) {
     document.getElementById("about_dis").innerHTML += about_dis.charAt(ab_dis);
     ab_dis++;
     setTimeout(about_dis_fun, about_dis_speed);
   }
 }
 