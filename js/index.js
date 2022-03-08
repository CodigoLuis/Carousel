 const boxLeft = document.getElementById("layer1");
 const boxRight = document.getElementById("layer2");
 
 const boxOne = document.getElementById("boxOne");
 const boxTwo = document.getElementById("boxTwo");
 const boxThree = document.getElementById("boxThree");
 const boxFour = document.getElementById("boxFour");
 const boxFive = document.getElementById("boxFive");
 
 const signalOne = document.getElementById("signalOne");
 const signalTwo = document.getElementById("signalTwo");
 const signalThree = document.getElementById("signalThree");
 const signalFour = document.getElementById("signalFour");
 const signalFive = document.getElementById("signalFive");
 
 let brand = 0;

 const elementOne = ["boxOne","boxTwo","boxThree","boxFour","boxFive"];
 const elementTwo = ["signalOne","signalTwo"];

const numerator = (e) => {

	if (e.target.id == boxLeft.id) {

		
		brand = parseInt(brand) + parseInt(1);
	}

	if (e.target.id == boxRight.id) {

		
		brand = parseInt(brand) - parseInt(1);
	}


	if (brand < 0 || brand > 4) {
		
		if (brand < 0) {
			
			
			brand = 4;
		} else {

			
			brand = 0;
		}

	} 
}

const positions = () => {

	if (brand == 1) {
		boxOne.className = elementOne[brand];
		boxTwo.className = elementOne[2];		 
		boxThree.className = elementOne[3];		 
		boxFour.className = elementOne[4];		 
		boxFive.className = elementOne[0];		 

		signalOne.className = elementTwo[1];
		signalTwo.className = elementTwo[0];		 
		signalThree.className = elementTwo[1];		 
		signalFour.className = elementTwo[1];		 
		signalFive.className = elementTwo[1];		 

	}

	if (brand == 2) {
		boxOne.className = elementOne[brand];
		boxTwo.className = elementOne[3];		 
		boxThree.className = elementOne[4];		 
		boxFour.className = elementOne[0];		 
		boxFive.className = elementOne[1];

		signalOne.className = elementTwo[1];
		signalTwo.className = elementTwo[1];		 
		signalThree.className = elementTwo[0];		 
		signalFour.className = elementTwo[1];		 
		signalFive.className = elementTwo[1];
	}

	if (brand == 3) {
		boxOne.className = elementOne[brand];
		boxTwo.className = elementOne[4];		 
		boxThree.className = elementOne[0];		 
		boxFour.className = elementOne[1];		 
		boxFive.className = elementOne[2];

		signalOne.className = elementTwo[1];
		signalTwo.className = elementTwo[1];		 
		signalThree.className = elementTwo[1];		 
		signalFour.className = elementTwo[0];		 
		signalFive.className = elementTwo[1];
	}

	if (brand == 4) {
		boxOne.className = elementOne[brand];
		boxTwo.className = elementOne[0];		 
		boxThree.className = elementOne[1];		 
		boxFour.className = elementOne[2];		 
		boxFive.className = elementOne[3];

		signalOne.className = elementTwo[1];
		signalTwo.className = elementTwo[1];		 
		signalThree.className = elementTwo[1];		 
		signalFour.className = elementTwo[1];		 
		signalFive.className = elementTwo[0];
	}
	
	if (brand == 0) {
		boxOne.className = elementOne[brand];
		boxTwo.className = elementOne[1];		 
		boxThree.className = elementOne[2];		 
		boxFour.className = elementOne[3];		 
		boxFive.className = elementOne[4];

		signalOne.className = elementTwo[0];
		signalTwo.className = elementTwo[1];		 
		signalThree.className = elementTwo[1];		 
		signalFour.className = elementTwo[1];		 
		signalFive.className = elementTwo[1];
	}
 
}



 const f1 = async (e) => {

	 await numerator(e);

	 positions();
 }

 const f2 = async (e) => {

 	await numerator(e);

	positions();
 }


 boxLeft.addEventListener("click", f1);
 boxRight.addEventListener("click", f2);


