//Variables
var canvas = document.getElementById("canvas");
		 	var ctx = canvas.getContext("2d");
		 	var state = false;
		 	var loop;
		 	var boton = document.getElementById("boton");
			var FPS = 30;
		 	boton.addEventListener("click", State);

//Funciones:

//............................................Dibujo de contenido...........................................................................................
function draw(){
		 		ctx.clearRect(0,0,canvas.width,canvas.height);
				
				console.log("TEngine se esta ejecutando correctamente...")
			}

//........................................Colisiones de juego..............................................................
		
function collides(){
		 		
			   
			
		 	}	
				
//........................................Actualiza el contenido..............................................................		
		 	function update(){
			    
				    }

//........................................Llama a todas las funciones del juego..............................................................
		 	
			function frame(){
		 		update();
		 		collides();
		 		draw();
		 		loop = requestAnimationFrame(frame);
		 	}

//........................................Define el estado del juego..............................................................
		 	function State(){
		 		if(!state){
		 			state = true;
		 			setInterval(function(){
					frame();},1000/FPS)
		 		} else {
		 			state = false;
		 			cancelAnimationFrame(loop);
		 		}
		 	}
