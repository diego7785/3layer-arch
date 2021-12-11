export default class Book {

    constructor(
        private name: string,
        private authorName: string,
        private year: number,
        private price: number,
        private isbn: string) {
    }

    getName() {
        return this.name;
    }

    setName(name: string) {
        this.name = name;
    }

    getPrice(){
        return this.price;
    }

    setPrice(price: number){
        this.price = price;
    }
}