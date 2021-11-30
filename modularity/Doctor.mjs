export default class Doctor {
    constructor(name, specialty, availability) {
        this.name = name;
        this.specialty = specialty;
        this.availabile = availability;
    }

    getName() {
        return this.name;
    }

    getSpecialty() {
        return this.specialty;
    }

    isAvailabile() {
        return this.availabile;
    }
}