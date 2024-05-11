/* 
OPERADORES LOGICOS:
> (mayor)
< (menor)
>= (mayor igual)
<= (menor igual)
== (igual) se comparan los valores

OPERADORES UNARIOS
++ incremento
--decremento

OPERADORES DE ASIGNACIÓN
+= 
-=
*=
/=
% (operador módulo)

*/

// Operadores lógicos
let Maria = 35;
let Johana = 27;
let Albana = 32;

let edadMayor1 = Maria > Johana;
document.write(edadMayor1);

document.write("<br/>" + "------" + "<br/>");

let edadMayor2 = Albana > Johana;
document.write(edadMayor2);

document.write("<br/>" + "------" + "<br/>");

let edadMayor3 = Albana < Johana;
document.write(edadMayor3);

document.write("<br/>" + "------" + "<br/>");

// Operadores unarios
Maria++;
document.write(
	`
	 <p>el incremento de la edad es: ${Maria}</p>;
	`

	)


Johana--;
document.write(
	`
	 <p>el decremento de la edad es: ${Johana}</p>;
	`

	)

document.write("<br/>" + "------" + "<br/>");

//OPERADORES DE ASIGNACIÓN
 let number = 20;
 let number2 = 3;
 let result = number % number2;
 document.write("el resultado del módulo es:" + result);

document.write("<br/>" + "------" + "<br/>");
let incremento = 0;
incremento += 10;
document.write("incremento="+ incremento);

document.write("<br/>" + "------" + "<br/>");

let decremento = 5;
decremento -= 3;
document.write("decremento=" + decremento);

document.write("<br/>" + "------" + "<br/>");

number*= 5;
document.write("incremento del producto=" + number);

document.write("<br/>" + "------" + "<br/>");

number/= 5;
document.write("decremento de la división=" + number);