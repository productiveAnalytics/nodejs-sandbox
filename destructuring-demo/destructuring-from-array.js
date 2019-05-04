// Destructuring Array by element position
const[first, second, third, , , sixth] = [10,20,30,40,50,60];
console.log(`firsth =${first}`);
console.log(`second =${second}`);
console.log(`third  =${third}`);
// fourth and fifth are not collected
console.log(`sixth  =${sixth}`);

// Destructuring array by rest
const [firstNum, secondNum, ...restNumbers] = [1, 22, 333, 4444, 55555, 666666, 7777777];
console.log(`firstNum=${firstNum}`);
console.log(`secondNum=${secondNum}`);
console.log('rest numbers in array='+ restNumbers);