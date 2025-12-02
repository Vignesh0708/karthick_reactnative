
let a = 9;

let b = 8;

function oddeven(a) {
    if (a % 2 == 0) {
        return "even";
    }
    else {
        return "odd";
    }
}

console.log(oddeven(b));

let even = oddeven(8);
console.log(even);

let x = (y) => y % 2 == 0 ? "even" : "odd";

console.log("x" + x(9));


function history(name, age, callback) {
    return callback(name, age);
}


let person1 = (name, age) => {
    console.log("My name is " + name + " and I am " + age + " years old.");
}


console.log(history("Alice", 30, person1));

let person2 = function (name, age) {
    console.log("My name is " + name + " and I am " + age + " years old.");
}

console.log(history("Bob", 25, person2));



function message(name, ab) {
    console.log("Inside message function");
    const gh = "hello" + name;
    ab(gh);
}


message("Charlie", function (gh) {
    console.log("Callback function called with message: " + gh);
});

