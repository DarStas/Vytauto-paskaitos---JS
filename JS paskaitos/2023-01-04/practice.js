const user = {
    name: "Darius",
    role: "student"
};

function createUser(name, role = "lecturer") {
    return {
        name: name,
        role: role,

        sayHi() {
            console.log("Hi");
        },
    };
}

const jonasUser = createUser("Darius");
const petrasUser = createUser("Petras");
const dariusUser = createUser("Vytas");

jonasUser.sayHi();
petrasUser.sayHi();
dariusUser.sayHi();

console.log(jonasUser, petrasUser, dariusUser);

// praktinis panaudojimas

// const FormData = {
//     title: "Knyga",
//     price: "10.00",
//     quantity: 20,
//     weight: null,
// }

// function createProduct({ title, price, quantity }) {
//     return {
//         title,
//         price,
//         quantity,
//         isOutOfStock: !quantity < 0,
//         isDiscounted: false,
//         canBeDelivered: !weight || weight < 200,
//     };
// }

// const newProduct = createProduct(formData);

// copy from chat

// const user = {
//     name: "Vytautas",
//     role: "lecturer",
//     sayHi() {
//          console.log("hi");
//         },
//     }; 
    
//     function createUser(name, role = "student") { 
//         return {    
//             name: name,    
//             role: role,    
//             sayHi() {      
            
//             console.log("hi");    
//         }, 
//     };
// } 

// const vytasUser = createUser("Vytas", "lecturer");
// const jonasUser = createUser("Jonas");
// const petrasUser = createUser("Petras");
// vytasUser.sayHi();
// jonasUser.sayHi();
// petrasUser.sayHi(); 

// console.log(vytasUser, jonasUser, petrasUser); 


const formData = { 
    title: "Knyga", 
    price: "10.00", 
    quantity: 20, 
    weight: null,
};

const formData2 = { 
    title: "Knyga 2", 
    price: "12.00", 
    quantity: 20, 
    weight: null,
    isDraft: true,
}; 

function createProduct({ title, price, quantity, weight }) { 
    return {    
        title,    
        price,    
        quantity,    
        isOutOfStock: 
        quantity <= 0,    
        isDiscounted: false,    
        canBeDelivered: !weight || weight < 200, 
    };
} 

const newProduct = createProduct(formData);

const newProduct2 = createProduct({ 
    title: formData2.title, 
    price: formData2.price, 
    quantity: formData2.quantity, 
    weight: formData2.weight,
}); 

console.log(newProduct.isDiscounted);
console.log(newProduct2.isDiscounted);