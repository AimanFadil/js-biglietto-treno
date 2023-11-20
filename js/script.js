let kilometri = prompt('Quanti chilometri vuoi percorrere?')

let eta = prompt('Quanti anni hai?')

let totale = kilometri * 0.21 ;

if (eta < 18) {
    totale -= totale - 20 / 100;
} 
else if (eta > 19 < 64) {
    totale = totale
} 
else  {
    totale -= totale - 40 / 100;
}

console.log(totale)