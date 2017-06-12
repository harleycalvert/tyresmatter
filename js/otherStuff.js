//this function redirects from default site page index.html to index.html#introduction
//there is nothing exciting to see at index.html
//this function is called when page loads
function nav_hash() {
	if(!window.location.hash) //if the address does not contain a hash
    {
		window.location.hash = "#introduction"; //go to this nav section
	} 	

  // Listen for input event
  // Stop user entering stupid stuff
  document.getElementById('curbWeight').onkeydown = function(e) {
      if(!((e.keyCode > 95 && e.keyCode < 106)
        || (e.keyCode > 47 && e.keyCode < 58) 
        || e.keyCode == 8
        || e.keyCode == 9)) {
          return false;
      }
  }

  document.getElementById('load').onkeydown = function(e) {
      if(!((e.keyCode > 95 && e.keyCode < 106)
        || (e.keyCode > 47 && e.keyCode < 58) 
        || e.keyCode == 8
        || e.keyCode == 9)) {
          return false;
      }
  }

  document.getElementById('maxLoad').onkeydown = function(e) {
      if(!((e.keyCode > 95 && e.keyCode < 106)
        || (e.keyCode > 47 && e.keyCode < 58) 
        || e.keyCode == 8
        || e.keyCode == 9)) {
          return false;
      }
  }

  document.getElementById('maxPressure').onkeydown = function(e) {
      if(!((e.keyCode > 95 && e.keyCode < 106)
        || (e.keyCode > 47 && e.keyCode < 58) 
        || e.keyCode == 8
        || e.keyCode == 9)) {
          return false;
      }
  }

  document.getElementById('pressure').onkeydown = function(e) {
      if(!((e.keyCode > 95 && e.keyCode < 106)
        || (e.keyCode > 47 && e.keyCode < 58) 
        || e.keyCode == 8
        || e.keyCode == 9)) {
          return false;
      }
  }

  document.getElementById('days').onkeydown = function(e) {
      if(!((e.keyCode > 95 && e.keyCode < 106)
        || (e.keyCode > 47 && e.keyCode < 58) 
        || e.keyCode == 8
        || e.keyCode == 9)) {
          return false;
      }
  }

  document.getElementById('startTemperature').onkeydown = function(e) {
      if(!((e.keyCode > 95 && e.keyCode < 106)
        || (e.keyCode > 47 && e.keyCode < 58) 
        || e.keyCode == 8
        || e.keyCode == 9)) {
          return false;
      }
  }

  document.getElementById('endTemperature').onkeydown = function(e) {
      if(!((e.keyCode > 95 && e.keyCode < 106)
        || (e.keyCode > 47 && e.keyCode < 58) 
        || e.keyCode == 8
        || e.keyCode == 9)) {
          return false;
      }
  }

  document.getElementById('startAltitude').onkeydown = function(e) {
      if(!((e.keyCode > 95 && e.keyCode < 106)
        || (e.keyCode > 47 && e.keyCode < 58) 
        || e.keyCode == 8
        || e.keyCode == 9)) {
          return false;
      }
  }

  document.getElementById('endAltitude').onkeydown = function(e) {
      if(!((e.keyCode > 95 && e.keyCode < 106)
        || (e.keyCode > 47 && e.keyCode < 58) 
        || e.keyCode == 8
        || e.keyCode == 9)) {
          return false;
      }
  }

}

//reset the Pressure Change Calculator keeping calculated values received from Inflation Pressure Calculator
function reset() {	
  //if Starting Pressure has been calculated, clear everything else 
	if(maxPressure != "") {
		document.getElementById("pressure").value = pressure;
		document.getElementById("days").value = "";
		document.getElementById("startTemperature").value = "";
		document.getElementById("endTemperature").value = "";
		document.getElementById("startAltitude").value = "";
		document.getElementById("endAltitude").value = "";
		document.getElementById('includeTemperature').checked = false;
		document.getElementById('includeAltitude').checked = false;
	}
  //otherwise just reset the entire form
	else {
		document.getElementById("pressureChangeForm").reset();
		document.getElementById("kPa_2").disabled = false;
		document.getElementById("psi_2").disabled = false;
		document.getElementById("pressure").disabled = false;
	}
}

//reset the Pressure Change Calculator keeping calculated values received from Inflation Pressure Calculator
function hardReset() {	
	document.getElementById("initialPresureForm").reset();
	document.getElementById("pressureChangeForm").reset();
	document.getElementById("kPa_2").disabled = false;
	document.getElementById("psi_2").disabled = false;
	//document.getElementById("pressure").disabled = false;
	//clear any results
	document.querySelector('.initialPressureResult').innerHTML = ""
	document.querySelector('.displayPressureResult').innerHTML = "";
	//clear images also
	document.querySelector('.displayTyreImage1').innerHTML = "";
 	document.querySelector('.displayTyreImage2').innerHTML = "";
 	boolean = false; //checks if images should be shown, hard reset may not clear variables
  maxPressure = "";

	//when pressure is prefilled the type is converted to text to prevent spinner interaction
	document.getElementById('pressure').type = 'number';

	document.getElementById('pressure').onkeydown = function(event) {
		return true;
	}

}




