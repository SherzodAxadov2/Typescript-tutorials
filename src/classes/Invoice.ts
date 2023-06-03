export class Invoice {
  constructor(
    readonly client: string,
    public details: string,
    public amount: number
  ) {}
  format() {
    return `${this.client} owes £${this.amount} for ${this.details}`;
  }
}

// Property private only accessible within class 'Invoice'; can not access with extend class
// Property protected only accessible within class 'Invoice' and its subclasses; can not access with extend class
// Property readOnly you access it but not to change it

// Examples
class Greeter {
  public greet() {
    console.log("Hello, " + this.getName());
  }
  protected getName() {
    return "hi";
  }
  private privateFn() {
    return "helloooo";
  }
}

class SpecialGreeter extends Greeter {
  public howdy() {
    // OK to access protected member here
    // console.log("Howdy, " + this.getName());
    // I can not access it in subclasses
    // console.log(this.privateFn);
  }
}
const SG = new SpecialGreeter();
// console.log(SG.howdy());
