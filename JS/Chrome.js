var loading=document.getElementById("loading");
var glowtextvar=document.getElementById("glow");
setTimeout(function(){ 
    loading.style.display="none";
    typeWriter()
 }, 800);
 
 var kk = 0;
 var glowtxt = `01001 000 01100101 01101100 01 001000 011001 01 01100 0 0 00101 1001  
`;
 var glowspeed = 30;

 function typeWriter() {
   if (kk < glowtxt.length) {
     glowtextvar.innerHTML += glowtxt.charAt(kk);
     kk++;
     if (glowtxt.charAt(kk-1)=='.' ){
        glowtextvar.innerHTML += (`<br>`);
    }
     setTimeout(typeWriter, glowspeed);
   }
 }

 setTimeout(function(){ 
    glowtextvar.style.animation = "myAnimation 1s ";
 }, 2500);
 
//  setTimeout(function(){ 
//     glowtextvar.style.display = "none";
//  }, 5000);

 setTimeout(function(){ 
    glowtextvar.style.display = "block";
    glowtextvar.innerHTML = "";
    glowtextvar.style.fontSize='20px';
    kk=0
    glowspeed=50
    glowtxt="Translation......";
    typeWriter();
 }, 3500);

 setTimeout(function(){ 
    glowtextvar.style.display = "block";
    glowtextvar.innerHTML = "";
    glowtextvar.style.fontSize='30px';
    kk=0
    glowspeed=100
    glowtxt="Translate Complete ";
    typeWriter();
 }, 4500);
 setTimeout(function(){ 
    glowtextvar.style.display = "block";
    glowtextvar.innerHTML = "";
    kk=0
    glowspeed=100
    glowtxt="Welcome User. Hello i'm a Web devloper";
   glowtextvar.style.animation="glow 1s ease-in-out infinite alternate"
    typeWriter();
 }, 6300);



