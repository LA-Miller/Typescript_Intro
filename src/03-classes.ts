// * Properties

class Person {
  firstName: string;
  lastName: string;
}

let user: Person = new Person();
user.firstName = "Timmy";
user.lastName = "Timmison";

class User {
  firstName: string;
  lastName: string;

  sayHello() {
    console.log("Hello", this.firstName);
  }
}

let ken: User = new User();
ken.firstName = "Ken";
ken.lastName = "Jones";
ken.sayHello();

// Constructors

class Game {
  name: string;
  maker: string;

  constructor(name: string, maker: string) {
    (this.name = name), (this.maker = maker);
  }
}

let battleShip: Game = new Game("BattleShip", "Hasbro");
let monopoly: Game = new Game("Monopoly", "Monopoly Man");
console.log({ monopoly });

// Inheritance

class Vehicle {
  type: string;
  make: string;
  model: string;
  manufactureYear: number;
  runs: boolean;
  topSpeed: number;
}

class Automobile extends Vehicle {
  isSelfDriving: boolean;
}

let myCar: Automobile = new Automobile();

console.log({ myCar }); //Adding curly brackets destructures so you can step further into the object

myCar.isSelfDriving = false;
myCar.topSpeed = 200;
myCar.make = "Volvo";

console.log({ myCar });

class Motorcycle extends Vehicle {
  easyToDoWheelie: boolean;
}

let myMotorCycle: Motorcycle = new Motorcycle();
myMotorCycle.easyToDoWheelie = false;
myMotorCycle.topSpeed = 250;

console.log({ myMotorCycle });

// Accessors

// class Store {
//   name: string;
//   city: string;

//   constructor(name: string, city: string) {
//     this.name = name;
//     this.city = city;
//   }
// }

// ! Public Keyword is the same as above, places name and city variables for us
class Store {
  constructor(public name: string, public city: string) {}
}

let ikea: Store = new Store("Ikea", "Indianapolis");
console.log({ ikea });

// ! Cannot access a private variable outside of the class
class Employee extends Person{
    private _salary: number; //* Good practice to have underscore before a private variable
    public badgeId: number;
    schedule: string[];

    getSalary(): number {
        return this._salary;
    }

    setSalary(newSal:number){
        this._salary = newSal;
    }
}

let newEmployee: Employee = new Employee();

newEmployee.badgeId = 1234;
newEmployee.schedule = ["Monday", "Tuesday", "Thursday"];
// !Error - Trying to access a private property within the class
// newEmployee._salary

newEmployee.setSalary(30_000);
console.log(newEmployee.getSalary());




