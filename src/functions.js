function addToCart(quantity,productName="Apple") {

    console.log("Sepete eklendi : "+ productName+ "  adet :"+quantity);
}
addToCart(10)


let sayHello = ()=>{
    console.log("Hello World")
}

sayHello()

let sayHello2=function () {
    console.log("Hello world 2")
}

sayHello2()


function addToCart2(productName,quantity,unitPrice) {
    

}
addToCart2("Elma",2,14)
addToCart2("Armut",4,10)
addToCart2("Limon",3,20)

// Obje oluşturma

let product1 = {productName:"Elma",unitPrice:14,quantity:2}
function addToCart3(product) {
    
    console.log("Ürün Adı : "+product.productName+"  Birim Fiyatı : "+product.unitPrice+ "  Adet : "+product.quantity)
}
addToCart3(product1)


let product2 = {productName:"Elma",unitPrice:14,quantity:2}
let product3 = {productName:"Armut",unitPrice:122,quantity:30}
product2=product3
product2.productName="Karpuz"
console.log(product3.productName)


function addToCart4(products) {
    
    console.log(products)
}

let products = [

    {productName:"Elma",unitPrice:14,quantity:2},
    {productName:"Elma",unitPrice:14,quantity:2}
]
addToCart4(products);


//rest (...) birleştirmek için kullanılır.
function add(...numbers) {
   let total=0
    for (let i = 0; i < numbers.length; i++) {
        
        total=total+numbers[i]
    }
    console.log(total)
   
}
add(5,6)

let numbers = [30,10,20,45]
//spread parçalamak için kullanır
console.log(Math.max(...numbers))


//destrict []
let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]] = [
    {name:"İç Anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Rize","Samsun"]
    ]
    
]

console.log(icAnadolu.name)
console.log(marmara)
console.log(icAnadoluSehirleri)


let newProductName,newUnitPrice,newQuantity
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity} 
    = {productName:"Elma",unitPrice:2,quantity:1})

console.log(newProductName)






