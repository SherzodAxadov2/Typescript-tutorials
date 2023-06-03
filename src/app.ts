// let link = document.querySelector('a') as HTMLAnchorElement

// console.log(link.href);

// let anotherLink = document.querySelector(".github-link")! as HTMLAnchorElement;
// console.log(anotherLink.href);

let form = document.querySelector(".new-item-form") as HTMLFormElement;
// form.checkValidity()

import { Invoice } from "./classes/Invoice.js";
let Invoices: Invoice[] = [];

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const toFrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const button = document.querySelector("button")!;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  console.log(type.value);
  console.log(amount.valueAsNumber);

  form.reset();
});

const invOne = new Invoice("John", "market", 312);
const invTwo = new Invoice("Marlo", "market", 5000);
Invoices.push(invOne);
Invoices.push(invTwo);

Invoices.forEach(el=>console.log(el.format()));

console.log(Invoices);


