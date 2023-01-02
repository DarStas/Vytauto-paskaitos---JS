import myvar from "./other.js"; // default export
import { logStuff, x } from "./other.js"; // named export



logStuff(x);
logStuff(myvar);

// pagrindinis failas main.js
// sukurkite constants.js faila, kuriame yra trys kintamieji su texto zinutemis
// TEXT_1 TEXT_2 TEXT_3 - export const text_1

// logger.js faila, su funcija, kuri priima argumenta is islogina ji
// naudojant default export

// main js faile importuokite constaints.js ir logger.js failus
// ir kiekvienam textui iskvieskite
// logger.js funkcija