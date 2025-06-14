import { IBlogPost } from "@/types/blog-post";

export const blogPosts: IBlogPost[] = [
  {
    id: 1,
    title: "The JavaScript Core",
    excerpt: "Core concepts of JS as a language, nature",
    category: "Development",
    tags: [
      "javascript",
      "programming",
      "web-development",
      "closures",
      "prototypes",
      "event-loop",
      "tutorial",
      "fundamentals",
    ],
    date: "2025-06-10",
    readTime: "27 min",
    content: [
      {
        type: "heading-3",
        content: "How I ended up here...",
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
        type: "heading-3",
        content: "What is it?",
      },
      {
        type: "paragraph",
        content: `JavaScript (JS) is a lightweight, interpreted (or just-in-time compiled),
         high-level, dynamically typed, prototype-based programming language with first-class 
         functions. So many in one -_-`,
      },
      {
        type: "paragraph",
        content: `In the mid-1990s, the web was static—HTML defined the structure, 
          and CSS (still in early stages) handled styling. But there was no way to 
          make pages react to user input without a full page reload. 
          This limited user experience and web application potential, and it led to 
          JS being invented by Brendan Eich at Netscape in 10 days in 1995 (you heard it right). 
          He first came up with the name Mocha, then changed it to LiveScript, and finally 
          to JavaScript for marketing purposes. Then the language was standardized 
          by ECMA International as ECMAScript (ES) in 1997. On behalf of the purpose of 
          browsers, time has passed and the language now has the version it currently 
          has (like we can get out of browsers using environments like Node.js) — 
          that is all I can say for now about the history.`,
      },
      { type: "separator-line" },

      {
        type: "heading-3",
        content: "Let's get our hands dirty",
      },
      {
        type: "paragraph",
        content: `I see a programming language as a tool designed to instruct computers 
        to store and process data exactly the way we want. I try to keep the foundation 
        clear and believe that when we understand the basics lying behind the picture, 
        we can easily grab anything beyond that, so don't forget about the storage and 
        processing part. First we should understand storage, then the processing part.`,
      },
      {
        type: "paragraph",
        content: `JavaScript was built to shake things up—to make coding 
        in the browser more fluid and accessible. It gives us an environment 
        where we can do pretty much whatever we want. One reason for this is 
        that from the beginning, the language had to let users interact and 
        make real-time changes—like poking at the code while it runs. That’s 
        why we can do things like reassign a variable’s type (a string 
        becoming an array) or add new properties to objects on the fly. 
        You don’t get that kind of freedom in most strictly typed languages—they 
        just don’t work that way.`,
      },
      { type: "separator-space" },

      {
        type: "heading-4",
        content: "Variables",
      },
      {
        type: "paragraph",
        content: `Variables are containers used to store data values. 
        When we declare a variable, we create a named reference to a 
        value in memory—basically setting aside a space to keep something. 
        In JavaScript, there are three ways to declare variables: var, let, 
        and const. Each one behaves differently when it comes to scope, hoisting, 
        and reassignment (we will get to these later).
        var is function-scoped and gets hoisted with an initial value of undefined. 
        The reason for that is simple—back then, there wasn’t really a need for more 
        precise scoping. But as JavaScript grew, the limitations of var led to the 
        introduction of let and const. In contrast, let and const are block-scoped 
        and aren’t initialized until the code that defines them actually runs. 
        const also prevents reassignment, but that doesn’t mean the data it holds 
        is immutable—it just means the reference can’t be changed.`,
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
        content: `JavaScript uses dynamic typing, which means variable types are 
        determined at runtime. This allows a variable to hold different types of 
        values over its lifetime. For example, a variable that starts off as a 
        number can later be reassigned to a string or even an object. While this 
        offers a lot of flexibility, it also means developers need to be careful 
        about how types change throughout their code—otherwise, it’s easy to run 
        into unexpected behavior or subtle bugs.`,
      },
      { type: "separator-space" },

      {
        type: "heading-4",
        content: "Hoisting",
      },
      {
        type: "paragraph",
        content: `Hoisting is a JavaScript mechanism where variable and function 
        declarations are moved to the top of their containing scope during compilation. 
        Why? Because the language is designed to be forgiving and easy to use—especially 
        for beginners. Another reason is that memory is allocated before code execution, 
        helping to prevent certain types of errors.`,
      },
      {
        type: "paragraph",
        content: `One key effect of hoisting is that functions can be used before they’re 
        defined in the code. When it comes to variables, var is hoisted to the top of 
        its function scope. That means it can be used before its declaration, but its 
        value will be undefined until the line where it's actually assigned.`,
      },
      {
        type: "paragraph",
        content: `let and const are also hoisted, but they behave differently—they’re 
        not initialized until the code reaches their declaration. This creates what's 
        known as the temporal dead zone, where trying to access them before they’re 
        defined will throw a ReferenceError. That behaviour leads us to write clean
        code, it reduces the probability of bugs.`,
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
      { type: "separator-space" },

      {
        type: "heading-4",
        content: "Scoping",
      },
      {
        type: "paragraph",
        content: `Scoping in JavaScript refers to the context in which variables and functions 
        are accessible. It determines where in the code a variable can be referenced or modified. 
        Just think of curly braces—they create a scope (like a box inside a box inside a box) 
        behind the scenes for the code inside them. var sticks around only within function scope, 
        while let and const—no matter what—stay confined to the block they're defined in.`,
      },
      {
        type: "paragraph",
        content: `This matters because scope controls a variable’s lifetime—meaning when it 
        becomes eligible for garbage collection after the scope ends—and its visibility. Both 
        directly impact how your program behaves and how maintainable it is. JavaScript uses 
        lexical scoping, which means the structure of the code at writing time—not 
        runtime—determines where variables are accessible.`,
      },
      {
        type: "paragraph",
        content: `With the introduction of let and const, block-level scoping became the standard, 
        offering more precise control over variable visibility compared to the function-level scoping 
        of var. One important consequence of this scoping model is variable shadowing:`,
      },
      {
        type: "code",
        language: "javascript",
        code: `function scopeTest() {
  var a = 1;
  let b = 2;
  const c = 3;

  if (true) {
    var a = 4; // redeclares within function scope (this is shadowing)
    let b = 5; // new variable in block scope
    const c = 6; // new constant in block scope
  }

  console.log(a, b, c); // 4, 2, 3 => var is function-wide, let/const are block-bound
}

scopeTest();`,
      },

      {
        type: "heading-6",
        content: "Shadowing",
      },
      {
        type: "paragraph",
        content: `When a variable declared in an inner scope shares the same name as 
        one in an outer scope, it effectively shadows the outer variable within that 
        inner context. The JavaScript engine manages this through the variable environment 
        (for function-scoped var and parameters), the lexical environment (for block-scoped 
        let and const), and the scope chain, which is like a reference to outer environments.`,
      },
      {
        type: "paragraph",
        content: `During variable resolution, JavaScript first searches the current lexical 
        environment; if it finds a matching variable there, it stops looking further. The 
        variable in the outer scope doesn't get overriden. While shadowing allows encapsulation 
        and reuse of variable names, it can also cause confusion or subtle bugs if not handled carefully.`,
      },
      {
        type: "paragraph",
        content: `Overall, scoping—including shadowing—ensures variables are confined to 
        their intended contexts, promoting cleaner, more predictable, and maintainable code.`,
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

// This shows the box idea`,
      },
      { type: "separator-space" },

      {
        type: "heading-4",
        content: "Data Types and References",
      },
      {
        type: "paragraph",
        content: `Data types are separated into two categories: primitive and reference types.`,
      },
      {
        type: "paragraph",
        content: `In JavaScript, primitive types are the most basic units of data and include 
        Number, BigInt, String, Boolean, null, undefined, and Symbol. These values are immutable 
        and compared by value, meaning their content, not reference, determines equality.  
           `,
      },
      {
        type: "paragraph",
        content: `The Number type represents both integers and floating-point values using the 64-bit IEEE 
        754 format, which introduces rounding errors in some cases due to binary precision limits
        (I leave a link below about floating point representation).
        To handle integers beyond the safe range of Number (above 2^53 - 1), JavaScript provides 
        the BigInt type, which stores large integers by splitting them into smaller chunks internally 
        (called limbs).`,
      },
      {
        type: "link",
        href: "https://youtu.be/bbkcEiUjehk?si=vTNeYO4D3LGG3C7w",
        content: "The floating-point number presentation explanation video",
      },
      {
        type: "paragraph",
        content: `JavaScript strings are stored as contiguous sequences of 16-bit code units 
        using UTF-16 encoding. Simple characters take one unit (2 bytes), while complex characters 
        like emojis use surrogate pairs (4 bytes total) - this also leads to the miscalculation of length of strings. 
        Internally, engines like V8 store strings in flat buffers or rope structures 
        (for performance it chooses between either a flat array of strings
        or rope structure where it remembers the location of two values and combine them.). 
        When you create or manipulate strings, 
        you're interacting with read-only memory; changes always create new strings in new memory 
        regions. This model allows efficient sharing, memory safety, and high-speed optimizations, 
        but also means frequent string operations can incur allocation overhead.`,
      },
      {
        type: "paragraph",
        content: `The Boolean type has only two values: true and false, used to control logic and flow.
        Just a 0 or 1 in a bit. Pretty, right?`,
      },
      {
        type: "paragraph",
        content: `In JavaScript, null and undefined are both used to represent the absence of a value, 
        but they serve distinct purposes and behave differently at a semantic and technical level. 
        undefined is the default value assigned to a variable that has been declared but not initialized, 
        or to a function parameter that wasn't provided an argument—it reflects a value that is missing 
        because nothing was explicitly set. In contrast, null is an intentional assignment, used by 
        developers to signify that a variable should hold no value. Internally, undefined is a primitive 
        with its own type, while null is a primitive too, but with the quirk that typeof null returns 
        "object"—a legacy bug from JavaScript's early implementation. JavaScript engines store undefined 
        and null using internal shortcodes (tags) instead of full objects. undefined gets a unique internal 
        marker (like 0x1f) to show a variable was never set, while null is usually represented as a zero-like value (like 0x00) to 
        signal a deliberate absence of value. Understanding when to use each—undefined for uninitialized or missing values, and null for 
        explicitly empty ones—is essential for writing precise, predictable code.`,
      },
      {
        type: "paragraph",
        content: `Note: The reason typeof null === "object" is due to a legacy bug from JavaScript’s 
        early implementation in 1995, where values were represented with type tags encoded in the 
        lower bits of a binary word. The value null was internally stored as 0x00 (a null pointer), 
        which happened to match the bit pattern for objects (000). So when typeof checked those bits, 
        it incorrectly identified null as an object. Although this is technically wrong, it was never 
        fixed because too much existing code depended on the behavior, so it's now a permanent quirk 
        of the language.`,
      },
      {
        type: "paragraph",
        content: `On the other hand, reference types include objects, arrays, and functions.
        These are mutable and compared by reference, meaning two variables pointing to the same object are considered equal.
        Arrays and functions are also objects, and what I understand is that JavaScript is based on objects most of the time. 
        Like, you can look at something and the probability of that being an object is high. 
        I want to mention again that the reason behind this is JavaScript's forgiving nature and we will dive to the objects deeper.`,
      },
      {
        type: "code",
        language: "javascript",
        code: `// --- Primitive Types: Immutable & Compared by Value ---
let num = 42;                   // Number (uses 64-bit IEEE 754 internally)
let big = 9007199254740993n;    // BigInt: supports values beyond Number.MAX_SAFE_INTEGER
let str = "A";                  // String: UTF-16 encoded (16-bit units)
let bool = true;                // Boolean: internally just a bit (0 or 1)
let undef;                      // undefined: declared but not assigned
let nothing = null;             // null: intentionally empty
let sym = Symbol("id");         // Symbol: unique and immutable

console.log(typeof big);        // 'bigint'
console.log(typeof undef);      // 'undefined'
console.log(typeof nothing);    // 'object' ← legacy bug, see explanation above

// Immutability Example
let original = "hi";
let copy = original;
copy = "bye";
console.log(original); // "hi" – original remains unchanged

// --- Reference Types: Mutable & Compared by Reference ---
let obj1 = { value: 10 };
let obj2 = { value: 10 };
let obj3 = obj1;

console.log(obj1 === obj2); // false – different objects, even if contents match
console.log(obj1 === obj3); // true – same reference

// Mutability Example
obj3.value = 99;
console.log(obj1.value); // 99 – because obj3 points to obj1

// --- String Encoding Quirk ---
let emoji = "😄";
console.log(emoji.length); // 2 – due to surrogate pairs in UTF-16

// --- Practical Distinction Between undefined and null ---
function demo(x) {
  if (x === undefined) {
    console.log("Value was omitted (undefined).");
  } else if (x === null) {
    console.log("Value was explicitly set to null.");
  } else {
    console.log("Value is:", x);
  }
}
demo();         // Value was omitted (undefined)
demo(null);     // Value was explicitly set to null
demo(123);      // Value is: 123`,
      },
      { type: "separator-space" },

      {
        type: "heading-4",
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
        content: `Everything that isn't a primitive is technically an 
        object or derived from one, including things like dates, errors, 
        regular expressions, and even wrapper objects for primitives like new Number(5).
        JavaScript's object-oriented backbone shows up constantly, whether you're handling 
        JSON, attaching methods to prototypes, or manipulating the DOM.
        So in practice, understanding how objects behave, how they're passed around, and 
        how they're structured is pretty much essential to writing meaningful JavaScript.`,
      },
      {
        type: "paragraph",
        content: `Primitives can be temporarily wrapped by objects. When you access a method or 
        property on a primitive (like "abc".length), JavaScript automatically wraps the 
        primitive in a corresponding object (String, Number, Boolean, etc.), gives you 
        access to methods and properties, and then discards the wrapper immediately, 
        called auto-boxing.
        These wrapper objects contain the primitive value and expose methods from the 
        prototype, but the primitive itself remains unchanged.`,
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
        content: `This feature of JavaScript also makes it different, allowing developers 
        to make changes dynamically at runtime—something strictly typed languages like 
        Java or C# do not permit. Its object-based structure plays a crucial role in 
        enabling this dynamism. Unlike rigidly typed languages that enforce compile-time
        checks, JavaScript's dynamic typing and prototype-based objects allow for 
        rapid development and on-the-fly modifications, accommodating the unpredictable 
        nature of web programming.`,
      },

      {
        type: "heading-4",
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
        type: "heading-4",
        content: "Garbage Collection",
      },
      {
        type: "paragraph",
        content: `I would also like to talk about JavaScript's garbage collection here a bit, 
        because I find it really interesting and can't stay without placing that information.
        JS starts to look at objects from the root. If any object is somehow connected to 
        the root, it is considered reachable and will not be garbage collected.
        And the ones that are considered unreachable will be cleared. 
        This solves the circular reference problem, where in previous versions, objects were garbage 
        collected based on their connection to other objects. This meant that if two 
        objects referenced each other, they would never be garbage collected, even 
        if they were not used and stayed out of the code we write.`,
      },
      { type: "separator-space" },

      {
        type: "heading-4",
        content: "Functions",
      },
      {
        type: "paragraph",
        content: `You can think of a function just like you learned in high school 
        math - we put some input there, it does some calculations,
        and returns some output. Of course, it is more than this explanation, but 
        I think understanding this sentence will make anyone go to a point that is far from here.
        And in JavaScript, functions are first-class citizens, meaning they can be assigned 
        to variables, passed as arguments, and returned from other functions. 
        The function is also an object with just [[Call]] property. When I say a function 
        is "just an object with a [[Call]] property", I mean that it's an object enhanced 
        with an internal mechanism enabling it to behave like a function in code execution 
        contexts—illustrating JavaScript's flexible and uniform object model.`,
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
        type: "heading-4",
        content: "Closures",
      },
      {
        type: "paragraph",
        content: `The closure is ability of a function that retains access 
        to its lexical scope, even when the function is executed outside that scope.
        How does that happen? When a function is created, it captures a 
        reference to the lexical environment in which it was defined.
        If the function continues to reference any variables from that outer 
        scope, the JavaScript engine keeps that environment alive — it won't be garbage collected.
        In essence, the outer context stays in memory simply because something (the inner function) is still pointing to it.
        It's the same principle used with objects: as long as there's a reference to an object, it's not eligible for cleanup.`,
      },
      {
        type: "paragraph",
        content: `Closures inside loops can be tricky if you don't understand 
        how variables are scoped. Look at this example:`,
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
      { type: "separator-space" },

      {
        type: "heading-4",
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
        type: "paragraph",
        content: `In the global context, this refers to the window object in browsers. 
        In Node.js, it doesn't point to the global object—instead, it’s module.exports 
        at the top level, and undefined inside functions when using strict mode. The 
        keyword doesn’t care where it’s written; it only reacts to how the code is run. 
        It’s like asking, “Who owns the environment I’m in right now?” and pointing there. 
        It’s context-aware, not scope-aware (the context is runtime background environment - which we don't see 
        and the scope is just code-time user seen environtment), which makes it more dynamic but also more prone 
        to confusion if you’re not watching how functions are called.`,
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
    // because it doesn't bound to something and is a standalone function
    // looking at from the context perspective
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
      { type: "separator-space" },

      {
        type: "heading-4",
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
        type: "paragraph",
        content: `The following code will explain everything about classes:`,
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
console.log(a.__proto__ === Animal.prototype); // true`,
      },
      { type: "separator-space" },

      {
        type: "heading-4",
        content: "typeof and instanceof",
      },
      {
        type: "paragraph",
        content: `Another major feature is typeof and instanceof, even if you don't fully understand
        how they work, you should at least know the difference and why they are used. 
        The typeof operator returns a string describing the type of a value.
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
      { type: "separator-space" },

      {
        type: "heading-4",
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
        function in one file and export it, then import 
        it elsewhere. This structure forces better design, 
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
      { type: "separator-space" },

      {
        type: "heading-4",
        content: "Event Loop",
      },
      {
        type: "paragraph",
        content: `And the last thing I'm going to mention here is the event loop.
  I will talk just a little about this, you can go deeper if you want. 
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
      {
        type: "paragraph",
        content: `Let me show you how this works in practice. When you write code like this, the order might surprise you:`,
      },
      {
        type: "code",
        language: "javascript",
        code: `console.log("1 - Start");

setTimeout(() => {
  console.log("2 - Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("3 - Promise");
});

console.log("4 - End");

// Output:
// 1 - Start
// 4 - End  
// 3 - Promise
// 2 - Timeout`,
      },
      {
        type: "paragraph",
        content: `Even though setTimeout has 0 delay, it still goes to the macrotask queue. 
  Because the setTimeout runs in the call stack and creates a macrotask for running later.
  The Promise runs first because microtasks have priority over macrotasks. 
  So the execution order is: all synchronous code first, then all microtasks, 
  then one macrotask, then check microtasks again, and so on.`,
      },
      {
        type: "paragraph",
        content: `Here's what actually happens step by step: JavaScript puts "Start" and "End" 
  on the call stack and runs them immediately. The setTimeout callback goes to the 
  macrotask queue, and the Promise callback goes to the microtask queue. Once the 
  call stack is empty, the event loop checks the microtask queue first — finds the 
  Promise callback and runs it. Only after the microtask queue is completely empty 
  does it pick up the setTimeout callback from the macrotask queue.`,
      },
      {
        type: "paragraph",
        content: `This priority system exists because microtasks are usually more urgent — 
  like Promise resolutions that other code might be waiting for. Macrotasks are 
  more like "background work" that can wait a bit longer. The event loop ensures 
  that microtasks never get starved by macrotasks, but it also prevents microtasks 
  from completely blocking macrotasks by processing them in this specific order.`,
      },
      {
        type: "paragraph",
        content: `A common mistake is thinking that setTimeout(fn, 0) runs immediately. 
  It doesn't — it goes to the macrotask queue and waits its turn. Same with other 
  timer functions or DOM events. They all follow this queuing system, which is why 
  JavaScript can handle user clicks, network requests, and timers all at once without 
  getting stuck on any single operation.`,
      },
      {
        type: "code",
        language: "javascript",
        code: `// Microtask vs Macrotask priority example
setTimeout(() => console.log("Macrotask 1"), 0);

Promise.resolve().then(() => {
  console.log("Microtask 1");
  return Promise.resolve();
}).then(() => {
  console.log("Microtask 2");
});

setTimeout(() => console.log("Macrotask 2"), 0);

console.log("Synchronous");

// Output:
// Synchronous
// Microtask 1  
// Microtask 2
// Macrotask 1
// Macrotask 2`,
      },
      {
        type: "paragraph",
        content: `Notice how both microtasks run before any macrotask, even though the first 
  setTimeout was scheduled before the Promise. This demonstrates the priority system 
  clearly — the event loop will drain the entire microtask queue before touching 
  the macrotask queue.`,
      },
      {
        type: "paragraph",
        content: `The beauty of this system is that it lets JavaScript appear to do multiple 
  things at once, even though it's fundamentally single-threaded. Web APIs (like 
  fetch or DOM events) run outside the main thread, and when they're done, they 
  just add callbacks to the appropriate queue. The event loop then orchestrates 
  when those callbacks actually run, keeping everything smooth and responsive.`,
      },
      { type: "separator-space" },

      {
        type: "heading-3",
        content: "So...",
      },
      {
        type: "paragraph",
        content: `That is all I can do, I tried to provide the core concepts and explain pretty much everything.
At the end, I stop and look at what I’ve got and realize that the programming language (JS)
is just an object-controlled tool (of course, with some flexibility in that definition).
That’s why it ended up being created in such a short amount of time.
Now, by just grabbing the main concepts—what holds the language up and keeps it standing—
I think the person reading this can push further and build a solid understanding of everything in here.
The concept of creating something that works and developing it on the go
just took physical form in this language, and that’s exactly what helped JS evolve into what it is today.`,
      },
      {
        type: "paragraph",
        content: `And here is a list of thigns you got.`,
      },
      {
        type: "list",
        ordered: false,
        items: [
          "Variables",
          "Data Types",
          "Hoisting, Shadowing, Scoping",
          "Objects, Prototyping",
          "A bit of garbage collection nature",
          "Functions(another type of objects), Closures",
          "this",
          "Classes",
          "typeof, instanceof",
          "Modules",
          "Event Loop",
        ],
      },
      {
        type: "paragraph",
        content: `I hope I was able to make a difference and that you enjoyed the blog. Thank you for your time.`,
      },
      { type: "separator-space" },

      { type: "separator-line" },
      {
        type: "heading-5",
        content: "The Cheat Sheet",
      },
      {
        type: "paragraph",
        content: `I am leaving a full script that includes everything 
        I know in JavaScript, as well as a smaller script containing just 
        the core concepts for quick review. Both scripts were created by 
        AI models, but don't worry — I have reviewed them myself.`,
      },
      {
        type: "link",
        isDownload: true,
        href: "/blog-content/js-full-script.js",
        content: "Click to download full script",
      },
      {
        type: "link",
        isDownload: true,
        href: "/blog-content/js-core-script.js",
        content: "Click to download core concepts script",
      },
    ],
  },
];
