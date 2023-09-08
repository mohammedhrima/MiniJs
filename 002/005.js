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
    console.log(element);
    const dom = element.type == "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(element.type);

    element.props.children.forEach((child) => {
        render(child, dom);
    });

    const isProperty = (key) => key !== "children";
    Object.keys(element.props)
        .filter(isProperty)
        .forEach((key) => {
            dom[key] = element.props[key];
        });

    container.appendChild(dom);
}

/** @jsx createElement */
const element = (
    <span id="foo" style={{ back: "red" }}>
        <a>bar</a>
        <b />
        <h1>hello world</h1>
    </span>
);
const container = document.getElementById("root");

render(element, container);
