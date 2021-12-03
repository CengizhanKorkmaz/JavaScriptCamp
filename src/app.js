console.log("Merhaba")

let dolarDun=12.0
let dolarBugun=13.00

console.log(dolarDun)

const euroDun=11.2


console.log(euroDun)

let konutKredileri=[12,'Konut Kredileri','Taşıt Kredileri',[1,2,3]]

console.log("<ul>")
for(let i= 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

console.log(konutKredileri)
//var => global değişken
//let => block degisken tanımlandığı yerde kallanılır
//const => bir kere değer atlır değiştirlimez
