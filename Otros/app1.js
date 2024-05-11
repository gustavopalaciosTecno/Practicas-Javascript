
let numero = 10;
let tabla = parseInt(prompt("Introducí un número acá para realizar la operación: "));

for(let i = 0; i <= numero; i++){
	document.write(`<h4> ${tabla} x  ${i}  =   ${(tabla * i)}  </h4>`);
}