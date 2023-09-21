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
        props: { ...props, children /*, tag_id: generate()*/ },
    };
    return element;
};

const Mini = { createElement };

const home = () => {
    return (
        <div type={"client"}>
            <h1 type={"client"}>level 1</h1>
            <h2 type={"client"}>level 2</h2>
            <h3 type={"client"}>level 3</h3>
            {/* <div type={"server"}>
                <div type={"server"}>
                    <div type={"server"}>
                        <h4 type={"server"}>level 4</h4>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export { home };
