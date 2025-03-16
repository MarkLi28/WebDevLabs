let x = 5;
let y = 7
let z = x + y;
console.log(z);

let A = "Hello ";
let B = "world!";
let C = A + B;
console.log(C);

function SumNPrint(x1, x2){
    let x3 = x1 + x2;
    console.log(x3);
}

SumNPrint(x, y);
SumNPrint(A, B);

if (C > z){console.log(C);}
else if (C < z){console.log(z);}
else {console.log("good job!");}

let L1 = ["Watermelon", "Pineapple", "Pear", "Banana"];
let L2 = ["Apple", "Banana", "Kiwi", "Orange"];

function findTheBanana(L){
    L.forEach(item => {
        if (item === "Banana"){
            alert("found the banana");
        }
    });
}

findTheBanana(L1);
findTheBanana(L2);

function greetingFunc(){
    let d = new Date();
    let h = d.getHours();
    let Element = document.getElementById("greeting");
    if (h < 5){
        Element.innerHTML = "Good night!";
    } else if (h < 12){
        Element.innerHTML = "Good morning!";
    } else if (h < 18){
        Element.innerHTML = "Good afternoon!";
    } else if (h < 20){
        Element.innerHTML = "Good evening!";
    } else {
        Element.innerHTML = "Good night!";
    }
}

greetingFunc();



