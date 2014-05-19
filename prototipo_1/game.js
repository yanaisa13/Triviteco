window.addEventListener('load',init,false);


function init(){
    canvas=document.getElementById('canvas');
    ctx=canvas.getContext('2d');
    paint(ctx);
}

document.addEventListener("DOMContentLoaded", iniciar, false);
function iniciar(){
    canvas.addEventListener("mousedown", ObtenerCoords, false);
}

function ObtenerCoords(event){
        var x = new Number();
        var y = new Number();
        var canvas = document.getElementById("canvas");
 
        if (event.x != undefined && event.y != undefined){
          x = event.x;
          y = event.y;
        }else{// Firefox
          x = event.clientX + document.body.scrollLeft +
              document.documentElement.scrollLeft;
          y = event.clientY + document.body.scrollTop +
              document.documentElement.scrollTop;
        }
 
        x -= canvas.offsetLeft;
        y -= canvas.offsetTop;
        x1 = x - x % 40;
        y1 = y - y % 40;
        alert("x: " + x1 + "  y: " + y1);
      }
function paint(ctx){

    var jugadorRojo = new Image();
		jugadorRojo.src = '/home/al-08-09/yanaisa/triviteco/prototipo_1/images/personajerojo40.png';
	var jugadorRojo = new Image();
		jugadorRojo.src = '/home/al-08-09/yanaisa/triviteco/prototipo_1/images/personajerojo40.png';		
	var jugadorAmarillo = new Image();
		jugadorAmarillo.src = '/home/al-08-09/yanaisa/triviteco/prototipo_1/images/personajeamarillo40.png';
	var jugadorVerde = new Image();
		jugadorVerde.src = '/home/al-08-09/yanaisa/triviteco/prototipo_1/images/personajeverde40.png';	
	var jugadorAzul = new Image();
		jugadorAzul.src = '/home/al-08-09/yanaisa/triviteco/prototipo_1/images/personajeazul40.png';
	var suelo = new Image();
		suelo.src = '/home/al-08-09/yanaisa/triviteco/prototipo_1/images/suelo2-40.png'
    for (i=1;i<=16;i++)
            {
                
                var j=1;
                for (j=1;j<=16;j++)
                {
                    if (i<=8 && j <=8)                    
                        ctx.fillStyle = "#79BEDB";         
                                            
                    else if (i<=8 && j>=8)
                    
                        ctx.fillStyle = "#99CC99";
                    
                    else if (i>=8 && j<=8)
                    
                        ctx.fillStyle = "#FFFF66";
                        
                    else
                    
                        ctx.fillStyle = "#FF3333";
                    //context.strokeStyle= "white";
                    ctx.strokeRect(i*40, +j*40, 40, 40);
		    ctx.fillRect(i*40, +j*40, 40, 40);
                    ctx.drawImage(suelo,40+i*40, +j*40);
                } 
            } 
            
        ctx.drawImage(jugadorRojo,360,360);
	ctx.drawImage(jugadorAmarillo,360,320);
	ctx.drawImage(jugadorVerde,320,360);
	ctx.drawImage(jugadorAzul,320,320);
	//ctx.drawImage(Torre,40,40);
    
  
}
