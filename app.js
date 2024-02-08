const box = document.querySelector("#box");
const input = document.querySelector("input");
const addTaskBtn = document.querySelector("#addTaskBtn");
const taskList = document.querySelector("#task-list");

addTaskBtn.addEventListener("click", () => {
    // Creating new Item -->
    let deleteBtn = document.createElement("button");
    let editBtn = document.createElement("button");
    let saveBtn = document.createElement("button");
    let newItem = document.createElement("div");
    let taskName = document.createElement("p");
    let checkBox = document.createElement("input");

    newItem.classList.add("task-item");
    taskName.innerHTML = input.value;
    input.value = "";
    editBtn.id = "editBtn";
    editBtn.innerText = "Edit";
    saveBtn.id = "saveBtn";
    saveBtn.innerHTML = "Save";
    deleteBtn.id = "deleteBtn";
    deleteBtn.innerText = "Delete";
    checkBox.type = "checkbox";

    // Validating input and adding Task ---->
    if(taskName.innerHTML !== ""){
        taskList.append(newItem);
        newItem.appendChild(checkBox);
        newItem.appendChild(taskName);
        newItem.appendChild(saveBtn);
        newItem.appendChild(editBtn);
        newItem.appendChild(deleteBtn);
    } else {
        let alertMessage = document.querySelector("#alert-message");
        alertMessage.classList.remove("hide");
        setTimeout(() => {
            alertMessage.classList.add("hide");
        }, 3000);
        
    }

    // Checking-unchecking input --->
    checkBox.addEventListener("change", () => {
        if (checkBox.checked) {
            taskName.style.textDecoration = "line-through";
        } else {
            taskName.style.textDecoration = "none";
        }
    });

    // Editing items --->
    let editItem = document.createElement("input");
    editItem.id = "edit-item";
    editItem.value = taskName.innerHTML;

    editBtn.addEventListener("click", () => {
        console.log(editItem.value);
        taskName.remove();
        checkBox.after(editItem);
        console.log("Edit Button");
    })

    // Saving Items ---> 
    saveBtn.addEventListener("click", () => {
        let saveItem = taskName;
        taskName.innerHTML = editItem.value;
        editItem.remove();
        checkBox.after(saveItem);
    })

    // Deleting items --->
    deleteBtn.addEventListener("click", () => {
        newItem.remove();
    })
})


