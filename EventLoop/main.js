const fs = require('fs');




/*

Event Loop Note:

The polling phase is a bit more complex than just adding to the poll 
queue. If there are no timers left to execute when the polling phase is
 reached, the poll phase will wait for input/output callbacks. If the 
 I/O contains synchronous code, this code will not be added to the call
  stack till the polling phase is reached. If setImmediate() is reached,
   the polling phase will end and the check phase will begin. If 
   setImmediate() is not called, the polling phase will continue to wait 
   for a bit, and then move on through the next phases to execute 
   additional timers and so forth.

Let's walk through a demonstration to help you visualize the loop. The 
code you see will be unfamiliar at this point, but by the end of this 
course, you'll fully understand it.
*/



// Mainline
console.log('Hello, ----------- mainline');
console.log('world. ----------- mainline');

// end mainline / pre timers phase 1
process.nextTick(() => {
  console.log('nexttick --------- before event loop');
});

// timers phase 1
setTimeout(() => {
  console.log('timeout - 0s ----- Timers 1');
}, 0);

// timers phase 1
setImmediate(() => {
  console.log('immediate -------- Timers 1');
});

// timers phase 1
setTimeout(() => {
  console.log('timeout - 0s ----- Timers 1');
}, 0);

// begin polling phase
fs.readFile(__filename, () => {
  // end poll phase
  process.nextTick(() => {
    console.log('nexttick i/o ----- After Polling');
  });
  // check phase
  setImmediate(() => {
    console.log('immediate i/o ---- Check');
  });
  // timers phase 2
  setTimeout(() => {
    console.log('timeout i/0 0s --- Timers 2');
  }, 0);
  // timers phase 3
  setTimeout(() => {
    console.log('timeout i/0 3s --- Timers 3');
  }, 3000);
});

// timers phase 4
setTimeout(() => {
  console.log('timeout - 5s ----- Timers 4');
}, 5000);

process.on('beforeExit', () => {
  console.log('process.on ------- beforeExit');
});