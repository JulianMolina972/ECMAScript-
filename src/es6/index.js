function newFunction(name, age, country) {
    var name = name || 'julian';
    var age = age || 22;
    var country = country || 'CO';
    console.log(name, age, country);
};

newFunction();
//es6


function newFunction2(name = 'julian', age = 22, country = 'CO'){
    console.log(name, age,country);
};


newFunction2();
newFunction2('Ricardo', 23, 'CO');

//Imprimir variables en consola sin +  

let hello = 'Hello';
let world = 'World';
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


//variables
//antes
let lorem = "Nunca te rindas, confia en tí mismo, todo lo puedes logras si lo deseas \n"
+ "Trata de ser una mejor persona cada dia."


//es6
let lorem2 = `Vamos tu puedes
No te rindas 
`;

console.log(lorem);
console.log(lorem2);


let person = {
    'name1': 'Julian',
    'age': 22,
    'country': 'CO',
};

console.log(person.name, person.age, person.country);

// acceder a un valor de un objeto 
let {name1} = person;

console.log(name1);

let team1 = ['Oscar', 'Julian', 'Ricardo'];
let team2 = ['Valeria', 'Yesica', 'Camila'];

let education = ['David', ...team1, ...team2];

console.log(education);


var hola = 'hola';

{
    var globalVar = "Global var";
}

{
    let globalLet = 'Global Let';
    console.log(globalLet);
}

console.log(globalVar);


const a = 'b';


//establecer un objeto
let name2 = 'julian';
let age2 = 22;

//antigua 

obj = {name: name2, age: age2};

//es6
obj2 = {name2, age2};

console.log(obj2);

//arrow functions, las arrow function son funciones anónimas

const names = [
    {name: 'Julian', age: 22},
    {name: 'Ana', age: 20}
];

let listOfNames = names.map(function(item) {
    console.log(item.name);
});

let listOfNames2 = names.map(item => {
    console.log(item.name)
});


const listOfNames3 = (name4, age4, country4) => {
    
}

const listOfNames4 = name => {
    
}

const square = num => num * num;

//promesas

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if(false){
            resolve('Hey, todo bien!')
        } else {
            reject('Ups!!');
        }
    });
};

helloPromise()
    .then(response => console.log(response))
    .then(() =>  console.log('Hello'))
    .catch(error => console.log(error));


//calses

class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sum(2,2));

//modulos

//import myhello from './module';
const hello1 = require('./module');
console.log(hello1());

//generators

function* helloWorld(){
    if (true) {
        yield 'Hello, ';
    }

    if (true) {
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
