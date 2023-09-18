import { validTags } from "./validTags.js";

function checkchild(child) {
    // console.log(typeof child);
    if (typeof child === "string")
        return {
            type: "text",
            value: child,
        };
    else return child;
}

export function Tag(tagName, props = {}, children = []) {
    if (children && children.length) children = children.map((child) => checkchild(child));
    return {
        type: "element",
        tag: tagName,
        props: props,
        children: children,
    };
}

export function Text(str) {
    return {
        type: "text",
        value: str,
    };
}

export function createTextNode(vdom, Parent) {
    const { value } = vdom;
    let text = document.createTextNode(value);
    Parent.appendChild(text);
}

export function createElement(vdom, Parent) {
    let { type, tag, props, children } = vdom;

    if (type === "text") Parent.appendChild(document.createTextNode(vdom.value));
    else if (type === "element") {
        if (!validTags.hasOwnProperty(tag)) throw new Error(`Invalid tagName "${tag}"`);
        let dom = document.createElement(tag);
        
        const style = {};
        Object.keys(props).forEach((key) => {
            if (validTags[tag].includes(key)) {
                if (key.startsWith("on")) dom[key] = props[key];
                else if (key === "style") Object.assign(style, props[key]);
                else dom.setAttribute(key, props[key]);
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
        if (children && children.length) {
            const fragment = document.createDocumentFragment();
            children.forEach((child) => {
                createElement(child, fragment);
            });
            dom.appendChild(fragment);
        }

        Parent.appendChild(dom);
    } else throw new Error("Error in element creation");
}
