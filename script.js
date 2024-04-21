function addtask() {
  let inputfeild = document.querySelector(".inputfeild");
  let listcon = document.querySelector(".listcon");

  let inputValue = inputfeild.value.trim();

  if (inputValue === "") {
    alert("You have to write something");
  } else {
    let li = document.createElement("li");
    li.textContent = inputValue;
    listcon.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputfeild.value = "";
  savedata(listcon); // Pass listcon to the savedata function
}

document.addEventListener("DOMContentLoaded", function () {
  let listcon = document.querySelector(".listcon");

  listcon.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("list");
      e.target.classList.toggle("selected"); // Toggle selected class
      savedata(listcon); // Pass listcon to the savedata function
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      savedata(listcon); // Pass listcon to the savedata function
    }
  });

  showlist(listcon); // Pass listcon to the showlist function
});

//store the data in list
function savedata(listcon) {
  localStorage.setItem("data", listcon.innerHTML);
}

function showlist(listcon) {
  listcon.innerHTML = localStorage.getItem("data");
}
function handleKeyPress(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent the default behavior of the Enter key
    addtask(); // Call the addtask() function when Enter is pressed
  }
}
