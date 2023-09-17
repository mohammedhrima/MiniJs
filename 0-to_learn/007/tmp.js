import { validTags } from "./validTags.js";

function check(child) {
    if (typeof child === "string")
        return {
            type: "text",
            value: child,
        };
    else return child;
}

// ... take parameter as array
const createElement = (tag = null, props = {}, ...children) => {
    if (typeof tag === "function") {
        const element = tag();
        console.log("function return:", element, "props:", props, "children:", children);
        return element;
    } else console.log("call createElement, tag:", tag, "props:", props, "children:", children);
    return {
        tag: tag,
        type: "element",
        props : props || {},
        children: (children || []).map((child) => check(child)),
    };
};

const render = (vdom, parent) => {
    console.log("render:", vdom);
};

const Fragment = (tag, props, children) => {
    console.log("call fragment: ",tag, props, children);
    return children;
};


const Mini = { createElement, render, Fragment };

export default Mini;
