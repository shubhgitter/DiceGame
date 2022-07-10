var randomNumber = Math.floor(Math.random() * 6)+1;  //givesa a random number between 1-6

var randomDiceImage = "Dice" + randomNumber + ".png"; // will give random dice from dice1-dice6

var randomImageSource = "images/" + randomDiceImage;// will give random dice image in form images/dice1-dic6.png

var image1 = document.querySelectorAll("img")[0];   // to get random no. of iamge

image1.setAttribute("src", randomImageSource);   //now setting src of image1 to  various dice's src 

var randomNumber2 = Math.floor(Math.random()*6) + 1;   // gives a random number of dice from dice1 -  dice6 for image2(player2)

var randomImageSource2 = "images/Dice" + randomNumber2 + ".png"; // will give randomImageSource in the form images/Dice(randomImage(1-6)).png

document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);// now this line will give src for random numbers by using setAttribute


// to show if player1 wins and change the prompt from refresh me to Player1 wins
if (randomNumber > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player1 wins!🚩";
}

else if(randomNumber < randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player2 wins!🚩";
}

else{
    document.querySelector("h1").innerHTML = "📍That's a Draw between Player1 and Player 2!📍"
}