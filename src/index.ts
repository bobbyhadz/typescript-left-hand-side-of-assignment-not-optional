export {};

// The left-hand side of assignment expression may not be an optional property access

// EXAMPLE 1 - Use an `if` statement as a type guard to solve the error

type Employee = {
  name: string;
  country: string;
};

let employee: Employee | undefined; // 👈️ could be undefined

if (employee != undefined) {
  employee.country = 'Germany';
}

// ---------------------------------------------------

// // EXAMPLE 2 - Using the non-null assertion operator to solve the error

// type Employee = {
//   name: string;
//   country: string;
// };

// const employee: Employee | undefined = { name: '', country: '' }; // 👈️ could be undefined

// employee!.country = 'Germany';

// ---------------------------------------------------

// // EXAMPLE 3 - Avoiding the error with a type assertion

// type Employee = {
//   name: string;
//   country: string;
// };

// // 👇️ could be undefined
// const employee: Employee | undefined = {
//   name: '',
//   country: '',
// };

// (employee as Employee).country = 'Germany';

// // 👇️ { name: '', country: 'Germany' }
// console.log(employee);

// ---------------------------------------------------

// // EXAMPLE 4 - Using the logical AND (&&) operator to get around the error

// type Employee = {
//   name: string;
//   country: string;
// };

// // 👇️ could be undefined
// const employee: Employee | undefined = {
//   name: '',
//   country: '',
// };

// employee && (employee.country = 'Germany');

// console.log(employee); // 👉️ { name: '', country: 'Germany' }

// ---------------------------------------------------

// // EXAMPLE 5 - The optional chaining operator should only be used when accessing properties

// type Employee = {
//   name: string;
//   country: string;
// };

// let employee: Employee | undefined; // 👈️ could be undefined

// // 👇️ undefined
// console.log(employee?.country.toLowerCase());
