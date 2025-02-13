const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter a task");
    return;
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");

    // span.innerHTML = "❌";
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}
listContainer.addEventListener("click", function (e) {
  console.log(e.target, "my target");
  if (e.target.tagName === "LI") {
    e.target.classList.add("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    console.log(e.target.parentElement);
    localStorage.clear(e.target.parentElement);
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("Data", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("Data");
}
showData();
// localStorage.clear();
