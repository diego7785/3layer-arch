"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Invoice {
    constructor(book, quantity, discountRate, taxRate) {
        this.book = book;
        this.quantity = quantity;
        this.discountRate = discountRate;
        this.taxRate = taxRate;
        this.total = 0;
    }
    calculateTotal() {
        const total = this.book.getPrice() * this.quantity * (1 - this.discountRate / 100) * (1 + this.taxRate / 100);
        this.total = total;
    }
    getBook() {
        return this.book;
    }
    getQuantity() {
        return this.quantity;
    }
    getDiscountRate() {
        return this.discountRate;
    }
    getTaxRate() {
        return this.taxRate;
    }
    getTotal() {
        return this.total;
    }
}
exports.default = Invoice;
//# sourceMappingURL=invoice.js.map