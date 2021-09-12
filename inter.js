class Task {
    create_task() {
        var list_item = document.createElement("li");
        var input = document.createElement("input");
        var remove_button = document.createElement("button");
        var finish_button = document.createElement("button");
        remove_button.setAttribute("class", "button");
        remove_button.textContent = "Delete";
        remove_button.addEventListener("click", () => {
            input.value = "";
        })
        finish_button.setAttribute("class", "button");
        finish_button.textContent = "Finish";
        finish_button.addEventListener("click", () => {
            if(input.style.textDecoration != "line-through") {
                input.style.textDecoration = "line-through";
            }
            else {
                input.style.textDecoration = null;
            }
        })
        input.setAttribute("class", "input");
        list_item.appendChild(input);
        list_item.appendChild(remove_button);
        list_item.appendChild(finish_button);
        document.getElementById("card").insertAdjacentElement("afterbegin", list_item);
    }
}

var newTask = document.getElementById("new-task");
newTask.addEventListener("click", () => {
    var task = new Task();
    task.create_task();
})