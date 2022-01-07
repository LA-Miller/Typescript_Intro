// In JavaScript
// function demoFunction(someNum) {
//     return someNum;
// }

// demoFunction(1);
// demoFunction('string');
// demoFunction(1, "fajnsdjik", true);

// We can call the function with a number as an argument
// We can call the function with a string as an argument
// We can add arguments that weren't originally declared
function addNumbers(num1: number, num2: number): number {
    return num1 + num2;
}
console.log(addNumbers(1,2));
// !Error
// addNumbers(1,"");
// addNumbers('test', '');
// addNumbers();

function hello(greetingString: string) {
    return greetingString;
}

console.log(hello("hello"));

// * Function with optional parameters
function showNameOrAge(firstName: string, lastName: string, age?: number
) {
    console.log(firstName + '' + lastName);
    return age;
}

console.log(showNameOrAge("Luke", "Miller", 20));



