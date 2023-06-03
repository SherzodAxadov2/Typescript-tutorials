"use strict";
// let link = document.querySelector('a') as HTMLAnchorElement
// console.log(link.href);
// let anotherLink = document.querySelector(".github-link")! as HTMLAnchorElement;
// console.log(anotherLink.href);
let form = document.querySelector(".new-item-form");
// form.checkValidity()
class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}`;
    }
}
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
Invoices.forEach((el) => {
    console.log(el.format());
});
console.log(Invoices);
// Property private only accessible within class 'Invoice'; can not access with extend class
// Property protected only accessible within class 'Invoice' and its subclasses; can not access with extend class
// Property readOnly you access it but not to change it
