/* 

Core JavaScript Script

Variable declaration and scope

Data types

Expressions vs. statements

Functions (declaration, expression, arrow)

Closures

Hoisting

Objects & prototypes

this context

Classes & inheritance

Control flow

Error handling

Event loop behavior

Modules (ESM style)

Memory references vs. values

*/

// 1. Variable declarations and types
let x = 10; // block-scoped, mutable
const PI = 3.14; // block-scoped, immutable
var legacy = "old"; // function-scoped

// 2. Primitive vs reference
let str = "hi";
let arr = [1, 2];
let obj = { a: 1 };

function mutate(o) {
  o.a = 42;
}
mutate(obj); // obj.a === 42

// 3. Functions and scope
function outer() {
  let hidden = "secret";
  return function inner() {
    return hidden; // closure retains access
  };
}
const reveal = outer();
reveal(); // 'secret'

// 4. Hoisting
hoisted(); // works because function declarations are hoisted
function hoisted() {
  return "I am hoisted";
}

// 5. Expressions vs. statements
let expr = function () {}; // expression assigned to variable
if (true) {
  expr();
} // statement block

// 6. Arrow functions and `this`
const objWithArrow = {
  val: 100,
  regular() {
    return this.val; // 100
  },
  arrow: () => {
    return this.val; // undefined, because arrow doesn't bind `this`
  },
};

// 7. Prototypes and inheritance
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  return `${this.name} makes a sound.`;
};
const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound

// 8. Classes and extends
class Base {
  constructor(value) {
    this.value = value;
  }
  show() {
    return `Value: ${this.value}`;
  }
}
class Derived extends Base {
  show() {
    return `Derived: ${super.show()}`;
  }
}
new Derived(5).show(); // Derived: Value: 5

// 9. Control flow
for (let i = 0; i < 3; i++) {
  if (i === 2) break;
}

// 10. Exception handling
try {
  throw new Error("Oops");
} catch (e) {
  console.log(e.message);
}

// 11. Destructuring and rest
const [a, , b] = [1, 2, 3]; // a=1, b=3
const { m = 5, ...rest } = { m: 1, n: 2, o: 3 };

// 12. The event loop: sync vs async
console.log("1");
setTimeout(() => console.log("3"), 0);
Promise.resolve().then(() => console.log("2"));
// Logs: 1, 2, 3 (microtask before macrotask)

// 13. Modules (ESM)
// In real file: export function add(a, b) { return a + b }
// In another file: import { add } from './math.js';

// 14. Equality and coercion
console.log(0 == false); // true (coerced)
console.log(0 === false); // false (strict)

// 15. Truthy / falsy
const falsy = [0, "", null, undefined, NaN, false];

// 16. typeof and instanceof
typeof []; // 'object'
[] instanceof Array; // true

// 17. Symbol (unique property keys)
const s = Symbol("id");
const symObj = { [s]: 123 };

// 18. Optional chaining and nullish coalescing
const user = {};
const name = user.profile?.name ?? "Guest";
