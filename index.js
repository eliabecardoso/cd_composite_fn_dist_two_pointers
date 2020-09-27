const inputs1D = {
  x: 12,
  y: 68,
};

const inputs2D = {
  x1: -3,
  x2: -11,
  y1: 2,
  y2: 1,
};

const inputs3D = {
  x1: 4,
  x2: -8,
  x3: -9,
  y1: 2,
  y2: -3,
  y3: -5,
};

function square(x) {
  return x ** 2;
}

function subtract(args) {
  return args.reduce((val, nextVal) => val - nextVal);
}

function sum(args) {
  return args.reduce((val, nextVal) => val + nextVal);
}

function squareRoot(x) {
  if (Number.isInteger(Math.sqrt(x))) return Math.sqrt(x);
  return `V${x}`;
}

// Algorithm Composition Method 1 - Not so good
function distanceTwoPointersComposeOne({ x1, x2, y1, y2 }) {
  let p1 = subtract([y1, x1]);
  let p2 = subtract([y2, x2]);
  p1 = square(p1);
  p2 = square(p2);

  const result = sum([p1, p2]);

  const sqrtVal = Math.sqrt(result);
  if (Number.isInteger(sqrtVal)) return sqrtVal;
  return `V${result}`;
}

// Algorithm Composition Method 2 - Good
function compose() {
  return (...val) => new Array(...arguments).reduce((v, fn) => fn(v), val);
}
const coordinateCompose = compose(subtract, square);
const distanceTwoPointersComposeTwo = compose(sum, squareRoot);

console.log('# Distance beetween two pointers - 1D (Line - Unidimensional) #');
console.log('> Composition Method 1 - ERROR: Not works! =(');

console.log('> Composition Method 2');
console.log('Inputs: ', inputs1D);

console.log(
  'Result: ',
  distanceTwoPointersComposeTwo(coordinateCompose(inputs1D.y, inputs1D.x))
);

console.log(
  '\n\n# Distance beetween two pointers - 2D (Matriz - Cartesian Plane) #'
);
console.log('> Composition Method 1');
console.log('Inputs: ', inputs2D);
console.log('Result: ', distanceTwoPointersComposeOne(inputs2D));

// Algorithm Composition Method - Good
console.log('\n> Composition Method 2');
console.log('Inputs: ', inputs2D);

console.log(
  'Result: ',
  distanceTwoPointersComposeTwo(
    coordinateCompose(inputs2D.y1, inputs2D.x1),
    coordinateCompose(inputs2D.y2, inputs2D.x2)
  )
);

console.log(
  '\n\n# Distance beetween two pointers - 3D (Shapes - Three-dimensional) #'
);
console.log('> Composition Method 1 - ERROR: Not works! =(');

console.log('> Composition Method 2');
console.log('Inputs: ', inputs3D);

console.log(
  'Result: ',
  distanceTwoPointersComposeTwo(
    coordinateCompose(inputs3D.y1, inputs3D.x1),
    coordinateCompose(inputs3D.y2, inputs3D.x2),
    coordinateCompose(inputs3D.y3, inputs3D.x3)
  )
);
