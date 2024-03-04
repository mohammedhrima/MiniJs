import { exit } from "process";
import { validTags } from "./validTags.js";

function check(child) {
  if (typeof child === "string" || typeof child === "number")
    return {
      type: "text",
      value: child,
    };
  else return child;
}

const routes = {};

const createElement = (tag = null, props = {}, ...children) => {
  if (typeof tag === "function") {
    let funcTag = tag(props || {});
    var funcName = tag.toString();
    funcName = funcName.substr("function ".length);
    funcName = funcName.substr(0, funcName.indexOf("("));

    if (funcName == "Route") {
      // add it to to routes objects
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
      // return funcTag;
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
    tag: tag,
    type: tag && tag != "Route" ? "element" : "fragment",
    props: props,
    children: children,
  };
  console.log("element: ",  element);

  return element;
};

const render = (vdom, parent) => {
  if (!vdom) return;
  // console.log("vdom: ", vdom, "parent: ", parent);
  if (typeof vdom === "function") {
    let func = vdom();

    // func.state = "abc";
    // console.log("it's a func:", func);
    return render(func, parent);
  }

  let { type, tag, props, children } = vdom;

  if (type === "text") {
    parent?.appendChild(document.createTextNode(vdom.value));
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

const Mini = {
  createElement,
  render,
  Fragment,
  useState,
  refresh,
  index,
  routes,
  // Route,
};

export default Mini;
