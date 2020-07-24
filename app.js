
/*--------------------height----------*/
$(document).ready(function(){

    var height = $(window).height();

    $("h1").height(height);

    $("h1").css("font-size" , "65px");

    /*--------------colorandom------------*/

    var cambio = document.getElementById("cuerpo");
    function randomColor(){
        return Math.floor(Math.random() * 255);
    }

    var intervalo = setInterval(a,  500); 

    function a() {
        cambio.style.backgroundColor = 'rgba('+randomColor()+','
        +randomColor()+','+randomColor()+')'
        
    }

    /*--------------------colorrandombackground----------------*/

    var cambioo = document.getElementById("h11");
    function randomColor(){
        return Math.floor(Math.random() * 255);
    }

    var intervaloo = setInterval(b,  500); 

    function b() {
        cambioo.style.backgroundColor = 'rgba('+randomColor()+','
        +randomColor()+','+randomColor()+')'
        
    }


    

    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if (!isChrome){
        $('#iframeAudio').remove()
    }
    else {
        $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
    }


});




   
