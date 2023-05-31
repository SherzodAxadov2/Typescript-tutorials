"use strict";
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
// let mixed: any[] = [];
// mixed.push(32)
// mixed.push({age:24})
// mixed.push(false)
// mixed.pop()
// FUNCTIONS
// let greet = ():string=>{
//     console.log('oadf');
// }
// parametres
// let multiple = (a:number, b:number=10): void =>{
//     console.log(a+b);
// }
// multiple(3)
// let multipleAnother = (a: number, b: number = 10): unknown => {
//   return a + b + 'dlasmfflskadf';
// };
// LeetCode 1/75
// function mergeAlternately(word1: string, word2: string): string {
//   let merged: string = "";
//   let katta: string;
//   let kichik: string;
//   if (word1.length > word2.length || word1.length === word2.length) {
//     katta = word1;
//     kichik = word2;
//   } else {
//     katta = word2;
//     kichik = word1;
//   }
//   for (let i = 0; i < katta?.length; i++) {
//     if(kichik[i]!==undefined){
//         merged += word1?.split("")[i] + word2?.split("")[i];
//     } else{
//         merged += katta?.split('')[i]
//     }
//   }
//   return merged;
// }
// console.log(mergeAlternately("ab", "pqrs"));
// Leetcode 2/75
// function removeElement(nums: number[], val: number): number {
//   let k: number = 0;
//   while (nums.indexOf(val) != -1) {
//     nums.splice(nums.indexOf(val), 1);
//   }
//   k = nums.length;
//   console.log(nums);
//   return k;
// }
// console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
// Type aliases
// type stringOrNumber = string | number;
// type Obj = {
//   userCount: stringOrNumber;
//   isChild: boolean;
//   age: number;
// };
// let helloFn = (user: Obj) => {
//   console.log(
//     `${user.userCount}, I'm a ${user.isChild ? "children" : "young man"}, I'm ${
//       user.age
//     } years old`
//   );
// };
// helloFn({ userCount: 24, age: 20, isChild: false });
// Function signature
// example 1
// let greeting: (a:string, b:string) => void
// greeting = (name: string, say: string) => {
//   console.log(`${name} says ${say}`);
// }
// greeting("John", 'hello')
// example 2
// let calc: (name: number, say: number, somethingelse: string) => number;
// calc = (a: number, b: number, c: string): number => {
//   if (c === "multiple") {
//     return a * b;
//   } else {
//     return a / b;
//   }
// };
// console.log(calc(1293, 29,'multiple'));
// example 3
let seeDetails;
seeDetails = (user) => {
    return `Hello00, my name is ${user.name} and I am ${user.age} years old`;
};
console.log(seeDetails({ name: "John", age: 23 }));
