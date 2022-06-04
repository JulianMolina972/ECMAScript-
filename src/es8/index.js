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


//Async Await

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    });
};


const helloAsync = async () => {
    const hello = await helloWorld();
    console.log(hello);
}

helloAsync();


const anotherFunction = async () => {
    try {
        const hello = await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error);
    }
};

anotherFunction();