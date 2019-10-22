//Name:Tom Carlson
//DateCreated: 10/18/19
//Most Recent Revision: Error Message

function rollDice() {
	return Math.floor(Math.random() * 6) + 1;
}

function play(){
	var startingBet = Number(document.forms["luckySevens"]["bet"].value);
	var money = startingBet;
	var totalRolls = 0;
	var highAmount = 0;
	var rollCount = 0;
	var die1;
	var die2;
	var diceSum;

	if(money<=0){
		alert("Error Message: Please make a bet greater than $0");
	}
	else{
		while(money > 0){
			die1 = rollDice();
			die2 = rollDice();
			diceSum = die1 + die2;
			totalRolls++;
			if(diceSum != 7){money--; console.log("lose");
			}
			else{money += 4;
				if(money > highAmount){
					highAmount += (money-highAmount);
					rollCount = totalRolls;
				}
				console.log("win");
			}
		}
	}
	document.getElementById("results").style.display = "table";
	document.getElementById("start").innerText = startingBet;
	document.getElementById("rollsNum").innerText = totalRolls;
	document.getElementById("max").innerText = highAmount;
	document.getElementById("rollsAtMax").innerText = rollCount;
	document.getElementById("submitButton").innerText = "Play Again?";
	return false;
}
