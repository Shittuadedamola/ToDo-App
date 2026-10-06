const main = document.querySelector("main");
const todoInput = document.getElementById("todoInput");
const allTodosContainer = document.getElementById("allTodosContainer");

// const todoSection = () => {
//     var allTodos = document.createElement("section");
//     main.appendChild(allTodos);
//     allTodos.id = "allTodosContainer";
//     const allTodosContainer = document.getElementById("allTodosContainer");

//     allTodos.classList.add(
//         // "h-[300px]",
//         "mx-7",
//         "rounded-md",
//         "bg-white",
//         "shadow-lg",
//         // "relative",
//     );
// }

// todoSection();

const addTodo = () => {
    var eachTodo = document.createElement("div");
    allTodosContainer.appendChild(eachTodo);
    eachTodo.id = "todo";

    eachTodo.classList.add(
        "border-b",
        "border-gray-300",
        "bg-white",
        "mb-2",
        "rounded-t-md",
        "flex",
        "items-center",
        "px-5",
        "py-4",
    );

    var checkbox = document.createElement("div");
    eachTodo.appendChild(checkbox);
    checkbox.id = "checkbox";
    checkbox.classList.add(
        "h-[25px]",
        "w-[25px]",
        "border",
        "rounded-full",
        "border-gray-300",
        "border-2",
        "mr-3"
    )

    var task = document.createElement("span");
    task.textContent = todoInput.value
    eachTodo.appendChild(task);
    task.id = "task";
    task.classList.add(
        "text-gray-700"
    )

    var cancelBtn = document.createElement("img");
    cancelBtn.setAttribute("src", "images/icon-cross.svg");
    eachTodo.appendChild(cancelBtn);
    cancelBtn.id = "cancelBtn";
    cancelBtn.classList.add(
        "h-[15px]",
        "w-[15px]",
        "ml-auto"
    )

    checkbox.onclick = function(){
        task.classList.toggle("line-through")
        if (task.classList.contains("text-gray-700")) {
            task.classList.remove("text-gray-700");
            task.classList.add("text-gray-300");
        } else {
            task.classList.remove("text-gray-300");
            task.classList.add("text-gray-700");
        }
    }

    cancelBtn.onclick = function(){
        eachTodo.remove();
    }
}

// const totalItemsDiv = () => {
//     ////////////
//     var totalItems = document.createElement("div");
//     main.appendChild(totalItems);
//     totalItems.id = "totalItems"
    
//     totalItems.classList.add(
//         // "h-[100px]",
//         // "w-[100%]",
//         // "border",
//         // "border-black",
//         // "absolute",
//         // "bottom-0",
//         "flex",
//         "justify-between",
//         "items-center",
//         "px-5",
//         "py-4",
//         "text-gray-400",
//         // "mx-7"
//         "mx-7",
//         "rounded-md",
//         "bg-white",
//         "shadow-lg",
//     )

//     const itemsLeft = document.createElement("span");

//     const itemsCount = document.createElement("span");
//     itemsCount.id = "itemsCount";
//     itemsCount.textContent = "0";

//     itemsLeft.appendChild(itemsCount);

//     itemsLeft.append(" items left");

//     totalItems.appendChild(itemsLeft)

//     const clearCompleted = document.createElement("span");
//     clearCompleted.id = "clearCompleted";
//     clearCompleted.textContent = "Clear Completed"
//     totalItems.appendChild(clearCompleted)
    
// }

// totalItemsDiv();

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter" && todoInput.value.trim() !== "") {
        addTodo();
        todoInput.value = ""
    }
});