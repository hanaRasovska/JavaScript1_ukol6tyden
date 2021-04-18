// Použij výpis do konzole prohlížeče pomocí console.log('text')
// Konzoli otevřeš v Chrome stiskem F12 (na Windows) nebo Command-Option-I (na Macu)


// První příklad - vypiš vzestupně čísla od 0 do 10
console.log('První příklad - vzestupná řada 0 - 10');
let i = 0;
let prvniPriklad=[i];
while (i < 10 ){
  i++;
  prvniPriklad.push(i);
}

//TADY NAPIS CYKLUS

console.log(prvniPriklad);

// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu

console.log('Druhý příklad - rozdíl mezi <= a <');
let j = 0;
let druhyPriklad=[j];
while (j <=10 ){
  j++;
  druhyPriklad.push(j);
}

console.log(druhyPriklad);
console.log(druhyPriklad.length);

//TADY NAPIS CYKLUS

//console.log('-------------------');

// Třetí příklad - vypiš sestupně čísla od 10 do 0
console.log('Třetí příklad - sestupná řada 10 - 0');

let tretiPriklad=[];
let k = 0;
while  (k <= 10){
  k++;
  cislo = prvniPriklad.length - k;
  tretiPriklad.push(cislo);
}

console.log(tretiPriklad);
//TADY NAPIS CYKLUS
//console.log('-------------------');