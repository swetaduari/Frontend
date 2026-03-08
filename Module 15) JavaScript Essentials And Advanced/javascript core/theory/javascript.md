# JavaScript Interview Questions and Answers

## 1. What is JavaScript?

JavaScript is a high-level, interpreted programming language used mainly
for creating interactive and dynamic content on web pages. It runs in
the browser and allows developers to manipulate HTML, CSS, and handle
events.

------------------------------------------------------------------------

## 2. What is the use of isNaN() function?

The isNaN() function is used to check whether a value is Not-a-Number
(NaN).

Example:

``` javascript
isNaN("Hello"); // true
isNaN(100); // false
```

------------------------------------------------------------------------

## 3. What is Negative Infinity?

-Infinity is a special numeric value in JavaScript that represents a
number smaller than any other number.

Example:

``` javascript
var num = -Infinity;
console.log(num);
```

------------------------------------------------------------------------

## 4. Which company developed JavaScript?

JavaScript was developed by Netscape Communications Corporation and
created by Brendan Eich in 1995.

------------------------------------------------------------------------

## 5. What are undeclared and undefined variables?

### Undefined Variable

A variable that is declared but not assigned a value.

``` javascript
let x;
console.log(x); // undefined
```

### Undeclared Variable

A variable that has not been declared using var, let, or const.

``` javascript
console.log(y); // ReferenceError
```

------------------------------------------------------------------------

## 6. Write the code for adding new elements dynamically

``` javascript
let newElement = document.createElement("p");
newElement.textContent = "This is a new paragraph";
document.body.appendChild(newElement);
```

------------------------------------------------------------------------

## 7. What is the difference between ViewState and SessionState?

  -----------------------------------------------------------------------
  ViewState                       SessionState
  ------------------------------- ---------------------------------------
  Stores data on the client side  Stores data on the server side.
  (browser).                      

  Data persists only for the      Data persists across multiple pages.
  page.                           

  Mainly used in ASP.NET Web      Used for maintaining user session data.
  Forms.                          
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 8. What is === operator?

The === operator is called the strict equality operator. It checks both
value and data type.

``` javascript
5 === "5"; // false
5 === 5;   // true
```

------------------------------------------------------------------------

## 9. How can the style/class of an element be changed?

Change Style:

``` javascript
document.getElementById("myDiv").style.color = "red";
```

Change Class:

``` javascript
document.getElementById("myDiv").className = "newClass";
```

------------------------------------------------------------------------

## 10. How to read and write a file using JavaScript?

Read File (FileReader):

``` javascript
let reader = new FileReader();
reader.onload = function(e) {
  console.log(e.target.result);
};
reader.readAsText(file);
```

Write File (Blob):

``` javascript
let data = "Hello World";
let blob = new Blob([data], {type: "text/plain"});
```

------------------------------------------------------------------------

## 11. What are all the looping structures in JavaScript?

JavaScript loops: - for - while - do...while - for...in - for...of -
forEach()

Example:

``` javascript
for(let i = 0; i < 5; i++) {
  console.log(i);
}
```

------------------------------------------------------------------------

## 12. How can you convert the string of any base to an integer?

Using parseInt()

``` javascript
parseInt("1010", 2); // 10
parseInt("A", 16);   // 10
```

------------------------------------------------------------------------

## 13. What is the function of the delete operator?

The delete operator removes a property from an object.

``` javascript
let obj = {name: "John", age: 25};
delete obj.age;
console.log(obj);
```

------------------------------------------------------------------------

## 14. What are all the types of Pop up boxes available in JavaScript?

1.  Alert Box

``` javascript
alert("Hello!");
```

2.  Confirm Box

``` javascript
confirm("Are you sure?");
```

3.  Prompt Box

``` javascript
prompt("Enter your name:");
```

------------------------------------------------------------------------

## 15. What is the use of Void (0)?

void(0) evaluates an expression and returns undefined.

Example:

``` javascript
<a href="javascript:void(0)">Click</a>
```

------------------------------------------------------------------------

## 16. How can a page be forced to load another page in JavaScript?

``` javascript
window.location.href = "https://example.com";
```

or

``` javascript
window.location.replace("https://example.com");
```

------------------------------------------------------------------------

## 17. What are the disadvantages of using innerHTML in JavaScript?

-   Security risk (XSS attacks)
-   Performance issues with large DOM updates
-   Removes existing event handlers
-   Harder debugging in large applications

Example:

``` javascript
document.getElementById("demo").innerHTML = "<p>Hello</p>";
```
