"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvoicePrinter {
    constructor(invoice) {
        this.invoice = invoice;
    }
    printInvoice() {
        console.log(`${this.invoice.getBook().getName()} Invoice quantity: ${this.invoice.getQuantity()}`);
        console.log(`Discount Rate: ${this.invoice.getDiscountRate()}`);
        console.log(`Tax Rate: ${this.invoice.getTaxRate()}`);
        console.log(`TOTAL: ${this.invoice.getTotal()}`);
    }
}
exports.default = InvoicePrinter;
//# sourceMappingURL=invoicePrinter.js.map