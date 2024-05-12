let constante = 10;
let valor = parseInt(prompt("Coloca un valor acá: "));

for(let i = 0; i<= constante;i++){
	document.write(

		`
		<h2>${valor} x ${i} = ${(valor * i)}</h2>

		`

		)
}