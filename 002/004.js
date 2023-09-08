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

function render(element, container) {
    const dom = document.createElement(element.type);
    element.props.children.forEach((child) => {
        render(child, dom);
    });
    container.appendChild(dom);
}

/** @jsx createElement */
const element = (
    <span id="foo">
        <a>bar</a>
        <b />
    </span>
);
const container = document.getElementById("root");

render(element, container);
