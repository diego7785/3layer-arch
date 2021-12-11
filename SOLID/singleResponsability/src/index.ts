import Book from "./book";
import Invoice from "./invoice";
import InvoicePrinter from "./invoicePrinter";
import SaveToFile from "./saveToFile";

function index() {
  const book = new Book("Clen Code", "Bob", 1995, 49, "SD-456-ASD");
  const invoice = new Invoice(book, 1, 50, 0.14);
  invoice.calculateTotal();

  const invoicePrinter = new InvoicePrinter(invoice);
	invoicePrinter.printInvoice();

	const saveToFile = new SaveToFile(invoice);
	saveToFile.saveToFile();
}

index();
