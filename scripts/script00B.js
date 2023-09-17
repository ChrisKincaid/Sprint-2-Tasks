document.getElementById("testScriptB").addEventListener("click", function(){
    alert("Script B is working.");
    });

// Design a class named Car with the properties make model and year
class Car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    // Add a method named displayCar that writes the car properties to the document
    displayCar(){
        console.log(`Car 1 Make: ${this.make} Model: ${this.model} Year: ${this.year}`);
    }
}
// Create an instance of the Car class and invoke the displayCar method
let car1 = new Car("Ford", "Mustang", "2019");
car1.displayCar();

// Craft a regular function within an object, then invoke it. Observe the behavior of "this".
let car2 = {
    make: "Ford",
    model: "Mustang",
    year: "2019",
    displayCar: function(){
        console.log(`Car 2 Make: ${this.make} Model: ${this.model} Year: ${this.year}`);
    }
}
console.log(car2.displayCar());
// Create an arrow function within another object. Execute it and note the behavior of "this".
let car3 = {
    make: "Ford",
    model: "Mustang",
    year: "2019",
    displayCar: () => {
        console.log(`Car 3 Make: ${this.make} Model: ${this.model} Year: ${this.year}`);
    }
}
console.log(car3.displayCar());

// Using the .bind() method, manually set the context of a function and observe the change in the behavior of "this".
let car4 = {
    make: "Ford",
    model: "Mustang",
    year: "2019",
    displayCar: function(){
        console.log(`Car 4 Make: ${this.make} Model: ${this.model} Year: ${this.year}`);
    }
}
console.log(car4.displayCar.bind(car4)());

// Implement inheritance by creating a subclass "ElectricCar" derived from the "Car" class, adding properties like batteryLife
class ElectricCar extends Car {
    constructor(make, model, year, batteryLife){
        super(make, model, year);
        this.batteryLife = batteryLife;
    }
    displayCar(){
        console.log(`Car 5 Make: ${this.make} Model: ${this.model} Year: ${this.year} Battery Life: ${this.batteryLife}`);
    }
}
console.log(new ElectricCar("Tesla", "Model S", "2019", "100%").displayCar());

// Design a class "Student". Create an instance method that uses "this" to access the student's properties. Observe how "this" behaves within the class context
class Student {
    constructor(firstName, lastName, grade){
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = grade;
    }
    displayStudent(){
        console.log(`Student Name: ${this.firstName} ${this.lastName} Grade: ${this.grade}`);
    }
}
console.log(new Student("John", "Doe", "A").displayStudent());
// Construct a function that demonstrates the differences between using "this" in arrow functions and regular functions, especially when they are methods inside a class or object.
let student1 = {
    firstName: "John",
    lastName: "Doe",
    grade: "A",
    displayStudent: () => {
        console.log(`Student Name: ${this.firstName} ${this.lastName} Grade: ${this.grade}`);
    }
}
console.log(student1.displayStudent());