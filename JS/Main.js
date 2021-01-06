$(document).ready(function() {
    // $(function() { $('#divContainer').draggable({ scroll: false }); });
    $(function() { $("#divResize").draggable({scroll: false}).resizable({
        minHeight: 350,
        minWidth: 350
    }); });
    $(function() { $("#divContainer").draggable({scroll: false}).resizable({
        minHeight: 450,
        minWidth: 450
    }); });
    $(function() { $("#about").draggable({scroll: false}).resizable({
        minHeight: 300,
        minWidth: 300 
    }); });
    $(function() { $("#education").draggable({scroll: false}).resizable({
        minHeight: 350,
        minWidth: 350 
    }); });
    $(function() { $("#project").draggable({scroll: false}).resizable({
        minHeight: 350,
        minWidth: 350 
    }); });
    $(function() { $("#skills").draggable({scroll: false}).resizable({
        aspectRatio: 10 / 9,
        minHeight: 400,
        minWidth: 350 
    }); });
    $(function() { $("#contact").draggable({scroll: false}).resizable({
        minHeight:450,
        minWidth: 550,
        maxWidth: 550,
        maxHeight:450
       
    }); });
    $(".welcome").click(function(){
        $("#divResize").slideToggle("slow");
        navbar_toggle()
    });
    $(".about_cls").click(function(){
        $("#about").slideToggle("slow");
        navbar_toggle()
    });
    $(".education_cls").click(function(){
        $("#education").slideToggle("slow");
        education_shade()
        navbar_toggle()
    });
    $(".project_cls").click(function(){
        $("#project").slideToggle("slow");
        project_shade()
        navbar_toggle()
    });
    $(".skills_cls").click(function(){
        $("#skills").slideToggle("slow");
        skill_shade()
        navbar_toggle()
    });
    $(".contact_cls").click(function(){
        $("#contact").slideToggle("slow");
        contact_shade()
        navbar_toggle()
    });
    $("#t_o_g_id").click(function(){
        $(".t_o_g").slideToggle("slow");
    });
});
$( function() {
$( "#accordion" ).accordion({ 
  heightStyle: "content"
});
} );
$( function() {
    $( "#project_accordion" ).accordion({
      heightStyle: "content"
    });
    } );

function navbar_toggle(){
    if(document.getElementById("t_o_g_id")=="block"){
$(".t_o_g").slideToggle("slow");
    }
        
    
}