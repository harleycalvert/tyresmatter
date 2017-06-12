//this function displays the image suggesting whether tyres are under, over or correctly inflated
//it uses values from both calculators
function underOver() {  
   if(customLoadPressure > 0 && bestTotalPressure > 0) {
      //best is worst
		if(bestTotalPressure > maxPressure*1.05 && worstTotalPressure >= maxPressure) {
			//alert("OVER");
			document.querySelector('.displayTyreImage1').innerHTML = '<img src="images/OverInflated.png" alt="Over Inflated" title="Over Inflated"><br><br>';
			document.querySelector('.displayTyreImage2').innerHTML = '<img src="images/OverInflated.png" alt="Over Inflated" title="Over Inflated"><br><br>';
		} else if(bestTotalPressure > maxPressure && worstTotalPressure <= maxPressure) {
         //best is worst
			//alert("POSSIBLY OVER");
			document.querySelector('.displayTyreImage1').innerHTML = '<img src="images/ProperlyInflated.png" alt="Properly Inflated" title="Properly Inflated"><br><br>';
			document.querySelector('.displayTyreImage2').innerHTML = '<img src="images/ProperlyInflated.png" alt="Properly Inflated" title="Properly Inflated"><br><br>';
		} else if(bestTotalPressure <= customLoadPressure && worstTotalPressure < customLoadPressure*0.95) {
			//alert("UNDER");
			document.querySelector('.displayTyreImage1').innerHTML = '<img src="images/UnderInflated.png" alt="Under Inflated" title="Under Inflated"><br><br>';
			document.querySelector('.displayTyreImage2').innerHTML = '<img src="images/UnderInflated.png" alt="Under Inflated" title="Under Inflated"><br><br>';
		} else if(bestTotalPressure >= customLoadPressure && worstTotalPressure < customLoadPressure) {
			//alert("POSSIBLY UNDER");
			document.querySelector('.displayTyreImage1').innerHTML = '<img src="images/ProperlyInflated.png" alt="Properly Inflated" title="Properly Inflated"><br><br>';
			document.querySelector('.displayTyreImage2').innerHTML = '<img src="images/ProperlyInflated.png" alt="Properly Inflated" title="Properly Inflated"><br><br>';
		} else {
			//alert("CORRECT");
			document.querySelector('.displayTyreImage1').innerHTML = '<img src="images/ProperlyInflated.png" alt="Properly Inflated" title="Properly Inflated"><br><br>';
			document.querySelector('.displayTyreImage2').innerHTML = '<img src="images/ProperlyInflated.png" alt="Properly Inflated" title="Properly Inflated"><br><br>';
		}
   }
}


