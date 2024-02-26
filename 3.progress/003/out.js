(() => {
  // mini/validTags.js
  var validTags = {
    a: ["accesskey", "hidden", "charset", "className", "coords", "download", "href", "hreflang", "id", "name", "ping", "rel", "rev", "shape", "style", "target", "title"],
    img: ["alt", "src", "hidden", "srcset", "sizes", "crossorigin", "usemap", "ismap", "width", "height", "referrerpolicy", "loading", "decoding"],
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
    table: ["hidden", "id", "className", "style", "border", "cellpadding", "cellspacing", "summary", "width"],
    tr: ["hidden", "id", "className", "style", "bgcolor", "align", "valign"],
    td: ["hidden", "id", "className", "style", "colspan", "rowspan", "headers", "headers", "abbr", "align", "axis", "bgcolor", "char", "charoff", "valign", "nowrap", "width", "height", "scope"],
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

  // mini/mini.js
  function check(child) {
    if (typeof child === "string" || typeof child === "number")
      return {
        type: "text",
        value: child
      };
    else
      return child;
  }
  var createElement = (tag = null, props = {}, ...children) => {
    if (typeof tag === "function") {
      let funcTag = tag(props || {});
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
      type: tag ? "element" : "fragment",
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
    if (type === "text") {
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
  var index = 0;
  var stateList = [];
  var refresh = async (child, parent) => {
    let currState = stateList;
    let currIndex = index;
    parent.innerHTML = "";
    Mini.render(child, parent);
    stateList = currState;
    index = currIndex;
  };
  var useState = (initialValue) => {
    const idx = index;
    index++;
    return (() => {
      if (stateList[idx] === void 0) {
        stateList[idx] = { value: initialValue };
      }
      const setState = (newValue) => {
        console.log("call setter with value:", newValue, "in index:", idx);
        stateList[idx].value = newValue;
        let { pathname } = window.location;
        pathname = pathname.slice(1);
        Mini.refresh(
          pathname ? main_default[pathname] : main_default[""],
          document.getElementById("mini")
        );
      };
      const getState = () => {
        return stateList[idx].value;
      };
      return [stateList[idx].value, setState];
    })();
  };
  var Mini = { createElement, render, Fragment, useState, refresh, index };
  var mini_default = Mini;

  // pages/Home.js
  var Home2 = () => {
    const [getB, setB] = mini_default.useState(0);
    const handle = () => {
      setB(getB + 1);
    };
    return /* @__PURE__ */ mini_default.createElement("div", { style: { backgroundColor: "red" } }, /* @__PURE__ */ mini_default.createElement("h2", null, "A: ", getB), /* @__PURE__ */ mini_default.createElement("button", { onclick: handle }, "clique me A"));
  };
  var Home = () => {
    const [getA, setA] = mini_default.useState(0);
    const handle = () => {
      setA(getA + 1);
    };
    return /* @__PURE__ */ mini_default.createElement("div", null, /* @__PURE__ */ mini_default.createElement("h2", null, "A: ", getA), /* @__PURE__ */ mini_default.createElement("button", { onclick: handle }, "clique me A"), /* @__PURE__ */ mini_default.createElement(Home2, null));
  };
  var Home_default = Home;

  // pages/List.js
  var List = () => {
    const [name, setName] = mini_default.useState("mohammed");
    function handle(event) {
      event.preventDefault();
      console.log(event.target.value);
      setName(event.target.value);
    }
    return /* @__PURE__ */ mini_default.createElement("div", null, /* @__PURE__ */ mini_default.createElement("h1", null, "hello it's ", name), /* @__PURE__ */ mini_default.createElement("input", { onchange: handle }), /* @__PURE__ */ mini_default.createElement("button", null, "clique me button"), /* @__PURE__ */ mini_default.createElement("a", { href: "https://www.google.com/" }, "clique me"));
  };
  var List_default = List;

  // pages/SayHi.js
  var SayHi = ({ name }) => {
    console.log("say hi", name);
    return /* @__PURE__ */ mini_default.createElement(mini_default.Fragment, null, /* @__PURE__ */ mini_default.createElement("h3", null, "SayHi ", name));
  };
  var SayHi_default = SayHi;

  // pages/New.js
  var New = () => {
    return /* @__PURE__ */ mini_default.createElement("h3", null, "New Page");
  };
  var New_default = New;

  // main.js
  var routes = {
    "": Home_default,
    home: Home_default,
    list: List_default,
    new: New_default,
    sayhi: SayHi_default
  };
  var main_default = routes;
  function renderPage(pathname) {
    const app = document.getElementById("mini");
    switch (pathname) {
      case "/":
      case "/home":
        mini_default.render(Home_default, app);
        break;
      case "/about":
        app.innerHTML = "<h1>About</h1>";
        break;
      default:
        app.innerHTML = "<h1>404 Not Found</h1>";
    }
  }
  renderPage(window.location.pathname);
  window.addEventListener("popstate", () => {
    console.log("holloooo");
  });
  window.navigation.addEventListener("navigate", (event) => {
    event.preventDefault();
    console.log("location changed!");
  });
})();
