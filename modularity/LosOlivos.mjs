export default class LosOlivos {
    constructor(address, phone, email, doctors){
        this.address = address;
        this.phone = phone;
        this.email = email;
        this.doctors = doctors;
    }

    getAvailableDoctors(){
        return this.doctors.filter(doctor => doctor.isAvailabile());
    }
    
    getDoctors(){
        return this.doctors;
    }

    getAddress(){
        return this.address;
    }

    getPhone(){
        return this.phone;
    }

    getEmail(){
        return this.email;
    }

    setAddress(address){
        this.address = address;
    }

    setPhone(phone){
        this.phone = phone;
    }

    setEmail(email){
        this.email = email;
    }

    setDoctors(doctors){
        this.doctors = doctors;
    }
}