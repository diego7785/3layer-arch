"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const book_1 = __importDefault(require("./book"));
const invoice_1 = __importDefault(require("./invoice"));
const invoicePrinter_1 = __importDefault(require("./invoicePrinter"));
const saveToFile_1 = __importDefault(require("./saveToFile"));
function index() {
    const book = new book_1.default("Clen Code", "Bob", 1995, 49, "SD-456-ASD");
    const invoice = new invoice_1.default(book, 1, 50, 0.14);
    invoice.calculateTotal();
    const invoicePrinter = new invoicePrinter_1.default(invoice);
    invoicePrinter.printInvoice();
    const saveToFile = new saveToFile_1.default(invoice);
    saveToFile.saveToFile();
}
index();
//# sourceMappingURL=index.js.map