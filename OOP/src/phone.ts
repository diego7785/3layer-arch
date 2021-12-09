import MobileDevice from "./mobileDevice";
import { Playable } from "./playable";

export default class Phone extends MobileDevice implements Playable{
    
    displayApplications(): void {
        throw new Error("Method not implemented.");
    }
    watchVideo(url: string): void;
    watchVideo(path: string, subTitles: string): void;
    watchVideo(path: any, subTitles?: any): void {
        throw new Error("Method not implemented.");
    }
    // brand: string;

    constructor(
        protected brand: string,
        protected model: string,
    ) {
        super(model, brand);
    }

    play(): void {

    }

    
}