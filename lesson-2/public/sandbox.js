"use strict";
// const character = "mario";
let helloFn = (user) => {
    console.log(`${user.userCount}, I'm a ${user.isChild ? "children" : "young man"}, I'm ${user.age} years old`);
};
helloFn({ userCount: 24, age: 20, isChild: false });
