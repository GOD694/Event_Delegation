# Event Delegation in JavaScript

## 📌 Introduction

Event Delegation is a technique in JavaScript where you attach a single event listener to a parent element instead of adding event listeners to multiple child elements.

It works because of **event bubbling**, where an event triggered on a child element propagates up to its parent.

---

## 🚀 Why Use Event Delegation?

* Improves performance (fewer event listeners)
* Works for dynamically added elements
* Cleaner and more maintainable code

---

## 🧠 How It Works

Instead of adding event listeners to each `<li>`, we add one listener to the parent `<ul>` and detect which child was clicked.

---

## 💻 Example

```javascript
const list = document.getElementById("list");

list.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        console.log("Item clicked:", e.target.textContent);
    }
});
```

---

## 🔍 Explanation

* `list` → Parent element (`ul`)
* `e.target` → The actual clicked element
* `tagName === "LI"` → Ensures only list items trigger the action

---

## ➕ Dynamic Elements Example

```javascript
const addBtn = document.getElementById("addBtn");
let count = 4;

addBtn.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "Item " + count++;
    list.appendChild(li);
});
```

👉 Even newly added items will work with the same event listener.

---

## ⚠️ Important Notes

* Always check `e.target`
* Be careful if there are nested elements inside `<li>`
* Use `e.target.closest("li")` if needed

---

## 📚 Real-Life Use Case

* Todo list apps
* Dynamic menus
* Chat applications
* Table row actions

---

## 🏁 Conclusion

Event Delegation is a powerful concept that helps in writing efficient and scalable JavaScript code. It is especially useful when dealing with dynamic DOM elements.

---

## ⭐ Author

ARSLAN ANWARUL

---
