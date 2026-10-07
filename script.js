const body = document.querySelector("body");
const main = document.querySelector("main");
const todoInput = document.getElementById("todoInput");
const allTodosContainer = document.getElementById("allTodosContainer");
const itemsCount = document.getElementById("itemsCount");
const lightDark = document.getElementById("lightDark");
const dark = document.getElementById("dark");
const light = document.getElementById("light")

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

const addTodo = (todo) => {
    var eachTodo = document.createElement("div");
    allTodosContainer.prepend(eachTodo);
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
        "dark:bg-gray-900",
        "dark:text-white",
        "dark:border-gray-700"
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
        "mr-3",
        "hover:border-blue-500",
        "hover:cursor-pointer",
        "flex",
        "items-center",
        "justify-center",
        "dark:border-gray-700"
    )

    var checkIcon = document.createElement("img");
    checkIcon.setAttribute("src", "images/icon-check.svg");
    checkbox.appendChild(checkIcon);
    checkIcon.classList.add(
        "h-[15px]",
        "w-[15px]",
        "hidden"
    )


    var task = document.createElement("span");
    task.textContent = todo;
    eachTodo.appendChild(task);
    task.id = "task";
    task.classList.add(
        "text-gray-700",
        "hover:cursor-pointer",
        "dark:text-white"
    )

    var cancelBtn = document.createElement("img");
    cancelBtn.setAttribute("src", "images/icon-cross.svg");
    eachTodo.appendChild(cancelBtn);
    cancelBtn.id = "cancelBtn";
    cancelBtn.classList.add(
        "h-[15px]",
        "w-[15px]",
        "ml-auto",
        "hover:cursor-pointer"
    )

    checkbox.onclick = function(){
        task.classList.toggle("line-through")
        // checkbox.classList.toggle("border-blue-500")
        if (task.classList.contains("text-gray-700")) {
            task.classList.remove("text-gray-700");
            task.classList.add("text-gray-300");
            // itemsCount.textContent = (allTodosContainer.children.length -= 1)
        } else {
            task.classList.remove("text-gray-300");
            task.classList.add("text-gray-700");
            // itemsCount.textContent = (allTodosContainer.children.length += 1)
        }

        checkbox.classList.toggle("bg-blue-500")
        if (checkbox.classList.contains("border-gray-300")){
            checkbox.classList.remove("border-gray-300");
            checkbox.classList.add("border-blue-500");
        } else {
            checkbox.classList.remove("border-blue-500");
            checkbox.classList.add("border-gray-300")
        }

        checkIcon.classList.toggle("hidden")

        if (checkIcon.classList.contains("hidden")){
            itemsCount.textContent = Number(itemsCount.textContent) + 1
        } else {
            itemsCount.textContent = Number(itemsCount.textContent) - 1
        }
    }

    cancelBtn.onclick = function(){
        eachTodo.remove();

        todos = todos.filter(function(todoItem) {
            return todoItem !== task.textContent;
        });

        localStorage.setItem("todos", JSON.stringify(todos));

        if (!task.classList.contains("line-through")){
            itemsCount.textContent = Number(itemsCount.textContent) - 1;
        }
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
        createTodo();
        itemsCount.textContent = Number(itemsCount.textContent) + 1
    }
});

const triggerLightDark = () => {
    dark.classList.toggle("hidden");
    light.classList.toggle("hidden")
    document.documentElement.classList.toggle("dark");
}

let todos = [];
const savedTodos = localStorage.getItem("todos");

if (savedTodos) {
    todos = JSON.parse(savedTodos);
    todos.forEach(function(todo){
        addTodo(todo)
    })
}

const createTodo = () => {
    const todoText = todoInput.value.trim();

    if (todoText === "") {
        return;
    }

    todos.push(todoText);

    localStorage.setItem("todos", JSON.stringify(todos));

    addTodo(todoText);

    todoInput.value = "";
};