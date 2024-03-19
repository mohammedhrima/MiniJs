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

const home = () => {
    return (
        <div type={"server"}>
            <h1 type={"client"}>level 1</h1>
            <div type={"client"}>
                <h2 type={"server"}>level 2</h2>
                {/* <div type={"client"}>
                    <h3 type={"client"}>level 3</h3>
                    <div type={"client"}>
                        <h4 type={"server"}>level 4</h4>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export { home };

// document.querySelector("[${}='${}']");
