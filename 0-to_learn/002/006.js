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

function createDom(element, container) {
    console.log(element);
    const dom = element.type == "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(element.type);

    const isProperty = (key) => key !== "children";
    Object.keys(element.props)
        .filter(isProperty)
        .forEach((key) => {
            dom[key] = element.props[key];
        });

    // element.props.children.forEach((child) => {
    //     render(child, dom);
    // });

    // container.appendChild(dom);
    return dom;
}

function render(element, container) {
    // set next unit of work to the root
    nextUnitOfWork = {
        dom: container,
        props: {
            children: [element],
        },
    };
}

let nextUnitOfWork = null;
function workLoop(deadline) {
    // console.log("call work loop");
    let shouldYield = false;
    while (nextUnitOfWork && !shouldYield) {
        // start working on the root
        nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
        shouldYield = deadline.timeRemaining() < 1;
    }
    requestIdleCallback(workLoop);
}

requestIdleCallback(workLoop);

function performUnitOfWork(element) {
    console.log("call performUnitOfWork");
    // if dom is null we create it
    if (!element.dom) element.dom = createDom(element);
    // if element has parent
    if (element.parent) element.parent.dom.appendChild(element.dom);

    const childrens = element.props.children;
    let index = 0;
    let prevSibling = null;
    while (index < childrens.length) {
        const children = childrens[index];
        const newElement = {
            type: children.type,
            props: children.props,
            parent: element,
            dom: null,
        };
        if (index === 0) element.child = newElement;
        else prevSibling.sibling = newElement;
        prevSibling = newElement;
        index++;
    }
    // starts with child then sibling ...
    if (element.child) return element.child;
    let nextElement = element;
    while (nextElement) {
        if (nextElement.sibling) return nextElement.sibling;
        nextElement = nextElement.parent;
    }
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
