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

function createDom(element) {
    const dom = element.type === "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(element.type);
    const isProperty = (key) => key !== "children";
    Object.keys(element.props)
        .filter(isProperty)
        .forEach((key) => {
            dom[key] = element.props[key];
        });
    return dom;
}

