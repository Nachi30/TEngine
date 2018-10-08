//Variables
let estado = false;
let loop;
const boton = document.getElementById("boton");
let FPS = 30;
boton.addEventListener("click", start);

//Funciones
introMsg=true;
var restartGame=document.getElementById("restart");
let texto_gameover = document.getElementById("texto");
let juego = "perdiste";
mapa = new Image();
mapa.src="imagenes/map.png";


//............................................Dibujo de contenido...........................................................................................
const draw = () => {
	
	ctx.clearRect(0,0,canvas.width,canvas.height);
	
}
//........................................ Función Principal ..............................................................
const main = () => {
	if (estado) {
		draw();
		collides();
		frame();
	}
}
//........................................ Fin del Juego ..............................................................

//........................................Colisiones de juego..............................................................

const collides = () => {

}	
//........................................Actualiza el contenido..............................................................		
const update = () => {
    
}
//........................................Llama a todas las funciones del juego..............................................................

const frame = () => {
	if(estado){
		//loop = requestAnimationFrame(frame); //Esta función es dañina, hace que frame se ejecute más veces que update, por eso generaba el error
		//de que raditz fuera cada vez más rápido, no es necesaria
		update_var = setInterval(update,1000/FPS);
	}
}
//........................................Define el estado del juego..............................................................
function start() {
	if(!estado){
		estado = true;
		texto_gameover.innerHTML = "";
		boton.innerHTML = "pausar";
		main();
	} else {
		//Este else hace que el juego termine, ya sea cuando den a restart o start nuevamente.

		cancelAnimationFrame(loop);
	}
}
