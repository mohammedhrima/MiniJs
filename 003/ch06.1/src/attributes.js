export function setAttributes(el, attrs) {
    const { class: className, style, ...otherAttrs } = attrs;
    delete otherAttrs.key;

    if (className) setClass(el, className);
    if (style) {
        Object.entries(style).forEach(([prop, value]) => {
            setStyle(el, prop, value);
        });
    }
    for (const [name, value] of Object.entries(otherAttrs))
        setAttributes(el, name, value);
}

function setClass(el, className) {
    el.className = ""
    if (typeof className === "string")
        el.className = className
    if (Array.isArray(className))
        el.classList.add(...className)
}

export function setStyle(el, name, value) {
    el.style[name] = value
}

export function removeStyle(el, name) {
    el.style[name] = null;
}

export function setAttribute(el, name, value) {
    if (value == null)
        removeAttribute(el, name)
    else if (name.startsWith("data-"))
        el.setAttribute(name, value)
    else
        el[name] = value;
}

function removeAttribute(el, name) {
    try {
        el[name] = null;
    } catch {
        console.warn(`Failed to set "${name}" to null on ${el.tagName}`);
    }
    el.removeAttribute(name);
}