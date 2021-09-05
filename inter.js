function remove(val) {
    document.getElementById(val).value = "";
}
function finish(val) {
    var doc = document.getElementById(val);
    if(doc.style.textDecoration == "line-through") {
        doc.style.textDecoration = "";
    }
    else {
        doc.style.textDecoration = "line-through";
    }
}
function addTask() {
    var listTask = document.createElement("li");
    var task = document.createElement("input");
    var removeButton = document.createElement("button");
    var finishButton = document.createElement("button");
    listTask.appendChild(task);
    listTask.appendChild(removeButton);
    listTask.appendChild(finishButton);
    removeButton.textContent = "Delete";
    finishButton.textContent = "Finish";
    task.setAttribute("class", "input");
    removeButton.setAttribute("class", "button");
    /* removeButton.setAttribute("onclick", "remove()"); */
    finishButton.setAttribute("class", "button");
    /* finishButton.setAttribute("onclick", "finish()"); */
    document.getElementById("ulTag").appendChild(listTask);
}