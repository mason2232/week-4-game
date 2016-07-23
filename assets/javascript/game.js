
var wins = 0;
var losses = 0;

var addition = 0;

var total = Math.floor((Math.random()* 100) + 19);

var pink = Math.floor((Math.random()* 12) + 1);
var blue = Math.floor((Math.random()* 12) + 1);
var yellow = Math.floor((Math.random()* 12) + 1);
var green = Math.floor((Math.random()* 12) + 1);

var updateAddition = function (){
	$('.addition').empty();
	$('.addition').append(addition);
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
}

var restart = function(){
	addition = 0;
    total = Math.floor((Math.random()* 100) + 19);

	$('.total').empty();
	$('.total').append(total);

	pink = Math.floor((Math.random()* 12) + 1);
    blue = Math.floor((Math.random()* 12) + 1);
    yellow = Math.floor((Math.random()* 12) + 1);
    green = Math.floor((Math.random()* 12) + 1);
    
    updateAddition();
}
var logic = function (){
	if (addition == total) {
		wins = wins + 1;
		
		
		restart();
	}else if(addition > total){
		lost= losses + 1;
		}else{
		updateAddition();
	}
}
$('.total').append(total);

$('.addition').append(addition);


$(document).ready(function(){
	$('#pink').click(function(){
		addition = addition + pink;
		logic();
	})
	$('#blue').click(function(){
		addition = addition + blue;
		logic();
	})
	$('#yellow').click(function(){
		addition = addition + yellow;
		logic();
	})
	$('#green').click(function(){
		addition = addition + green;
		logic();
	})
});







