/*
const element = (
    <div id="foo">
        <a>bar</a>
        <b />
    </div>
);

or we can do:
const element = React.createElement(
  "div",
  { id: "foo" },
  React.createElement("a", null, "bar"),
  React.createElement("b")
)
*/

function createTextElement(text) {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: [],
        },
    };
}

function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children: children.map((child) => (typeof child === "object" ? child : createTextElement(child))),
        },
    };
}

const element = createElement("div", { title: "abcd", id: "abc" });

const container = document.getElementById("root");

// ReactDOM.render(element, container)
const node = document.createElement("div");
node.id = element.props.id;
node.title = element.props.title;

const text = document.createTextNode("");
text.nodeValue = element.props.children;

node.appendChild(text);
container.appendChild(node);
