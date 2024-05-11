let edad = parseInt(prompt("Ingresa tu edad: "));
let sueldo = parseFloat(prompt("Ingresa tu sueldo: "));
let integrantesFamilia = parseInt(prompt("Ingrese cuantos integrantes son: "));

if(edad >= 18 || sueldo >= 50000 || (integrantesFamilia > 0 && integrantesFamilia < 2)){
	document.write(
		`
		<h2 style="color:blue;">con una edad de ${edad} años y con un sueldo de ${sueldo}</h2>
		
		<h2 style="color:blue">Puede recibir una beca de 100000 mil dólares !!!</h2>

		`

		)
}else if(edad < 18 && sueldo < 30000 && (integrantesFamilia > 1 && integrantesFamilia < 10)){
	

		document.write(
			`


			<h2 style="color:green"><b>Puede recibir una beca de 300000 mil dólares !!!</b></h2>
			`
	

		);


}else{
	document.write(
			`


			<h2 style="color:red"><b>NO Puede recibir ningún tipo de beca !!!</b></h2>
			`
	

		);




}

