// document.getElementById("h").textContent = "abc"

const Mini = {
  createElement: (tag, props, ...children) => {
    const element = {
      tag,
      type: tag.type,
      key: tag.key,
      props: {
        ...props,
        children
      }
    };
    return element;
  }
};
const render = (frameworkEl, container) => {
  if (["string", "number"].includes(typeof frameworkEl)) {
    container?.appendChild(document.createTextNode(frameworkEl?.toString()));
    return;
  }
  const actualDOMElement = document.createElement(frameworkEl.tag);

  // Apply Props to actual DOM Element
  Object.keys(frameworkEl?.props).filter(key => key !== "children").forEach(property => {
    actualDOMElement[property] = frameworkEl.props[property];
  });

  // Render children inside this element
  frameworkEl?.props?.children.forEach(child => {
    render(child, actualDOMElement);
  });
  container?.appendChild(actualDOMElement); // Happens once, unless the DOM already exists and we just need to replace something on the child element.
};

const myMarkup = () => {
  return Mini.createElement("div", {
    "data-x": "data attribute test"
  }, Mini.createElement("div", {
    id: "id-test"
  }, Mini.createElement("h1", null, "Mini Framework"), Mini.createElement("input", {
    type: "text",
    placeholder: "Part 2: data binding & hooks coming soon"
  })));
};
render(myMarkup(), document.querySelector("#app"));