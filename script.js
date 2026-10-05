const main = document.querySelector("main");

const todoSection = () => {
    var allTodos = document.createElement("section");
    main.appendChild(allTodos);
    allTodos.id = "allTodosContainer";
    const allTodosContainer = document.getElementById("allTodosContainer");

    allTodos.classList.add(
        "h-[300px]",
        "mx-7",
        "rounded-md",
        "bg-white",
        "shadow-lg"
    );
}

todoSection();

const addTodo = () => {
    var eachTodo = document.createElement("div");
    allTodosContainer.appendChild(eachTodo);
    eachTodo.id = "todo";

    eachTodo.classList.add(
        "border-b",
        "border-gray-300",
        // "h-[60px]",
        // "mx-7",
        // "rounded-md",
        "bg-white",
        // "shadow-lg"
        "mb-2",
        "rounded-t-md",
        "flex",
        "items-center",
        "px-5",
        "py-4"
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
    task.textContent = "Hi"
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
}

addTodo();