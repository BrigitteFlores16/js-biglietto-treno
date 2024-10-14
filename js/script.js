// # TRACCIA 

//* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//* Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//* il prezzo del biglietto è definito in base ai km (0.21 € al km)
//* va applicato uno sconto del 20% per i minorenni
//* va applicato uno sconto del 40% per gli over 65.
//* L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// # PROCEDURA

//* chiedo all'autente i chilometri che vuole percorrere 
let NumKm = prompt('Quanti chilometri vuoi percorrere ?');
let NumKmInt = parseInt(NumKm);
console.log("I km che vuole percorrere il passeggero sono : "+ NumKmInt );

//  chiedo l'età del passeggero.

let EtaPasseggero = prompt('Quanti anni hai ?');
console.log("l'età del passeggero è : " + parseInt(EtaPasseggero));

// calcolo prezzo del biglietto
let PrezzoDelBiglietto = NumKmInt *0.21;
console.log("il prezzo del biglietto : "+ PrezzoDelBiglietto );

if (EtaPasseggero < 18) {
console.log("il passeggero è minorenne");
PrezzoDelBiglietto = PrezzoDelBiglietto - PrezzoDelBiglietto * 0.20;
};


if (EtaPasseggero > 65) {
console.log("il passeggero ha più di 65 anni");
PrezzoDelBiglietto = PrezzoDelBiglietto - PrezzoDelBiglietto * 0.40;
}

console.log("il prezzo finale è " + PrezzoDelBiglietto.toFixed(2) + "€");