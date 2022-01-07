interface Animal {
  name: string; //Question mark before colon makes them optional
  numberOfLegs: number;
}

// ! Error - cannot instantiate them, interfaces are NOT classes
// let a: Animal = new Animal();

// ! Error- because an interface was assigned, it expects to have the same properties within that interface
// let dog: Animal = {};

let dog: Animal = {
  name: "Fido",
  numberOfLegs: 4,
};

// * Methods
// ? Interfaces have methods, but they can only have method signatures, not the implementation of the method

// Method signature - First Line of the function (Everything before the curly brackets)
//sayHello(name: string): string // Need function keyword outside interface but not inside
// Method Implementation -- Execution code for the function
//{
// let fName = name;
//return fName;
//}

interface Product {
  name: string;
  price: number;
  stock: number;
  setTimeOfPurchase(d: Date): void;
  stockCount(): void;
}

class Apples implements Product {
  name = "Green Apples";
  price = 5.5;
  stock = 30;

  setTimeOfPurchase(d: Date) {
    console.log(this.name, "purchased on", d);
  }

  stockCount() {
    console.log(this.name, "remaining", this.stock);
  }
}

let myApples: Apples = new Apples();

console.log(myApples.name);

myApples.setTimeOfPurchase(new Date(Date.now()));
myApples.stockCount();

// Sharing interface types

type id = number;

interface UserObjInterface {
  id: id;
  username: string;
  avatar: string;
}

interface CommentObjInterface {
  id: id;
  user: UserObjInterface;
  text: string;
}

interface PostObjInterface {
  id: id;
  poster: UserObjInterface;
  title: string;
  text: string;
  comments: CommentObjInterface[];
}

// Simulates a get all fetch for posts
// Posts -- hasMany -- Comments
// User -- hasOne -- Comments
const Posts: PostObjInterface[] = [
  {
    id: 1,
    poster: {
      id: 1,
      username: "user1",
      avatar: "user1.png",
    },
    title: "My first post",
    text: "Hello World",
    comments: [
      {
        id: 1,
        user: {
          id: 3,
          username: "user3",
          avatar: "user3.png",
        },
        text: "Some comment!",
      },
      {
        id: 2,
        user: {
          id: 2,
          username: "user2",
          avatar: "user2.png",
        },
        text: "Another comment!",
      },
    ],
  },
];

// Interfaces and Classes

type Year = number | string;

interface Colors {
  interior: string;
  exterior: string;
}

interface CarInterface {
  year: Year;
  model: string;
  color: Colors;
  price: number;
  electric?: true;
  testDrive(): void;
}

class Car implements CarInterface {
  constructor(
    public year: Year,
    public model: string,
    public color: Colors,
    public price: number
  ) {}

  testDrive() {
    console.log(`Test drove the ${this.model}.`);
  }
}

class Tesla extends Car {
  private _owner: string = "Tesla Dealership";
  public electric: true = true;
  constructor(
    public year: Year,
    public model: string,
    public color: Colors,
    public price: number
  ) {
    super(year, model, color, price);
  }

  purchase(price: number, purchaser: string) {
    if (price >= this.price) {
      this.changeOwner(purchaser);
      console.log(`Bought the ${this.model}. Enjoy your purchase!`);
      this.price = price - 15000;
    } else {
      console.log(`Need $${this.price - price} more!`);
    }
  }

  private changeOwner(newOwner) {
    this._owner = newOwner;
  }
}

let TeslaForSale = new Tesla(
  2022,
  "Model S",
  { interior: "Grey", exterior: "Black" },
  94_900
);

console.log({ TeslaForSale });

// ! Error -- Cannot access private function outside of the Tesla class
// TeslaForSale.changeOwner("Me");

TeslaForSale.testDrive();

TeslaForSale.purchase(100_000 , 'Me');

console.log({TeslaForSale});