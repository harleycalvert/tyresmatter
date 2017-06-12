//this script calculates the inflation pressure

//used globally
var maxPressure = 0;
var customLoadPressure = 0;
var pressureUnit = "psi";

var boolean = false; //checks if images should be shown, hard reset may not clear variables

function initialTyrePressure() {
	//clear pressure change form
	document.getElementById("pressureChangeForm").reset();
	//clear pressure change data - if user already had data here incorrect results could be displayed
    document.querySelector('.displayPressureResult').innerHTML = "";
    //clear images also
    document.querySelector('.displayTyreImage1').innerHTML = "";
   	document.querySelector('.displayTyreImage2').innerHTML = "";

	var weightUnit = "kg";
	//these are all whole numbers
	var curbWeight = parseFloat(document.getElementById("curbWeight").value);
	//var maxweightUnit = parseFloat(document.getElementById("maxweightUnit").value);
	var load = parseFloat(document.getElementById("load").value);
	var maxLoad = parseFloat(document.getElementById("maxLoad").value);
	maxPressure = parseFloat(document.getElementById("maxPressure").value);
	
	if(load > maxLoad) {
		alert("Error: Cargo Weight Exceeds Maximum");

		document.querySelector('.initialPressureResult').innerHTML = "<h3>Inflation Pressure</h3>" +
	    "Warning: Cargo Weight Exceeds Maximum";

	    //clear pressure change data - previously if user already had data here incorrect results could be displayed
	    document.querySelector('.displayPressureResult').innerHTML = "";
	    //clear images also
	    document.querySelector('.displayTyreImage1').innerHTML = "";
	   	document.querySelector('.displayTyreImage2').innerHTML = "";

	    load = a;  //prevent computation
	    maxLoad = a; //prevent computation
	}

	if(document.getElementById('pounds').checked) {
			weightUnit = "lb";  //convert from kg to lb
	}

	if(document.getElementById('kPa_1').checked) {
			pressureUnit = "kPa";  //convert from kPa to PSI
	}
	else {
		pressureUnit = "psi";
	}


	//these are floats	
	var customMinPressure = (curbWeight/(curbWeight+maxLoad))*maxPressure;	
	customLoadPressure = ((curbWeight+load)/(curbWeight+maxLoad))*maxPressure;	

	var customMinKPA = customMinPressure;
    var customMinPSI = customMinPressure;
    var customLoadPSI = customLoadPressure;
    var customLoadKPA = customLoadPressure;
    var customMaxPSI = maxPressure;
    var customMaxKPA = maxPressure;
	
	if(pressureUnit == "kPa") {
        //convert from kPa to psi
        customMinPSI = customMinPressure * 0.145038;
        customLoadPSI = customLoadPressure * 0.145038;
        customMaxPSI = customMaxPSI * 0.145038;
    } else {
        //convert from psi to kPa
        customMinKPA = customMinPressure * 6.89476;
        customLoadKPA = customLoadPressure * 6.89476;
        customMaxKPA = customMaxKPA * 6.89476;
    }


	//display results on the results tab
    document.querySelector('.initialPressureResult').innerHTML = "<h3>Inflation Pressure</h3>" +
    "Maximum Cargo Weight: " + maxLoad + " " + weightUnit +
    "<br>Actual Cargo Weight: " + load + " " + weightUnit +
    "<br><br>Minimum Pressure: " + customMinPSI.toFixed(2) + " psi" + 
    " / " + customMinKPA.toFixed(2) + " kPa" + 
    "<br>Maximum Pressure: " + customMaxPSI.toFixed(2) + " psi" + 
    " / " + customMaxKPA.toFixed(2) + " kPa" + 
    "<br><br>Inflate To: " + customLoadPSI.toFixed(2) + " psi" + 
    " / " + customLoadKPA.toFixed(2) + " kPa" + 
    "<br><br>Note: This is the recommended cold inflation pressure";

    
	//insert calculated pressure value into text field on pressure change calculator
	//apply pressure unit to radio button
	if(pressureUnit == "psi") {
        document.getElementById("pressure").value = customLoadPSI.toFixed(2);
        pressure = customLoadPSI.toFixed(2);
        document.getElementById('psi_2').checked = true;
    } else {
        document.getElementById("pressure").value = customLoadKPA.toFixed(2);
        pressure = customLoadKPA.toFixed(2);
        document.getElementById('kPa_2').checked = true;
    }

	// Starting Pressure input on Pressure Change will be prefilled with calculated data, so we need to prevent user changes to it
	// Make Starting Pressure input on Pressure Change uneditable
	// Make the pressure unit radio buttons uneditable also
    document.getElementById("kPa_2").disabled = true;
	document.getElementById("psi_2").disabled = true;


	//disabling prevents CSS tooltips styling functioning, so we're preventing keydown and spinner interaction instead
 	document.getElementById('pressure').onkeydown = function(e) {
  		 if(!(e.keyCode == 9)) {
  		 	return false;
  		 }
	}
	//when pressure is prefilled the type is converted to text to prevent spinner interaction
 	document.getElementById('pressure').type = 'text';

	boolean = true; //checks if images should be shown, hard reset may not clear variables

}



function goToID_1(button) {	
	initialTyrePressure();
	window.location.hash = "#pressureChange";
}

function goToID_2() {	
	initialTyrePressure();
	window.location.hash = "#result";
}






