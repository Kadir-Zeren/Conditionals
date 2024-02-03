// const calismaSuresi = prompt("calisma süresi");
// let maas = prompt("maasinizi giriniz");

// if (calismaSuresi >= 10) {
//   maas = maas * 1.1;
//   console.log("zamli maasiniz:", maas);
//   console.log(`zamli maasiniz: ${maas}`);
// } else {
//   console.log("Uzgunuz maasinaza zama yapamıyoruz", maas);
// }
// console.log("güle güle");

// if (calismaSuresi >= 10) {
//   maas = Math.round(maas * 1.1);
//   console.log(`zamli maasiniz: ${maas}`);
// }
// console.log("güle güle");

const grade = prompt("pleasse enter your grade");

let result = "";
if (grade < 0) {
  console.log("grade can not be small than zero");
} else if (grade < 40) {
  result = " ff";
} else if (grade <= 50) {
  result = "DD";
} else if (grade <= 65) {
  result = "cc";
} else if (grade <= 89) {
  result = "bb";
} else if (grade <= 100) {
  result = "AA";
} else {
  console.log("grade can not be bigger than 100");
}

if (result != "") {
  console.log(`your score:${result}`);
}

if (result) {
  console.log(`your score:${result}`);
}
