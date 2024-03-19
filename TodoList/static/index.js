(() => {
  // Mini/validTags.js
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
    i: ["class", "id", "title", "style", "dir", "lang", "accesskey", "tabindex"],
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
  var validTags_default = validTags;

  // Mini/lib.js
  var Variable = class {
    constructor(initialValue) {
      this.aInternal = initialValue;
      this.aListener = function(new_val) {
      };
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
  };
  function check(child) {
    if (typeof child === "string" || typeof child === "number") {
      return {
        type: "text",
        value: child
      };
    }
    if (child instanceof Variable) {
      return {
        type: "variable",
        value: child
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
          children: (children || []).map(check)
        };
      }
      if (funcTag.type == "text") {
        console.log("is text");
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
    console.log("createElement: ", element);
    return element;
  }
  function render(vdom, parent) {
    if (!vdom)
      return;
    if (typeof vdom === "function") {
      let func = vdom();
      return render(func, parent);
    }
    let { type, tag, props, children } = vdom;
    switch (type) {
      case "text": {
        parent?.appendChild(document.createTextNode(vdom.value));
        break;
      }
      case "variable": {
        vdom.value.registerListener(function(val) {
          parent.innerHTML = "";
          parent?.appendChild(document.createTextNode(vdom.value.value));
        });
        parent?.appendChild(document.createTextNode(vdom.value.value));
        break;
      }
      case "element": {
        if (!validTags_default.hasOwnProperty(tag))
          throw new Error(`Invalid tag "${tag}"`);
        const dom = document.createElement(tag);
        const style = {};
        Object.keys(props || {}).filter((key) => key != "children").forEach((key) => {
          if (validTags_default[vdom?.tag].includes(key)) {
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
        break;
      }
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
  var app = document.getElementById("app");
  var routes = [
    {
      path: "",
      element: () => /* @__PURE__ */ Mini.createElement("h4", { className: "Mini_Error_Not_Found" }, "Error: Not Found")
    }
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
    const matches = routes.map((route) => {
      return {
        route,
        result: location.pathname.match(pathToRegex(route.path))
      };
    });
    let match = matches.find((elem) => elem.result !== null);
    if (!match) {
      match = {
        route: routes[0],
        result: [location.pathname]
      };
    }
    console.log(match);
    let element = match.route.element(getParams(match));
    app.innerHTML = "";
    Mini.render(element, app);
  }
  window.addEventListener("popstate", router);
  document.addEventListener("DOMContentLoaded", () => {
    router();
  });
  function Routes({ path, element }) {
    if (path === "*")
      routes[0].element = element;
    else
      routes.push({ path, element });
    return /* @__PURE__ */ Mini.createElement(Mini.Fragment, null);
  }
  var Mini = { createElement, Fragment, render, Routes, Variable };
  var lib_default = Mini;

  // src/pages/SayMyName.js
  function SayMyName({ name }) {
    return /* @__PURE__ */ lib_default.createElement(lib_default.Fragment, null, /* @__PURE__ */ lib_default.createElement("h1", { className: "h1" }, "Say My name: ", name));
  }
  var SayMyName_default = SayMyName;

  // src/pages/HelloWorld.js
  function HelloWorld() {
    return /* @__PURE__ */ lib_default.createElement(lib_default.Fragment, null, /* @__PURE__ */ lib_default.createElement(SayMyName_default, { name: "Heisenberg" }), /* @__PURE__ */ lib_default.createElement("h1", null, "You're goddamn right"));
  }
  var HelloWorld_default = HelloWorld;

  // src/pages/State.js
  function State() {
    let count = new lib_default.Variable(0);
    const handleclique = () => {
      count.value += 1;
    };
    return /* @__PURE__ */ lib_default.createElement("div", null, /* @__PURE__ */ lib_default.createElement("h1", null, "count: ", /* @__PURE__ */ lib_default.createElement("p", null, count)), /* @__PURE__ */ lib_default.createElement("button", { onclick: handleclique }, "clique me"));
  }
  var State_default = State;

  // src/main.js
  function Main() {
    return /* @__PURE__ */ lib_default.createElement(lib_default.Fragment, null, /* @__PURE__ */ lib_default.createElement(lib_default.Routes, { path: "*", element: HelloWorld_default }), /* @__PURE__ */ lib_default.createElement(lib_default.Routes, { path: "/saymyname/:name", element: SayMyName_default }), /* @__PURE__ */ lib_default.createElement(lib_default.Routes, { path: "/state", element: State_default }));
  }
  lib_default.render(/* @__PURE__ */ lib_default.createElement(Main, null), document.getElementById("app"));
})();
