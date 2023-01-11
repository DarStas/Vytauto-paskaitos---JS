// Create a class named "Worker" which accepts a name argument in its constructor.
//     If a name argument is not provided, use a default value "unnamed"
 
//     The class has two attributes:
//     - name (string, from the constructor)
//     - accumulatedCost (number, starts at 0)
 
//     The class has two methods:
//     - doJob(): logs to the console the following string `${name} has done a job!`,
//         and increments the accumulated cost by 500.
    
//     - payWorker(): logs to the console the following string `${name} has been paid ${accumulatedCost}`,
//         and then the accumulated cost is reset to 0.


class Employee {
    name = null;
    accumulatedCost =  0;

    constructor(name) {
        this.name = name;
    }

    doJob() {
        console.log(`${this.name} has done a job!`)
        this.accumulatedCost += 500;
    }

    payWorker() {
        console.log(`${this.name} has been paid ${this.accumulatedCost}`)
        this.accumulatedCost = 0
    }
}

const darius = new Employee("Darius")

console.log(darius)

darius.doJob();
darius.payWorker();

// ---- Vytauto atlikimas -----

class JobWorker {
    name;
    accumulatedCost = 0;

    constructor(name = "unnamed") {
        this.name = name;
    }

    doJob() {
        console.log(`${this.name} has done job`);
        this.accumulatedCost += 500;
    }

    payWorker(){
        console.log(`${this.name} has been paid ${this.accumulatedCost}`);
        this.accumulatedCost = 0
    }
}

const vytautas = new JobWorker("Vytautas");
const unnamedWorker = new JobWorker();

console.log(vytautas);
console.log(unnamedWorker);

vytautas.doJob();
vytautas.doJob();
vytautas.payWorker();