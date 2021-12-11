import Invoice from "./invoice";

export default class SaveToFile {
    constructor(
        private invoice: Invoice
    ) {
    }
    
    saveToFile() {
        console.log("Saving to file...");
    }
}