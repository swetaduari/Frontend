# 📘 JSX in React.js

## ❓ Question 1: What is JSX in React.js? Why is it used?

### 🔹 What is JSX?
**JSX (JavaScript XML)** is a syntax extension used in React that allows developers to write **HTML-like code inside JavaScript**.

```jsx
const element = <h1>Hello, React!</h1>;
```

---

### 🎯 Why is JSX used?

- Improves code readability  
- Combines UI structure with logic  
- Makes UI development easier and faster  
- Enhances developer productivity  

📌 Without JSX, React uses:

```js
React.createElement("h1", null, "Hello, React!");
```

---

## ❓ Question 2: How is JSX different from JavaScript? Can you write JavaScript inside JSX?

### 🔍 JSX vs JavaScript

| Feature        | JSX                  | JavaScript            |
|----------------|----------------------|------------------------|
| Syntax         | HTML-like            | Pure JavaScript        |
| Purpose        | UI Design            | Logic & Functionality  |
| Readability    | High                 | Moderate               |
| Compilation    | Requires Babel       | Runs directly          |

---

### 💡 Can you use JavaScript inside JSX?

👉 Yes! You can embed JavaScript using **curly braces `{}`**

```jsx
const name = "Alex";

const element = <h1>Hello, {name}!</h1>;
```

You can include:
- Variables  
- Expressions  
- Functions  
- Calculations  

---

## ❓ Question 3: Importance of Curly Braces `{}` in JSX

### 🎯 Why are `{}` important?

Curly braces allow you to **embed JavaScript expressions inside JSX**, making your UI dynamic.

---

### 🔧 Examples

#### 📌 Variables
```jsx
const age = 18;
<h1>Age: {age}</h1>
```

#### 📌 Expressions
```jsx
<h1>{5 + 5}</h1>
```

#### 📌 Function Calls
```jsx
function greet() {
  return "Hello!";
}

<h1>{greet()}</h1>
```

#### 📌 Conditional Rendering
```jsx
const isLoggedIn = true;

<h1>{isLoggedIn ? "Welcome!" : "Please Login"}</h1>
```

---

### ⚠️ Important Rules

- Curly braces can only contain **expressions**, not statements  

❌ Incorrect:
```jsx
{if (x > 0) { return x; }}
```

✅ Correct:
```jsx
{x > 0 ? x : null}
```

---


