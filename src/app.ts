// let link = document.querySelector('a') as HTMLAnchorElement

// console.log(link.href);

// let anotherLink = document.querySelector(".github-link")! as HTMLAnchorElement;
// console.log(anotherLink.href);

import { Invoice } from "./classes/Invoice.js";
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

let docs: HasFormatter[] = []

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter
  if(type.value === "invoice") {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
  } else{
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
  }
  docs.push(doc)

  console.log(docs);
  
  form.reset();
});

// const invOne = new Invoice("John", "market", 312);
// const invTwo = new Invoice("Marlo", "market", 5000);
// Invoices.push(invOne);
// Invoices.push(invTwo);
