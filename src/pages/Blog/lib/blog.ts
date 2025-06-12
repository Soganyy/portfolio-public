import { IBlogPost } from "@/types/blog-post";

export const blogPosts: IBlogPost[] = [
  {
    id: 1,
    title: "The JavaScript Core",
    excerpt:
      "Core concepts of JS as a language (this is not the last version and it will be updated",
    category: "Development",
    tags: ["javascript", "fundamentals", "beginners", "programming"],
    date: "2025-06-10",
    readTime: "8 min",
    content: [
      {
        type: "heading-5",
        content: "This is the very beginning...",
      },
      {
        type: "paragraph",
        content: `I'm going to cover the core concepts of JavaScript as a language. 
        By saying core concepts, I mean you will get to know the nature of JavaScript's
        concepts that make it different. And how those concepts work.
        Why? First, because I didn't manage to find anything like this anywhere, 
        and second, for looking at what I have come so far.`,
      },
      {
        type: "paragraph",
        content: `I will try to do my best to 
        keep every explanation short and simplify the concepts here. By reading this blog,
        you will have the ability to look at anything and understand it within the scope of 
        JavaScript. At the end, I will also provide a script that covers all the concepts 
        in JavaScript only with code (like a cheatsheet) that I don't talk about.`,
      },

      {
        type: "heading-5",
        content: "What is it?",
      },
      {
        type: "paragraph",
        content: `JavaScript (JS) is a lightweight, interpreted (or just-in-time compiled),
         high-level, dynamically typed, prototype-based programming language with first-class 
         functions. We will see what this means in the following sections.`,
      },
      {
        type: "paragraph",
        content: `In the mid-1990s, the web was static—HTML defined the structure, 
          and CSS (still in early stages) handled styling. But there was no way to 
          make pages react to user input without a full page reload. 
          This limited user experience and web application potential, and it led to 
          JS being invented by Brendan Eich at Netscape in 10 days in 1995. 
          He first came up with the name Mocha, then changed it to LiveScript, and finally 
          to JavaScript for marketing purposes. Then the language was standardized 
          by ECMA International as ECMAScript (ES) in 1997. On behalf of the purpose of 
          browsers, time has passed and the language now has the version it currently 
          has — that is all I can say for now about the history.`,
      },

      {
        type: "heading-5",
        content: "Let's get our hands dirty",
      },
      {
        type: "paragraph",
        content: `I see a programming language as a tool designed to instruct computers 
        to store and process data exactly the way we want. So let's begin with the storage part.`,
      },

      {
        type: "heading-6",
        content: "Variables",
      },
      {
        type: "paragraph",
        content: `Variables are containers used to store data values. When we declare a 
        variable, we create a named reference to a value stored in memory (like creating a space to store something there).
          In JavaScript, there are three ways to declare variables: var, let, and const. 
          Each comes with its own behavior around scope, hoisting, and reassignment. var 
          is function-scoped and hoisted with an initial value of undefined. 
          In contrast, let and const are block-scoped and are not initialized until the 
          code defining them runs. const also prevents reassignment, though it doesn't 
          make the actual data immutable.`,
      },
      {
        type: "code",
        language: "javascript",
        code: `let x = 10; // block-scoped, mutable
const PI = 3.14; // block-scoped, immutable
var legacy = "old"; // function-scoped and hoisted with undefined`,
      },
      {
        type: "paragraph",
        content: `JavaScript uses dynamic typing, which means variable types are determined at runtime. 
          This allows a variable to hold different types of values over its lifetime. 
          For example, a variable that starts as a number can later hold a string or an object. 
          While this offers flexibility, it also means developers need to stay mindful of 
          how types change throughout their code to avoid unexpected behavior or subtle bugs.`,
      },

      {
        type: "heading-6",
        content: "Hoisting",
      },
      {
        type: "paragraph",
        content: `So what is hoisting? Hoisting is a JavaScript mechanism where variables and function declarations 
        are moved to the top of their containing scope during compilation.
        Why? Because when JavaScript was first created, it was designed to be forgiving and easy to use for beginners.
        The second reason behind this is to allocate memory before execution
        and to avoid errors. Also, hoisting makes functions available to use before their declaration. 
        var is hoisted to the top of its function scope, meaning it can be 
        used before its declaration, but it will be undefined until the line where it is assigned a value is reached.
        let and const are also hoisted, but they are not initialized until their declaration 
        line is executed, leading to a "temporal dead zone" where accessing them before declaration results in a ReferenceError.`,
      },
      {
        type: "code",
        language: "javascript",
        code: `hoisted(); // works due to hoisting
function hoisted() {
  return "I am hoisted";
}

console.log(hoistedVar); // undefined => var hoisted, but not initialized
var hoistedVar = 2;

console.log(temp); // ReferenceError => TDZ (temporal dead zone)
let temp = 5;`,
      },

      {
        type: "heading-6",
        content: "Scoping",
      },
      {
        type: "paragraph",
        content: `Scoping in JavaScript refers to the context in which variables and functions are accessible, 
        determining where in the code a variable can be referenced or modified. It is just these things that either 
        holds the variable or makes it visible to everywhere. var only happens to stay in the scope when used in functions, 
        and let and const no matter what doesn't leave the scope. This matters because the scope
        dictates the variable's lifetime and visibility, directly impacting program behavior and maintainability. 
        JavaScript uses lexical scoping, meaning the structure of the code at writing time—not runtime—defines variable 
        accessibility. With the introduction of let and const, block-level scoping became standard, allowing more precise 
        control over variable visibility compared to the function-level scope of var. An important consequence of this scoping 
        model is variable shadowing:`,
      },
      {
        type: "code",
        language: "javascript",
        code: `function scopeTest() {
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
scopeTest();`,
      },

      {
        type: "heading-6",
        content: "Shadowing (I learned the name of this term creating this post)",
      },
      {
        type: "paragraph",
        content: `A variable declared in an inner scope uses the same name as one in an outer scope, effectively 
        hiding the outer variable within that inner context. The JavaScript engine creates a variable environment (for function-scoped vars and parameters), 
        lexical environment (for block-scoped vars like let and const), and scope chain (reference to the outer environment). It searches the current lexical environment,
        and if it finds a match here, it stops. While shadowing enables encapsulation and reuse of variable names, it can also 
        lead to confusion or bugs if not managed carefully. Overall, scoping—including shadowing—ensures variables are confined to their intended
        contexts, promoting cleaner, more predictable, and maintainable code.`,
      },
      {
        type: "code",
        language: "javascript",
        code: `// Outer scope
let value = "outer";

function outerFunction() {
  let value = "middle"; // Shadows 'outer'

  function innerFunction() {
    let value = "inner"; // Shadows 'middle'
    console.log("Inside innerFunction:", value); // 'inner'
  }

  innerFunction();
  console.log("Inside outerFunction:", value); // 'middle'
}

outerFunction();
console.log("In global scope:", value); // 'outer'
`,
      },
      {
        type: "code",
        language: "javascript",
        code: `Global Scope
└── value = "outer"
    └── outerFunction Scope
        └── value = "middle"
            └── innerFunction Scope
                └── value = "inner"
`,
      },

      {
        type: "heading-6",
        content: "Data Types and References",
      },
      {
        type: "paragraph",
        content: `Data types are separated into two categories: primitive and reference types.
        Primitive types include numbers (stored in 64-bit floating point), strings, booleans, null, undefined, and symbols. BigInt is also a primitive to hold integers larger than 2^53 - 1.
        (Internally, the number is broken into fixed-size chunks (e.g., 32- or 64-bit units) — each of these chunks is called a limb and stored separately).
        These types are immutable and compared by value, meaning two variables with the same primitive value are considered equal.`,
      },
      {
        type: "paragraph",
        content: `On the other hand, reference types include objects, arrays, and functions.
        These are mutable and compared by reference, meaning two variables pointing to the same object are considered equal.
        Arrays and functions are also objects, and what I understand is that JavaScript is based on objects most of the time. 
        Like, you can look at something and the probability of that being an object is high. The reason behind this is JavaScript's forgiving nature.`,
      },
      {
        type: "code",
        language: "javascript",
        code: `let str = "hi";
let arr = [1, 2];
let obj = { a: 1 };

function mutate(o) {
  o.a = 42;
}
mutate(obj); // obj.a === 42 => object reference is shared (shallow mutation)

function reassign(o) {
  o = { a: 100 }; // the reference of literal is written to o, not the original object
}
reassign(obj); // obj.a still 42 => new object assigned only inside function

// Memory: reference vs value
let a1 = 5;
let a2 = a1;
a2 = 10;
console.log(a1); // 5 => primitives copied by value

let r1 = { count: 1 };
let r2 = r1;
r2.count = 99;
console.log(r1.count); // 99 => references share same heap object`,
      },

      {
        type: "heading-6",
        content: "Objects, Prototyping",
      },
      {
        type: "paragraph",
        content: `Objects are collections of key-value pairs, where keys are strings (or Symbols) and values can be any data type, including other objects.
        This flexible structure is one of JavaScript's core design traits, allowing developers to model complex systems naturally. 
        Functions themselves can have properties, and arrays—though they have special behaviors and indexed elements—still behave like objects under the hood.`,
      },
      {
        type: "paragraph",
        content: `Everything that isn't a primitive is technically an object or derived from one, including things like dates, errors, 
        regular expressions, and even wrapper objects for primitives like new Number(5).
        JavaScript's object-oriented backbone shows up constantly, whether you're handling JSON, attaching methods to prototypes, or manipulating the DOM.
        So in practice, understanding how objects behave, how they're passed around, and how they're structured is pretty much essential to writing meaningful JavaScript.`,
      },

      {
        type: "paragraph",
        content: `Prototyping is the mechanism by which an object inherits properties and behaviors from another object. 
        Essentially, an object holds a reference to its prototype, and when a property or method is not found on the object 
        itself, JavaScript looks up the prototype chain to find it. This mechanism explains how built-in types like Arrays 
        are represented as objects and inherit methods through their prototypes. Inheritance means obtaining properties or
        features from a parent or prototype object.`,
      },
      {
        type: "code",
        language: "javascript",
        code: `// Base object with shared behavior
const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  },
};

// Create a new object 'rabbit' whose prototype is 'animal'
const rabbit = Object.create(animal);

// Add own property to rabbit
rabbit.jumps = true;

console.log(rabbit.jumps); // true — own property
console.log(rabbit.eats);  // true — inherited from animal prototype

// Call inherited method
rabbit.walk();             // "Animal walks"

// Check prototype relationship explicitly
console.log(Object.getPrototypeOf(rabbit) === animal); // true

// If we modify prototype, changes reflect in rabbit
animal.walk = function() {
  console.log("Animal walks differently now");
};

rabbit.walk(); // "Animal walks differently now"

// Shadowing inherited properties
rabbit.eats = false;       // Now rabbit has its own 'eats'

console.log(rabbit.eats);  // false (own property)
console.log(animal.eats);  // true (prototype property remains unchanged)

// Prototype chain lookup (property not found on rabbit)
console.log(rabbit.hasOwnProperty("walk")); // false
console.log("walk" in rabbit);               // true, found via prototype

// How it works internally:
// When accessing rabbit.walk:
// 1. JS checks rabbit's own properties: no 'walk'
// 2. Looks up prototype chain: finds 'walk' on animal
// 3. Executes that function

// Summary: rabbit "inherits" from animal via prototype chain`,
      },
      {
        type: "paragraph",
        content: `JavaScript was designed with flexibility in mind, allowing developers 
        to make changes dynamically at runtime—something strictly typed languages like 
        Java or C# do not permit. Its object-based structure plays a crucial role in 
        enabling this dynamism. Unlike rigidly typed languages that enforce compile-time
         checks, JavaScript's dynamic typing and prototype-based objects allow for 
         rapid development and on-the-fly modifications, accommodating the unpredictable 
         nature of web programming.`,
      },

      {
        type: "heading-6",
        content: "Deep Copy",
      },
      {
        type: "paragraph",
        content: `When you're working with objects or arrays in JavaScript, you're dealing
         with reference types. That means if you assign one object to another, you're just 
         copying the reference, not the actual data. So any change to the new variable 
         affects the original — because they point to the same object in memory.`,
      },
      {
        type: "paragraph",
        content: `A deep copy means creating a completely independent copy of 
        an object — not just the top-level, but also all nested objects inside 
        it. This way, changes to the copy won't affect the original, even deeply.`,
      },
      {
        type: "code",
        language: "javascript",
        code: `const original = { a: 1, b: { c: 2 } };
const shallow = { ...original };

shallow.b.c = 99; // affects original.b.c too
console.log(original.b.c); // 99 — not what we want`,
      },
      {
        type: "paragraph",
        content: `Even though we used the spread operator, it only copied the top-level.
        The nested b is still a shared reference.`,
      },
      {
        type: "code",
        language: "javascript",
        code: `const deep = JSON.parse(JSON.stringify(original));
deep.b.c = 42;
console.log(original.b.c); // still 99 — no change`,
      },
      {
        type: "paragraph",
        content: `This trick works for simple objects — but keep in mind: 
        JSON.parse(JSON.stringify(...)) fails with functions, undefined, 
        Symbols, Dates, Maps, Sets, and circular references.`,
      },
      {
        type: "paragraph",
        content: `Note: structuredClone() is a modern, safe alternative for deep cloning.`,
      },

      {
        type: "heading-6",
        content: "Garbage Collection",
      },
      {
        type: "paragraph",
        content: `I would also like to talk about JavaScript's garbage collection here, because I find it really interesting and can't stay without placing that information.
        JS starts to look at objects from the root. If any object is somehow connected to the root, it is considered reachable and will not be garbage collected.
        And the ones that are not are considered unreachable and will be garbage collected. This solves the circular reference problem, where in previous versions, objects were garbage 
        collected based on their connection to other objects. This meant that if two objects referenced each other, they would never be garbage collected, even if they were not used.`,
      },

      {
        type: "heading-6",
        content: "Functions, Closures",
      },
      {
        type: "paragraph",
        content: `You can think of a function just like you learned in high school math - we put some input there, it does some calculations,
        and returns some output. Of course, it is more than this explanation, but I think understanding this sentence will make anyone go to a point that is far from here.
        And in JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments, and returned from other functions.`,
      },
      {
        type: "code",
        language: "javascript",
        code: `function outer() {
  let hidden = "secret";
  return function inner() {
    return hidden; // closure retains lexical binding
  };
}
const reveal = outer();
console.log(reveal()); // 'secret' => closure keeps hidden alive in memory`,
      },
      {
        type: "paragraph",
        content: `And the closure is a function that retains access to its lexical scope, even when the function is executed outside that scope.
How does that happen? When a function is created, it captures a reference to the lexical environment in which it was defined.
If the function continues to reference any variables from that outer scope, the JavaScript engine keeps that environment alive — it won't be garbage collected.
In essence, the outer context stays in memory simply because something (the inner function) is still pointing to it.
It's the same principle used with objects: as long as there's a reference to an object, it's not eligible for cleanup.`,
      },
      {
        type: "paragraph",
        content: `Closures inside loops can be tricky if you don't understand 
        how variables are scoped. In the first example, we use var, which is 
        function-scoped. That means all the arrow functions we push into the 
        array end up sharing the same i, and by the time they run, i has already 
        become 3. So when we call them, we get [3, 3, 3]. In the second version, 
        we use let, which is block-scoped. Now, each loop iteration creates a new 
        binding of i, so each function captures a different value. That's why we get 
        [0, 1, 2] as expected. This is one of the most practical examples of how scope 
        and closures work together — and how small changes in how you declare variables 
        can completely change behavior.`,
      },
      {
        type: "code",
        language: "javascript",
        code: `// Closures in loops
const funcs = [];
for (var i = 0; i < 3; i++) {
  funcs.push(() => i); // all closures share same i => 3
}
console.log(funcs.map((f) => f())); // [3, 3, 3]

const fixedFuncs = [];
for (let i = 0; i < 3; i++) {
  fixedFuncs.push(() => i); // block-scoped let binds fresh i
}
console.log(fixedFuncs.map((f) => f())); // [0, 1, 2]`,
      },
      {
        type: "paragraph",
        content: `We declare var i = 0, and use it in a for loop. The important thing 
        is that var is function-scoped, not block-scoped. That means there's only one 
        i variable shared across all iterations of the loop. Every time through the 
        loop, you're pushing a new function into the funcs array — but that function 
        doesn't capture the value of i at that moment. It captures a reference to the 
        same i variable.`,
      },
      {
        type: "paragraph",
        content: `So at the time of pushing the functions, i is 0, 1, then 2 — but those 
        functions don't run yet. They just hold a reference to i. After the loop finishes, 
        i is 3, and all closures still point to that same i, which is now 3. When you call 
        each function later using map, each one goes: "What is i now?" And the answer is: 3. 
        So you get [3, 3, 3].`,
      },
      {
        type: "paragraph",
        content: `The closure, most of the time, is used to create private variables and methods; you can think of it as a way to encapsulate data.`,
      },

      {
        type: "heading-6",
        content: "this",
      },
      {
        type: "paragraph",
        content: `this is a dynamic reference that points to the object "owning"
         the execution context — and that ownership is determined at runtime, 
         not when you write the code. It's also one of the things that makes JavaScript 
         flexible and dangerous — because what this refers to can change depending 
         on how a function is called.`,
      },
      {
        type: "code",
        language: "javascript",
        code: `// Object with a method using \`this\`
const user = {
  name: "Alice",
  greet() {
    // Here \`this\` refers to the object calling the method
    console.log(\`Hello, I am \${this.name}\`);
  },
};

user.greet(); // "Hello, I am Alice"

// Detaching the method from the object
const detachedGreet = user.greet;
detachedGreet(); // "Hello, I am undefined" because \`this\` is now in global context

// Fixing \`this\` using bind
const fixedGreet = user.greet.bind(user);
fixedGreet(); // "Hello, I am Alice" — permanently bound to \`user\`

// Arrow function preserves outer \`this\`
const team = {
  name: "Dev Team",
  members: ["Alice", "Bob"],
  list() {
    // Arrow function inherits \`this\` from list()'s scope
    this.members.forEach(member => {
      console.log(\`\${member} is in \${this.name}\`);
    });
  },
};

team.list(); 
// "Alice is in Dev Team"
// "Bob is in Dev Team"

// Using regular function inside loses \`this\`
const team2 = {
  name: "QA Team",
  members: ["Eve", "Dave"],
  list() {
    // Regular function creates its own \`this\` — doesn't refer to team2
    this.members.forEach(function (member) {
      console.log(\`\${member} is in \${this.name}\`);
    });
  },
};

team2.list(); 
// "Eve is in undefined"
// "Dave is in undefined"

// Constructor function with \`this\`
function Person(name) {
  // \`this\` refers to the new object created by \`new\`
  this.name = name;
}

const p = new Person("Charlie");
console.log(p.name); // "Charlie"

// Global \`this\` (in browser, it's window)
console.log(this); // In browser: window object`,
      },

      {
        type: "heading-6",
        content: "Classes",
      },
      {
        type: "paragraph",
        content: `It's not like a class in Java or C#. It's syntactic sugar
         — just a prettier way to write what JavaScript already had: constructor
          functions and prototypes. When you see class, you're still 
          dealing with objects and prototype chains under the hood.`,
      },
      {
        type: "paragraph",
        content: `JavaScript didn't suddenly become class-based. It just gave developers 
        a more familiar-looking structure — especially for those coming from traditional
         OOP languages — to build things using the existing prototype-based model.`,
      },
      {
        type: "code",
        language: "javascript",
        code: `// What looks like a class...
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(\`\${this.name} makes a noise\`);
  }
}

const a = new Animal("Generic");
a.speak(); // "Generic makes a noise"

// ...is really doing this under the hood:

function AnimalAlt(name) {
  this.name = name;
}

AnimalAlt.prototype.speak = function () {
  console.log(\`\${this.name} makes a noise\`);
};

const a2 = new AnimalAlt("GenericAlt");
a2.speak(); // "GenericAlt makes a noise"

// Inheritance with class
class Dog extends Animal {
  constructor(name) {
    super(name); // Call parent constructor
  }

  speak() {
    console.log(\`\${this.name} barks\`);
  }
}

const d = new Dog("Rex");
d.speak(); // "Rex barks"

// Under the hood, that means this:
function DogAlt(name) {
  AnimalAlt.call(this, name); // Inherit constructor
}

DogAlt.prototype = Object.create(AnimalAlt.prototype); // Inherit methods
DogAlt.prototype.constructor = DogAlt; // Fix constructor reference

DogAlt.prototype.speak = function () {
  console.log(\`\${this.name} barks\`);
};

const d2 = new DogAlt("RexAlt");
d2.speak(); // "RexAlt barks"

// Classes are just functions
console.log(typeof Animal); // "function"
console.log(typeof Dog);    // "function"

// Methods live on the prototype
console.log(Animal.prototype); // { speak: f }
console.log(a.__proto__ === Animal.prototype); // true

// Class syntax also supports static methods
class Utils {
  static logName(obj) {
    console.log(\`Name is: \${obj.name}\`);
  }
}

Utils.logName(a); // "Name is: Generic"

// Which is just:
function UtilsAlt() {}
UtilsAlt.logName = function (obj) {
  console.log(\`Name is: \${obj.name}\`);
};

UtilsAlt.logName(a2); // "Name is: GenericAlt"`,
      },

      {
        type: "heading-6",
        content: "typeof and instanceof",
      },
      {
        type: "paragraph",
        content: `The typeof operator returns a string describing the type of a value.
        It works well with primitive types like strings, numbers, booleans, undefined,
        symbols, and bigints. But once you're dealing with complex types like arrays 
        or objects, typeof gets vague — everything that's not a primitive usually returns "object".`,
      },
      {
        type: "paragraph",
        content: `instanceof works differently. It checks whether a value is an instance of a particular 
        constructor function by walking up the prototype chain. It's only useful for objects, not for primitives.`,
      },
      {
        type: "code",
        language: "javascript",
        code: `console.log(typeof []); // 'object' => arrays are objects
console.log([] instanceof Array); // true => prototype chain confirms type`,
      },

      {
        type: "heading-6",
        content: "Modules",
      },
      {
        type: "paragraph",
        content: `Modules in JavaScript are about organizing code into separate files so that it stays 
        clean, manageable, and reusable. Simply this: before modules, all scripts (even in separate files) 
        behaved like one, and that led to confusion with the same-named variables and led to bugs. 
        Modules fixed this by separation.`,
      },
      {
        type: "paragraph",
        content: `Instead of putting everything in one big script, you split 
        related logic into files and export what you need, then import it where it's used. This makes 
        dependencies clear and avoids polluting the global scope. Modern JavaScript uses ES Modules 
        (import / export) by default in most environments. For example, you can define a utility 
        function in one file and export it: export function add(a, b) { return a + b; }, then import 
        it elsewhere with import { add } from './math.js';. This structure forces better design, 
        makes code easier to test, and helps avoid naming conflicts across large codebases. At 
        runtime, modules are scoped and only run once, no matter how many times they're imported — 
        so you also avoid duplication.`,
      },
      {
        type: "code",
        language: "javascript",
        code: `export function add(a, b) { return a + b; }
import { add } from './math.js';`,
      },

      {
        type: "heading-6",
        content: "Event Loop",
      },
      {
        type: "paragraph",
        content: `And the last thing I'm going to mention here is the event loop. 
        JavaScript is single-threaded; it runs everything in one line like a queue,
        but without blocking when we request it to do something that we don't know 
        when we will get the answer. So how does it happen?`,
      },
      {
        type: "paragraph",
        content: `The tasks are separated into three groups: ones that run immediately, microtasks, and macrotasks.
        Immediate tasks are your regular synchronous code — they run line by line.
        Microtasks include things like Promises — they run right after the current task finishes.
        Macrotasks include things like setTimeout or setInterval — they are scheduled to run later in the queue.`,
      },
      {
        type: "paragraph",
        content: `The event loop keeps checking if the call stack is empty. 
        Once it is, it looks at the microtask queue and runs all of those first.
        After the end of each macrotask, it checks the microtask queue again. 
        After that, it picks one macrotask and runs it. Then the cycle repeats. 
        This is how JavaScript handles async code without using multiple threads.`,
      },
    ],
  },
];
