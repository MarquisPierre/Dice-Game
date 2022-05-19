
let randomNum1 = Math.floor(Math.random() * 6) + 1
let randomNum2 = Math.floor(Math.random() * 6) + 1


let randomImagesSource ="images/dice" + randomNum1+ ".png"
let randomImagesSource2= "images/dice" + randomNum2+".png"


let image1 = document.querySelectorAll("img")[0]
let image2 = document.querySelectorAll("img")[1]

image1.setAttribute("src" , randomImagesSource)
image2.setAttribute("src" , randomImagesSource2)



if(randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!!☝"
}
else if(randomNum2 > randomNum1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!!✌"
}
else if(randomNum1 == randomNum2){
    document.querySelector("h1").innerHTML = "It's a tie!!😳"
}





