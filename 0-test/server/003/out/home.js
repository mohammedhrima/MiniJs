const createElement = (tag, props, ...children) => {
    const element = {
        tag,
        type: tag.type,
        key: tag.key,
        props: {
            ...props,
            children,
        },
    };
    return element;
};

const render = (frameworkEl, container) => {
    if (["string", "number"].includes(typeof frameworkEl)) {
        container?.appendChild(document.createTextNode(frameworkEl?.toString()));
        return;
    }
    const actualDOMElement = document.createElement(frameworkEl.tag);

    Object.keys(frameworkEl?.props)
        .filter((key) => key !== "children")
        .forEach((property) => {
            actualDOMElement[property] = frameworkEl.props[property];
        });

    frameworkEl?.props?.children.forEach((child) => {
        render(child, actualDOMElement);
    });
    container?.appendChild(actualDOMElement);
};

const Mini = {
    createElement,
    render,
};
const home = () => {
    return Mini.createElement(
        "div",
        {
            id: "abc",
        },
        Mini.createElement("h1", null, "hello world")
    );
};

export { Mini, home };
