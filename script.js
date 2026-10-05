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
