export default class CustomError extends Error {

    private status: number;

    constructor(message: string, status: number) {
        super(message);
        this.message = message;
        this.name = 'Error';
        this.status = status;
    }

    getStatus(): number {
        return this.status;
    }

    getMessage(): string {
        return this.message;
    }
}