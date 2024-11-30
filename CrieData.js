// function Name(created, delivered, deliveryTime) {
//     const createdDate = new Date(created.split("/").reverse().json("-"));
//     const deliveredDate = new Date(created.split("/").reverse().json("-"));

//     const deliveryTimeDate = new Date(createdDate);
//     deliveryTimeDate.setDate(createdDate.getDate() + deliveredDate);

//     if(deliveredDate <= deliveryTimeDate) {
//         return "Dentro do prazo"
//     } else {
//         return "Fora do prazo"
//     }
// }

// console.log(Name("10/10/10", "15/10/10", 5));
// console.log(Name("10/10/10", "20/10/10", 5)); 
// console.log(Name("30/10/10", "20/10/10", 5)); 



var create = new Date(2024, 11, 18);
var delivery = new Date(2024, 11, 25);
var prev = 7;

console.log('create: ' + create);
var diferencaMS = Math.abs(create - delivery);
var diferecaD = Math.ceil(diferencaMS / (1000 * 60 * 60 * 24))
console.log(diferecaD)

if (diferecaD <= prev){
    console.log('entregue dentro do prazo')
}else{
    console.log('fora do prazo')
}

