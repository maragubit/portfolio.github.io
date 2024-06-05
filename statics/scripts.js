var arrayFrames=[];

function Luz(){
    // Get the image element by its ID
    var myImage = document.getElementById('imagen');
    var myAudio = document.getElementsByTagName('audio')[0];
    // Change the source of the image
    if (myImage.src.match("conluz")){
     myImage.src="statics/sinluz.jpg";
     myAudio.play();
    }
    else{
    myImage.src="statics/conluz.jpg";
    myAudio.pause();
    
    }
}


//DOM LOADED
document.addEventListener("DOMContentLoaded", function()
    {//ejecutamos este bloque una vez se cargue el DOM

    //EVENTO ABRIR FRAME
    var habilidades = document.getElementById("habilidades");
    var contacto = document.getElementById("contacto");
    var sobreMi = document.getElementById("sobreMi");
    var misProyectos = document.getElementById("misProyectos");
    arrayFrames.push(habilidades);
    arrayFrames.push(contacto);
    arrayFrames.push(sobreMi);
    arrayFrames.push(misProyectos);
    for (var i = 0; i < arrayFrames.length; i++) {
        (function(i) {
            arrayFrames[i].addEventListener("click", function(event) {
                // Ejecutamos este bloque al hacer click en el mapa
                event.preventDefault(); // Previene la acción por defecto del área de mapa
                var iframe = document.getElementsByTagName("iframe")[i]; // Accedemos al elemento según el índice
                iframe.removeAttribute("hidden"); // Hacemos visible el frame
            });
        })(i);
    }//FIN EVENTO ABRIR FRAMES

    //EVENTO CERRAR FRAME SKILLS
    // Manejo del mensaje desde el iframe para evitar cruce de origenes
    window.addEventListener("message", function(event) {
        if (event.data === "closeIframe") {
            var iframe = document.getElementsByTagName("iframe");
            for(var i=0;i<iframe.length;i++) {
                iframe[i].setAttribute("hidden", "hidden");
            }
        }
    });
            
}, false);

