const data = {
    frontend: 'julian',
    backend: 'David',
    design: 'Ana',
}

const entries = Object.entries(data);

console.log(entries);

console.log(entries.length);


const values = Object.values(data);
console.log(values);

const keys = Object.keys(data);
console.log(keys);



const string = 'hello';
console.log(string.padStart(10, 'hi'))

console.log('food'.padEnd(12, '  -----'));

