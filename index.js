/* // comentar en una linea "//" document.getElementById("count-el").innerText=5

let count = 1

console.log(count)

// javaScript lee de arriba a abajo 

let myAge = 27
console.log(myAge)

//Sumar dos valores y asignarlo a una variable 

let firstBatch=5
let secondBatch=5

let suma=firstBatch+secondBatch
console.log(suma)

//Multiplicar dos valores

let myAge2 =27
let humanDogRatio=7

let myDogAge=myAge2*humanDogRatio

console.log(myDogAge)

// Sumar valor a una variable

let bonusPoints = 50
console.log(bonusPoints)

bonusPoints = bonusPoints + 100
console.log(bonusPoints)

bonusPoints = bonusPoints-25
console.log(bonusPoints)

bonusPoints=bonusPoints+70
console.log(bonusPoints) 


 function increment() {
   console.log('The button was click')
}  

//mostrar numero

function numero() {
   console.log(42);
}

numero(); *

//sumar

let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function suma() {
   console.log(lap1 + lap2 + lap3);
}

suma();

// aumentar

let lapsCompleted = 0;
function lapCompletedplus() {
   lapsCompleted++;
   console.log(lapsCompleted);
}

lapCompletedplus();
lapCompletedplus();
lapCompletedplus(); 

// Hacer contador interactivo

//camelCase = primera letra minuscula y segunda letra mayuscula

function increment() {
   console.log('The button was click')
}   */

let countEl = document.getElementById("count-el");
let contaador = 0;
function subirCont() {
  contaador = contaador + 1;
  countEl.innerText = contaador;
}

/* const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 
 
// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);
 
// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};
  */

/* let cupsOfSugarNeeded = 777
let cupsAdded = 0

do {
   cupsAdded++
   console.log(cupsAdded)
   
   } while (cupsAdded < cupsOfSugarNeeded)
    */
