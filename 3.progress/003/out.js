(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/process/browser.js
  var require_browser = __commonJS({
    "node_modules/process/browser.js"(exports, module) {
      var process = module.exports = {};
      var cachedSetTimeout;
      var cachedClearTimeout;
      function defaultSetTimout() {
        throw new Error("setTimeout has not been defined");
      }
      function defaultClearTimeout() {
        throw new Error("clearTimeout has not been defined");
      }
      (function() {
        try {
          if (typeof setTimeout === "function") {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === "function") {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          return setTimeout(fun, 0);
        }
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e2) {
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          return clearTimeout(marker);
        }
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            return cachedClearTimeout.call(null, marker);
          } catch (e2) {
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;
      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }
      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }
      process.nextTick = function(fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function() {
        this.fun.apply(null, this.array);
      };
      process.title = "browser";
      process.browser = true;
      process.env = {};
      process.argv = [];
      process.version = "";
      process.versions = {};
      function noop() {
      }
      process.on = noop;
      process.addListener = noop;
      process.once = noop;
      process.off = noop;
      process.removeListener = noop;
      process.removeAllListeners = noop;
      process.emit = noop;
      process.prependListener = noop;
      process.prependOnceListener = noop;
      process.listeners = function(name) {
        return [];
      };
      process.binding = function(name) {
        throw new Error("process.binding is not supported");
      };
      process.cwd = function() {
        return "/";
      };
      process.chdir = function(dir) {
        throw new Error("process.chdir is not supported");
      };
      process.umask = function() {
        return 0;
      };
    }
  });

  // mini/mini.js
  var import_process = __toESM(require_browser());

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
        if (props.element)
          routes[props.path] = props.element;
        funcTag = {
          tag: "Route",
          type: "fragment",
          props: props || {},
          children: (children || []).map(check)
        };
      } else if (funcTag.length == 0) {
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
    console.log("element: ", element);
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
    routes
    // Route,
  };
  var mini_default = Mini;

  // App.js
  var previousPath = "";
  function SetPath() {
    let currentPath = window.location.pathname;
    if (currentPath.startsWith("/")) {
      currentPath = currentPath.slice(1);
    }
    if (currentPath !== previousPath) {
      previousPath = currentPath;
      console.log("render: ", mini_default.routes);
      mini_default.render(mini_default.routes[currentPath], document.getElementById("mini"));
    }
  }
  setInterval(SetPath, 30);
  function debug() {
  }
  setInterval(debug, 1e3);
  function App() {
    return /* @__PURE__ */ mini_default.createElement("div", null, /* @__PURE__ */ mini_default.createElement(mini_default.Fragment, null, /* @__PURE__ */ mini_default.createElement("h1", null, "hello")));
  }
  var App_default = App;

  // main.js
  mini_default.render(/* @__PURE__ */ mini_default.createElement(App_default, null), document.getElementById("mini"));
})();
