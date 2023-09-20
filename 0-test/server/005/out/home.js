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
        props: {
            ...props,
            children,
            tag_id: generate(),
        },
    };
    return element;
};
const Mini = {
    createElement,
};
const home = () => {
    return Mini.createElement(
        "div",
        {
            type: "client",
        },
        Mini.createElement(
            "h1",
            {
                id: "abc",
            },
            "server tag"
        ),
        Mini.createElement(
            "div",
            {
                type: "client",
            },
            Mini.createElement("h2", null, "level 1")
        ),
        Mini.createElement(
            "div",
            {
                type: "client",
            },
            Mini.createElement("h2", null, "level 2"),
            Mini.createElement(
                "div",
                {
                    type: "client",
                },
                Mini.createElement("h2", null, "level 3")
            )
        )
    );
};
export { home };
