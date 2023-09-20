const createElement = (tag, props, ...children) => {
    const element = {
        tag,
        type: tag.type,
        key: tag.key,
        props: { ...props, children },
    };
    console.log("element:", element);
    return element;
};

const render = (frameworkEl, container) => {
    if (["string", "number"].includes(typeof frameworkEl)) {
        container?.appendChild(document.createTextNode(frameworkEl?.toString()));
        return;
    }

    const actualDOMElement = document.createElement(frameworkEl.tag);

    // Apply Props to actual DOM Element
    Object.keys(frameworkEl?.props)
        .filter((key) => key !== "children")
        .forEach((property) => {
            actualDOMElement[property] = frameworkEl.props[property];
        });

    // Render children inside this element
    frameworkEl?.props?.children.forEach((child) => {
        render(child, actualDOMElement);
    });

    container?.appendChild(actualDOMElement); // Happens once, unless the DOM already exists and we just need to replace something on the child element.
};

const Mini = { createElement, render };

const home = () => {
    return (
        <div id={"abc"}>
            <h1>hello world</h1>
        </div>
    );
};

export { Mini, home };
