const a = 4;
const b = 6;
const c = ('5' as unknown) as number;
const d = ('cat' as unknown) as number;


const multiply = (num1: number, num2: number) => {
    console.log('${num1} * ${num2} =', num1 * num2);
};

const add = (num1: number, num2: number) => {
    console.log('${num1} + ${num2} =', num1 + num2);
};

multiply(a,b);
multiply(a,c);


add(a,b);
add(a,c);
add(a, d);