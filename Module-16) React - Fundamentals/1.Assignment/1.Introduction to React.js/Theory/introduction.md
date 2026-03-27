# React.js Overview

## Question 1: What is React.js? How is it different from other JavaScript frameworks and libraries?

### What is React.js?
React.js is a JavaScript library developed by Meta for building interactive user interfaces, especially for single-page applications (SPAs).

- Focuses on the **view layer (UI)**
- Uses **components** for reusable UI elements
- Helps build fast and dynamic web applications

### How React is Different

| Feature | React | Other Frameworks (Angular, Vue) |
|--------|------|--------------------------------|
| Type | Library | Framework |
| Scope | UI only | Full application structure |
| Flexibility | High | Less flexible |
| Learning Curve | Moderate | Angular: Hard, Vue: Easy |
| Data Binding | One-way | Two-way (Angular) |

**Key Difference:**  
React focuses only on UI, while frameworks like Angular handle the entire application.

---

## Question 2: Core Principles of React

### 1. Virtual DOM
The Virtual DOM is a lightweight copy of the real DOM.

**How it works:**
1. React creates a virtual UI
2. Updates happen in the Virtual DOM
3. Compares old and new versions (diffing)
4. Updates only changed parts in real DOM

**Benefit:** Faster performance

---

### 2. Component-Based Architecture
React applications are built using reusable components.

**Examples:**
- Header
- Footer
- Button

Each component:
- Is independent
- Has its own logic
- Can be reused

---

### 3. Unidirectional Data Flow
- Data flows in one direction (parent → child)
- Makes debugging easier

---

### 4. JSX (JavaScript XML)
JSX allows writing HTML inside JavaScript.

```jsx
const element = <h1>Hello World</h1>;