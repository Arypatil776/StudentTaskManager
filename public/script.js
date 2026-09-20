function addTask() {
    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    if (task === "") {
        alert("Please enter a task.");
        return;
    }

    const li = document.createElement("li");
    li.innerHTML = `
        <span>${task}</span>
        <button class="delete" onclick="this.parentElement.remove()">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);
    input.value = "";
}
