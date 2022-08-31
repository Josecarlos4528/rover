canvas=document.getElementById("micanvas");
ctx=canvas.getContext("2d");
imagenesmarte=["mars.jpg", "mars1.jpg", "mars2.jpg", "mars3.jpg", "mars4.jpg", "mars5.jpg"];
numeroaleatorio=Math.floor(Math.random()*6);
console.log(numeroaleatorio);
roverwidth=100;
roverheight=90;
roverx=10;
rovery=10;
imagenfondo=imagenesmarte[numeroaleatorio];
console.log("la imagen de fondo es: "+imagenfondo);
imagenrover="rover.png";
function agregar(){
    etiquetaimagenfondo=new Image();
    etiquetaimagenfondo.onload=cargarfondo;
    etiquetaimagenfondo.src=imagenfondo;
    etiquetaimagenrover=new Image();
    etiquetaimagenrover.onload=cargarrover;
    etiquetaimagenrover.src=imagenrover;
}
function cargarfondo(){
    ctx.drawImage(etiquetaimagenfondo,0,0,canvas.width,canvas.height);
}
function cargarrover(){
    ctx.drawImage(etiquetaimagenrover,roverx,rovery,roverwidth,roverheight);
}
window.addEventListener("keydown",miteclado);
function miteclado(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
        up();
        console.log("arriba");
    }
    if(keyPressed=='40'){
        down();
        console.log("abajo");
    }
    if(keyPressed=='37'){
        left();
        console.log("izquierda");
    }
    if(keyPressed=='39'){
        right();
        console.log("derecha");
    }
}
function up(){
    if(rovery>=0){
        rovery=rovery-10;
        console.log("cuando se presiona la flecha arriba x es igual "+roverx+" y y es igual "+rovery);
        cargarfondo();
        cargarrover();
    }
}
function down(){
    if(rovery<=550){
        rovery=rovery+10;
        console.log("cuando se presiona la flecha abajo x es igual "+roverx+" y y es igual "+rovery);
        cargarfondo();
        cargarrover();
        }
        }
function left(){
    if(roverx>=0){
        roverx=roverx-10;
        console.log("cuando se presiona la flecha izquierda x es igual "+roverx+" y y es igual "+rovery);
        cargarfondo();
        cargarrover();
    }
}
function right(){
    if(roverx<=750){
        roverx=roverx+10;
        console.log("cuando se presiona la flecha derecha x es igual "+roverx+" y y es igual "+rovery);
        cargarfondo();
        cargarrover();
    }
}