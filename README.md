
# Mini Js

* [Introduction](#Introduction)
* [Instalation](#Instalation)
* [Folders_Structure](#Folder_Structure)
* [Get_started](#Get_started)
* [Your_first_component](#Your_first_component)
* [Routing](#Routing)
* [Pass_arguments_to_component_from_another_component](#Pass_arguments_to_component_from_another_component)
* [Pass_arguments_to_component_from_router](#Pass_arguments_to_component_from_router)
* [let's_add_some_styling](#let's_add_some_styling)


## Introduction
+ MiniJs is a frontEnd library

## Instalation
```bash
    git clone https://github.com/mohammedhrima/MiniJs.git Project_name
    cd Project_name
```

## Folders_Structure
* your directory will look something like this:
```
.
├── Mini
│   ├── lib.js
│   └── validTags.js
│
├── src
│   ├── pages
│   │   ├── App.js
│   │   ├── your_page1.js
│   │   ├── your_page2.js
│   │   └── ... 
│   │
│   ├── main.js
│   └── style.css
│
├── static (output files/ don't bother yourself with them)
│   ├── index.js
│   └── index.css
│
├── .gitignore
├── esbuild.config.js
├── index.html
├── package.json
├── server.js
└── README.md
```

## Get_Started
* run:
```bash
    npm i
```

* open 2 terminals:
```bash
    # first Terminal (here you will get parsing errors)
    npm run transpile
```
```bash
    # seconds Terminal (here you will get serving errors)
    npm run serve
```

## Your_first_component
* create new file HelloWorld.js in pages folder
```js
    // ./pages/HelloWorld.js

    // all js files should starts with the following line
    import Mini from "../../Mini/lib";

    function HelloWorld()
    {
        return (<h1>Hello World</h1>);
    }

    export default HelloWorld
```

## Routing
```js
    // main.js
    import Mini from "../Mini/lib";
    import HelloWorld from "./pages/HelloWorld";

    function Main() {
        return (
            <>
                // '*' means default path for all routes if not found
                <Mini.Routes path="*" element={HelloWorld} />
            </>
        );
    }

    Mini.render(<Main />, document.getElementById("app"));
```
+ open http://localhost:5000/


## Pass_arguments_to_component_from_another_component
```js
    // ./pages/SayMyName.js
    import Mini from "../../Mini/lib";

    function SayMyName({ name }) {
        return (
            <>
                <h1>Say My name: {name}</h1>
            </>
        );
    }
    export default SayMyName
```

```js
    import Mini from "../../Mini/lib";
    import SayMyName from "./SayMyName";

    function HelloWorld() {
        return (
            <>
                <SayMyName name={"Heisenberg"} />
                <h1>You're goddamn right </h1>
            </>
        );
    }
    export default HelloWorld;

```

+ check http://localhost:5000/

## Pass_arguments_to_component_from_router

```js
    // main.js
    import Mini from "../Mini/lib";
    import HelloWorld from "./pages/HelloWorld";
    import SayMyName from "./pages/SayMyName";

    function Main() {
    return (
        <>
            <Mini.Routes path="*" element={HelloWorld } />
            <Mini.Routes path="/saymyname/:name" element={SayMyName } />
        </>
    );
    }

    Mini.render(<Main />, document.getElementById("app"));
```

+ open http://localhost:5000/saymyname/Walter_White


### let's_add_some_styling
+ create file pages/SayMyName.css

```js
// SayMyName.js
import "./SayMyName.css"

```
```css
/*  SayMyName.css  */
h1 {
  color: rgb(49, 39, 25);
  text-align: center;
}

```

+ check http://localhost:5000/saymyname/Walter_White

## Variables 
+ similar to useState in react
```js
// pages/State.js
import Mini from "../../Mini/lib";

function State() {
  let count = new Mini.Variable(0);
  const handleclique = () => {
    count.value += 1;
  };

  return (
    <div>
      <h1>
        count: <p>{count}</p>
      </h1>
      <button onclick={handleclique}>clique me</button>
    </div>
  );
}

export default State;
```

+ add the following rout in main.js
```js
<Mini.Routes path="/state" element={State} />
```

+ check http://localhost:5000/state
+ clique on "clique me" button to see to change
