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

//findTheBanana(L1);
//findTheBanana(L2);

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

if (window.location.href.includes("index.html")) {
    greetingFunc();
}

function addYear(){
    let newYear = new Date().getFullYear();
    document.getElementById("copyYear").innerHTML += newYear;
}

//function showList(){
    //let list = document.getElementById("funList");
    //let button = document.getElementById("showButton");

    //list.style.display = "block";
    //button.style.display = "none";
//}

$(document).ready(function(){
    $("#readMore").click(function(){
        $("#introShort").hide();
        $("#readMore").hide();
        $("#introLong").show();
        $("#readLess").show();
    });

    $("#readLess").click(function(){
        $("#introLong").hide();
        $("#readLess").hide();
        $("#introShort").show();
        $("#readMore").show();
    });
});

document.addEventListener("DOMContentLoaded", function(){
    if (document.getElementById("contactForm")){
        document.getElementById("contactForm").addEventListener("submit", function(event){
            let isValid = true;
            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let comment = document.getElementById("comment").value;

            let nameError = document.getElementById("nameError");
            let emailError = document.getElementById("emailError");
            let commentError = document.getElementById("commentError");
    
            nameError.innerText="";
            emailError.innerText="";
            commentError.innerText="";

            if (!name.checkValidity()){
                nameError.innerText = "Please enter your name.";
                isValid = false;
            }

            else if (!email.checkValidity()){
                emailError.innerText = "Please enter a valid email address.";
                isValid = false;
            }

            else if (!comment.checkValidity()){
                commentError.innerText = "Please enter your comment.";
                isValid = false;
            }   

            if (!isValid){
                event.preventDefault();
            }
        });
    }
});

function getAdvice(){
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            document.getElementById("adviceText").innerText = data.slip.advice;
        })
        .catch(error => {
            document.getElementById("adviceText").innerText = "Sorry, something went wrong. Please try again later.";
            console.error('Error fetching advice:', error);
        });
}