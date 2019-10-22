function hideResults() {document.getElementById("results").style.display = "none";}
betsArray.push(bet)
function play() {
    var startingBet = document.getElementById("betInput").value;
    var bet = startingBet;
    var diceRoll = dice1 + dice2;
    var betsArray = [];}


    while (bet > 0) {
        if(diceRoll != 7) {
            bet -= 1}

            var dice1 = Math.floor(Math.random() * 6) + 1;
            var dice2 = Math.floor(Math.random() * 6) + 1;
            else {
            bet += 4
        }

    }

    var rollCounter = betsArray.length;
    var highestAmount = Math.max.apply(Math, betsArray);
    var highestPosition = betsArray.indexOf(highestAmount);
    var rollsFromHighest = rollCounter - highestPosition;

    function showResults() {
    document.getElementById("results").style.display = "inline";
    document.getElementById("playButton").innerHTML = "Play Again";
    document.getElementById("resultsBet").innerHTML = "$" + startingBet +".00";
    document.getElementById("resultsRollCounter").innerHTML = rollCounter;
    document.getElementById("resultsHighestHeld").innerHTML = "$" +     highestAmount + ".00";
    document.getElementById("resultsRollsFromHighest").innerHTML = rollsFromHighest;
    };

    showResults();}
