import arrays from './utilities/arrays.js';
import numbers from './utilities/numbers.js';
import strings from './utilities/strings.js';

const numArr = [3, 4, 5, 6];
const wordArr = ['cat', 'dog', 'rabbit', 'bird'];
const arrSum = arrays.addArr(numArr);
const mixArr = arrays.concatArr(numArr, wordArr);
const myNum = ('15' as unknown) as number % 2;
const five = parseInt('5');


console.log(arrays.cut3(mixArr));
console.log(numbers.sum(arrSum, myNum));
console.log(strings.capitalize('the quick brown fox'));
console.log(numbers.multiply(five, 8));
console.log(arrays.lgNum(mixArr));

// TASK  
/*This project is already configured to work with TypeScript and Jasmine.

Your task is to write at least one spec per function used on the index.ts file.

There should be at least 7 specs.
You must use at least 5 different matchers for your tests. All of your specs can be on 1 spec file.
Make sure to build your TypeScript project and make certain all of your tests pass. Check the 
package.json file to view scripts available.

NOTE: a popup of "Renderer Failure: tsconfig.json" may open when starting this project. It is safe 
to ignore this error. Error is due to the comments in tsconfig.json not being considered valid JSON;
 however, it is generally considered safe to place comments in JSON config files.

*/


// INSTRUCTIONS ON HOW TO RUN: 
// - sit at root dir of project (not src)
// - compile the project. 'npm run test' 


