let dom = {
    type: "element",
    tag: "form",
    props: { action: "/login", class: "login-form" },
    children: [
        {
            type: "element",
            tag: "input",
            props: { type: "text", name: "user" },
        },
        {
            type: "element",
            tag: "input",
            props: { type: "password", name: "pass" },
        },
        {
            type: "element",
            tag: "button",
            props: { on: { click: () => login() } },
            children: [
                {
                    type: "text",
                    value: "Log in",
                },
            ],
        },
    ],
};
