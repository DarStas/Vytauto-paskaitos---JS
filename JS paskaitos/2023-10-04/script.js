// const obj = {
//   a: "text",
//   b: "text2",
//   c: { x: "text123" },
// };

// const {
//   a,
//   b,
//   c: { x },
// } = obj;
// const a = obj.a;
// const b = obj.b;
// const x = obj.c.x;

// const { a: text } = obj;
// const text = obj.a

// const { c } = obj;
//const c = obj.c

// { x; null, y: undefined } - y visiškai ištrins, dabar naudoti labiau kaip sinonimus


// user objektą, kuris turi name ir email
// jis paduodamas į funkciją
// funkcijoje jis destruktūrizuojamas ir pasiimamas tik email

// const user = {
//     name: "userName",
//     email: "email@user.com",
// };

// function logEmail(user) {
//     const { email } = user;
//     console.log(email);
// }

// logEmail(user);

// const obj = {
//     a: "text",
//     b: "text2",
//     c: "text3",
// };

// const { a, ...restObj } = obj;  // daugta6kis reiškia, kad surenka visą likusį objektą, ir sukuria naują objektą, ir likusius raktus
                                // nukopijuoja kas nebuvo išskirta atskirai

// console.log(a);
// console.log(obj);
// console.log(restObj);

// išbandykime funkcijoje

// const user = {
//     email: "email@gmail.com",
//     name: "userName",
//     password: "password",
// };

// function logEmailAndReturnRest({ email, ...restUser }) {
//     console.log("email within function", email)
//     return restUser;
// };

// const result = logEmailAndReturnRest(user)

// console.log("result", result);

// const { ...clone } = user;

// console.log("user", user);
// console.log("clone", clone);
// console.log(user === clone); // false, nes sukurtas naujas objektas

// 1. sukurti produkto objektą, kuris turi pavadinimą, likučių kiekį (stock), kainą
// 2. funkcijos "getStock" argumentuose destruktūrizuoti produktą
//    ir išsiimti likučius, o likusį objektą grąžinti
// 2a.funkcijoje išsiloginti likučius
// 3. išloginti likusį objetą, kuris grįžta kaip rezultatas

// const obj = {
//     name: "Cell Phone",
//     stock: 20,
//     price: 200,
// }

// function getStock({stock, ...restObj}) {
//     console.log(stock);
//     return restObj;
// }

// const result = getStock(obj);

// console.log(result);

// spread operatorius

// const obj = {
//     a: "text",
//     b: "text2",
// };

// const x = {
//     y: "x",
// };

// const copy = { ...obj }; // dažnas objektų kopijavimo būdas

// const obj2 = {
//     a: "x", // jeigu du raktai "Key" yra vienodi, tada perrašo paskutinį, nes dabar a yra ir obj ir obj2
//     ...obj, // spread
//     c: "text3",
// };

// const obj2 = {
//     ...obj,
//     c: "text3",
//     a: obj.a + " (extended a)", // panaudojimas, kai prie key'jaus a pridedamas tekstas
// };

// console.log("obj", obj);
// console.log("copy", copy);
// console.log("obj2", obj2);

// ----- Užduotis --------

// Parašyti funkciją "createCustomer", kuri priima šiuos du objektus kaip argumentus ir grąžina customer objektą, sukurtą joje.
// paleidus funkciją, gautą objektą išlogginti.

// object user:
//   name string
//   email string

// object personalInfo:
//   address string
//   age number

// ---- Sprendimas -----

// const user = {
//     name: "Vardas",
//     email: "email@gmail.com",
// }

// const personalInfo = {
//     address: "Adresas",
//     age: 36,
// }

// function createCustomer(user, personalInfo) {
//     const newCustomer = {
//         ...user,
//         ...personalInfo
//     }

//     return newCustomer;
// }

// const newCustomer = createCustomer(user, personalInfo);

// console.log(newCustomer);

// ------- Vytauto sprendimas --------

// const customer = createCustomer(user, personalInfo);
// console.log(customer);

// function createCustomer(userData, personalData) {
//     console.log(userData, personalData);

//     return {
//         ...userData,
//         ...personalData,
//     }
// };

// ---- Stopwatch

// let time = 0;

// function tick() {
//     time++;
//     console.log(time);
// }

// const currentInterval = setInterval(tick, 1000); // ms -> 1 s = 1 000 ms

// function stop() {
//     clearInterval(currentInterval);
// }

// sukuriam funkciją kuri skaičiuoja kas sekundę, tada įdedam į funkciją setInterval ir po kalblelio nurodom koks tas intervalas bus ms

