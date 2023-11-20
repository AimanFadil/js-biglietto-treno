let kilometri = prompt('Quanti chilometri vuoi percorrere?')

let eta = prompt('Quanti anni hai?')

let totale = kilometri * 0.21;

if (eta < 17) {
    totale = totale * 20 / 100;
} 
else if (eta >= 65) {
    totale = totale * 40 / 100;
} 
else {
    
}
/* console.log(totale) */


let n = totale.toFixed(2);
document.getElementById(`price`).innerHTML = n;
console.log(n)

