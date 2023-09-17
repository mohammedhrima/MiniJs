import { Tag, createElement } from "./package.js";

// State of the app
const todos = [
    { description: "Walk the dog", done: false },
    { description: "Water the plants", done: false },
    { description: "Sand the chairs", done: false },
];
// HTML element references
const addTodoInput = document.getElementById("todo-input");
const addTodoButton = document.getElementById("add-todo-btn");
const todosList = document.getElementById("todos-list");

function refresh() {
    todosList.innerHTML = "";
    todos.map((todo, index) => {
        if (todo.done == false) createComponent(todo.description, index);
    });
}

refresh();

addTodoInput.addEventListener("input", () => {
    if (addTodoInput.value.length > 3) addTodoButton.disabled = false;
    else addTodoButton.disabled = true;
});

addTodoButton.onclick = () => {
    if (todos.some((todo) => todo.description === addTodoInput.value)) {
        alert("Error: Todo already exists");
    } else {
        createComponent(addTodoInput.value, todos.length);
        todos.push({ description: addTodoInput.value, done: false });
        addTodoInput.value = "";
        addTodoButton.disabled = true;
    }
};

function createComponent(todo, index) {
    let Donebutton = Tag("button", { hidden: true }, ["Done"]);
    let Cancelbutton = Tag("button", { hidden: true }, ["Cancel"]);
    let input = Tag("input", { value: todo, type: "button", onclick: () => {} }, null);
    let span = Tag("span", { id: index, class: "spanix" }, [input, Donebutton, Cancelbutton]);
    createElement(span, todosList);
    // let DoneButton = document.createElement("button");
    // let SaveButton = document.createElement("button");
    // let CancelButton = document.createElement("button");

    // DoneButton.textContent = "Done";
    // SaveButton.textContent = "Save";
    // CancelButton.textContent = "Cancel";
    // SaveButton.hidden = true;
    // CancelButton.hidden = true;

    // span.appendChild(input);
    // span.appendChild(DoneButton);
    // span.appendChild(SaveButton);
    // span.appendChild(CancelButton);
    // todosList.appendChild(span);
    // input.onclick = () => {
    //     input.type = "input";
    //     SaveButton.hidden = false;
    //     CancelButton.hidden = false;
    // };
    // SaveButton.onclick = () => {
    //     input.type = "button";
    //     SaveButton.hidden = true;
    //     CancelButton.hidden = true;
    //     todos[index].description = input.value;
    // };
    // CancelButton.onclick = () => {
    //     input.type = "button";
    //     input.value = todo;
    //     SaveButton.hidden = true;
    //     CancelButton.hidden = true;
    // };
    // DoneButton.onclick = () => {
    //     // todos.splice(index, 1);
    //     todos[index].done = true;
    //     refresh();
    // };
}
