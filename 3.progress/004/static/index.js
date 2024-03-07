(() => {
  // Mini/lib.js
  var validTags = {
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
      "title"
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
      "decoding"
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
      "oncontextmenu"
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
      "oncontextmenu"
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
      "oncontextmenu"
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
      "oncontextmenu"
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
      "oncontextmenu"
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
      "oncontextmenu"
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
      "oncontextmenu"
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
      "oncontextmenu"
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
      "oncontextmenu"
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
      "oncontextmenu"
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
      "oncontextmenu"
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
      "oncontextmenu"
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
      "oncontextmenu"
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
      "width"
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
      "scope"
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
      "onfocus"
    ]
  };
  function check(child) {
    if (child instanceof Mini.Variable) {
      return {
        type: "variable",
        value: child
      };
    } else if (typeof child === "string" || typeof child === "number") {
      return {
        type: "text",
        value: child
      };
    } else {
      return child;
    }
  }
  var createElement = (tag = null, props = {}, ...children) => {
    if (typeof tag === "function") {
      let funcTag = tag(props || {});
      var funcName = tag.toString();
      funcName = funcName.substr("function ".length);
      funcName = funcName.substr(0, funcName.indexOf("("));
      if (funcTag.length == 0) {
        funcTag = {
          type: "fragment",
          props: props || {},
          children: (children || []).map(check)
        };
        return funcTag;
      }
      return createElement(funcTag.tag, funcTag.props, ...funcTag.children);
    }
    if (children && children.length)
      children = children.map(check);
    const element = {
      tag,
      type: tag && tag != "Route" ? "element" : "fragment",
      props,
      children
    };
    return element;
  };
  var render = (vdom, parent) => {
    if (!vdom)
      return;
    if (typeof vdom === "function") {
      let func = vdom();
      return render(func, parent);
    }
    let { type, tag, props, children } = vdom;
    if (type === "variable") {
      console.log("is variable: ", vdom.value._state);
      const dom = document.createTextNode(vdom.value._state);
      parent?.appendChild(dom);
    } else if (type === "text") {
      parent?.appendChild(document.createTextNode(vdom.value));
      return;
    } else if (type === "element") {
      if (!validTags.hasOwnProperty(tag))
        throw new Error(`Invalid tag "${tag}"`);
      const dom = document.createElement(tag);
      const style = {};
      Object.keys(props || {}).filter((key) => key != "children").forEach((key) => {
        if (validTags[vdom?.tag].includes(key)) {
          if (key.startsWith("on"))
            dom[key] = props[key];
          else if (key === "style")
            Object.assign(style, props[key]);
          else
            dom[key] = props[key];
        } else {
          console.warn(`Invalid attribute "${key}" ignored.`);
        }
      });
      if (Object.keys(style).length > 0) {
        dom.style.cssText = Object.keys(style).map((styleProp) => {
          const Camelkey = styleProp.replace(
            /[A-Z]/g,
            (match) => `-${match.toLowerCase()}`
          );
          return `${Camelkey}:${style[styleProp]}`;
        }).join(";");
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
  var Fragment = (props, ...children) => {
    return children || [];
  };
  var pathToRegex = (path) => {
    return new RegExp(
      "^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$"
    );
  };
  var getParams = (match) => {
    console.log(match);
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(
      (result) => result[1]
    );
    return Object.fromEntries(
      keys.map((key, i) => {
        return [key, values[i]];
      })
    );
  };
  function NotFound() {
    return /* @__PURE__ */ Mini.createElement("h4", { className: "Mini_Error_Not_Found" }, "Error: Not Found");
  }
  var routes = [{ path: "", element: NotFound, vars: [], idx: 0 }];
  var currElement = {
    route: routes[0],
    result: [location.pathname]
  };
  var router = async () => {
    const matches = routes.map((route) => {
      return {
        route,
        result: location.pathname.match(pathToRegex(route.path))
      };
    });
    currElement = matches.find((element2) => element2.result !== null);
    if (!currElement) {
      currElement = {
        route: routes[0],
        result: [location.pathname]
      };
    }
    let element = currElement.route.element(getParams(currElement));
    app.innerHTML = "";
    Mini.render(element, app);
  };
  var Variable = class {
    constructor(initialState) {
      console.log("new variable", currElement);
      (() => {
        let idx = currElement.idx;
        if (currElement.route.vars[idx] === void 0)
          currElement.route.vars[idx] = initialState;
        this._state = currElement.route.vars[idx];
      })();
    }
    setValue(newValue) {
      const idx = currElement.idx;
      currElement.idx++;
      currElement.route.vars[idx] = newValue;
      this._state = newValue;
    }
    getValue() {
      return this._state;
    }
  };
  window.addEventListener("popstate", router);
  document.addEventListener("DOMContentLoaded", () => {
    router();
  });
  function Routes({ path, element }) {
    if (path === "*")
      routes[0].element = element;
    else
      routes.push({ path, element, vars: [], idx: 0 });
    return /* @__PURE__ */ Mini.createElement(Mini.Fragment, null);
  }
  var Mini = {
    createElement,
    render,
    Fragment,
    Routes,
    Variable
  };
  var lib_default = Mini;

  // src/pages/Home.js
  var Home = () => {
    let x = new lib_default.Variable(10);
    const handle1 = (e) => {
      console.log("X: ", x);
      x.setValue(x.getValue() + 1);
    };
    return /* @__PURE__ */ lib_default.createElement(lib_default.Fragment, null, /* @__PURE__ */ lib_default.createElement("div", { className: "test" }, /* @__PURE__ */ lib_default.createElement("h1", null, "Value1: ", x), /* @__PURE__ */ lib_default.createElement("button", { onclick: (e) => handle1(e) }, "clique me 1")));
  };
  var Home_default = Home;

  // src/pages/List.js
  var List = () => {
    return /* @__PURE__ */ lib_default.createElement("h3", { className: "List" }, "new: List Page");
  };
  var List_default = List;

  // src/pages/User.js
  var User = ({ name }) => {
    return /* @__PURE__ */ lib_default.createElement("h3", { className: "user" }, "new: User Page has name '", name, "'");
  };
  var User_default = User;

  // src/main.js
  var app2 = document.getElementById("app");
  function Main() {
    return /* @__PURE__ */ lib_default.createElement(lib_default.Fragment, null, /* @__PURE__ */ lib_default.createElement(lib_default.Routes, { path: "*", element: Home_default }), /* @__PURE__ */ lib_default.createElement(lib_default.Routes, { path: "/home", element: Home_default }), /* @__PURE__ */ lib_default.createElement(lib_default.Routes, { path: "/list", element: List_default }), /* @__PURE__ */ lib_default.createElement(lib_default.Routes, { path: "/user/:name", element: User_default }));
  }
  lib_default.render(/* @__PURE__ */ lib_default.createElement(Main, null), app2);
})();
