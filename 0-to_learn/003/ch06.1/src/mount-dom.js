import { setAttributes } from './attributes.js'
import { addEventListeners } from './events.js'
import { DOM_TYPES } from ".h.js";

export function mountDOM(vdom, parentEl) {
    switch (vdom.type) {
        case DOM_TYPES.TEXT:
            createTextNode(vdom, parentEl);
            break;
        case DOM_TYPES.ELEMENT:
            createElementNode(vdom, parentEl);
            break;
        case DOM_TYPES.FRAGMENT:
            createFragmentNodes(vdom, parentEl);
            break;
        default:
            throw new Error(`Can't mount DOM of type: ${vdom.type}`);
    }
}

function createTextNode(vdom, parentEl) {
    const { value } = vdom;
    const textNode = document.createTextNode(value)
    vdom.el = textNode;
    parentEl.append(textNode)
}

function createElementNode(vdom, parentEl) {
    const { tag, props, children } = vdom
    const element = document.createElement(tag);
    addProps(element, props, vdom)
    vdom.el = element
    children.forEach(child => mountDOM(child, element))
    parentEl.append(element)
}

function addProps(el, props, vdom) {
    const { on: events, ...attrs } = props
    vdom.listeners = addEventListeners(events, el);
    setAttributes(el, attrs)
}

function createFragmentNodes(vdom, parentEl) {
    const { children } = vdom;
    vdom.el = parentEl;
    children.forEach(child => mountDOM(child, parentEl));
}