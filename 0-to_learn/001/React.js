let globalId = 0;
let globalParent;
const componentState = new Map();

export function useState(initState) {
    // console.log(componentState);
    let id = globalId;
    const parent = globalParent;

    globalId++;
    return (() => {
        const { cache } = componentState.get(parent);
        if (cache[id] == null) {
            cache[id] = { value: typeof initState === "function" ? initState() : initState };
        }
        const setState = (state) => {
            const { props, component } = componentState.get(parent);
            if (typeof state === "function") {
                cache[id].value = state(cache[id].value);
            } else {
                cache[id].value = state;
            }
            render(component, props, parent);
        };
        return [cache[id].value, setState];
    })();
}

export function useEffect(callback, dependencies) {
    let id = globalId;
    const parent = globalParent;

    globalId++;
    (() => {
        const { cache } = componentState.get(parent);
        if (cache[id] == null) {
            cache[id] = { dependencies: undefined };
        }
        const dependenciesChanged =
            dependencies == null ||
            dependencies.some((dependency, i) => {
                return cache[id].dependencies == null || cache[id].dependencies !== dependency;
            });
        if (dependenciesChanged) {
            if (cache[id].cleanup != null) cache[id].cleanup();
            cache[id].cleanup = callback();
            cache[id].dependencies = dependencies;
        }
    })();
}

export function useMemo(callback, dependencies) {
    let id = globalId;
    const parent = globalParent;

    globalId++;
    return (() => {
        const { cache } = componentState.get(parent);
        if (cache[id] == null) {
            cache[id] = { dependencies: undefined };
        }
        const dependenciesChanged =
            dependencies == null ||
            dependencies.some((dependency, i) => {
                return cache[id].dependencies == null || cache[id].dependencies !== dependency;
            });
        if (dependenciesChanged) {
            cache[id].value = callback();
            cache[id].dependencies = dependencies;
        }
        return cache[id].value;
    })();
}

export function render(component, props, parent) {
    const state = componentState.get(parent) || { cache: [] };
    componentState.set(parent, { ...state, component, props });
    globalParent = parent;
    const output = component(props);
    globalId = 0;
    parent.textContent = output;
}
