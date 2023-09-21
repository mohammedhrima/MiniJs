const generate_tag_id = () => {
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

function check(child) {
    if (typeof child === "string" || typeof child === "number")
        return {
            elem: "text",
            value: child,
        };
    else return child;
}

const createElement = (tag = null, props = {}, ...children) => {
    if (typeof tag === "function") {
        let funcTag = tag(props || {});
        console.log("functag:", funcTag);
        // if (funcTag.length == 0) {
        //     funcTag = {
        //         type: "fragment",
        //         props: props || {},
        //         children: (children || []).map(check),
        //     };
        //     return funcTag;
        // }
        return createElement(funcTag.tag, funcTag.props, ...(funcTag.props.children || []));
    }
    if (children && children.length) children = children.map(check);
    const element = {
        tag,
        elem: "tag",
        key: tag.key,
        props: { ...props, children: children || [] },
    };
    // check type and set it tag_id if it's a client
    if (props && props.type === "server") element.props.tag_id = generate_tag_id();
    return element;
};
// add fragment !!!!!

const Mini = { createElement };

export default Mini;
