export interface HasFormatter {
  format(): string;
}

// Interfaces
interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  calc(n: number): number;
}

let greeting: isPerson = {
  name: "John",
  age: 34,
  speak(a: string): void {
    console.log(a);
  },
  calc(n: number): number {
    return n;
  },
};

console.log(greeting.speak("hello world"));
