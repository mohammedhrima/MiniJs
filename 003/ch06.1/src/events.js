import { destroyDOM } from "./destroy-dom";

function addEventListener(eventName, handler, el) {
    el.addEventListener(eventName, handler);
    return handler;
}

export function addEventListeners(listeners = {}, el) {
    const addedListeners = {};
    Object.entries(listeners).forEach(([eventName, handler]) => {
        const listener = addEventListener(eventName, handler, el);
        addedListeners[eventName] = listener;
    });
    return addedListeners;
}

export function removeEventListeners(listeners = {}, el) {
    Object.entries(listeners).forEach(([eventName, handler]) => {
        el.removeEventListeners(eventName, handler);
    });
}

export function removeFragmentNodes(vdom) {
    const { children } = vdom;
    children.forEach(destroyDOM);
}
