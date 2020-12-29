interface PBook {
    title: string
    author: string
    Country?: string
    pages?: number
}

class Book {
    title: string
    Country?: string
    author: string
    pages?: number

    constructor(options: PBook) {
        this.title = options.title
        this.author = options.author
        if (options.Country) this.Country = options.Country
        if (options.pages) this.pages = options.pages
    }
}

export default Book