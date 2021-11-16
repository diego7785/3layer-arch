class Person {
    constructor() {
      this.persons = [
        {
          name: "Diego",
          lastname: "Bonilla",
          age: 21,
        },
        {
          name: "Andrés",
          lastname: "Bonilla",
          age: 20,
        },
      ];
    }

    getAll() {
        return this.persons;
    }
}
  
module.exports = Person;
  