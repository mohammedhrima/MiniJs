import validTags from "./validTags";

// RENDERING
class Variable {
  constructor(initialValue) {
    this.aInternal = initialValue;
    this.aListener = function (new_val) {};
  }

  set value(new_val) {
    this.aInternal = new_val;
    this.aListener(new_val);
  }

  get value() {
    return this.aInternal;
  }

  registerListener(listener) {
    this.aListener = listener.bind(this);
  }
}

function check(child) {
  if (typeof child === "string" || typeof child === "number") {
    return {
      type: "text",
      value: child,
    };
  }
  if (child instanceof Variable) {
    return {
      type: "variable",
      value: child,
    };
  }
  return child;
}

function createElement(tag = null, props = {}, ...children) {
  if (typeof tag === "function") {
    let funcTag = tag(props || {});
    if (funcTag.length == 0) {
      return {
        type: "fragment",
        props: props || {},
        children: (children || []).map(check),
      };
    }
    // if (funcTag.type == "text") {
    //   console.log("is text");
    // }
    return createElement(funcTag.tag, funcTag.props, ...funcTag.children);
  }
  if (children && children.length) children = children.map(check);
  const element = {
    tag: tag,
    type: tag && tag != "Route" ? "element" : "fragment",
    props: props,
    children: children,
  };
  // console.log("createElement: ", element);
  return element;
}

function render(vdom, parent) {
  if (!vdom) return;
  if (typeof vdom === "function") {
    let func = vdom();
    return render(func, parent);
  }

  let { type, tag, props, children } = vdom;
  switch (type) {
    /*==============  TEXT  ===============*/
    case "text": {
      parent?.appendChild(document.createTextNode(vdom.value));
      break;
    }

    /*============== VARIABLE ==============*/
    case "variable": {
    //   console.log("found var", vdom.value);
      vdom.value.registerListener(function (val) {
        // console.log("Someone changed the value of x.value to " + val);
        parent.innerHTML = "";
        parent?.appendChild(document.createTextNode(vdom.value.value));
      });
      parent?.appendChild(document.createTextNode(vdom.value.value));
      break;
    }

    /*============== ELEMENT ==============*/
    case "element": {
      if (!validTags.hasOwnProperty(tag))
        throw new Error(`Invalid tag "${tag}"`);
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
            const Camelkey = styleProp.replace(
              /[A-Z]/g,
              (match) => `-${match.toLowerCase()}`
            );
            return `${Camelkey}:${style[styleProp]}`;
          })
          .join(";");
      }
      children?.map((child) => {
        render(child, dom);
      });
      parent.appendChild(dom);
      break;
    }

    /*============== FRAGMENT =============*/
    case "fragment": {
      children?.map((child) => {
        render(child, parent);
      });
      break;
    }
    default:
      break;
  }
}

function Fragment(props, ...children) {
  return children || [];
}

// ROUTING
const app = document.getElementById("app");
const routes = [
  {
    path: "",
    element: () => <h4 className="Mini_Error_Not_Found">Error: Not Found</h4>,
  },
];

function pathToRegex(path) {
  return new RegExp(
    "^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$"
  );
}

function getParams(match) {
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );
  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
}

async function router() {
  // Test routes
  const matches = routes.map((route) => {
    return {
      route: route,
      result: location.pathname.match(pathToRegex(route.path)),
    };
  });
  // find the matche object for the current route
  let match = matches.find((elem) => elem.result !== null);
  if (!match) {
    // if route doesn't exists
    match = {
      route: routes[0],
      result: [location.pathname],
    };
  }
  let element = match.route.element(getParams(match));
  // console.log("router: ", element);
  app.innerHTML = "";
  Mini.render(element, app);
}

// when going back and forward
window.addEventListener("popstate", router);
// on loading
document.addEventListener("DOMContentLoaded", () => {
  router();
});

function Routes({ path, element }) {
  if (path === "*") routes[0].element = element;
  else routes.push({ path, element });
  return <></>;
}

const Mini = { createElement, Fragment, render, Routes, Variable };
export default Mini;
