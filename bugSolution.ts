function greeter(person: string): string {
  return "Hello, " + person;
}

function greeterArray(person: string[]): string {
  return "Hello, " + person.join(" ");
}

let user = ["Jane", "Doe"];
console.log(greeter(user[0])); // Correct: Accessing the first element of the array
console.log(greeterArray(user)); // Correct: Using a function that accepts an array