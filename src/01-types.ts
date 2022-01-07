// Type Declarations

//!Will not work
// let x = 7;
// x = "seven";

// Declare types w/out initialization
//! How to give a variable a type in TS
let address: string;
let phoneNumber: string;
let email: string;
let sS: number;
let isMarried: boolean;

// Declare types w/ initialization
let username: string = "instructor";
let password: string = "password";
let instructorId: number = 1;

let greeting = 'hello';

//* Basic types

//! Primitives

//* Number
let age: number = 40;
let currentYear: number = 2022;
let balance: number = 1_000_000; 

// * string
let companyName: string;
companyName = "EFA";
let appName: string;
appName = "Twitter";

// * boolean
let isLoggedIn: boolean = true;
let isAdmin: boolean = true;

//! Arrays
// ? Expressed in two ways
// 1
let studentList: string[] = ['Timmy', "Bobby"];
// 2
let allScores: Array<number> = [0,1,2,3,4,5]

// * Any
let dataFromThirdparty: any = "123423234";
typeof dataFromThirdparty; 

// * Void
// ? A void type has no type at all, This is not really seen in variables, but is more common to see in functions that return no value

function sayHelloToAll(): void {
    console.log("Hello All");
}
sayHelloToAll();

// * Null & undefined
let undefinedVariable: undefined = undefined;
let nullVariable: null = null;

// * Tuple
// ? Tuple type allows you to create an array with multiple different types
let usernameAndId: [string, number];
usernameAndId = ["something", 2];

// * Enum
// ? Enums allow us to give names to numeric values
enum Color {
    "Red", //0
    "Blue", //1
    "green", //2
}

let selected: string = Color[Color.Red];

enum CardType {
    Ace = 1,
    Two,
    Three,
    Four,
}

let cardType: string = CardType[2];

// * Union Types
let x: number | string | boolean;
x = 23432;
x ="string";
x = true