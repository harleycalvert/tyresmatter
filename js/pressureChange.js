
var bestTotalPressure = 0;
var worstTotalPressure = 0;
var pressure = 0;
var pressureUnit = "psi";

function pressureChange() {
	//This section is for change due to time
	//Start of time section

	//this could be a user entered value or a calculated value that has been prefilled
	pressure = parseFloat(document.getElementById("pressure").value);
	var days = parseFloat(document.getElementById("days").value);
	var bestTimeChangePSI = 0;  //this is a %
	var worstTimeChangePSI = 0; //this is a %
	

	//Best Loss - 0.75%
	//Worst Loss - 3.125%
	bestTimeChangePercentage = (days * (0.75/30.4));  //30.4 days per month
	worstTimeChangePercentage = (days * (3.125/30.4));

	if(document.getElementById('kPa_2').checked) {
		pressureUnit = "kPa";  //change unit from psi to kPa
	} else {
		pressureUnit = "psi";  //change unit from kPa to psi
	}

	//alert("Pressure Loss Over Time\n\nBest Case Scenario: -" + bestTimeChangePercentage.toFixed(2) + "%" + "\nWorst Case Scenario: -" + worstTimeChangePercentage.toFixed(2) + "%");
	var timePressure = "<h3>Pressure Loss Over Time</h3>" + "Best Case Scenario: -" + bestTimeChangePercentage.toFixed(2) + "%" + "<br>Worst Case Scenario: -" + worstTimeChangePercentage.toFixed(2) + "%";

	//End of time section
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//This section is for change due to temperature
	//Start of temperature section
	var tempChangePercentage = 0;
	var tempPressure = " ";
	if(document.getElementById('includeTemperature').checked) {
		var celsius = parseFloat(document.getElementById("celsius").value);
		var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
		var startTemperature = parseFloat(document.getElementById("startTemperature").value);
		var endTemperature = parseFloat(document.getElementById("endTemperature").value);
		var tempChange = 0;
		
		var swap = 0;
		var tempChangePSI = 0;


		if(document.getElementById('celsius').checked) {
			//convert to kelvins
			//T(K) = T(°C) + 273.15
			startTemperature = startTemperature + 273.15;
			endTemperature = endTemperature + 273.15;
		} else {
			//fahrenheit checked
			//convert to kelvins
			//T(K) = (T(°F) + 459.67) × 5/9
			startTemperature = ((startTemperature  + 459.67) * (5/9));
			endTemperature = ((endTemperature  + 459.67) * (5/9));
		}

		

		if(startTemperature < endTemperature) {
			swap = startTemperature;
			startTemperature = endTemperature;
			endTemperature = swap;
		}

		tempChange = startTemperature - endTemperature;
		//(temp change)/(original temp) = % of change
		tempChangePercentage = (tempChange/startTemperature)*100;

		
		if(swap > 0) {
			//using kelvins
			//pressure increases
			tempChangePSI = ((1+tempChangePercentage)*pressure) - pressure;
			//alert("Pressure Change Due To Temperature:\n\n+" +  tempChangePercentage.toFixed(2) + "%");
			tempPressure = "<h3>Pressure Change Due To Temperature</h3>+" +  tempChangePercentage.toFixed(2) + "%";
			//alert(tempChangePercentage + "tempChangePercentage%");
		} else {
			//using kelvins
			//pressure decreases
			tempChangePSI = ((1-tempChangePercentage)*pressure) - pressure;
			//alert("Pressure Change Due To Temperature:\n\n-" +  tempChangePercentage.toFixed(2) + "%");
			tempPressure = "<h3>Pressure Change Due To Temperature</h3>-" +  tempChangePercentage.toFixed(2) + "%";
			tempChangePercentage = -tempChangePercentage;
			//alert(tempChangePercentage + "tempChangePercentage%");
		}

	}
	//End of temperature section
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//This section is for change due to altitude
	//This uses data from atmospheric pressure charts; there was no nice neat formula
	//Start of altiude section

	var altitudeChangePercentage = 0;
	var altitudePressure = " ";
	if(document.getElementById('includeAltitude').checked) {

		var startAltitude = parseFloat(document.getElementById("startAltitude").value);
		var endAltitude = parseFloat(document.getElementById("endAltitude").value);
		var startPSI = 0;
		var endPSI = 0;
		swap = 0;
		
		var changePSI = 0;
		var altitudeChangePSI = 0;

		if(document.getElementById('meters').checked) {
			//convert meters to feet
			startAltitude = startAltitude * 3.28084;
			endAltitude = endAltitude * 3.28084;
		}

		if(endAltitude < startAltitude) {
			swap = endAltitude;
			endAltitude = startAltitude;
			startAltitude = swap;
		}

		
		//increments in feet
		if(startAltitude > 25000) {
			startPSI = 5.45;
		} else if(startAltitude > 24000) {
			startPSI = 5.7;
		} else if(startAltitude > 23000) {
			startPSI = 5.95;
		} else if(startAltitude > 22000) {
			startPSI = 6.21;
		} else if(startAltitude > 21000) {
			startPSI = 6.47;
		} else if(startAltitude > 20000) {
			startPSI = 6.75;
		} else if(startAltitude > 19000) {
			startPSI = 7.04;
		} else if(startAltitude > 18000) {
			startPSI = 7.34;
		} else if(startAltitude > 17000) {
			startPSI = 7.65;
		} else if(startAltitude > 16000) {
			startPSI = 7.97;
		} else if(startAltitude > 15000) {
			startPSI = 8.29;
		} else if(startAltitude > 14000) {
			startPSI = 8.63;
		} else if(startAltitude > 13000) {
			startPSI = 8.99;
		} else if(startAltitude > 12000) {
			startPSI = 9.35;
		} else if(startAltitude > 11000) {
			startPSI = 9.72;
		} else if(startAltitude > 10000) {
			startPSI = 10.1;
		} else if(startAltitude > 9500) {
			startPSI = 10.3;
		} else if(startAltitude > 9000) {
			startPSI = 10.5;
		} else if(startAltitude > 8500) {
			startPSI = 10.7;
		} else if(startAltitude > 8000) {
			startPSI = 10.9;
		} else if(startAltitude > 7500) {
			startPSI = 11.1;
		} else if(startAltitude > 7000) {
			startPSI = 11.3;
		} else if(startAltitude > 6500) {
			startPSI = 11.5;
		} else if(startAltitude > 6000) {
			startPSI = 11.8;
		} else if(startAltitude > 5500) {
			startPSI = 12;
		} else if(startAltitude > 5000) {
			startPSI = 12.2;
		} else if(startAltitude > 4500) {
			startPSI = 12.4;
		} else if(startAltitude > 4000) {
			startPSI = 12.7;
		} else if(startAltitude > 3500) {
			startPSI = 12.9;
		} else if(startAltitude > 3000) {
			startPSI = 13.2;
		} else if(startAltitude > 2500) {
			startPSI = 13.4;
		} else if(startAltitude > 2000) {
			startPSI = 13.7;
		} else if(startAltitude > 1500) {
			startPSI = 13.9;
		} else if(startAltitude > 1000) {
			startPSI = 14.2;
		} else if(startAltitude > 500) {
			startPSI = 14.4;
		} else if(startAltitude > 0) {
			startPSI = 14.7;
		} else if(startAltitude > -500) {
			startPSI = 15;
		} else {
			startPSI = 15.2;
		}


		if(endAltitude > 25000) {
			endPSI = 5.45;
		} else if(endAltitude > 24000) {
			endPSI = 5.7;
		} else if(endAltitude > 23000) {
			endPSI = 5.95;
		} else if(endAltitude > 22000) {
			endPSI = 6.21;
		} else if(endAltitude > 21000) {
			endPSI = 6.47;
		} else if(endAltitude > 20000) {
			endPSI = 6.75;
		} else if(endAltitude > 19000) {
			endPSI = 7.04;
		} else if(endAltitude > 18000) {
			endPSI = 7.34;
		} else if(endAltitude > 17000) {
			endPSI = 7.65;
		} else if(endAltitude > 16000) {
			endPSI = 7.97;
		} else if(endAltitude > 15000) {
			endPSI = 8.29;
		} else if(endAltitude > 14000) {
			endPSI = 8.63;
		} else if(endAltitude > 13000) {
			endPSI = 8.99;
		} else if(endAltitude > 12000) {
			endPSI = 9.35;
		} else if(endAltitude > 11000) {
			endPSI = 9.72;
		} else if(endAltitude > 10000) {
			endPSI = 10.1;
		} else if(endAltitude > 9500) {
			endPSI = 10.3;
		} else if(endAltitude > 9000) {
			endPSI = 10.5;
		} else if(endAltitude > 8500) {
			endPSI = 10.7;
		} else if(endAltitude > 8000) {
			endPSI = 10.9;
		} else if(endAltitude > 7500) {
			endPSI = 11.1;
		} else if(endAltitude > 7000) {
			endPSI = 11.3;
		} else if(endAltitude > 6500) {
			endPSI = 11.5;
		} else if(endAltitude > 6000) {
			endPSI = 11.8;
		} else if(endAltitude > 5500) {
			endPSI = 12;
		} else if(endAltitude > 5000) {
			endPSI = 12.2;
		} else if(endAltitude > 4500) {
			endPSI = 12.4;
		} else if(endAltitude > 4000) {
			endPSI = 12.7;
		} else if(endAltitude > 3500) {
			endPSI = 12.9;
		} else if(endAltitude > 3000) {
			endPSI = 13.2;
		} else if(endAltitude > 2500) {
			endPSI = 13.4;
		} else if(endAltitude > 2000) {
			endPSI = 13.7;
		} else if(endAltitude > 1500) {
			endPSI = 13.9;
		} else if(endAltitude > 1000) {
			endPSI = 14.2;
		} else if(endAltitude > 500) {
			endPSI = 14.4;
		} else if(endAltitude > 0) {
			endPSI = 14.7;
		} else if(endAltitude > -500) {
			endPSI = 15;
		} else {
			endPSI = 15.2;
		}


		changePSI = startPSI - endPSI;
		altitudeChangePercentage = changePSI/(pressure/100);
		//alert("changePSI " + changePSI);
		//alert("changePercentage " + changePercentage);
		
		if(swap > 0) {
			//pressure decreases
			altitudeChangePSI = (pressure-changePSI) - pressure;
			//alert("Pressure Change Due To Altitude:\n\n-" + altitudeChangePercentage.toFixed(2) + "%");
			altitudePressure = "<h3>Pressure Change Due To Altitude</h3>-" + altitudeChangePercentage.toFixed(2) + "%";
			altitudeChangePercentage = -altitudeChangePercentage;
			//alert(altitudeChangePercentage + "altitudeChangePercentage%");
		} else {
			//pressure increases
			altitudeChangePSI = (pressure+changePSI) - pressure;
			//alert("Pressure Change Due To Altitude:\n\n+" + altitudeChangePercentage.toFixed(2) + "%");
			altitudePressure = "<h3>Pressure Change Due To Altitude</h3>+" + altitudeChangePercentage.toFixed(2) + "%";
			//alert(altitudeChangePercentage + "altitudeChangePercentage%");
		}
	}
	//End of altitude section
	//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Start of final output

	var bestTotalPercentage = (-bestTimeChangePercentage + altitudeChangePercentage + tempChangePercentage);
	var worstTotalPercentage = (-worstTimeChangePercentage + altitudeChangePercentage + tempChangePercentage);

	bestTotalPressure = (pressure*((100+bestTotalPercentage)/100));
	worstTotalPressure = (pressure*((100+worstTotalPercentage)/100));

	var bestTotalPSI = bestTotalPressure;
	var worstTotalPSI = worstTotalPressure;
	var bestTotalKPA = bestTotalPressure;
	var worstTotalKPA = worstTotalPressure;

	if(pressureUnit == "kPa") {
        //convert from kPa to psi
        bestTotalPSI = bestTotalPSI * 0.145038;
        worstTotalPSI = worstTotalPSI * 0.145038;
    } else {
        //convert from psi to kPa
        bestTotalKPA = bestTotalKPA * 6.89476;
        worstTotalKPA = worstTotalKPA * 6.89476;
    }


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	//Calculate Fuel Consumption change and emissions change
	var bestLossKpa = 0;
	//convert psi to kpa so we can calculate %fuel consumption and %emissions
	if(pressureUnit == "psi"){
		bestLossKpa = (pressure - bestTotalPressure) * 6.89476;
	} else {
		bestLossKpa = pressure - bestTotalPressure;
	}

	//Quadratic Fit:  y=a+bx+cx^2
	//Coefficient Data:
	// x = bestLossKpa, y = %fuel consumption and %emissions change
	var a =	-3.10371517028 * Math.pow(10,-2);
	var b =	-1.92389060888 * Math.pow(10,-2);
	var c =	1.19711042312 * Math.pow(10,-4);
	var bestLossFuel = a + (b * bestLossKpa) + (c * Math.pow(bestLossKpa,2));	
	bestLossFuel = - bestLossFuel;

	if(bestLossKpa == 0) {
		bestLossFuel = 0;
	}

	var worstLossKpa = 0;
	//convert psi to kpa so we can calculate %fuel consumption and %emissions
	if(pressureUnit == "psi") {
		worstLossKpa = (pressure - worstTotalPressure) * 6.89476;
	} else {
		worstLossKpa = pressure - worstTotalPressure;
	}

	//Quadratic Fit:  y=a+bx+cx^2
	//Coefficient Data:
	// x = worstLossKpa, y = %fuel consumption and %emissions change
	a =	 -1.17010342599 * Math.pow(10,-1);
	b =	 -8.40977698772 * Math.pow(10,-2);
	c =	 3.94877181642 * Math.pow(10,-4);
	var worstLossFuel = a + (b * worstLossKpa) + (c * Math.pow(worstLossKpa,2));
	worstLossFuel = - worstLossFuel;

	if(worstLossKpa == 0) {
		worstLossFuel = 0;
	}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

	var resultsTotal;
	var fuel;
	//this if else-if else is all just to show a "+"" sign when bestTotalPercentage and worstTotalPercentage are positive, negative sign displays anyway
	if(bestTotalPercentage > 0 && worstTotalPercentage < 0) {
		resultsTotal = "<h3>Total Pressure Change</h3>" + 
		"Borderline Case Scenario: +" + bestTotalPercentage.toFixed(2) + "% <br>Final Value: " + 
		bestTotalPSI.toFixed(2) + " psi / " + bestTotalKPA.toFixed(2) + " kPa<br>" + 
		"<br>Borderline Case Scenario: " + worstTotalPercentage.toFixed(2) + "% <br>Final Value: " + 
		worstTotalPSI.toFixed(2) + " psi / "  + worstTotalKPA.toFixed(2) + " kPa<br>" +
		"<br>Note: A change in cargo weight will affect tyre pressure"; 

		fuel = "<h3>Fuel Consumption and Emissions</h3>" + "Borderline Case Scenario: " + bestLossFuel.toFixed(2) + "% " + "<br>Borderline Case Scenario: +" + worstLossFuel.toFixed(2) + "%<br><br>";
	} else if(bestTotalPercentage > 0 && worstTotalPercentage > 0) {
		resultsTotal = "<h3>Total Pressure Change</h3>" + 
		"Best Case Scenario: +" + worstTotalPercentage.toFixed(2) + "%  <br>Final Value: " + 
		worstTotalPSI.toFixed(2) + " psi / " + worstTotalKPA.toFixed(2) + " kPa<br>" +
		"<br>Worst Case Scenario: +" + bestTotalPercentage.toFixed(2) + "% <br>Final Value: " + 
		bestTotalPSI.toFixed(2) + " psi / " + bestTotalKPA.toFixed(2) + " kPa<br>" +
		"<br>Note: A change in cargo weight will affect tyre pressure";

		fuel = "<h3>Fuel Consumption and Emissions</h3>" + "Best Case Scenario: " + worstLossFuel.toFixed(2) + "% " + "<br>Worst Case Scenario: " + bestLossFuel.toFixed(2) + "%<br><br>";
	} else {
		resultsTotal = "<h3>Total Pressure Change</h3>" + 
		"Best Case Scenario: " + bestTotalPercentage.toFixed(2) + "% <br>Final Value: " + 
		bestTotalPSI.toFixed(2) + " psi / " + bestTotalKPA.toFixed(2) + " kPa<br>" +
		"<br>Worst Case Scenario: " + worstTotalPercentage.toFixed(2) + "% <br>Final Value: " + 
		worstTotalPSI.toFixed(2) + " psi / " + worstTotalKPA.toFixed(2) + " kPa<br>" + 
		"<br>Note: A change in cargo weight will affect tyre pressure";
		
		fuel = "<h3>Fuel Consumption and Emissions</h3>" + "Best Case Scenario: +" + bestLossFuel.toFixed(2) + "% " + "<br>Worst Case Scenario: +" + worstLossFuel.toFixed(2) + "%<br><br>";
	}

	//call function to display images of under or over or correctly inflated tyres
	//checks if images should be shown, hard reset may not clear variables
	if(boolean == true) {
		underOver();
	}
	
	//display results on the results tab
	document.querySelector('.displayPressureResult').innerHTML = timePressure + tempPressure + altitudePressure + resultsTotal + fuel;

	//redirect to result tab
	window.location.hash = "#result"; 
}

