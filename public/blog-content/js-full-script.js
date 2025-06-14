// ==================== COMPLETE JAVASCRIPT CHEATSHEET ====================
// Every single concept, method, property, and feature in JavaScript

// ==================== 1. VARIABLES & DECLARATIONS ====================
var oldVar = "function-scoped, hoisted, can redeclare";
let blockVar = "block-scoped, temporal dead zone";
const constant = "block-scoped, immutable binding";

// Hoisting examples
console.log(hoistedVar); // undefined (not error)
var hoistedVar = "I'm hoisted";

// console.log(letVar); // ReferenceError: Cannot access before initialization
let letVar = "temporal dead zone";

// ==================== 2. DATA TYPES ====================
// Primitives (7 types)
let str = "string";
let num = 42;
let bigInt = 123n;
let bool = true;
let undef = undefined;
let nul = null;
let sym = Symbol("unique");

// Objects (everything else)
let obj = { key: "value" };
let arr = [1, 2, 3];
let func = function () {};
let date = new Date();
let regex = /pattern/gi;
let map = new Map();
let set = new Set();
let weakMap = new WeakMap();
let weakSet = new WeakSet();
let arrayBuffer = new ArrayBuffer(16);
let promise = Promise.resolve();
let error = new Error("message");

// ==================== 3. TYPE CHECKING & CONVERSION ====================
// typeof operator
console.log(typeof "hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof 42n); // "bigint"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (historical bug)
console.log(typeof Symbol()); // "symbol"
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function () {}); // "function"

// instanceof operator
console.log([] instanceof Array); // true
console.log({} instanceof Object); // true
console.log("" instanceof String); // false (primitive)
console.log(new String("") instanceof String); // true (object)

// Constructor property
console.log([].constructor === Array); // true
console.log({}.constructor === Object); // true

// Object.prototype.toString (most reliable)
console.log(Object.prototype.toString.call([])); // "[object Array]"
console.log(Object.prototype.toString.call({})); // "[object Object]"
console.log(Object.prototype.toString.call(null)); // "[object Null]"

// Type conversion
Number("42"); // 42
Number("42px"); // NaN
parseInt("42px"); // 42
parseFloat("42.5px"); // 42.5
String(42); // "42"
Boolean(0); // false
Boolean(1); // true

// ==================== 4. OPERATORS ====================
// Arithmetic
let a = 10 + 5; // Addition
let b = 10 - 5; // Subtraction
let c = 10 * 5; // Multiplication
let d = 10 / 5; // Division
let e = 10 % 3; // Modulo
let f = 10 ** 2; // Exponentiation
let g = ++a; // Pre-increment
let h = a++; // Post-increment
let i = --b; // Pre-decrement
let j = b--; // Post-decrement

// Assignment
let x = 10;
x += 5; // x = x + 5
x -= 5; // x = x - 5
x *= 5; // x = x * 5
x /= 5; // x = x / 5
x %= 5; // x = x % 5
x **= 2; // x = x ** 2
x &&= true; // x = x && true (logical AND assignment)
x ||= false; // x = x || false (logical OR assignment)
x ??= null; // x = x ?? null (nullish coalescing assignment)

// Comparison
console.log(5 == "5"); // true (loose equality)
console.log(5 === "5"); // false (strict equality)
console.log(5 != "6"); // true (loose inequality)
console.log(5 !== "5"); // true (strict inequality)
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 5); // true

// Logical
console.log(true && false); // false (AND)
console.log(true || false); // true (OR)
console.log(!true); // false (NOT)

// Bitwise
console.log(5 & 3); // 1 (AND)
console.log(5 | 3); // 7 (OR)
console.log(5 ^ 3); // 6 (XOR)
console.log(~5); // -6 (NOT)
console.log(5 << 1); // 10 (left shift)
console.log(5 >> 1); // 2 (right shift)
console.log(5 >>> 1); // 2 (unsigned right shift)

// Ternary
let result = condition ? "true value" : "false value";

// Nullish coalescing
let value = null ?? "default"; // "default"
let value2 = 0 ?? "default"; // 0 (0 is not nullish)

// Optional chaining
let user = {};
let name = user?.profile?.name; // undefined (no error)
let method = user.method?.(); // undefined (no error)

// Comma operator
let multi = ((a = 1), (b = 2), a + b); // 3 (returns last expression)

// typeof and instanceof (covered above)
// in operator
console.log("length" in []); // true
console.log("name" in function () {}); // true

// delete operator
let deleteObj = { prop: "value" };
delete deleteObj.prop; // true
console.log(deleteObj.prop); // undefined

// void operator
console.log(void 0); // undefined
console.log(void "hello"); // undefined
// <a href="javascript:void(0)">Click me</a> to prevent the work js do

// ==================== 5. STRINGS ====================
let string = "Hello World";

// String properties
console.log(string.length); // 11

// String methods
console.log(string.charAt(0)); // "H"
console.log(string.charCodeAt(0)); // 72
console.log(string.codePointAt(0)); // 72
console.log(String.fromCharCode(72)); // "H"
console.log(String.fromCodePoint(72)); // "H"
console.log(string.concat(" JavaScript")); // "Hello World JavaScript"
console.log(string.indexOf("o")); // 4
console.log(string.lastIndexOf("o")); // 7
console.log(string.includes("World")); // true
console.log(string.startsWith("Hello")); // true
console.log(string.endsWith("World")); // true
console.log(string.slice(0, 5)); // "Hello"
console.log(string.substring(0, 5)); // "Hello"
console.log(string.substr(0, 5)); // "Hello" (deprecated)
console.log(string.toLowerCase()); // "hello world"
console.log(string.toUpperCase()); // "HELLO WORLD"
console.log(string.toLocaleLowerCase()); // "hello world"
console.log(string.toLocaleUpperCase()); // "HELLO WORLD"
console.log("  hello  ".trim()); // "hello"
console.log("  hello  ".trimStart()); // "hello  "
console.log("  hello  ".trimEnd()); // "  hello"
console.log("hello".repeat(3)); // "hellohellohello"
console.log("hello".padStart(10, "*")); // "*****hello"
console.log("hello".padEnd(10, "*")); // "hello*****"
console.log(string.replace("World", "JS")); // "Hello JS"
console.log(string.replaceAll("l", "L")); // "HeLLo WorLd"
console.log(string.split(" ")); // ["Hello", "World"]
console.log(string.match(/l/g)); // ["l", "l", "l"]
console.log(string.matchAll(/l/g)); // Iterator
console.log(string.search(/World/)); // 6
console.log(string.localeCompare("hello")); // 1
console.log(string.normalize()); // "Hello World"
console.log(string.toString()); // "Hello World"
console.log(string.valueOf()); // "Hello World"

// Template literals
let name2 = "JavaScript";
let template = `Hello ${name2}!`; // "Hello JavaScript!"
let multiline = `Line 1
Line 2
Line 3`;

// Tagged template literals
function tag(strings, ...values) {
  return strings.reduce((result, string, i) => {
    return result + string + (values[i] || "");
  }, "");
}
let tagged = tag`Hello ${name2}!`;

// ==================== 6. NUMBERS ====================
let number = 42.75;

// Number properties
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN); // NaN
console.log(Number.EPSILON); // 2.220446049250313e-16

// Number methods
console.log(Number.isNaN(NaN)); // true
console.log(Number.isFinite(42)); // true
console.log(Number.isInteger(42)); // true
console.log(Number.isSafeInteger(42)); // true
console.log(Number.parseFloat("42.5")); // 42.5
console.log(Number.parseInt("42px")); // 42

// Number instance methods
console.log(number.toString()); // "42.75"
console.log(number.toString(16)); // "2a.c" (hex)
console.log(number.toFixed(1)); // "42.8"
console.log(number.toExponential(2)); // "4.28e+1"
console.log(number.toPrecision(3)); // "42.8"
console.log(number.valueOf()); // 42.75
console.log(number.toLocaleString()); // "42.75" (locale-specific)

// Math object
console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718281828459045
console.log(Math.LN2); // 0.6931471805599453
console.log(Math.LN10); // 2.302585092994046
console.log(Math.LOG2E); // 1.4426950408889634
console.log(Math.LOG10E); // 0.4342944819032518
console.log(Math.SQRT1_2); // 0.7071067811865476
console.log(Math.SQRT2); // 1.4142135623730951

console.log(Math.abs(-5)); // 5
console.log(Math.ceil(4.1)); // 5
console.log(Math.floor(4.9)); // 4
console.log(Math.round(4.5)); // 5
console.log(Math.trunc(4.9)); // 4
console.log(Math.max(1, 2, 3)); // 3
console.log(Math.min(1, 2, 3)); // 1
console.log(Math.pow(2, 3)); // 8
console.log(Math.sqrt(16)); // 4
console.log(Math.cbrt(27)); // 3
console.log(Math.random()); // Random number 0-1
console.log(Math.sign(-5)); // -1
console.log(Math.fround(1.5)); // 1.5 (32-bit float)
console.log(Math.imul(2, 4)); // 8 (32-bit multiplication)
console.log(Math.clz32(1)); // 31 (leading zeros)

// Trigonometric
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.cos(0)); // 1
console.log(Math.tan(Math.PI / 4)); // 1
console.log(Math.asin(1)); // π/2
console.log(Math.acos(1)); // 0
console.log(Math.atan(1)); // π/4
console.log(Math.atan2(1, 1)); // π/4
console.log(Math.sinh(0)); // 0
console.log(Math.cosh(0)); // 1
console.log(Math.tanh(0)); // 0
console.log(Math.asinh(0)); // 0
console.log(Math.acosh(1)); // 0
console.log(Math.atanh(0)); // 0

// Logarithmic
console.log(Math.log(Math.E)); // 1
console.log(Math.log10(100)); // 2
console.log(Math.log2(8)); // 3
console.log(Math.log1p(0)); // 0
console.log(Math.exp(1)); // e
console.log(Math.expm1(0)); // 0

// Hypot and others
console.log(Math.hypot(3, 4)); // 5
// i didn't know something like this exists in js honeslty, there so much others but this made me: WHAT?

// ==================== 7. BIGINT ====================
let bigInt1 = 123n;
let bigInt2 = BigInt(123);
let bigInt3 = BigInt("123");

console.log(bigInt1 + bigInt2); // 246n
console.log(BigInt.asIntN(4, 15n)); // -1n
console.log(BigInt.asUintN(4, 15n)); // 15n
console.log(bigInt1.toString()); // "123"
console.log(bigInt1.valueOf()); // 123n

// ==================== 8. ARRAYS ====================
let arr1 = [1, 2, 3, 4, 5];
let arr2 = new Array(5); // [empty × 5]
let arr3 = Array.of(1, 2, 3); // [1, 2, 3]
let arr4 = Array.from("hello"); // ["h", "e", "l", "l", "o"]
let arr5 = Array.from({ length: 3 }, (_, i) => i); // [0, 1, 2]

// Array properties
console.log(arr1.length); // 5

// Array methods - Mutating
arr1.push(6); // Adds to end, returns new length
arr1.unshift(0); // Adds to beginning, returns new length
let popped = arr1.pop(); // Removes from end, returns element
let shifted = arr1.shift(); // Removes from beginning, returns element
arr1.splice(1, 2, "a", "b"); // Remove 2 at index 1, add "a", "b"
arr1.reverse(); // Reverses in place
arr1.sort(); // Sorts in place (lexicographical by default)
arr1.sort((a, b) => a - b); // Numeric sort
arr1.fill(0); // Fill with value
arr1.copyWithin(0, 3, 5); // Copy elements within array

// Array methods - Non-mutating
let sliced = arr1.slice(1, 3); // Extract section
let concatenated = arr1.concat([6, 7]); // Merge arrays
let joined = arr1.join("-"); // Join elements with separator
let indexOf = arr1.indexOf(3); // Find index of element
let lastIndexOf = arr1.lastIndexOf(3); // Find last index
let includes = arr1.includes(3); // Check if includes element

// Array methods - Iteration
arr1.forEach((item, index, array) => console.log(item));
let mapped = arr1.map((x) => x * 2); // Transform each element
let filtered = arr1.filter((x) => x > 2); // Filter elements
let reduced = arr1.reduce((acc, x) => acc + x, 0); // Reduce to single value
let reducedRight = arr1.reduceRight((acc, x) => acc + x, 0); // Reduce right to left
let found = arr1.find((x) => x > 2); // Find first matching element
let foundIndex = arr1.findIndex((x) => x > 2); // Find index of first match
let foundLast = arr1.findLast?.((x) => x > 2); // Find last matching element
let foundLastIndex = arr1.findLastIndex?.((x) => x > 2); // Find last index
let some = arr1.some((x) => x > 2); // Test if any match
let every = arr1.every((x) => x > 0); // Test if all match

// Array methods - Advanced
let flatted = [
  [1, 2],
  [3, 4],
].flat(); // [1, 2, 3, 4]
let flatMapped = arr1.flatMap((x) => [x, x * 2]); // Map then flat
let entries = arr1.entries(); // Iterator of [index, value]
let keys = arr1.keys(); // Iterator of indices
let values = arr1.values(); // Iterator of values

// Array methods - Static
console.log(Array.isArray(arr1)); // true
console.log(Array.from({ 0: "a", 1: "b", length: 2 })); // ["a", "b"]
console.log(Array.of(1, 2, 3)); // [1, 2, 3]

// Array methods - New
let toSorted = arr1.toSorted?.(); // Non-mutating sort
let toReversed = arr1.toReversed?.(); // Non-mutating reverse
let toSpliced = arr1.toSpliced?.(1, 1, "new"); // Non-mutating splice
let with_ = arr1.with?.(0, "new"); // Non-mutating element replacement

// ==================== 9. OBJECTS ====================
let obj1 = { name: "John", age: 30 };
let obj2 = new Object();
let obj3 = Object.create(null); // No prototype
let obj4 = Object.create(obj1); // Inherit from obj1

// Object properties
console.log(obj1.name); // Dot notation
console.log(obj1["age"]); // Bracket notation
obj1.city = "New York"; // Add property
delete obj1.age; // Delete property

// Object methods - Static
console.log(Object.keys(obj1)); // Get keys
console.log(Object.values(obj1)); // Get values
console.log(Object.entries(obj1)); // Get [key, value] pairs
console.log(
  Object.fromEntries([
    ["a", 1],
    ["b", 2],
  ])
); // From entries
console.log(Object.assign({}, obj1, obj2)); // Merge objects
console.log(Object.create(obj1)); // Create with prototype
console.log(Object.getPrototypeOf(obj1)); // Get prototype
Object.setPrototypeOf(obj2, obj1); // Set prototype
console.log(Object.hasOwn(obj1, "name")); // Check own property
console.log(Object.is(obj1, obj2)); // Same value zero comparison
console.log(Object.freeze(obj1)); // Make immutable
console.log(Object.seal(obj1)); // Prevent extensions, allow modifications
console.log(Object.preventExtensions(obj1)); // Prevent new properties
console.log(Object.isFrozen(obj1)); // Check if frozen
console.log(Object.isSealed(obj1)); // Check if sealed
console.log(Object.isExtensible(obj1)); // Check if extensible
console.log(Object.getOwnPropertyNames(obj1)); // Get all property names
console.log(Object.getOwnPropertySymbols(obj1)); // Get symbol properties
console.log(Object.getOwnPropertyDescriptors(obj1)); // Get all descriptors
console.log(Object.getOwnPropertyDescriptor(obj1, "name")); // Get descriptor
Object.defineProperty(obj1, "prop", {
  value: "value",
  writable: true,
  enumerable: true,
  configurable: true,
});
Object.defineProperties(obj1, {
  prop1: { value: 1 },
  prop2: { value: 2 },
});

// Object methods - Instance
console.log(obj1.hasOwnProperty("name")); // Check own property
console.log(obj1.propertyIsEnumerable("name")); // Check enumerable
console.log(obj1.isPrototypeOf(obj4)); // Check prototype relationship
console.log(obj1.toString()); // String representation
console.log(obj1.valueOf()); // Primitive value
console.log(obj1.toLocaleString()); // Locale string

// ==================== 10. FUNCTIONS ====================
// Function declarations
function regularFunction(a, b) {
  return a + b;
}

// Function expressions
let funcExpression = function (x) {
  return x * 2;
};
let namedFuncExpression = function multiply(x) {
  return x * 2;
};

// Arrow functions
let arrow = (x, y) => x + y;
let singleParam = (x) => x * 2;
let noParams = () => "hello";
let blockBody = (x) => {
  let doubled = x * 2;
  return doubled;
};

// IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("IIFE executed");
})();

// Function properties and methods
console.log(regularFunction.name); // "regularFunction"
console.log(regularFunction.length); // 2 (parameter count)
console.log(regularFunction.toString()); // Function source code

let boundFunction = regularFunction.bind(null, 5);
console.log(boundFunction(3)); // 8
console.log(regularFunction.call(null, 1, 2)); // 3
console.log(regularFunction.apply(null, [1, 2])); // 3

// Function constructor
let dynamicFunc = new Function("a", "b", "return a + b");

// Generator functions
function* generator() {
  yield 1;
  yield 2;
  yield 3;
}
let gen = generator();
console.log(gen.next()); // {value: 1, done: false}

// Async functions
async function asyncFunc() {
  return await Promise.resolve("async result");
}

// Function parameters
function params(required, optional = "default", ...rest) {
  console.log(required, optional, rest);
}

// Destructuring parameters
function destructure({ name, age }, [first, second]) {
  console.log(name, age, first, second);
}

// ==================== 11. CLASSES ====================
class BaseClass {
  // Public field
  publicField = "public";

  // Private field
  #privateField = "private";

  // Static field
  static staticField = "static";

  // Constructor
  constructor(value) {
    this.value = value;
  }

  // Method
  method() {
    return this.value;
  }

  // Getter
  get computed() {
    return this.value * 2;
  }

  // Setter
  set computed(val) {
    this.value = val / 2;
  }

  // Static method
  static staticMethod() {
    return "static";
  }

  // Private method
  #privateMethod() {
    return "private";
  }
}

class DerivedClass extends BaseClass {
  constructor(value, extra) {
    super(value); // Call parent constructor
    this.extra = extra;
  }

  method() {
    return super.method() + this.extra; // Call parent method
  }

  static staticMethod() {
    return super.staticMethod() + " derived";
  }
}

// ==================== 12. SYMBOLS ====================
let sym1 = Symbol();
let sym2 = Symbol("description");
let sym3 = Symbol.for("global"); // Global symbol registry
let sym4 = Symbol.keyFor(sym3); // Get key from global symbol

// Well-known symbols
console.log(Symbol.iterator);
console.log(Symbol.asyncIterator);
console.log(Symbol.hasInstance);
console.log(Symbol.isConcatSpreadable);
console.log(Symbol.match);
console.log(Symbol.matchAll);
console.log(Symbol.replace);
console.log(Symbol.search);
console.log(Symbol.species);
console.log(Symbol.split);
console.log(Symbol.toPrimitive);
console.log(Symbol.toStringTag);
console.log(Symbol.unscopables);

// Using symbols as property keys
let symbolObj = {
  [sym1]: "symbol property",
  [Symbol.toStringTag]: "CustomObject",
};

// ==================== 13. ITERATORS & GENERATORS ====================
// Iterator protocol
let customIterator = {
  [Symbol.iterator]() {
    let count = 0;
    return {
      next() {
        if (count < 3) {
          return { value: count++, done: false };
        }
        return { done: true };
      },
    };
  },
};

// Generator functions
function* simpleGenerator() {
  yield 1;
  yield 2;
  return 3;
}

function* delegatingGenerator() {
  yield* [1, 2, 3]; // Delegate to iterable
  yield* simpleGenerator(); // Delegate to another generator
}

// Async generators
async function* asyncGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
}

// ==================== 14. PROMISES & ASYNC/AWAIT ====================
// Promise creation
let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("resolved"), 1000);
});

let promise2 = Promise.resolve("immediate");
let promise3 = Promise.reject("error");

// Promise methods
Promise.all([promise1, promise2]).then(console.log);
Promise.allSettled([promise1, promise3]).then(console.log);
Promise.race([promise1, promise2]).then(console.log);
Promise.any([promise3, promise2]).then(console.log);

// Promise instance methods
promise1.then((value) => console.log(value));
promise1.catch((error) => console.log(error));
promise1.finally(() => console.log("cleanup"));

// Async/await
async function asyncExample() {
  try {
    let result = await promise1;
    return result;
  } catch (error) {
    throw error;
  }
}

// ==================== 15. REGULAR EXPRESSIONS ====================
let regex1 = /pattern/gi; // Literal syntax
let regex2 = new RegExp("pattern", "gi"); // Constructor

// RegExp properties
console.log(regex1.source); // "pattern"
console.log(regex1.flags); // "gi"
console.log(regex1.global); // true
console.log(regex1.ignoreCase); // true
console.log(regex1.multiline); // false
console.log(regex1.dotAll); // false
console.log(regex1.unicode); // false
console.log(regex1.sticky); // false
console.log(regex1.lastIndex); // 0

// RegExp methods
console.log(regex1.test("Pattern")); // true
console.log(regex1.exec("Pattern text")); // Match array or null
console.log(regex1.toString()); // "/pattern/gi"
console.log(RegExp.prototype.valueOf.call(regex1)); // RegExp object

// String methods with regex
let text = "Hello World Hello";
console.log(text.match(/Hello/g)); // ["Hello", "Hello"]
console.log(text.matchAll(/Hello/g)); // Iterator
console.log(text.search(/World/)); // 6
console.log(text.replace(/Hello/g, "Hi")); // "Hi World Hi"
console.log(text.replaceAll(/Hello/g, "Hi")); // "Hi World Hi"
console.log(text.split(/\s+/)); // ["Hello", "World", "Hello"]

// ==================== 16. DATES ====================
let date1 = new Date();
let date2 = new Date(2024, 0, 1); // Year, month (0-indexed), day
let date3 = new Date("2024-01-01");
let date4 = new Date(1704067200000); // Timestamp

// Date methods - Get
console.log(date1.getFullYear()); // 2024
console.log(date1.getMonth()); // 0-11
console.log(date1.getDate()); // 1-31
console.log(date1.getDay()); // 0-6 (Sunday = 0)
console.log(date1.getHours()); // 0-23
console.log(date1.getMinutes()); // 0-59
console.log(date1.getSeconds()); // 0-59
console.log(date1.getMilliseconds()); // 0-999
console.log(date1.getTime()); // Timestamp
console.log(date1.getTimezoneOffset()); // Minutes from UTC

// UTC versions
console.log(date1.getUTCFullYear());
console.log(date1.getUTCMonth());
console.log(date1.getUTCDate());
console.log(date1.getUTCDay());
console.log(date1.getUTCHours());
console.log(date1.getUTCMinutes());
console.log(date1.getUTCSeconds());
console.log(date1.getUTCMilliseconds());

// Date methods - Set
date1.setFullYear(2025);
date1.setMonth(11);
date1.setDate(31);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);
date1.setMilliseconds(999);
date1.setTime(Date.now());

// UTC set versions
date1.setUTCFullYear(2025);
date1.setUTCMonth(11);
date1.setUTCDate(31);
date1.setUTCHours(23);
date1.setUTCMinutes(59);
date1.setUTCSeconds(59);
date1.setUTCMilliseconds(999);

// Date methods - String conversion
console.log(date1.toString()); // Full string
console.log(date1.toDateString()); // Date part only
console.log(date1.toTimeString()); // Time part only
console.log(date1.toISOString()); // ISO 8601 format
console.log(date1.toJSON()); // JSON format (same as ISO)
console.log(date1.toLocaleDateString()); // Locale date
console.log(date1.toLocaleTimeString()); // Locale time
console.log(date1.toLocaleString()); // Locale date and time
console.log(date1.toUTCString()); // UTC string
console.log(date1.valueOf()); // Timestamp

// Date static methods
console.log(Date.now()); // Current timestamp
console.log(Date.parse("2024-01-01")); // Parse date string
console.log(Date.UTC(2024, 0, 1)); // UTC timestamp

// ==================== 17. ERROR HANDLING ====================
// Error types
let error1 = new Error("Generic error");
let syntaxError = new SyntaxError("Syntax error");
let referenceError = new ReferenceError("Reference error");
let typeError = new TypeError("Type error");
let rangeError = new RangeError("Range error");
let uriError = new URIError("URI error");
let evalError = new EvalError("Eval error");
let aggregateError = new AggregateError([error1, syntaxError], "Multiple errors");

// Error properties
console.log(error1.name); // "Error"
console.log(error1.message); // "Generic error"
console.log(error1.stack); // Stack trace
console.log(error1.cause); // Error cause (if provided)

// Try-catch-finally
try {
  throw new Error("Something went wrong");
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Cleanup code");
}

// Try-catch with specific error types
try {
  JSON.parse("invalid json");
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log("JSON syntax error");
  }
}

// Custom errors
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "CustomError";
  }
}

// ==================== 18. JSON ====================
let jsonObj = { name: "John", age: 30, active: true };
let jsonArray = [1, 2, 3, "four"];

// JSON methods
let jsonString = JSON.stringify(jsonObj); // Object to JSON string
let jsonStringFormatted = JSON.stringify(jsonObj, null, 2); // Formatted
let jsonStringFiltered = JSON.stringify(jsonObj, ["name"]); // Only specific properties
let jsonStringTransformed = JSON.stringify(jsonObj, (key, value) => {
  return typeof value === "string" ? value.toUpperCase() : value;
});

let parsedObj = JSON.parse(jsonString); // JSON string to object
let parsedWithReviver = JSON.parse(jsonString, (key, value) => {
  return typeof value === "string" ? value.toLowerCase() : value;
});

// ==================== 19. MAPS ====================
let map1 = new Map();
let map2 = new Map([
  ["key1", "value1"],
  ["key2", "value2"],
]);
let map3 = new Map(Object.entries(jsonObj));

// Map properties
console.log(map1.size); // 0

// Map methods
map1.set("key", "value"); // Add/update entry
map1.set(obj1, "object as key"); // Any type as key
console.log(map1.get("key")); // Get value
console.log(map1.has("key")); // Check if key exists
console.log(map1.delete("key")); // Delete entry
map1.clear(); // Remove all entries

// Map iteration
map2.forEach((value, key, map) => console.log(key, value));
for (let [key, value] of map2) {
  console.log(key, value);
}
for (let key of map2.keys()) {
  console.log(key);
}
for (let value of map2.values()) {
  console.log(value);
}
for (let entry of map2.entries()) {
  console.log(entry);
}

// Map conversion
console.log(Array.from(map2)); // To array
console.log(Object.fromEntries(map2)); // To object

// ==================== 20. SETS ====================
let set1 = new Set();
let set2 = new Set([1, 2, 3, 2, 1]); // [1, 2, 3] - duplicates removed
let set3 = new Set("hello"); // ["h", "e", "l", "o"] - unique characters

// Set properties
console.log(set1.size); // 0

// Set methods
set1.add("value1"); // Add value
set1.add("value2");
set1.add("value1"); // Duplicate ignored
console.log(set1.has("value1")); // Check if value exists
console.log(set1.delete("value1")); // Delete value
set1.clear(); // Remove all values

// Set iteration
set2.forEach((value, value2, set) => console.log(value)); // value === value2
for (let value of set2) {
  console.log(value);
}
for (let value of set2.values()) {
  console.log(value);
}
for (let key of set2.keys()) {
  console.log(key);
} // Same as values()
for (let entry of set2.entries()) {
  console.log(entry);
} // [value, value]

// Set operations (manual implementation)
let setA = new Set([1, 2, 3]);
let setB = new Set([2, 3, 4]);
let union = new Set([...setA, ...setB]); // {1, 2, 3, 4}
let intersection = new Set([...setA].filter((x) => setB.has(x))); // {2, 3}
let difference = new Set([...setA].filter((x) => !setB.has(x))); // {1}

// ==================== 21. WEAK COLLECTIONS ====================
// WeakMap - keys must be objects, garbage collectable
// let weakMap = new WeakMap(); // because there is a definition above that gives error
let objKey = {};
weakMap.set(objKey, "value");
console.log(weakMap.get(objKey)); // "value"
console.log(weakMap.has(objKey)); // true
weakMap.delete(objKey);

// WeakSet - values must be objects, garbage collectable
// let weakSet = new WeakSet(); // because there is a definition above that gives error
let objValue = {};
weakSet.add(objValue);
console.log(weakSet.has(objValue)); // true
weakSet.delete(objValue);

// WeakRef - weak reference to object
let weakRef = new WeakRef(objValue);
console.log(weakRef.deref()); // objValue or undefined if GC'd

// FinalizationRegistry - cleanup when object is GC'd
let registry = new FinalizationRegistry((heldValue) => {
  console.log(`Object with ${heldValue} was garbage collected`);
});
registry.register(objValue, "some identifier");

// ==================== 22. TYPED ARRAYS ====================
// ArrayBuffer
let buffer = new ArrayBuffer(16); // 16 bytes
console.log(buffer.byteLength); // 16
let slicedBuffer = buffer.slice(0, 8);

// DataView - generic view of ArrayBuffer
let dataView = new DataView(buffer);
dataView.setInt8(0, 127);
dataView.setInt16(1, 32767);
dataView.setInt32(3, 2147483647);
dataView.setFloat32(7, 3.14);
dataView.setFloat64(8, 3.141592653589793);
console.log(dataView.getInt8(0)); // 127
console.log(dataView.getInt16(1)); // 32767
console.log(dataView.getInt32(3)); // 2147483647
console.log(dataView.getFloat32(7)); // 3.14
console.log(dataView.getFloat64(8)); // 3.141592653589793

// Typed Array constructors
let int8Array = new Int8Array(8); // -128 to 127
let uint8Array = new Uint8Array(8); // 0 to 255
let uint8ClampedArray = new Uint8ClampedArray(8); // 0 to 255, clamped
let int16Array = new Int16Array(4); // -32768 to 32767
let uint16Array = new Uint16Array(4); // 0 to 65535
let int32Array = new Int32Array(2); // -2^31 to 2^31-1
let uint32Array = new Uint32Array(2); // 0 to 2^32-1
let float32Array = new Float32Array(2); // 32-bit floats
let float64Array = new Float64Array(1); // 64-bit floats
let bigInt64Array = new BigInt64Array(1); // 64-bit signed BigInts
let bigUint64Array = new BigUint64Array(1); // 64-bit unsigned BigInts

// Typed array from existing data
let fromArray = new Int32Array([1, 2, 3, 4]);
let fromBuffer = new Int32Array(buffer);
let fromBufferRange = new Int32Array(buffer, 4, 2); // offset 4, length 2

// Typed array properties and methods (inherit from Array)
console.log(int32Array.length);
console.log(int32Array.byteLength);
console.log(int32Array.byteOffset);
console.log(int32Array.buffer);
int32Array.set([1, 2], 0); // Set values at index
let subarray = int32Array.subarray(0, 2); // Create subarray view

// Static methods
console.log(Int32Array.from([1, 2, 3]));
console.log(Int32Array.of(1, 2, 3));

// ==================== 23. MODULES (ES6) ====================
// Export syntax (in a module file)
// export const variable = "value";
// export function myFunction() {}
// export class MyClass {}
// export default function() {}
// export { variable as alias };
// export * from './other-module.js';

// Import syntax
// import defaultExport from './module.js';
// import { variable, myFunction } from './module.js';
// import { variable as alias } from './module.js';
// import * as module from './module.js';
// import './module.js'; // Side effects only

// Dynamic imports
// import('./module.js').then(module => {
//     // Use module
// });
// let module = await import('./module.js');

// ==================== 24. PROXY ====================
let target = { name: "John", age: 30 };
let proxy = new Proxy(target, {
  get(target, property, receiver) {
    console.log(`Getting ${property}`);
    return Reflect.get(target, property, receiver);
  },
  set(target, property, value, receiver) {
    console.log(`Setting ${property} to ${value}`);
    return Reflect.set(target, property, value, receiver);
  },
  has(target, property) {
    console.log(`Checking if ${property} exists`);
    return Reflect.has(target, property);
  },
  deleteProperty(target, property) {
    console.log(`Deleting ${property}`);
    return Reflect.deleteProperty(target, property);
  },
  ownKeys(target) {
    console.log("Getting own keys");
    return Reflect.ownKeys(target);
  },
  getOwnPropertyDescriptor(target, property) {
    console.log(`Getting descriptor for ${property}`);
    return Reflect.getOwnPropertyDescriptor(target, property);
  },
  defineProperty(target, property, descriptor) {
    console.log(`Defining ${property}`);
    return Reflect.defineProperty(target, property, descriptor);
  },
  preventExtensions(target) {
    console.log("Preventing extensions");
    return Reflect.preventExtensions(target);
  },
  getPrototypeOf(target) {
    console.log("Getting prototype");
    return Reflect.getPrototypeOf(target);
  },
  setPrototypeOf(target, prototype) {
    console.log("Setting prototype");
    return Reflect.setPrototypeOf(target, prototype);
  },
  isExtensible(target) {
    console.log("Checking extensibility");
    return Reflect.isExtensible(target);
  },
  apply(target, thisArg, argumentsList) {
    console.log("Calling function");
    return Reflect.apply(target, thisArg, argumentsList);
  },
  construct(target, argumentsList, newTarget) {
    console.log("Constructing object");
    return Reflect.construct(target, argumentsList, newTarget);
  },
});

// Revocable proxy
let { proxy: revocableProxy, revoke } = Proxy.revocable(target, {});
// revoke(); // Makes proxy unusable

// ==================== 25. REFLECT ====================
// Reflect methods (mirror Proxy traps)
console.log(Reflect.get(target, "name")); // "John"
console.log(Reflect.set(target, "city", "NYC")); // true
console.log(Reflect.has(target, "name")); // true
console.log(Reflect.deleteProperty(target, "age")); // true
console.log(Reflect.ownKeys(target)); // ["name", "city"]
console.log(Reflect.getOwnPropertyDescriptor(target, "name"));
console.log(Reflect.defineProperty(target, "prop", { value: "val" })); // true
console.log(Reflect.preventExtensions({})); // true
console.log(Reflect.getPrototypeOf(target)); // Object.prototype
console.log(Reflect.setPrototypeOf(target, null)); // true
console.log(Reflect.isExtensible(target)); // false (after preventExtensions)
console.log(Reflect.apply(Math.max, null, [1, 2, 3])); // 3
console.log(Reflect.construct(Array, [1, 2, 3])); // [1, 2, 3]

// ==================== 26. ASYNC ITERATION ====================
// Async iterators
let asyncIterable = {
  async *[Symbol.asyncIterator]() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
  },
};

// For-await-of loop
async function consumeAsyncIterable() {
  for await (let value of asyncIterable) {
    console.log(value);
  }
}

// Async generator functions
async function* asyncGen() {
  let i = 0;
  while (i < 3) {
    yield await new Promise((resolve) => setTimeout(() => resolve(i++), 100));
  }
}

// ==================== 27. INTL (INTERNATIONALIZATION) ====================
// Locale-sensitive string comparison
let collator = new Intl.Collator("en-US");
console.log(collator.compare("a", "c")); // -1

// Date and time formatting
let dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});
console.log(dateFormatter.format(new Date())); // "December 15, 2024"

// Number formatting
let numberFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
console.log(numberFormatter.format(1234.56)); // "$1,234.56"

// Relative time formatting
let relativeTimeFormatter = new Intl.RelativeTimeFormat("en-US");
console.log(relativeTimeFormatter.format(-1, "day")); // "1 day ago"

// Plural rules
let pluralRules = new Intl.PluralRules("en-US");
console.log(pluralRules.select(1)); // "one"
console.log(pluralRules.select(2)); // "other"

// List formatting
let listFormatter = new Intl.ListFormat("en-US", {
  style: "long",
  type: "conjunction",
});
console.log(listFormatter.format(["Apple", "Orange", "Banana"])); // "Apple, Orange, and Banana"

// Display names
let displayNames = new Intl.DisplayNames(["en-US"], {
  type: "region",
});
console.log(displayNames.of("US")); // "United States"

// Locale information
let locale = new Intl.Locale("en-US");
console.log(locale.language); // "en"
console.log(locale.region); // "US"

// Segmenter (text segmentation)
let segmenter = new Intl.Segmenter("en-US", {
  granularity: "word",
});
let segments = segmenter.segment("Hello world");
for (let segment of segments) {
  console.log(segment);
}

// ==================== 28. WEBASSEMBLY ====================
// WebAssembly (basic usage - requires .wasm file)
// WebAssembly.instantiate(wasmBytes).then(result => {
//     result.instance.exports.exportedFunction();
// });

// WebAssembly.compile(wasmBytes).then(module => {
//     return WebAssembly.instantiate(module);
// });

// WebAssembly.validate(wasmBytes); // Returns boolean

// WebAssembly object constructors
// new WebAssembly.Module(wasmBytes);
// new WebAssembly.Instance(module);
// new WebAssembly.Memory({initial: 1});
// new WebAssembly.Table({initial: 1, element: "anyfunc"});
// new WebAssembly.Global({value: "i32", mutable: true}, 0);

// ==================== 29. PERFORMANCE API ====================
// Performance timing
console.log(performance.now()); // High-resolution timestamp
performance.mark("start");
// ... some code ...
performance.mark("end");
performance.measure("duration", "start", "end");
console.log(performance.getEntriesByType("measure"));

// Performance observer
// let observer = new PerformanceObserver((list) => {
//     list.getEntries().forEach(entry => console.log(entry));
// });
// observer.observe({entryTypes: ['measure']});

// ==================== 30. CONTROL FLOW ====================
// Conditional statements
if (condition) {
  // code
} else if (anotherCondition) {
  // code
} else {
  // code
}

// Switch statement
switch (value) {
  case "option1":
    // code
    break;
  case "option2":
  case "option3":
    // code for both options
    break;
  default:
  // default code
}

// Loops
for (let i = 0; i < 10; i++) {
  if (i === 5) continue; // Skip iteration
  if (i === 8) break; // Exit loop
}

for (let key in object) {
  if (object.hasOwnProperty(key)) {
    // code
  }
}

for (let value of iterable) {
  // code
}

while (condition) {
  // code
}

do {
  // code
} while (condition);

// Labels for nested loops
outer: for (let i = 0; i < 3; i++) {
  inner: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outer;
  }
}

// ==================== 31. HOISTING ====================
// Variable hoisting
console.log(hoistedVar2); // undefined (not error)
var hoistedVar2 = "I'm hoisted";

// Function hoisting
hoistedFunc(); // Works - function declarations are fully hoisted
function hoistedFunc() {
  console.log("I'm hoisted");
}

// Function expressions are not hoisted
// notHoisted(); // TypeError: notHoisted is not a function
var notHoisted = function () {
  console.log("Not hoisted");
};

// ==================== 32. CLOSURES ====================
function outerFunction(x) {
  // Outer scope variable
  let outerVar = x;

  function innerFunction(y) {
    // Inner function has access to outer variables
    return outerVar + y;
  }

  return innerFunction;
}

let closure = outerFunction(10);
console.log(closure(5)); // 15 - outerVar is "closed over"

// Module pattern using closures
let module = (function () {
  let privateVar = "private";

  return {
    getPrivate: function () {
      return privateVar;
    },
    setPrivate: function (val) {
      privateVar = val;
    },
  };
})();

// ==================== 33. THIS BINDING ====================
// Global this
console.log(this); // Window (browser) or global (Node.js)

// Function this
function regularFunc() {
  return this; // Window/global in non-strict, undefined in strict
}

// Method this
let objMethod = {
  name: "Object",
  method: function () {
    return this.name; // "Object"
  },
  arrow: () => {
    return this.name; // undefined (lexical this)
  },
};

// Constructor this
function Constructor(name) {
  this.name = name; // New instance
}

// Call/apply/bind this
let objA = { name: "A" };
let objB = { name: "B" };
function getName() {
  return this.name;
}

console.log(getName.call(objA)); // "A"
console.log(getName.apply(objB)); // "B"
let boundGetName = getName.bind(objA);
console.log(boundGetName()); // "A"

// Event handler this (in browser)
// element.addEventListener('click', function() {
//     console.log(this); // The element
// });

// ==================== 34. PROTOTYPES ====================
// Constructor function and prototype
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return `Hello, I'm ${this.name}`;
};

Person.prototype.species = "Homo sapiens";

let person1 = new Person("Alice");
console.log(person1.greet()); // "Hello, I'm Alice"
console.log(person1.species); // "Homo sapiens"

// Prototype chain
console.log(person1.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__); // null

// Prototype methods
console.log(person1.hasOwnProperty("name")); // true
console.log(person1.hasOwnProperty("species")); // false
console.log("species" in person1); // true

// Setting prototype
let animal = { type: "Animal" };
let dog = Object.create(animal);
dog.breed = "Labrador";
console.log(dog.type); // "Animal" (inherited)

// ==================== 35. DESTRUCTURING ====================
// Array destructuring
let [first, second, ...rest2] = [1, 2, 3, 4, 5];
let [a2, , c2] = [1, 2, 3]; // Skip elements
let [x2 = 10, y2 = 20] = [5]; // Default values
let [p, q] = [q, p]; // Swapping (if q was defined)

// Object destructuring
let { name3, age2 } = { name3: "John", age2: 30, city2: "NYC" };
let { name3: fullName, age2: years } = { name3: "John", age2: 30 }; // Renaming
let { name3: n = "Anonymous" } = {}; // Default values
let {
  address: { street, zip },
} = { address: { street: "Main St", zip: 12345 } }; // Nested

// Function parameter destructuring
function greetPerson({ name4, age3 = 0 }) {
  return `Hello ${name4}, you are ${age3} years old`;
}

function processArray([first2, ...rest3]) {
  return { first2, rest3 };
}

// ==================== 36. SPREAD & REST ====================
// Spread operator
let arr6 = [1, 2, 3];
let arr7 = [...arr6, 4, 5]; // [1, 2, 3, 4, 5]
let arr8 = [0, ...arr6, 4]; // [0, 1, 2, 3, 4]

let obj5 = { a: 1, b: 2 };
let obj6 = { ...obj5, c: 3 }; // {a: 1, b: 2, c: 3}
let obj7 = { a: 0, ...obj5 }; // {a: 1, b: 2} - obj5.a overwrites

// Function calls with spread
console.log(Math.max(...arr6)); // 3
console.log(Math.min(...arr6)); // 1

// Rest parameters
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

function myFunc(first3, second2, ...others) {
  console.log(first3, second2, others);
}

// ==================== 37. TEMPLATE LITERALS ====================
let name5 = "World";
let greeting = `Hello ${name5}!`; // "Hello World!"

// Multi-line strings
let multiLine = `
Line 1
Line 2
Line 3
`;

// Expression evaluation
let a3 = 5,
  b2 = 10;
let result2 = `${a3} + ${b2} = ${a3 + b2}`; // "5 + 10 = 15"

// Tagged template literals
function highlight(strings, ...values) {
  return strings.reduce((result, string, i) => {
    return result + string + (values[i] ? `<mark>${values[i]}</mark>` : "");
  }, "");
}

let highlighted = highlight`The answer is ${42} and the question is ${undefined}`;

// Raw strings
console.log(String.raw`Hello\nWorld`); // "Hello\\nWorld" (escaped)

// ==================== 38. SYMBOLS (ADVANCED) ====================
// Creating symbols
let sym5 = Symbol();
let sym6 = Symbol("description");
let sym7 = Symbol.for("global-key"); // Global symbol registry
let sym8 = Symbol.for("global-key"); // Same as sym7
console.log(sym7 === sym8); // true

// Symbol key from global registry
console.log(Symbol.keyFor(sym7)); // 'global-key'
console.log(Symbol.keyFor(sym5)); // undefined (not global)

// Well-known symbols
let customIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};

let customObject = {
  [Symbol.toStringTag]: "CustomObject",
  [Symbol.toPrimitive](hint) {
    if (hint === "number") return 42;
    if (hint === "string") return "custom";
    return "default";
  },
};

console.log(Object.prototype.toString.call(customObject)); // [object CustomObject]
console.log(+customObject); // 42
console.log(`${customObject}`); // "custom"

// ==================== 39. BUILT-IN OBJECTS METHODS ====================
// Global functions
console.log(isNaN(NaN)); // true
console.log(isFinite(42)); // true
console.log(parseFloat("3.14")); // 3.14
console.log(parseInt("42px", 10)); // 42
console.log(encodeURI("hello world")); // "hello%20world"
console.log(decodeURI("hello%20world")); // "hello world"
console.log(encodeURIComponent("hello&world")); // "hello%26world"
console.log(decodeURIComponent("hello%26world")); // "hello&world"
console.log(escape("hello world")); // "hello%20world" (deprecated)
console.log(unescape("hello%20world")); // "hello world" (deprecated)

// eval (use with extreme caution)
console.log(eval("2 + 2")); // 4

// ==================== 40. ADVANCED ARRAY METHODS ====================
let numbers = [1, 2, 3, 4, 5];

// Array.from with mapping
let doubled = Array.from(numbers, (x) => x * 2); // [2, 4, 6, 8, 10]
let indices = Array.from({ length: 5 }, (_, i) => i); // [0, 1, 2, 3, 4]

// Advanced reduce patterns
let sum2 = numbers.reduce((acc, curr) => acc + curr, 0);
let max = numbers.reduce((acc, curr) => Math.max(acc, curr));
let grouped = numbers.reduce((acc, curr) => {
  let key = curr % 2 === 0 ? "even" : "odd";
  acc[key] = acc[key] || [];
  acc[key].push(curr);
  return acc;
}, {});

// Chaining array methods
let result3 = numbers
  .filter((x) => x > 2)
  .map((x) => x * 2)
  .reduce((acc, curr) => acc + curr, 0);

// ==================== 41. MISCELLANEOUS ====================
// Strict mode
("use strict");

// Comma operator
let result4 = (console.log("side effect"), 42); // 42

// Void operator
let result5 = void 0; // undefined
let result6 = void (2 + 2); // undefined

// typeof for functions
function test() {}
console.log(typeof test); // "function"

// instanceof with primitives
console.log("hello" instanceof String); // false
console.log(new String("hello") instanceof String); // true

// Primitive wrapper objects
let strObj = new String("hello");
let numObj = new Number(42);
let boolObj = new Boolean(true);
console.log(typeof strObj); // "object"
console.log(strObj.valueOf()); // "hello"

// Function properties
function namedFunc() {}
console.log(namedFunc.name); // "namedFunc"
console.log(namedFunc.length); // 0 (parameter count)

// Arguments object (non-arrow functions)
function withArguments() {
  console.log(arguments.length);
  console.log(Array.from(arguments));
}

// Getters and setters
let objWithAccessors = {
  _value: 0,
  get value() {
    return this._value;
  },
  set value(val) {
    this._value = val;
  },
};

// Property descriptors
Object.defineProperty(objWithAccessors, "readOnly", {
  value: "cannot change",
  writable: false,
  enumerable: true,
  configurable: false,
});

// ==================== END OF CHEATSHEET ====================
