let dias = parseInt(prompt("Coloca un dia de la semana: "));


switch(dias){
case 1:
	document.write("es el primer día de la semana\n(domingo)");
	break;
case 2:
	document.write("es el segundo día de la semana\n(lunes)");
	break;
case 3:
	document.write("es el tercer día de la semana\n(martes)");
	break;
case 4:
	document.write("es el cuarto día de la semana\n(miércoles)");
	break;	
case 5:
	document.write("es el quinto día de la semana\n(jueves)");
	break;	
case 6:	
	document.write("es el sexto día de la semana\n(viernes)");
	break;	
case 7:
	document.write("es el séptimo día de la semana\n(sábado)");
	break;	
default:
	document.write("no corresponde");	
}