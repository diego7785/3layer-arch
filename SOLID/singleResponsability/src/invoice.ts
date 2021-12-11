import Book from "./book";

export default class Invoice {
  private total: number = 0;
  
  constructor(
    private book: Book,
    private quantity: number,
    private discountRate: number,
    private taxRate: number
  ) {}

  calculateTotal() {
    const total = this.book.getPrice() * this.quantity * (1 - this.discountRate/100) * (1 + this.taxRate/100);
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
