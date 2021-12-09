export default abstract class MobileDevice {
    constructor(
        protected model: string,
        protected brand: string
    ){
        this.model = model;
        this.brand = brand;
    }

    showBrand() {
        console.log('Model: ', this.model, 'Brand: ', this.brand);
    }

    abstract displayApplications(): void;

    abstract watchVideo(url: string): void;
    abstract watchVideo(path: string, subTitles: string): void;

}