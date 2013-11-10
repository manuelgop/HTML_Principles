//1. Get the Objects
//2. Set Parametres/propiedades
//3.Action-(Make chape of line)
function makeCanvas () {
	//.1 THE OBJECTS
	var canvas1 = document.getElementById('canvas1');//1.
	var ctx1 = canvas1.getContext('2d');//1.
	//.2 SET PROPIEDADES
	ctx1.font ='32pt Arial';
	ctx1.fillStyle = 'DeepSkyBlue';
	ctx1.strokeStyle = 'black';
	//.3 THE ACTION
	ctx1.fillText("I Love HTML5", 45,150);
	ctx1.strokeText("I Love HTML5", 45, 150);

	//CANVAS 2 -SQUARES
	//1.THE OBJECTS
	var canvas2 = document.getElementById('canvas2');
	var ctx2 = canvas2.getContext('2d');

	//2.SET PROPIEDADES
	ctx2.fillStyle= "#ff0000";//RED
	ctx2.strokeStyle = "#000000";//Color negro de la linea
	ctx2.lineWidth = 10;//Ancho de la linea negra

	//3.Make rectangulos

	//rectangulo rojo
	ctx2.fillRect(45,5,135,135);
	ctx2.strokeRect(45,5,135,135);

	//Rectangulo gris
	ctx2.fillStyle = "#666666";
	ctx2.fillRect(200,0,135,135); 

	//Segundo rectangulo gris
	ctx2.fillStyle = "#666666";
	ctx2.fillRect(45,150,135,135); 

	//Segundo rectangulo rojo

	ctx2.fillStyle= "#ff0000";//RED
	ctx2.strokeStyle = "#000000";//Color negro de la linea
	ctx2.lineWidth = 10;//Ancho de la linea negra

	ctx2.fillRect(200,150,135,135);//izquierda,altura,tamano de los lados de la figura
	ctx2.strokeRect(200,150,135,135);

	//Lines

	//1. The objects
	var canvas3 = document.getElementById('canvas3');
	var ctx3 = canvas3.getContext('2d');
	//2.
	ctx3.strokeStyle = "#666666";//GRIS
	ctx3.fillStyle = "#ff0000";
	ctx3.lineWidth = 5;
	//3
	ctx3.beginPath();
	ctx3.moveTo(100,100);//horizontal, vertical
	ctx3.lineTo(150,200);//x,y
	ctx3.lineTo(200,200);
	ctx3.lineTo(200,290);
	ctx3.lineTo(290,290);
	ctx3.lineTo(290,100);
	ctx3.lineTo(100,100);
	ctx3.stroke();
	ctx3.fill();
	ctx3.closePath();

	//Circles
	//1. The objects
	var canvas4 = document.getElementById('canvas4');
	var ctx4 = canvas4.getContext('2d');
	//PRIMER CIRCULO AZUL
	ctx4.fillStyle = "blue";

	ctx4.beginPath();
	ctx4.arc(200,30,25,0, Math.PI * 2);
	ctx4.fill();
	ctx4.closePath();

	ctx4.fillStyle = "red";
	ctx4.beginPath();
	ctx4.arc(200,100,45,0, Math.PI * 2);
	ctx4.fill();
	ctx4.closePath();

	ctx4.fillStyle = "black";
	ctx4.beginPath();
	ctx4.arc(200,220,75,0, Math.PI * 2);
	ctx4.fill();
	ctx4.closePath();


	///ANIMATION CANVAS 5
	var canvas5 = document.getElementById('canvas5');
	var ctx5 = canvas5.getContext('2d');

	var posX = 0;
	var posY = 0;
	setInterval(function(){

		posX+=1;
		posY+=1;

		if (posX===canvas5.width) {
			posX=0;
		};
		ctx5.fillStyle = "black";
		ctx5.fillRect(0,0,canvas5.width,canvas5.height);
		ctx5.fill();

		ctx5.fillStyle = "white";
		ctx5.beginPath();
		ctx5.arc(posX,120,55,0,Math.PI * 2);
		ctx5.fill();
		ctx5.closePath();


		ctx5.fillStyle = "red";
		ctx5.beginPath();
		ctx5.arc(posX,posY,55,0,Math.PI * 2);
		ctx5.fill();
		ctx5.closePath();
		


	}, 30);


}