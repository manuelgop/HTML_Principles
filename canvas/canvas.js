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
	ctx1.fillText("I loVe HTML5", 45,150);
	ctx1.strokeText("I loVe HTML5", 45, 150);

	//CANVAS 2
	//THE OBJECTS
	var canvas2 = document.getElementById('canvas2');
	var ctx2 = canvas2.getContext('2d');
	//SET PROPIEDADES
	ctx2.fillStyle= "#ff0000";//RED
	ctx2.strokeStyle = "#000000";
	ctx2.lineWidth = 10;//Linea negra.

	//Make rectangulos

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
	ctx2.fillRect(200,150,135,135);//izquierda,altura,tamano de los lados de la figura
	ctx2.strokeRect(200,150,135,135);
}