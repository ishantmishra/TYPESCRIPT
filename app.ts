function add(n1: number, n2: number) {
    console.log(typeof n1 === 'number' && typeof n2 === 'number');
    return n1 + n2;
}

const number1 = 5;
const number2 = 23;

const result = add(number1, number2);
console.log(result);
