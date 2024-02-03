const calismaSuresi = prompt("calisma süresi");
let maas = prompt("maasinizi giriniz");

if (calismaSuresi >= 10) {
  maas = maas * 1.1;
  console.log("zamli maasiniz:", maas);
  console.log(`zamli maasiniz: ${maas}`);
} else {
  console.log("Uzgunuz maasinaza zama yapamıyoruz", maas);
}
console.log("güle güle");
