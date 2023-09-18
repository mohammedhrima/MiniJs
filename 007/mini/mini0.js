import { validTags } from "./validTags.js";

function check(child) {
    if (typeof child === "string" || typeof child === "number") document.createTextNode(child);
    console.log("in check, child is: ", child);
    return child;
}

const createElement = (tag = null, props = {}, ...children) => {
    if (!validTags.hasOwnProperty(tag)) throw new Error(`Invalid tag "${tag}"`);
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
    if (children && children.length) children = children.map(check);
    return dom;
};

const Fragment = (props, ...children) => {
    console.log("in fragment");
    return children || [];
};

const render = (dom, parent) => {
    if (typeof dom === "function") {
        let func = dom();
        return render(func, parent);
    }
    parent.appendChild(dom);
};

let index = 0;
let stateList = [];

const refresh = async (child, parent) => {
    let currState = stateList;
    let currIndex = index;
    parent.innerHTML = "";
    Mini.render(child, parent);
    stateList = currState;
    index = currIndex;
};

const useState = (initialValue) => {
    const idx = index;
    index++;

    return (() => {
        if (stateList[idx] === undefined) {
            stateList[idx] = { value: initialValue };
        }
        const setState = (newValue) => {
            console.log("call setter with value:", newValue, "in index:", idx);
            stateList[idx].value = newValue;
            let { pathname } = window.location;
            pathname = pathname.slice(1);
            Mini.refresh(pathname ? routes[pathname] : routes[""], document.getElementById("mini"));
        };
        const getState = () => {
            return stateList[idx].value;
        };
        return [stateList[idx].value, setState];
    })();
};

const Mini = { createElement, render, Fragment, useState, refresh };

export default Mini;
