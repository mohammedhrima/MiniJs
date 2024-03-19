(() => {
  // mini/validTags.js
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

  // mini/mini.js
  function check(child) {
    if (typeof child === "string" || typeof child === "number")
      return {
        type: "text",
        value: child,
      };
    else return child;
  }
  var routes = {};
  var createElement = (tag = null, props = {}, ...children) => {
    if (typeof tag === "function") {
      let funcTag = tag(props || {});
      var funcName = tag.toString();
      funcName = funcName.substr("function ".length);
      funcName = funcName.substr(0, funcName.indexOf("("));
      if (funcName == "Route") {
        console.log("is Route: ", funcTag, "props: ", props);
        console.log("===============================");
        if (funcTag.children[0].element) {
          console.log("0.children: ", funcTag.children);
        }
        funcTag.children?.forEach((child) => {
          if (child.props && child.props.path)
            child.props.path = funcTag.props.path + "/" + child.props.path;
        });
        console.log("found fragment: ", funcTag);
        if (props.element) routes[props.path] = props.element;
        funcTag = {
          tag: "Route",
          type: "fragment",
          props: props || {},
          children: (children || []).map(check),
        };
      } else if (funcTag.length == 0) {
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
      tag,
      type: tag && tag != "Route" ? "element" : "fragment",
      props,
      children,
    };
    console.log("element: ", element);
    return element;
  };
  var render = (vdom, parent) => {
    if (!vdom) return;
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
          pathname ? routes[pathname] : routes[""],
          document.getElementById("mini")
        );
      };
      const getState = () => {
        return stateList[idx].value;
      };
      return [stateList[idx].value, setState];
    })();
  };
  var Mini = {
    createElement,
    render,
    Fragment,
    useState,
    refresh,
    index,
    routes,
    // Route,
  };
  var mini_default = Mini;

  // App.js
  function App() {
    return /* @__PURE__ */ mini_default.createElement(
      "div",
      null,
      /* @__PURE__ */ mini_default.createElement("h1", null, "hello")
    );
  }
  var App_default = App;

  // main.js
  mini_default.render(
    /* @__PURE__ */ mini_default.createElement(App_default, null),
    document.getElementById("app")
  );
})();
