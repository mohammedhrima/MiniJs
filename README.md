
# Mini Js

* [Introduction](#Introduction)
* [Instalation](#Instalation)
* [Project Folder Structure](#Project_Folder_Structure)
* [Get started](#Get_started)

## Introduction
+ MiniJs is frontEnd library similar to Reactjs

## Instalation
```bash
    git clone https://github.com/mohammedhrima/MiniJs.git Project_name
    cd Project_name
```

## Project Folder Structure
* your directory will look something like this:
```
.
├── Mini
│   └── lib.js
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

## Get Started
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
