const generate = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;

    const microseconds = performance.now() * 1000;
    let result = "";
    for (let i = 0; i < 20; i++) {
        const randomIndex = Math.floor(Math.random() * charactersLength);
        const randomChar = characters.charAt(randomIndex);
        result += randomChar;
    }
    return result + microseconds.toFixed(0);
};

const createElement = (tag, props, ...children) => {
    const element = {
        tag,
        type: tag.type,
        key: tag.key,
        props: { ...props, children, tag_id: generate() },
    };
    return element;
};

// const render = (frameworkEl, container) => {
//     if (["string", "number"].includes(typeof frameworkEl)) {
//         container?.appendChild(document.createTextNode(frameworkEl?.toString()));
//         return;
//     }

//     const actualDOMElement = document.createElement(frameworkEl.tag);

//     // Apply Props to actual DOM Element
//     Object.keys(frameworkEl?.props)
//         .filter((key) => key !== "children")
//         .forEach((property) => {
//             actualDOMElement[property] = frameworkEl.props[property];
//         });

//     // Render children inside this element
//     frameworkEl?.props?.children.forEach((child) => {
//         render(child, actualDOMElement);
//     });

//     container?.appendChild(actualDOMElement); // Happens once, unless the DOM already exists and we just need to replace something on the child element.
// };

const Mini = { createElement };

const home = () => {
    return (
        <div type={"server"}>
            <h1>server tag</h1>
            <div type={"client"}>
                <h2>client tag </h2>
            </div>
        </div>
    );
};

export { home };
