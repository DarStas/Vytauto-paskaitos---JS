// const obj = {
//     email: "myemail@gmail.com",
//     myName: "Vardenis",
//     someMethod() {
//         console.log("hello");
//     },
//     innerObject: {
//         someProperty: "hello",
//     }
// };


// const {myName: anotherName, email, someMethod, innerObject: {innerObject},
// } = obj;
// nukopijuokite myName iš objekto, naudojant jo raktą

// console.log(email);
// console.log(anotherName);
// someMethod();

// ----------------------------------

// const user = {
//     email: "myemail@gmail.com",
//     name: "Vardenis",
//     age: 36,
// };

// logUser(user);

// function logUser(email, name, age) {
//     name = "otherName";

//     console.log(email);
//     console.log(name);
//     console.log(age);
// }

// logUser({
//     email: "newEmail@gmail.com",
//     name: "newName",
//     age: 18,
// });

// 1. Sukurkite funkciją, kuri priima objektą:// su "prekių kaina", "siuntimo kaina" ir "administraciniu mokesčiu"
// ir iš log'ina pvm (21 procentas), nuo sudėtos sumos.
// funkcija turi destruktūrizuoti tris atributus 
// iškviesti funkciją du kartus:
// 1. sukurti objekto konstantą ir ją paduoti į funkciją
// 2. paduoti inline objektą į funkciją nenaudojant konsantos.

// const obj = {
//     price: 100,
//     shippingPrice: 20,
//     taxFee: 10,
// };

// someFunction(obj);

// function someFunction({price, shippingPrice, taxFee}) {
//     console.log(price, shippingPrice, taxFee);
//     const result = (price + shippingPrice + taxFee) * 0.21; 
//     console.log(result);
// }

// someFunction({
//     price: 120,
//     shippingPrice: 30,
//     taxFee: 20,
// });

// ------------------------------------- atlikta užduotis tik reikia viską dar pasikartot... ---------------