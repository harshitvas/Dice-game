function playGame(){
    var random1 = Math.random() * 10;
    random1 = Math.floor(random1) % 6 + 1;
    console.log(random1);

    var random2 = Math.random() * 10;
    random2 = Math.floor(random2) % 6 + 1;
    console.log(random2);

    var img1 = document.getElementById("diceOne").setAttribute("src", `images/dice${random1}.png`);

    var img2 = document.getElementById("diceTwo").setAttribute("src", `images/dice${random2}.png`);

    var heading = document.getElementsByClassName("title")[0];
    if(random1 > random2){
        heading.textContent = "Player 1 Win 🚩";
    }

    else if(random1 < random2){
        heading.textContent = "Player 2 Win 🚩";
    }

    else{
        heading.textContent = "Draw 🏳️";
    }
}