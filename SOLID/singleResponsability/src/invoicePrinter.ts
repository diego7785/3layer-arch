import Invoice from "./invoice";

export default class InvoicePrinter {
    constructor(
        private invoice: Invoice
    ){

    }
    
    printInvoice() {
        console.log(`${this.invoice.getBook().getName()} Invoice quantity: ${this.invoice.getQuantity()}`);
        console.log(`Discount Rate: ${this.invoice.getDiscountRate()}`);
        console.log(`Tax Rate: ${this.invoice.getTaxRate()}`);

        console.log(`TOTAL: ${this.invoice.getTotal()}`);
    }
}