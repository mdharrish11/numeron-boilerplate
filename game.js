// Iteration 2: Generate 2 random number and display it on the screen

var n1 = document.getElementById("number1")
var n2 = document.getElementById("number2")
var time = 5
let score = 0


function generate(){
let num1 = Math.round((Math.random()*100))
let num2 = Math.round((Math.random()*100))
n1.innerHTML = num1
n2.innerHTML = num2

}
generate()
// Iteration 3: Make the options button functional
var greaterthan = document.getElementById("greater-than")
var equalto = document.getElementById("equal-to")
var lesserthan = document.getElementById("lesser-than")

greaterthan.onclick = () =>{
     if(n1.innerHTML > n2.innerHTML){
        score++
        generate()
        time = 5 
     }
     else{
        gameover()
     }

}

lesserthan.onclick = () =>{
    if(n1.innerHTML < n2.innerHTML){
       score++
       generate()
       time = 5
    }
    else{
        gameover()
    }

}
   equalto.onclick = () =>{
    if(n1.innerHTML === n2.innerHTML){
        score++
        generate()
        time = 5
    }
    else{
            gameover()
    }

}



let intervalid = setInterval(function() {
document.getElementById("timer").innerText = time
time--
if (time<= 0){

    gameover()
} }, 1000); 



function gameover(){
clearInterval(intervalid)
localStorage.setItem("score", score)
location.href = "gameover.html"
}





