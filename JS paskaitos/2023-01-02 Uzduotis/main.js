import { TEXT_1, TEXT_2, TEXT_3 } from "./constants.js"; 
import {logger} from "./logger.js"; // importinam iš pradžių taip, ne per default

logger(TEXT_1); // logger pavdinimas imamas iš import kur viduje tarp banguotų skliaustų
logger(TEXT_2); // o TEXT_1 ir pan. įrašoma kaip argumentas.
logger(TEXT_3);

/*
funkcija funkcijosPav(čia rašomi tiek argumentų, kiek yra)

pavyzdys yra trys const argumentai:
    text_1 = "tekstas pirmas";
    text_2 = "tekstas antras";
    text_3 = "tekstas trečias";

    tada rašome funkciją:

    function funkcijosPavadinimas(text_1, text_2, text_3) {
        funkcijos viduje galime atlikti veiksmus, pvz daugyba sudėtis, atimtis
        norint, kad rezultatą išlogintų galima rašyti:

        console.log(čia įrašome tuos argumentus ir matematinius ženklus, pvz daugyba) * 3
        ir viskas, rezultatą išlogins

        bet galima ir taip daryti

        funkcijos viduje sukurti console.log(result)
        o tą result paimame taip

        const result = (čia įrašome tuos argumentus ir matematinius ženklus, pvz daugyba) * 3
    }
*/