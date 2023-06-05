// let link = document.querySelector('a') as HTMLAnchorElement
// console.log(link.href);
// let anotherLink = document.querySelector(".github-link")! as HTMLAnchorElement;
// console.log(anotherLink.href);
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
let form = document.querySelector(".new-item-form");
let Invoices = [];
// let docOne:HasFormatter = new Invoice('John', 'web worker', 91323)
// let docTwo: HasFormatter = new Invoice('Yoshi', 'web worker',93123)
// let docs: HasFormatter[] = [];
// docs.push(docOne)
// inputs
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const button = document.querySelector("button");
let docs = [];
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    let values;
    values = [toFrom.value, details.value, amount.valueAsNumber];
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "start");
    form.reset();
});
let userOne = {
    name: "John",
    age: 10,
    data: 132,
};
function identity(param) {
    return param === null || param === void 0 ? void 0 : param.length;
}
console.log(identity([123, 323, 3243, 324, 234]));
// tuples  
let arr = ["fasd", 123, true];
// arr[0] = false;
// arr[1] = 'fsdfi';
// arr[0] = 123;
