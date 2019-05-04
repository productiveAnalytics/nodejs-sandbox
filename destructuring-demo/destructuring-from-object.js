console.log(process.argv);

// Exact Math.PI as local constant PI
const {PI, E} = Math; 

const circleX = {
   label: 'CircleX',
   radius: 2
};

const circleY = {
    label: 'CircleY',
    radius: 1,
    precision: 10
};

// exact radius property from the passed object
// precision is 2 by default, and it's optional i.e. {}
const circleArea = ( { radius }, { precision = 2 } = {} ) => {
   return (PI * radius * radius).toFixed(precision);
};

console.log('CircleX area = '+ circleArea(circleX));  // prints 12.57
console.log('CircleX area = '+ circleArea(circleX, {precision : 5})); // prints 12.56637

console.log('CircleY area = '+ circleArea(circleY));
console.log('CircleY area = '+ circleArea(circleY, {precision : 5}));