const validTags = {
  children: [],
  nav: ["props", "path"],
  a: [
    "accesskey",
    "hidden",
    "charset",
    "className",
    "coords",
    "download",
    "href",
    "hreflang",
    "id",
    "name",
    "ping",
    "rel",
    "rev",
    "shape",
    "style",
    "target",
    "title",
  ],
  img: [
    "alt",
    "src",
    "hidden",
    "srcset",
    "sizes",
    "crossorigin",
    "usemap",
    "ismap",
    "width",
    "height",
    "referrerpolicy",
    "loading",
    "decoding",
  ],
  i: [
    "class",
    "id",
    "title",
    "style",
    "dir",
    "lang",
    "accesskey",
    "tabindex"
  ],
  div: [
    "id",
    "className",
    "style",
    "data-*",
    "aria-*",
    "title",
    "dir",
    "lang",
    "tabindex",
    "accesskey",
    "contenteditable",
    "draggable",
    "spellcheck",
    "hidden",
    "onclick",
    "ondblclick",
    "onmousedown",
    "onmouseup",
    "onmouseover",
    "onmousemove",
    "onmouseout",
    "onkeydown",
    "onkeyup",
    "onkeypress",
    "onfocus",
    "onblur",
    "oncontextmenu",
  ],
  p: [
    "textContent",
    "hidden",
    "id",
    "className",
    "style",
    "data-*",
    "aria-*",
    "title",
    "dir",
    "lang",
    "tabindex",
    "accesskey",
    "contenteditable",
    "spellcheck",
    "onclick",
    "ondblclick",
    "onmousedown",
    "onmouseup",
    "onmouseover",
    "onmousemove",
    "onmouseout",
    "onkeydown",
    "onkeyup",
    "onkeypress",
    "onfocus",
    "onblur",
    "oncontextmenu",
  ],
  h1: [
    "hidden",
    "id",
    "className",
    "style",
    "data-*",
    "aria-*",
    "title",
    "dir",
    "lang",
    "tabindex",
    "accesskey",
    "contenteditable",
    "spellcheck",
    "onclick",
    "ondblclick",
    "onmousedown",
    "onmouseup",
    "onmouseover",
    "onmousemove",
    "onmouseout",
    "onkeydown",
    "onkeyup",
    "onkeypress",
    "onfocus",
    "onblur",
    "oncontextmenu",
  ],
  h2: [
    "hidden",
    "id",
    "className",
    "style",
    "data-*",
    "aria-*",
    "title",
    "dir",
    "lang",
    "tabindex",
    "accesskey",
    "contenteditable",
    "spellcheck",
    "onclick",
    "ondblclick",
    "onmousedown",
    "onmouseup",
    "onmouseover",
    "onmousemove",
    "onmouseout",
    "onkeydown",
    "onkeyup",
    "onkeypress",
    "onfocus",
    "onblur",
    "oncontextmenu",
  ],
  h3: [
    "hidden",
    "id",
    "className",
    "style",
    "data-*",
    "aria-*",
    "title",
    "dir",
    "lang",
    "tabindex",
    "accesskey",
    "contenteditable",
    "spellcheck",
    "onclick",
    "ondblclick",
    "onmousedown",
    "onmouseup",
    "onmouseover",
    "onmousemove",
    "onmouseout",
    "onkeydown",
    "onkeyup",
    "onkeypress",
    "onfocus",
    "onblur",
    "oncontextmenu",
  ],
  h4: [
    "hidden",
    "id",
    "className",
    "style",
    "data-*",
    "aria-*",
    "title",
    "dir",
    "lang",
    "tabindex",
    "accesskey",
    "contenteditable",
    "spellcheck",
    "onclick",
    "ondblclick",
    "onmousedown",
    "onmouseup",
    "onmouseover",
    "onmousemove",
    "onmouseout",
    "onkeydown",
    "onkeyup",
    "onkeypress",
    "onfocus",
    "onblur",
    "oncontextmenu",
  ],
  h5: [
    "hidden",
    "id",
    "className",
    "style",
    "data-*",
    "aria-*",
    "title",
    "dir",
    "lang",
    "tabindex",
    "accesskey",
    "contenteditable",
    "spellcheck",
    "onclick",
    "ondblclick",
    "onmousedown",
    "onmouseup",
    "onmouseover",
    "onmousemove",
    "onmouseout",
    "onkeydown",
    "onkeyup",
    "onkeypress",
    "onfocus",
    "onblur",
    "oncontextmenu",
  ],
  h6: [
    "hidden",
    "id",
    "className",
    "style",
    "data-*",
    "aria-*",
    "title",
    "dir",
    "lang",
    "tabindex",
    "accesskey",
    "contenteditable",
    "spellcheck",
    "onclick",
    "ondblclick",
    "onmousedown",
    "onmouseup",
    "onmouseover",
    "onmousemove",
    "onmouseout",
    "onkeydown",
    "onkeyup",
    "onkeypress",
    "onfocus",
    "onblur",
    "oncontextmenu",
  ],
  span: [
    "hidden",
    "id",
    "className",
    "style",
    "data-*",
    "aria-*",
    "title",
    "dir",
    "lang",
    "tabindex",
    "accesskey",
    "contenteditable",
    "spellcheck",
    "onclick",
    "ondblclick",
    "onmousedown",
    "onmouseup",
    "onmouseover",
    "onmousemove",
    "onmouseout",
    "onkeydown",
    "onkeyup",
    "onkeypress",
    "onfocus",
    "onblur",
    "oncontextmenu",
  ],
  input: [
    "style",
    "hidden",
    "type",
    "name",
    "value",
    "id",
    "className",
    "placeholder",
    "readonly",
    "disabled",
    "checked",
    "size",
    "maxlength",
    "min",
    "max",
    "step",
    "pattern",
    "required",
    "autofocus",
    "autocomplete",
    "autocapitalize",
    "autocorrect",
    "list",
    "multiple",
    "accept",
    "capture",
    "form",
    "formaction",
    "formenctype",
    "formmethod",
    "formnovalidate",
    "formtarget",
    "height",
    "width",
    "alt",
    "src",
    "usemap",
    "ismap",
    "tabindex",
    "title",
    "accesskey",
    "aria-*",
    "role",
    "aria-*",
    "aria-*",
    "onchange",
    "oninput",
    "oninvalid",
    "onsubmit",
    "onreset",
    "onclick",
    "ondblclick",
    "onmousedown",
    "onmouseup",
    "onmouseover",
    "onmousemove",
    "onmouseout",
    "onkeydown",
    "onkeyup",
    "onkeypress",
    "onfocus",
    "onblur",
    "oncontextmenu",
  ],
  button: [
    "style",
    "hidden",
    "type",
    "name",
    "value",
    "id",
    "className",
    "autofocus",
    "disabled",
    "form",
    "formaction",
    "formenctype",
    "formmethod",
    "formnovalidate",
    "formtarget",
    "onclick",
    "ondblclick",
    "onmousedown",
    "onmouseup",
    "onmouseover",
    "onmousemove",
    "onmouseout",
    "onkeydown",
    "onkeyup",
    "onkeypress",
    "onfocus",
    "onblur",
    "oncontextmenu",
  ],
  textarea: [
    "hidden",
    "id",
    "className",
    "name",
    "rows",
    "cols",
    "readonly",
    "disabled",
    "placeholder",
    "autofocus",
    "required",
    "maxlength",
    "minlength",
    "wrap",
    "spellcheck",
    "onchange",
    "oninput",
    "onfocus",
    "onblur",
    "onkeydown",
    "onkeyup",
    "onkeypress",
    "onselect",
    "oncontextmenu",
  ],
  select: [
    "hidden",
    "id",
    "className",
    "name",
    "size",
    "multiple",
    "disabled",
    "autofocus",
    "required",
    "form",
    "onchange",
    "oninput",
    "onfocus",
    "onblur",
    "onkeydown",
    "onkeyup",
    "onkeypress",
    "onselect",
    "oncontextmenu",
  ],
  ul: ["hidden", "id", "className", "style", "type", "compact"],
  ol: ["hidden", "id", "className", "style", "type", "reversed", "start"],
  li: ["hidden", "id", "className", "style", "value"],
  table: [
    "hidden",
    "id",
    "className",
    "style",
    "border",
    "cellpadding",
    "cellspacing",
    "summary",
    "width",
  ],
  tr: ["hidden", "id", "className", "style", "bgcolor", "align", "valign"],
  td: [
    "hidden",
    "id",
    "className",
    "style",
    "colspan",
    "rowspan",
    "headers",
    "headers",
    "abbr",
    "align",
    "axis",
    "bgcolor",
    "char",
    "charoff",
    "valign",
    "nowrap",
    "width",
    "height",
    "scope",
  ],
  form: [
    "style",
    "hidden",
    "id",
    "className",
    "style",
    "action",
    "method",
    "enctype",
    "name",
    "target",
    "accept-charset",
    "novalidate",
    "autocomplete",
    "autocapitalize",
    "autocorrect",
    "accept",
    "rel",
    "title",
    "onsubmit",
    "onreset",
    "onformdata",
    "oninput",
    "oninvalid",
    "onchange",
    "onblur",
    "onfocus",
  ],
};

function check(child) {
  if (child instanceof Mini.Variable) {
    return {
      type: "variable",
      value: child,
    };
    // console.log("is variable");
  } else if (typeof child === "string" || typeof child === "number") {
    return {
      type: "text",
      value: child,
    };
  } else {
    // console.log("child: ", child);

    return child;
  }
}

const createElement = (tag = null, props = {}, ...children) => {
  if (typeof tag === "function") {
    let funcTag = tag(props || {});
    console.log("create element: call func", funcTag);
    // console.log("call func" ,funcTag);
    var funcName = tag.toString();
    funcName = funcName.substr("function ".length);
    funcName = funcName.substr(0, funcName.indexOf("("));

    // if (funcName == "Route") {
    //   // add it to to routes objects
    //   console.log("is Route: ", funcTag, "props: ", props);
    //   console.log("===============================");

    //   if (funcTag.children[0].element) {
    //     console.log("0.children: ", funcTag.children);
    //   }

    //   funcTag.children?.forEach((child) => {
    //     if (child.props && child.props.path)
    //       child.props.path = funcTag.props.path + "/" + child.props.path;
    //   });
    //   console.log("found fragment: ", funcTag);

    //   if (props.element) routes[props.path] = props.element;

    //   funcTag = {
    //     tag: "Route",
    //     type: "fragment",
    //     props: props || {},
    //     children: (children || []).map(check),
    //   };
    //   // return funcTag;
    // } else
    if (funcTag.length == 0) {
      funcTag = {
        type: "fragment",
        props: props || {},
        children: (children || []).map(check),
      };
      return funcTag;
    }
    return createElement(funcTag.tag, funcTag.props, ...funcTag.children);
  }
  if (children && children.length) children = children.map(check);
  const element = {
    tag: tag,
    type: tag && tag != "Route" ? "element" : "fragment",
    props: props,
    children: children,
  };
  // console.log("element: ", element);

  return element;
};

const render = (vdom, parent) => {
  if (!vdom) return;
  if (typeof vdom === "function") {
    // console.log("render: call func", vdom);
    let func = vdom();

    // func.state = "abc";
    // console.log("it's a func:", func);
    return render(func, parent);
  }

  let { type, tag, props, children } = vdom;
  if (type === "variable") {
    // console.log("is variable: ", vdom.value.get());
    // console.log("has parent: ", parent);
    const dom = document.createTextNode(vdom.value.get());
    parent?.appendChild(dom);
    vdom.value.UpdateComponent(dom);
  } else if (type === "text") {
    console.log("text vdom: ", vdom);
    parent?.appendChild(document.createTextNode(vdom.value));
    // parent.textContent = vdom.value;
    return;
  } else if (type === "element") {
    if (!validTags.hasOwnProperty(tag)) throw new Error(`Invalid tag "${tag}"`);
    const dom = document.createElement(tag);
    // set dom state here
    // dom.state = {}
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
  } else if (type == "fragment") {
    children?.map((child) => {
      render(child, parent);
    });
  }
};

const Fragment = (props, ...children) => {
  return children || [];
};

// States
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
      // let { pathname } = window.location;
      // pathname = pathname.slice(1);
      // Mini.refresh(
      //   pathname ? routes[pathname] : routes[""],
      //   document.getElementById("mini")
      // );
    };
    const getState = () => {
      return stateList[idx].value;
    };
    return [getState, setState];
  })();
};

class Variable {
  constructor(initialState) {
    this._state = initialState;
    this._prevState = initialState;
    this._hasComponent = false;
    this._Component = {};
  }

  set state(newState) {
    this._prevState = this._state;
    this._state = newState;
  }

  UpdateComponent(Component) {
    this._hasComponent = true;
    this._Component = Component;
  }

  get set() {
    return (newValue) => {
      this.state = newValue;
      if (this._hasComponent) {
        this._Component.nodeValue = this.get();
        console.log("call set that has parent: ", this._Component);
      }
    };
  }
  get get() {
    return () => this._state;
  }

  get prevState() {
    return this._prevState;
  }
}

const pathToRegex = (path) => {
  return new RegExp(
    "^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$"
  );
};

const getParams = (match) => {
  console.log(match);
  const values = match.result.slice(1);
  const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
    (result) => result[1]
  );

  // console.log(Array.from(match.route.path.matchAll(/:(\w+)/g)));
  return Object.fromEntries(
    keys.map((key, i) => {
      return [key, values[i]];
    })
  );
};

const navigateTo = (url) => {
  // add to history
  history.pushState(null, null, url);
  router();
};

function NotFound() {
  return <h4 className="Mini_Error_Not_Found">Error: Not Found</h4>;
}

const routes = [{ path: "", element: NotFound }];

const router = async () => {
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
  // const element = new match.route.element(getParams(match));
  //   console.log("Param: ", getParams(match));
  let element = match.route.element(getParams(match));
  console.log("element: ", element);
  app.innerHTML = "";
  Mini.render(element, app);
};

// when going back and forward
window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
  //   document.body.addEventListener("click", (event) => {
  //     // to prevent page from being reloaded
  //     // when clicking element that has [data-link]
  //     if (event.target.matches("[data-link]")) {
  //       event.preventDefault();
  //       navigateTo(event.target.href);
  //     }
  //   });
  router();
});

function Routes({ path, element }) {
  if (path === "*") routes[0].element = element;
  else routes.push({ path, element });
  return <></>;
}

const Mini = {
  createElement,
  render,
  Fragment,
  useState,
  index,
  Routes,
  Variable,
};

export default Mini;
