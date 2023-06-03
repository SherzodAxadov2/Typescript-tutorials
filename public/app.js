// let link = document.querySelector('a') as HTMLAnchorElement
// console.log(link.href);
// let anotherLink = document.querySelector(".github-link")! as HTMLAnchorElement;
// console.log(anotherLink.href);
let form = document.querySelector(".new-item-form");
// form.checkValidity()
import { Invoice } from "./classes/Invoice.js";
let Invoices = [];
// inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const button = document.querySelector("button");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value);
    console.log(amount.valueAsNumber);
    form.reset();
});
const invOne = new Invoice("John", "market", 312);
const invTwo = new Invoice("Marlo", "market", 5000);
Invoices.push(invOne);
Invoices.push(invTwo);
Invoices.forEach(el => console.log(el.format()));
console.log(Invoices);
