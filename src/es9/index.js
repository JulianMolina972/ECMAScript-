//operador de PROPAGACIÓN extrae las propiedades de un objeto que aún no se ha construido 

const obj = {
    name1: 'Julian',
    age: 22,
    country: 'CO',
};

let { name1, ...all } = obj;
console.log(name1, all);
let { country, ...all1 } = obj;
console.log(all1);

const obj2 = {
    name2: 'Julian',
    age: 22,
}

const obj3 = {
    ...obj2,
    country: 'CO'
}

console.log(obj3);

//

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve ('Hello World'), 3000)
        : reject (new Error('Test Error'))
    });
}

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally (() => console.log('Finalizo'));


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2022-06-04');
const year = match[1]
const month = match[2]
const day = match[3]

console.log(year, month, day);