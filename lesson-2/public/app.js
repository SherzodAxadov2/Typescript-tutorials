"use strict";
// let link = document.querySelector('a') as HTMLAnchorElement
// console.log(link.href);
// let anotherLink = document.querySelector(".github-link")! as HTMLAnchorElement;
// console.log(anotherLink.href);
let form = document.querySelector(".new-item-form");
// form.checkValidity()
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
