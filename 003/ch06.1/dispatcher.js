export class Dispatcher {
    #sub = new Map();
    subscribe(commandName, handler) {
        if (!this.#sub.has(commandName))
            this.#sub.set(commandName, [])

        const handlers = this.#subs.get(commandName)
        if (handlers.includes(handler))
            return () => { }
        handlers.push(handler)
        return () => {
            const idx = handlers.indexOf(handler)
            handlers.splice(idx, 1)
        }
    }
}