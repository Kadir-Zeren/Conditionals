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

// const grade = prompt("pleasse enter your grade");

// let result = "";
// if (grade < 0) {
//   console.log("grade can not be small than zero");
// } else if (grade < 40) {
//   result = " ff";
// } else if (grade <= 50) {
//   result = "DD";
// } else if (grade <= 65) {
//   result = "cc";
// } else if (grade <= 89) {
//   result = "bb";
// } else if (grade <= 100) {
//   result = "AA";
// } else {
//   console.log("grade can not be bigger than 100");
// }

// if (result != "") {
//   console.log(`your score:${result}`);
// }

// if (result) {
//   console.log(`your score:${result}`);
// }

// const n1 = +prompt("Num1:");
// const n2 = +prompt("Num2:");
// const n3 = +prompt("Num3:");

// if (n1 > n2) {
//   if (n1 > n3) {
//     console.log("biggest:", n1);
//   }
// }

// if (n1 >= n2 && n1 >= n3) {
//   console.log("biggesst:", n1);
// } else if (n2 >= n2 && n2 >= n3) {
//   console.log("biggesst:", n2);
// } else if (n3 >= n2 && n3 >= n2) {
//   console.log("biggesst:", n3);
// }

// let biggest = n1;

// if (n2 >= biggest) {
//   biggest = n2;
// }
// if (n3 >= biggest) {
//   biggest = n3;
// }
// console.log(`${biggest} is biggest`);

const grade1 = prompt("Please enter your grade");

grade1 >= 50 ? console.log("succeed") : console.log("failed");
const score = grade1 >= 50 ? "passed" : "failed";
console.log(score);

const score1 = grade1 >= 50 ? "succeed" : "";
console.log(score1);

const speed = 110;

speed > 120
  ? console.log("speed")
  : speed >= 90
  ? console.log("normal")
  : console.log("low speed");
