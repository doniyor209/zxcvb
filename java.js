let cars=[
    "BMW",
    "Audi",
    "Mercedes",
    "Toyota",
    "Suzuki",
    "Honda",
    "Hyundai",
    "Kia",
    "Ford",
    "Chevrolet",
    "Nissan",
    "Mitsubishi",
    "Volkswagen",
    "Ferrari",
    "Lamborghini",
    "Porsche",
    "Maserati",
    "Bugatti",
    "Aston Martin",
    "Bentley",
    "Rolls Royce",
    "Jaguar",
    "Land Rover",
    "Jeep",
    "MacLaren",
    "Pagani",
    "Koenigsegg",
]
console.log(cars);

alert("Boshlanishdagi array uzunligi: "+cars.length);
let javob=confirm("Ichidan bitta element o'chirmoqchimiz: "+cars.length);
if(javob==true){
    cars.pop();
    console.log(cars);
    alert(" Array uzunligi: "+cars.length);
}else{
    alert("Array uzunligi: "+cars.length);
}
console.log(cars);
