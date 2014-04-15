
// Rewrite the pluralize function using the ternary operator:
// var pluralize = function (word, number) {
//  if(number === 1) {
//   return word;
//  }
//  else {
//   return word + "s";
//  }
// };

var pluralize = function(word, number){
	return number === 1 ? word : word + 's';
};




// Rewrite the following code to be more functional:

// var victim = {};

// var getVictimInfo = function() {
//  victim.name = prompt("Please enter your name:");
//  victim.phone = prompt("Please enter your phone number:");
//  victim.street = prompt("Please enter your street:");
// };

// getVictimInfo();

// alert('Thank you! Victim entered: \n' +
//  victim.name + ", " +
//  victim.phone + ", " +
//  victim.street);


var personCreator = function(){
	
	var objName = {};
	objName.name = prompt("Please enter your name: ");
	objName.phone = prompt("Please enter your phone number: ");
	objName.street = prompt("Please enter your street: ");

	return objName;
};

var victim = personCreator();

alert('Thank you! Victim entered: \n' + 
	victim.name + ", " + 
	victim.phone + ", " + 
	victim.street);