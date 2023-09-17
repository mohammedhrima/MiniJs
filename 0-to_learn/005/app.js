import { validTags } from "./validTags.js";
import "./style.css";

function Tag2() {
    return <h1 style={{ backgroundColor: "red", height: "80px" }}>hello world2</h1>;
}

function tag1() {
    return <Tag2 />;
}

function checkchild(child) {
    // console.log(typeof child);
    if (typeof child === "string")
        return {
            type: "text",
            value: child,
        };
    else return child;
}

const Mini = {
    createElement: (tagName, props = {}, ...children) => {
        console.log("tagName:", tagName, "type:", typeof tagName, "props:", props, "children:", children);
        if (typeof tagName === "function") {
            const element0 = tagName();
            console.log("element0:", element0);
            return Mini.createElement(element0.tag, element0.props, ...element0.children);
        }
        if (children && children.length) children = children.map((child) => checkchild(child));
        const element = {
            tag: tagName,
            type: "element",
            props: props,
            children: children,
        };
        console.log("element:", element);
        return element;
    },
    render: (vdom, parent) => {
        if (typeof vdom === "function") {
            // TODO: try creating empty div and append to it
            return Mini.render(vdom(), parent);
        }
        console.log("render: ", vdom);
        let { type, tag, props, children } = vdom;

        if (type === "text") {
            parent?.appendChild(document.createTextNode(vdom.value));
            return;
        } else if (type === "element") {
            // if (!validTags.hasOwnProperty(tag)) throw new Error(`Invalid tagName "${tag}"`);
            console.log("vdom: ", vdom);
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
                Mini.render(child, dom);
            });
            parent.appendChild(dom);
        }
    },
};

Mini.render(tag1, document.getElementById("mini"));
