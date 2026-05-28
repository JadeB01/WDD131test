// 1. Javascript arrays
//            0        1         2
let names = ["Fay", "Willow", "Sassy"];
console.log(names);
console.log(names[0]);
console.log(names[names.length - 1]);

let ages = [6, 5, 10];
let mixArray = ["Fay", 6, "Willow", 5, "Sassy", 10];
console.log(mixArray);


// 2. Javascript objects

let studentName = "Bob";
let studentClass = "WDD131"

//literal objects
let student = {
    // key /value pairs
    name: "Bob",
    class: "WDD131",
    grade: "A",
    age: 27
}

console.log(student);
console.log(student.class);


//3. array methods
names.forEach((name) => {
    //this code execute s once per each item in the array
    console.log(name);
})

//map function returns a NEW array with values returned from function

let newNameArray = names.map((name) => {
    return name + " Barr";
})

console.log(newNameArray);

//Filter function returns a new array with filtered values
let filteredArray = names.filter((name) => {
    return name.includes
})

console.log(filteredArray);