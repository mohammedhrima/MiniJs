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

const createElement = (tag, props, ...children) => {
    const element = {
        tag,
        type: tag.type,
        key: tag.key,
        props: { ...props, children },
    };
    // check type and set it tag_id if it's a client
    if (props.type === "server") element.props.tag_id = generate_tag_id();
    return element;
};

const Mini = { createElement };

export default Mini;
