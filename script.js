var sum = 0;
var displayText = "";
var ops = "+*-/",
			valids = "0123456789.";
var ops_delims = /\*|\+|-|\//,
		num_delims = /1|2|3|4|5|6|7|8|9|0|\./;
var colors = ['#ffd1dc', '#ff6961', '#f49ac2', '#779ecb', '#fdfd96', '#ffb347', '#cb99c9', '#77dd77'];

var color2 = colors[Math.floor(Math.random()*colors.length)];
var color1 = colors[Math.floor(Math.random()*colors.length)];
while(color2 == color1) color2 = colors[Math.floor(Math.random()*colors.length)];

$("#board").css("background-color",color1);
$("body").css("background-color",color1);
$("button").css("background-color",color2);

function calculate(displayText){
	var numbers_arr = displayText.split(ops_delims);
	console.log(numbers_arr[0].length);
	//console.log(displayText.charAt(numbers_arr[0].length));
	var operator = displayText.charAt(numbers_arr[0].length);
	console.log(numbers_arr);
	console.log(operator);
	if(operator == "+")
		sum = parseInt(numbers_arr[0]) + parseInt(numbers_arr[1]);
	else if(operator == "-")
		sum = parseInt(numbers_arr[0]) - parseInt(numbers_arr[1]);
	else if(operator == "*")
		sum = parseInt(numbers_arr[0]) * parseInt(numbers_arr[1]);
	else
		sum = parseInt(numbers_arr[0]) / parseInt(numbers_arr[1]);
	
	return sum.toString();
}//end of calculate function

$("button").click(function(index) {
		var text = $(this).text();

		if(text == "CLEAR"){
			displayText = "";
		}//end of if clear
		else if(text == "DEL"){
			displayText = displayText.substr(0,displayText.length-1);
		}
		else if(text == "=" && displayText != ""){
			displayText = calculate(displayText);
		}

		else if(ops.indexOf(text) > -1 && (displayText == "" || ops.indexOf(displayText.charAt(displayText.length -1)) > -1 )){
			console.log("lol");
		}//the else

/*
		else if(ops.indexOf(text) > -1 && displayText != "" && displayText.split(ops_delims).length >= 2){
			console.log("hi");
			displayText = calculate(displayText);	
		}
*/

		else{
			displayText = displayText + $(this).text();
		}


		if(displayText == "") $("#result").text("0");
		else $("#result").text(displayText);
});

