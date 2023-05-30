// const character = "mario";

// console.log(character);

// const inputs = document.querySelectorAll("input");

// inputs.forEach((input) => {
//   console.log(input);
// });

// let circleLength = (diameter:number):number=>{
//     return diameter*Math.PI
// }

// console.log(circleLength(1));

// Objects and Arrays

// let names = ['array', 'loader', 'shaxa']
// names.push(21)

// let numbers = [123,24,475,23988]
// numbers.push('dsada')
// numbers[0] = 'John'   //not assignable

// let mixed = [123, 'John']
// mixed.push(true)

//objects

// let any = {
//   name: "John",
//   age: 23,
//   colorCar: "yellow",
// };

// any = []
// any.age = 'diosa'
// any.name = "Doe";
// any = {
//   name: "Doe",
//   age: 192,
//   colorCar: "black",
//   // skills:['clear']
// };

// explicit tpypes
// let userName: string;
// let age: number;
// age = 'John';
// userName = 'John';

// for arrays
// let arr: string[] = [];
// console.log(Array.isArray(arr));
// arr.push(232)

// union types
// let mixedArray: (string | number)[] = []
// mixedArray.push('sqwd')
// mixedArray.push(true)

// object
// let user: object;
// user = { age: 32, name: "John" };
// user = []

// let userTwo: {
//   name: string;
//   age: number;
//   carColour: string;
// };

// userTwo = {
//   name: "John",
//   age: 12,
// };

// dynamic any types
// let age: any;
// age = 23;
// age = true;

let mixed: any[] = [];
mixed.push(32)
mixed.push({age:24})
mixed.push(false)
