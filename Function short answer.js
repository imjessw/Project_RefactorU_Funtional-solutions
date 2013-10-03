// 	Example
var pluralize = function(word, number){
	if (number===1) {
		return word;
	}
	else { return word +"s";
}
};


// my code

var pluralize = function(word, number){
	return (number=== 1) ? word : word +"s";
	
}

// number 2
// example provided
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

// }


// my code
var getVictimInfo = function() {
 var inputName = prompt("Please enter your name:");
 var inputPhone = prompt("Please enter your phone number:");
 var inputStreet = prompt("Please enter your street:");
 var victim = {
 	name: inputName,
 	phone: inputPhone,
 	street: inputStreet,
 };
 	return victim

 };

var result= getVictimInfo();

alert('Thank you! Victim entered: \n' + 
 result.name + ", " + 
 result.phone + ", " + 
 result.street);





