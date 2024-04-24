document.getElementById("addTaskBtn").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  const task = taskInput.value.trim();

  if (task) {
    const listItem = document.createElement("li");
    listItem.className = "bg-white flex justify-between items-center p-2 my-2 shadow rounded";
    listItem.innerHTML = `
            <span>${task}</span>
            <div>
                <button class="complete-btn text-green-500 mr-2">
                    <i class="fas fa-check"></i>
                </button>
                <button class="delete-btn text-red-500">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `;

    // Add event listeners for the buttons
    listItem.querySelector(".complete-btn").addEventListener("click", function () {
      listItem.classList.toggle("line-through");
    });

    listItem.querySelector(".delete-btn").addEventListener("click", function () {
      taskList.removeChild(listItem);
    });

    taskList.appendChild(listItem);
    taskInput.value = ""; // Clear input after adding
  }
});
