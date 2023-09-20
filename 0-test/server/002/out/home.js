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

const Mini = {
    createElement,
};

const home = () => {
    return Mini.createElement("div", {}, Mini.createElement("h1", null, "hello world"));
};

export { Mini, home };
