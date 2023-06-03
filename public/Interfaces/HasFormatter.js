let greeting = {
    name: "John",
    age: 34,
    speak(a) {
        console.log(a);
    },
    calc(n) {
        return n;
    },
};
console.log(greeting.speak("hello world"));
export {};
