/**  
*MAYORES DE EDAD 
* Sea el nombre y la edad de varias personas. Se necesita un programa que lea estos datos y 
* reporte al final el porcentaje de personas que son mayores de edad. 
* Se tienen las siguientes personas: 
* Luis (15), Ana (19), José (21), Carmen (17), Rosa (18), 
* José (22), María (17), Luz (19), Rafael (23), Liz (15), Marcos (20) y Leo (16);
* La información de la salida requerida 
* presenta el siguiente formato: 
* Cantidad de personas: 10 
* Cantidad de personas mayor de edad: 7 
* Porcentaje de personas mayor de edad: 70%
*/

import Cl_mayorE from "./Cl_mayorE.js/index.js";
import {Cl_Persona} from "./persona.js"

let persona1 = new Cl_Persona(luis, 15);
let persona2 = new Cl_Persona(ana, 19);
let persona3 = new Cl_Persona(jose, 21);
let persona4 = new Cl_Persona(carmen, 17);
let persona5 = new Cl_Persona(rosa, 18);
let persona6 = new Cl_Persona(jose2, 22);
let persona7 = new Cl_Persona(maria, 17);
let persona8 = new Cl_Persona(luz, 19);
let persona9 = new Cl_Persona(rafael, 23);
let persona10 = new Cl_Persona(liz, 15);
let persona11 = new Cl_Persona(marcos, 20);
let persona12 = new Cl_Persona(leo, 16);
let mayorE = new Cl_mayorE();

let salida = document.getElementById("salida");
salida.innerHTML = `
cantidad de personas: ${mayorE.cantPersonas()}
<br>cantidad de personas mayor de edad: ${mayorE.cantMayoresEdad()}
<br>porcentaje de personas mayor de edad: ${mayorE.porcentajeMayoresEdad()}
`;
