const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function drRect(posx,posy,width,height,color){
	ctx.fillStyle = color;
	ctx.fillRect(posx,posy,width,height);
	
}

function drSprite(img,posx,posy,width,height){
	ctx.drawImage(img,posx,posy,width,height);
	
}