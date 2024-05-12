

// let valor = 5;

// while(valor <= 10){
// 	document.write(valor);
// 	valor++;
// }

alert(
	`
	1-sumar
	2-restar
	3-multiplicar
	4-dividir
	5-salir

	`

	);


let opciones = parseInt(prompt("coloca un número para elegir las opciones deseadas: "));


while(opciones < 5){
	let valor1 = prompt("coloca primer valor: ");
	let valor2 = prompt("coloca segundo valor: ");
	
	if(opciones == 1){
		
		if(!isNaN(valor1) && !isNaN(valor2)){
			let resultado1 = parseInt(valor1) + parseInt(valor2);
			document.write("la suma es: " + resultado1);
			break;
		}else{
			document.write("Solo se aceptan valores numéricos !!!");
		}
	
	}else if(opciones == 2){
		if(!isNaN(valor1) && !isNaN(valor2)){
			let resultado2 = parseInt(valor1) - parseInt(valor2);
			document.write("la resta es: " + resultado2);
			break;
		}else{
			document.write("Solo se aceptan valores numéricos !!!");
		}
		
	}else if(opciones == 3){
		if(!isNaN(valor1) && !isNaN(valor2)){
			let resultado3 = parseInt(valor1) * parseInt(valor2);
			document.write("la multiplicación es: " + resultado2);
			break;
		}else{
			document.write("Solo se aceptan valores numéricos !!!");
		}
		
	}else if(opciones == 4){
		if(!isNaN(valor1) && !isNaN(valor2)){
			let resultado4 = parseInt(valor1) / parseInt(valor2);
			document.write("la división es: " + resultado4);
			break;
		}else{
			document.write("Solo se aceptan valores numéricos !!!");
		}
	}

}