const calismaSuresi = prompt("calisma süresi");
let maas = prompt("maasinizi giriniz");

// if (calismaSuresi >= 10) {
//   maas = maas * 1.1;
//   console.log("zamli maasiniz:", maas);
//   console.log(`zamli maasiniz: ${maas}`);
// } else {
//   console.log("Uzgunuz maasinaza zama yapamıyoruz", maas);
// }
// console.log("güle güle");

if (calismaSuresi >= 10) {
  maas = Math.round(maas * 1.1);
  console.log(`zamli maasiniz: ${maas}`);
}
console.log("güle güle");

const grade = prompt("pleasse enter your grade");

let result = "";
if (grade < 40) {
  result = " ff";
} else if (grade <= 50) {
  result = "DD";
} else if (grade <= 65) {
  result = "cc";
} else if (grade <= 89) {
  result = "bb";
} else {
  result = "AA";
}
console.log(`your score:${result}`);
