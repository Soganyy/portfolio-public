import { BlogPost } from "@/types/blog-post";

export const blogPosts: BlogPost[] = [
  {
    id: 2,
    title: "The Core of JavaScript: A Deep Dive",
    excerpt: "Quick walkthorugh.",
    content: `

\`\`\`js
let x = 10;
const PI = 3.14;
var legacy = "old";

function scopeTest() {
  var a = 1;
  let b = 2;
  const c = 3;
  if (true) {
    var a = 4;
    let b = 5;
    const c = 6;
  }
  console.log(a, b, c); // 4, 2, 3
}
scopeTest();
\`\`\`

\`\`\`js
let str = "hi";
let obj = { a: 1 };

function mutate(o) {
  o.a = 42;
}
mutate(obj);
\`\`\`

\`\`\`js
function outer() {
  let hidden = "secret";
  return function inner() {
    return hidden;
  };
}
const reveal = outer();
console.log(reveal()); // 'secret'
\`\`\`

\`\`\`js
hoisted();
function hoisted() { return "I am hoisted"; }

console.log(hoistedVar);
var hoistedVar = 2;
\`\`\`

\`\`\`js
let expr = function () { console.log("expression"); };
if (true) expr();
\`\`\`

\`\`\`js
const obj = {
  val: 100,
  regular() { return this.val; },
  arrow: () => this.val
};
\`\`\`

\`\`\`js
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  return "\${this.name} makes a sound.";
};
\`\`\`

\`\`\`js
class Base {
  constructor(value) { this.value = value; }
  show() { return "Value: \${this.value}"; }
}
class Derived extends Base {
  show() { return "Derived: \${super.show()}"; }
}
\`\`\`

\`\`\`js
for (let i = 0; i < 3; i++) {
  if (i === 2) break;
  console.log(i);
}
\`\`\`

\`\`\`js
try {
  throw new Error("Oops");
} catch (e) {
  console.log(e.message);
} finally {
  console.log("Cleanup");
}
\`\`\`

\`\`\`js
const [a, , b] = [1, 2, 3];
const { m = 5, ...rest } = { m: 1, n: 2, o: 3 };
\`\`\`

\`\`\`js
console.log("1");
setTimeout(() => console.log("3"), 0);
Promise.resolve().then(() => console.log("2"));
// Output: 1, 2, 3
\`\`\`

\`\`\`js
// export function add(a, b) { return a + b; }
// import { add } from './math.js';
\`\`\`

\`\`\`js
console.log(0 == false);  // true
console.log(0 === false); // false
console.log(null == undefined); // true
\`\`\`

\`\`\`js
const falsy = [0, "", null, undefined, NaN, false];
\`\`\`

\`\`\`js
console.log(typeof []); // 'object'
console.log([] instanceof Array); // true
\`\`\`

\`\`\`js
const s = Symbol("id");
const obj = { [s]: 123 };
console.log(obj[s]);
\`\`\`

\`\`\`js
const user = {};
const name = user.profile?.name ?? "Guest";
\`\`\`

\`\`\`js
const funcs = [];
for (var i = 0; i < 3; i++) {
  funcs.push(() => i);
}
console.log(funcs.map(f => f())); // [3, 3, 3]

const fixed = [];
for (let i = 0; i < 3; i++) {
  fixed.push(() => i);
}
console.log(fixed.map(f => f())); // [0, 1, 2]
\`\`\`

\`\`\`js
let a1 = 5;
let a2 = a1;
a2 = 10;

let r1 = { count: 1 };
let r2 = r1;
r2.count = 99;

const orig = { nested: { x: 1 } };
const shallow = { ...orig };
shallow.nested.x = 42;

const deep = JSON.parse(JSON.stringify(orig));
\`\`\`

`,
    date: "2025-06-09",
    readTime: "7 min read",
    category: "JavaScript",
    tags: ["JavaScript", "Closures", "Scope", "Async", "Memory"],
    image: "/api/placeholder/400/200",
  },
];
