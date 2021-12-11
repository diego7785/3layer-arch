"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(name, authorName, year, price, isbn) {
        this.name = name;
        this.authorName = authorName;
        this.year = year;
        this.price = price;
        this.isbn = isbn;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
}
exports.default = Book;
//# sourceMappingURL=book.js.map