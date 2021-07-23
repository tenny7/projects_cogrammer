class Collection {
    #value
    #next
    
    constructor(value, next) {
        this.#value = value
        if (next) this.#next = new Collection(next)
        else this.#next = null
    }

    get value() { return this.#value }
    get next() { return this.#next }

    add(value) {
        let next
        for (next = this.#next; next && next.#next; next = next.#next) ;
        if (!next) next = this
        next.#next = new Collection(value)
    }
}