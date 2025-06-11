import { IBlogPost } from "@/types/blog-post";

export const blogPosts: IBlogPost[] = [
  {
    id: 1,
    title: "The JavaScript Core",
    excerpt: "Core concepts of JS as language",
    category: "Development",
    tags: ["javascript", "fundamentals", "beginners", "programming"],
    date: "2025-06-10",
    readTime: "8 min",
    content: [
      {
        type: "code",
        language: "javascript",
        code: `// 1. Variable declarations and types
let x = 10; // block-scoped, mutable
const PI = 3.14; // block-scoped, immutable
var legacy = "old"; // function-scoped and hoisted with undefined

function scopeTest() {
  var a = 1;
  let b = 2;
  const c = 3;
  if (true) {
    var a = 4; // redeclares within function scope
    let b = 5; // new variable in block scope
    const c = 6; // new constant in block scope
  }
  console.log(a, b, c); // 4, 2, 3 => var is function-wide, let/const are block-bound
}
scopeTest();

// 2. Primitive vs reference
let str = "hi";
let arr = [1, 2];
let obj = { a: 1 };

function mutate(o) {
  o.a = 42;
}
mutate(obj); // obj.a === 42 => object reference is shared (shallow mutation)

function reassign(o) {
  o = { a: 100 }; // local reassignment has no external effect
}
reassign(obj); // obj.a still 42 => new object assigned only inside function

// 3. Functions and scope, closure
function outer() {
  let hidden = "secret";
  return function inner() {
    return hidden; // closure retains lexical binding
  };
}
const reveal = outer();
console.log(reveal()); // 'secret' => closure keeps hidden alive in memory

// 4. Hoisting
hoisted(); // works due to hoisting
function hoisted() {
  return "I am hoisted";
}

console.log(hoistedVar); // undefined => var hoisted, but not initialized
var hoistedVar = 2;

// console.log(temp); // ReferenceError => TDZ (temporal dead zone)
let temp = 5;

// 5. Expressions vs. statements
let expr = function () {
  console.log("expression function");
};
if (true) {
  expr(); // invoked inside a statement block
}

// 6. Arrow functions and \`this\`
const objWithArrow = {
  val: 100,
  regular() {
    return this.val; // \`this\` is dynamic, bound to caller
  },
  arrow: () => {
    return this.val; // arrow captures lexical \`this\` 
    // (likely undefined in strict mode) => passes outer context
  },
};
console.log(objWithArrow.regular()); // 100
console.log(objWithArrow.arrow()); // undefined

// 7. Prototypes and inheritance
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  return \`\${this.name} makes a sound.\`;
};
const dog = new Animal("Dog");
console.log(dog.speak());

// 8. Classes and extends
class Base {
  constructor(value) {
    this.value = value;
  }
  show() {
    return \`Value: \${this.value}\`;
  }
}
class Derived extends Base {
  show() {
    return \`Derived: \${super.show()}\`; // super invokes parent method
  }
}
console.log(new Derived(5).show());

// 9. Control flow
for (let i = 0; i < 3; i++) {
  if (i === 2) break; // exits loop early
  console.log(i);
}

// 10. Exception handling
try {
  throw new Error("Oops");
} catch (e) {
  console.log(e.message); // logs 'Oops'
} finally {
  console.log("Cleanup"); // always runs
}

// 11. Destructuring and rest
const [a, , b] = [1, 2, 3]; // a = 1, b = 3
const { m = 5, ...rest } = { m: 1, n: 2, o: 3 }; // rest = { n: 2, o: 3 }

// 12. The event loop: sync vs async
console.log("1");
setTimeout(() => console.log("3"), 0); // macrotask (timer phase)
Promise.resolve().then(() => console.log("2")); // microtask (runs before timer)
// Output: 1, 2, 3

// 13. Modules (ESM style)
// export function add(a, b) { return a + b; }
// import { add } from './math.js';

// 14. Equality and coercion
console.log(0 == false); // true => type coercion applied
console.log(0 === false); // false => strict type comparison
console.log(null == undefined); // true => both considered "empty"

// 15. Truthy / falsy
const falsy = [0, "", null, undefined, NaN, false];

// 16. typeof and instanceof
console.log(typeof []); // 'object' => arrays are objects
console.log([] instanceof Array); // true => prototype chain confirms type

// 17. Symbol (unique property keys)
const s = Symbol("id");
const symObj = { [s]: 123 };
console.log(symObj[s]); // 123 => prevents property name collisions

// 18. Optional chaining and nullish coalescing
const user = {};
const name = user.profile?.name ?? "Guest"; // avoids crash, provides fallback

// 19. Closures in loops
const funcs = [];
for (var i = 0; i < 3; i++) {
  funcs.push(() => i); // all closures share same i => 3
}
console.log(funcs.map((f) => f())); // [3, 3, 3]

const fixedFuncs = [];
for (let i = 0; i < 3; i++) {
  fixedFuncs.push(() => i); // block-scoped let binds fresh i
}
console.log(fixedFuncs.map((f) => f())); // [0, 1, 2]

// 20. Memory: reference vs value
let a1 = 5;
let a2 = a1;
a2 = 10;
console.log(a1); // 5 => primitives copied by value

let r1 = { count: 1 };
let r2 = r1;
r2.count = 99;
console.log(r1.count); // 99 => references share same heap object

// Deep copy vs shallow copy
const orig = { nested: { x: 1 } };
const shallow = { ...orig }; // top-level copied; nested object shared
shallow.nested.x = 42;
console.log(orig.nested.x); // 42 => not deep copy

// Deep copy workaround
const deep = JSON.parse(JSON.stringify(orig)); // limited: loses functions, dates, etc.

// Note: structuredClone() is a modern, safe alternative for deep cloning
`,
      },
    ],
  },
];
