alert(`
	 (S) para sumar
	 (R) para restar
	 (M) para multiplicar
	 (D) para dividir
	`)

let opciones = prompt("Elegí la operación que queres realizar: ").toLowerCase();

if(opciones != " "){
	

	if(opciones == "s"){
		let valor1 = parseInt(prompt("coloca primer valor: "));
		let valor2 = parseInt(prompt("coloca segundo valor: "));
		let suma = valor1 + valor2;
		document.write("el resultado de la suma es: " + suma);
	
	}else if(opciones == "r"){
		let valor1 = parseInt(prompt("coloca primer valor: "));
		let valor2 = parseInt(prompt("coloca segundo valor: "));
		let resta = valor1 - valor2;
		document.write("el resultado de la resta es: " + resta);

	}else if(opciones == "m"){
		let valor1 = parseInt(prompt("coloca primer valor: "));
		let valor2 = parseInt(prompt("coloca segundo valor: "));
		let multiplicacion = valor1 * valor2;
		document.write("el resultado de la multiplicación es: " + multiplicacion);

	}else if(opciones == "d"){
		let valor1 = parseInt(prompt("coloca primer valor: "));
		let valor2 = parseInt(prompt("coloca segundo valor: "));
		let division = valor1 / valor2;
		document.write("el resultado de la división es: " + division);

	}else{
		alert("Elegí una letra para realizar las operaciones");
	}	



}else{
	alert("Los campos no deben estar vacíos");
}