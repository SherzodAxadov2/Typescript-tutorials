// let link = document.querySelector('a') as HTMLAnchorElement

// console.log(link.href);

// let anotherLink = document.querySelector(".github-link")! as HTMLAnchorElement;
// console.log(anotherLink.href);

import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./Interfaces/HasFormatter.js";

let form = document.querySelector(".new-item-form") as HTMLFormElement;

let Invoices: Invoice[] = [];

// let docOne:HasFormatter = new Invoice('John', 'web worker', 91323)
// let docTwo: HasFormatter = new Invoice('Yoshi', 'web worker',93123)

// let docs: HasFormatter[] = [];
// docs.push(docOne)

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const button = document.querySelector("button")!;

let docs: HasFormatter[] = [];

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  let values: [string, string, number]
  values = [toFrom.value, details.value, amount.valueAsNumber]
  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, "start");

  form.reset();
});

// const invOne = new Invoice("John", "market", 312);
// const invTwo = new Invoice("Marlo", "market", 5000);
// Invoices.push(invOne);
// Invoices.push(invTwo);

interface Resourse<T> {
  name: string;
  age: number;
  data: T;
}

let userOne: Resourse<number> = {
  name: "John",
  age: 10,
  data: 132,
};

function identity<T>(param: T[]): number {
  return param?.length;
}

console.log(identity<object | number>([123, 323, 3243, 324, 234]));


// tuples  

let arr: [string, number, boolean] = ["fasd", 123, true];

// arr[0] = false;
// arr[1] = 'fsdfi';

// arr[0] = 123;