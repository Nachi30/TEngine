var canvas = document.getElementById("canvas");
		 	var ctx = canvas.getContext("2d");

function drRect(posx,posy,width,height,color){
	ctx.fillStyle = color;
	ctx.fillRect(posx,posy,width,height);
	
}

function drMap(mapa){	

	var anchoF = 48;
	var altoF = 32;

	var cesped = '#69db3f';
	var agua = '#3fbbdb';
	var tierra = '#a07039';
	var laba = '#E16611';

	

		var color;

		for(y=0;y<10;y++){
			for(x=0;x<10;x++){
			if(mapa[y][x]==0)
				color=cesped;
			
			if(mapa[y][x]==1)
				color=agua;
			
			if(mapa[y][x]==2)
				color=tierra;

			if(mapa[y][x]==3)
				color=laba;
			

			ctx.fillStyle = color;
			ctx.fillRect(x*anchoF,y*altoF,anchoF,altoF);
	}}}