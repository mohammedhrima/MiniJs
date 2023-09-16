var tag = "abc";

const Mini = {
    createElement: (tag, props, ...children) => {
        const element = {
            tag,
            type: tag.type,
            key: tag.key,
            props: { ...props, children },
        };
        return element;
    },
    render: (element, parent) => {
        if (["string", "number"].includes(typeof element)) {
            parent?.appendChild(document.createTextNode(element?.toString()));
            return;
        }
        const DOM_element = document.createElement(element.tag);
        Object.keys(element?.props)
            .filter((key) => key != "children")
            .forEach((property) => {
                DOM_element[property] = element.props[property];
            });
        element?.props?.children.forEach((child) => {
            render(child, DOM_element);
        });
        parent.appendChild(DOM_element);
    },
};

var tag1 = () => {
    return <h1>hello</h1>;
};

Mini.render(tag1(), document.getElementById("mini"));
