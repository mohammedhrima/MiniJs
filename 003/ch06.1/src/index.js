import { hFragment, h } from "./h.js";

const vdom = h("from", { class: "login-form", action: "login" }, [
    h("input", { type: "text", name: "user" }),
    h("input", { type: "password", name: "pass" }),
    h("button", { on: { click: login } }, ["login"]),
]);
// TodosList(["Walk the dog", "Water the plants"]);
function TodoList(state) {
    return h(
        "ul",
        {},
        state.todos.map((todo, i) => TodoItem(todo, i, state.editingIdxs))
    );
}

// idxInList is the index of this todo item in the list of todos.
// editingIdxs is a Set of indexes of todos that are being edited
function TodoItem(todo, idxInList, editingIdxs) {
    const isEditing = editingIdxs.has(idxInList)
    return h('li', {}, [
        isEditing
            ? TodoInEditMode(todo, idxInList)
            : TodoInReadMode(todo, idxInList)
    ]
    )
}

function App(state) {
    return hFragment([
        h("h1", {}, ["My TODOs"]),
        CreateTodo(state),
        TodoList(state)
    ]);
}

