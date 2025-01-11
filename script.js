function AddTask(task) {
    const todo_list = document.getElementById("todo_list")
    const li = document.createElement("li")
    li.className="todo"
    li.innerHTML=`
    <label class="todo_label">
                        <input type="checkbox">
                        <span>${task}</span>
                    </label>
                    <div class="todo_buttons">
                        <button class="todo_buttons_edit">Edit</button>
                        <button class="todo_buttons_delete">Delete</button>
                    </div>
    `
    todo_list.appendChild(li)
    const checkbox = li.querySelector('input[type="checkbox"]');
            checkbox.addEventListener('change', function () {
                const taskText = this.nextElementSibling;
                if (this.checked) {
                    taskText.classList.add('completed');
                } else {
                    taskText.classList.remove('completed');
                }
            });
}
document.getElementById("form").addEventListener("submit",(event)=>{
    event.preventDefault()
    console.log("1")
    const taskInput = document.getElementById("todo_input");
    const task = taskInput.value.trim();
    if (task !== "") {
        AddTask(task);
        taskInput.value = "";
        }
})
document.getElementById("todo_list")
        .addEventListener("click",
            function (event) {
                if (event.target.classList.contains("todo_buttons_delete")) {
                    event.target.parentElement.parentElement.remove();
                }
            });
        // Event listener for edit button click
        document.getElementById("todo_list")
        .addEventListener("click",
            function (event) {
                if (event.target.classList.contains("todo_buttons_edit")) {
                    const taskText = event.target.
                        parentElement.parentElement.querySelector("span");
                    const newText = 
                        prompt("Enter new task", taskText.textContent);
                    if (newText !== null) {
                        taskText.textContent = newText.trim();
                    }
                }
            });
const initial_state = ["html","css","jss"]
initial_state.forEach(task => AddTask(task))