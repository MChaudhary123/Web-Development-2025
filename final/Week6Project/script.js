// selects elements from HTML page
const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const clearBtn = document.getElementById("clearBtn");
const counter = document.getElementById("counter");

// update counter function
function updateCounter() {
  const items = document.querySelectorAll("li"); // selects all list items
  if (items.length === 1) {
    counter.textContent = "1 item";
  } else {
    counter.textContent = `${items.length} items`;
  }
}

// Add button click
addBtn.addEventListener("click", () => {
  const text = input.value.trim();  // removes extra spaces
  if (text === "") return; // ignores empty input

  const li = document.createElement("li");
  li.textContent = text;

  // toggle "done" on click
  li.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  // delete Button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
    updateCounter();
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = "";
  updateCounter();
});

// Enter key triggers Add
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

// Clear all button
clearBtn.addEventListener("click", () => {
  list.innerHTML = "";
  updateCounter();
});

// Initialize counter
updateCounter();
