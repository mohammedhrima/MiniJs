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
        let funcTag = props ? tag(props) : tag();
        // console.log("tag:", tag, "funcTag:", funcTag, "type: ", typeof funcTag);
        if (funcTag.length == 0) {
            funcTag = {
                type: "fragment",
                props: props || {},
                children: (children || []).map(check),
            };
            return funcTag;
        }
        return Mini.createElement(funcTag.tag, funcTag.props, ...funcTag.children);
    }
    if (children && children.length) children = children.map(check);
    const element = {
        tag: tag,
        type: tag ? "element" : "fragment",
        props: props,
        children: children,
    };
    // console.log("element:", element);
    return element;
};

const render = (vdom, parent) => {
    console.log("vdom: ", vdom, "parent: ", parent);
    if (typeof vdom === "function") {
        // TODO: try creating empty div and append to it
        return render(vdom(), parent);
    }
    // console.log("render: ", vdom);
    let { type, tag, props, children } = vdom;

    if (type === "text") {
        parent?.appendChild(document.createTextNode(vdom.value));
        return;
    } else if (type === "element") {
        if (!validTags.hasOwnProperty(tag)) throw new Error(`Invalid tag "${tag}"`);
        // console.log("vdom: ", vdom);
        const dom = document.createElement(tag);
        const style = {};
        Object.keys(props || {})
            .filter((key) => key != "children")
            .forEach((key) => {
                if (validTags[vdom?.tag].includes(key)) {
                    if (key.startsWith("on")) dom[key] = props[key];
                    else if (key === "style") Object.assign(style, props[key]);
                    else dom[key] = props[key];
                } else {
                    console.warn(`Invalid attribute "${key}" ignored.`);
                }
            });

        if (Object.keys(style).length > 0) {
            dom.style.cssText = Object.keys(style)
                .map((styleProp) => {
                    const Camelkey = styleProp.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
                    return `${Camelkey}:${style[styleProp]}`;
                })
                .join(";");
        }

        children?.map((child) => {
            render(child, dom);
        });
        parent.appendChild(dom);
    } else if (type == "fragment") {
        // console.log("found fragment: ", vdom);
        children?.map((child) => {
            render(child, parent);
        });
    }
};

const Fragment = (props, ...children) => {
    return [];
};

const Mini = { createElement, render, Fragment };

export default Mini;
