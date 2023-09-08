import { withoutNulls } from "./utils/array.js";

export const DOM_TYPES = {
    TEXT: "text",
    ELEMENT: "element",
    FRAGMENT: "fragment",
};

export function h(tag, props, children) {
    return {
        tag,
        type: DOM_TYPES.ELEMENT,
        props,
        children: mapTextNodes(withoutNulls(children)),
    };
}

function mapTextNodes(children) {
    return children.map(
        (child) =>
        (typeof child === "string" ?
            hString(child) : child));
}

export function hString(string) {
    return {
        type: DOM_TYPES.TEXT,
        value: string,
    };
}

// fragment is html code that will be added dynamically
// they don't have parent
export function hFragment(vNodes) {
    return {
        type: DOM_TYPES.FRAGMENT,
        children: mapTextNodes(withoutNulls(vNodes)),
    };
}

