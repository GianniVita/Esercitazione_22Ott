console.log("it's working");


const people = [ { name: 'Paolo', age: 35 }, { name: 'Giulia', age: 24 }, { name: 'Marco', age: 67 } ];

for (let i = 0; i < people.length; i++) {
    const peopleEl = people[i];
    
    // log the value
    console.log(peopleEl,i,people);
    
}

people.forEach((people, index, arr)=> {
    console.log(people, index);
    
})

people.forEach(function(person){
    console.log(person.length);
    
})
const peopleNames = []
for (let i = 0; i < people.length; i++) {

    const person = people[i];
    console.log(person.name);
//push to the array
    peopleNames.push(person.name)
}
// og the array
console.log(peopleNames);


// Array methods

//il metodo 'forEach' si aspetta un parametro
// esempio 
// Array.forEach() it's a method loop
// .forEach()
// (element, index, array)=>{}
    //{your code here}
/* people.forEach((elment, index, array) =>{
console.log();
}) */

const movies = ['Matrix', 'Starwars','Avatar']
// con una funzione anonima (take only what you need)
movies.forEach(function(movie){
    console.log(movie);
    console.log(movie.length);
}) 
// con una arrow function (you can have also other params)
movies.forEach((movie, i , array) =>{
    console.log(movie);
       
})

people.forEach((person)=>{
    console.log(person);
    console.log(typeof person);
    // square bracket notation
    console.log(person['name']);
    console.log(person.name);

    console.log(`${person.name} ${person.age}`);
    
})

people.forEach(person =>{
    console.log(person);
    
})
// define your function
function handleLoopPeople(person,i , arr) {
    
}
//with a callback handler
people.forEach(handleLoopPeople)

// 3 different syntax
// - with an anonimus arrow function as callback
// - with an anonimus function declaretion as callback
// - with a function handler



//Map un ciclo che restituisce qualcosa

const numeri = [1,2,3,4,5];
const quadrati = numeri.map((numero) =>{
    return numero * numero;

})

console.log(numeri);

const personNames = people.map((currenValue) =>{
        console.log(currenValue.name);
       // return currenValue.name
        return `name: ${currenValue.name} age: ${currenValue.age}`
        
})

const personName = people.map (currenValue => `name: ${currenValue.name} age: ${currenValue.age}`)

console.log(personName);


/* const numbers = numeri.map (curentValue => `numeri: ${curentValue.quadrati}`)

console.log(numbers); */

const numbers = [2, 8, 4, 7, 2, 87]; 
// Crea un nuovo array in cui tutti i numeri siano incrementati di 1

const incrementedNumbers = [];

// Ciclo for per scorrere ogni elemento dell'array originale
for (let i = 0; i < numbers.length; i++) {
  // Prendiamo il valore corrente e lo aumentiamo di 1
  const newValue = numbers[i] + 1;
  
  // Aggiungiamo il nuovo valore all'array incrementedNumbers
  incrementedNumbers.push(newValue);
}

// Stampiamo il nuovo array per controllare il risultato
console.log(incrementedNumbers);


// .map() crea un nuovo array applicando una funzione a ogni elemento
const incrementedNumber = numbers.map(function(number) {
    return number + 1;
  });
  
  console.log(incrementedNumber);


  // Filter array.filter() 
//
  const numbs = [10, 3, 5, 6, 11, 20]        

// create a new array that contains only even numbers
const evenNumbers = []
// with for loop?


for (let i = 0; i < numbs.length; i++) {
    const element = numbs[i];
    if (element % 2 === 0){
        evenNumbers.push(element);
    }
}

// log new array of even numbers here
console.log(evenNumbers);



const evenNumbs = []; 
numbs.forEach((element)=>{
    if (element % 2 === 0){
        evenNumbers.push(element);
    }
})

// log the new array of even numbers here
console.log(evenNumbs);

// opzione 1
/* const evenNumbersWithFilters = numbs.filter((element)=>{
    if (element  % 2 === 0){
        return true
    }
    return false
})
 */

// opzione 2
//const evenNumbersWithFilters = numbs.filter((element) => element  % 2 === 0)


//Opzione 3

const evenNumbersWithFilters = numbs.filter(element => element  % 2 === 0)

console.log(evenNumbersWithFilters);

//const evenNumbersWithMap = numbs.map(numbs,index,array)


// Find Method ha un return
const numeries =[1,2,3,4,5,];
const primoNumeroPari = numeries.find((numero) =>{

})

const peoples =[
    {id: 4, name: 'Paolo', age: 32},
    {id: 3, name: 'monica', age: 34},
];
// trova la persona con id 3
const myPerson = peoples.find((person)=>{
    return person.id === 3
})

console.log(myPerson);

/* 
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto. 

Infine stampa separatamente i 3 array
 */

const cars = [
  { brand: 'Ford', model: 'Fiesta', fuel: 'benzina' },
  { brand: 'Toyota', model: 'Corolla', fuel: 'diesel' },
  { brand: 'Honda', model: 'Civic', fuel: 'gpl' },
  { brand: 'Tesla', model: 'Model 3', fuel: 'elettrico' },
  { brand: 'Fiat', model: 'Panda', fuel: 'metano' },
  { brand: 'Volkswagen', model: 'Golf', fuel: 'benzina' },
  { brand: 'BMW', model: 'Serie 3', fuel: 'diesel' },
  { brand: 'Audi', model: 'A4', fuel: 'gpl' },
  { brand: 'Mercedes', model: 'Classe C', fuel: 'elettrico' },
  { brand: 'Peugeot', model: '208', fuel: 'metano' }
]

const cars1 = []
const cars2 = []
const cars3 = []

for (let i = 0; i < cars.length; i++) {
    const carType = cars[i];
   // cars1.push = (carType)

   if (carType.fuel ==='benzina') {
        cars1.push(carType)
   } else if (carType.fuel === 'diesel'){
        cars2.push(carType)
   } else {
        cars3.push(carType)
   }
};

console.log('Auto a benzina:', cars1 );
console.log('Auto diesel', cars2);
console.log('Resto delle Auto',cars3);


//Con il for each

cars.forEach((cars)=>{
    if (cars.fuel === 'benzina' && cars.fuel !== "diesel"){
        carType.push(cars2)
    }
})

// con Filter ?

