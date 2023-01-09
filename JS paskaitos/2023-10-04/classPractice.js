// class User {
//     constructor(example) {
//         console.log("called");
//         this.example = example;
//         this.example = "text";
//     }
// }

// let obj = {
//     addAttr() {
//         this.attr = true;
//         obj.attr = true;
//     },
// };
// obj["text"] = "text";
// obj.example = "text";
// obj.addAttr();

// const myUser = new User("text");

// console.log(myUser)

// prasibandymas

// class User {
//     constructor(name, role = "Student") {

//         this.name = name;
//         this.role = role;
//     }

//     sayHi() {
//         console.log(this.name + " say hi");
//     }
// }

// const myUser = new User("text");

// console.log(myUser);

// const jonasUser = createUser("Darius");
// const petrasUser = createUser("Petras");
// const dariusUser = createUser("Vytas");

class User {
    name = null;
    role = null;
    isHappy = true;
   
    constructor(name, role = "student") {
      this.name = name;
      this.role = role;
    }
   
    sayHi() {
      console.log(this.name + " says hi");
    }
  }
   
  const vytasUser = new User("Vytas", "lecturer");
  const jonasUser = new User("Jonas");
  const petrasUser = new User("Petras");
   
  console.log(vytasUser);
  console.log(jonasUser);
  console.log(petrasUser);
   
  vytasUser.sayHi();
  jonasUser.sayHi();
  petrasUser.sayHi();

  /*
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
} */

class Product {
    title = null; 
    price = null;
    quantity = null;
    isOutOfStock = null;
    isDiscounted = false;
    canBeDelivered = null;

    constructor({ title, price, quantity, weight }) {
        this.title = title;
        this.price = price;
        this.quantity = quantity;
        this.isOutOfStock = quantity <= 0;
        this.canBeDelivered = !weight || weight < 200;
    }
}

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

const firstProduct = new Product(formData);
const secondProdduct = new Product({
    ...formData2,
    title: "Hello",
});

const isProduct = firstProduct instanceof Product;

console.log(firstProduct, isProduct);