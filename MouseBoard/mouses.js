var d = document.getElementById('intentos')
var esta = d.getContext('2d');
var estado;
document.addEventListener('mousedown', detectarClick);
document.addEventListener('mousemove', comienzoDibujo);
document.addEventListener('mouseup', finalDibujo);
var x;
var y; 
var icolor = 'aqua';

function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle =  color;
    lienzo.lineWidth = 3 ;
    lienzo.moveTo(x_inicial,y_inicial);
    lienzo.lineTo(x_final,y_final);
    lienzo.stroke();
    lienzo.closePath();
}

dibujarLinea('brown', 0, 500, 0, 0, esta);
dibujarLinea('brown', 0, 500, 500, 500, esta);
dibujarLinea('brown', 0, 0, 500, 0, esta);
dibujarLinea('brown', 500, 0, 500, 500, esta);


function detectarClick(evento)
{
  estado = 1;
  x = evento.layerX;
  y = evento.layerY
}


function comienzoDibujo(evento)
{
    if (estado == 1)
        {
            dibujarLinea(icolor, x, y, evento.layerX, evento.layerY, esta)
        }

    x = evento.layerX;
    y = evento.layerY;

}



function finalDibujo(evento)
{
    estado = 0;
    x = evento.layerX;
    y = evento.layerY
}

