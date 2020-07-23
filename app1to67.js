


 //  ASSIGNMENT 5  CHAPTER 1 to 20




/*CHAPTER 1*/


/*Q1
alert("Welcome to me page");*/

/*Q2
alert("Error! Please enter a valid password");*/

/*Q3
alert("Welcome to JS Land \nHappy Coding");*/

/*Q4
alert("Error! Please enter a valid password");
alert("Welcome to JS Land \nHappy Coding");*/


/*Q5 
alert("Hello! I can run JS through web browser's console");*/


/*Q6 # used this welcome alert in my website (in assignment 4)*/
/*<script>alert ("Welcome to Install Everything!"); </script>*/


/*Q7*/
/*used in this html*/


/*CHAPTER 2*/

/*Q1
var username;*/


/*Q2
var myName = "Hassan Ahmed";*/


/*Q3
var message = "Hello World"
alert(message);*/


/*Q4
var student = ["Jhone Doe", "15 years old", "Certified Mobile Applicatoin Development"];
for (i = 0; i < student.length; i++) { 
  alert(student[i]);
}*/


/*Q5
var arrayOfArrays = "PIZZA";
var a = arrayOfArrays.slice(0,5)

for (var i = 6; i > 1; i--){
		document.write(arrayOfArrays.slice(0,i-1));
		document.write("<br>")
}*/


/*Q6
var email = "example@example.com";
alert("My email address is " + email);*/


/*Q7
var book = "A smarter way to learn JavaScript";
alert("I am trying to learn from the Book " + book);*/


/*Q8
document.write("I can write HTML content through JavaScript");*/


/*Q9
alert('“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”');
document.write('“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”');*/


/*CHAPTER 3*/

/*Q1
var age = 15;
alert("I am " + age + " years old")*/


/*Q2*/
/*Skipped as discuessed in Live Sessoin.*/


/*Q3
var birthYear = 1994;
document.write("My birth year is " + birthYear + "<br>Data type of my decleared variable is number");*/


/*Q4
var visitorName = "John Doe";
var productTitle = "T-Shirt";
var quantity = 5;
document.write( "<b>"+visitorName+"</b>" + " ordered " + "<b>" + quantity + " " + productTitle + "</b>" + " on XYZ Clothing Store.")*/




/*CHAPTER 4*/

/*Q1
var [a,b,c] = [0,1,2];
document.write(a,b,c);*/


/*Q2*/
/*var 1 = "illegal";
var 1a = "illegal";
var h a = "illegal";
var var = "illegal"
var ?a = "illegal";*/


/*var a = "legal";
var a1 = "legal";
var a_1 = "legal";
var VAR = "legal";
var $a = "legal"*/


/*Q3
document.write("<h3>Rules for naming JS variables</h3>");

var [a,b,c] = ["numbers", "$", "_"]
document.write("Variable names can only contain, " + a + ", " + b + " and " + c + " . For example : $my_1stVariable <br>" );

var [a,b,c] = ["letter", "$", "_"]
document.write("Variable names can only contain, " + a + ", " + b + " or " + c + " . For example : $name, _name or name <br>" );

var case_sensitive = "sensitive";
document.write("Variable names are case " + case_sensitive + "<br>" );

var keyword = "keywords";
document.write("Variable names should not be JS " + keyword  );*/



/*CHAPTER 5*/


/*Q1
var a = prompt("Enter 1st number:");
var c = parseInt(a);
var b = prompt("Enter 2nd number:");
var d= parseInt(b);
var result = c + d;
document.write("Sum of " + c + " and " + d + " is " + result + "<br>")*/


/*Q2
var a = prompt("Enter 1st number:");
var c = parseInt(a);
var b = prompt("Enter 2nd number:");
var d = parseInt(b);
var result = c - d;
document.write("Subtraction of " + c + " and " + d + " is " + result + "<br>")


var a = prompt("Enter 1st number:");
var c = parseInt(a);
var b = prompt("Enter 2nd number:");
var d = parseInt(b);
var result = c * d;
document.write("Multiplication of " + c + " and " + d + " is " + result + "<br>")


var a = prompt("Enter 1st number:");
var c = parseInt(a);
var b = prompt("Enter 2nd number:");
var d = parseInt(b);
var result = c / d;
document.write("Division of " + c + " and " + d + " is " + result + "<br>")


var a = prompt("Enter 1st number:");
var c = parseInt(a);
var b = prompt("Enter 2nd number:");
var d = parseInt(b);
var result = c % d;
document.write("Modulus of " + c + " and " + d + " is " + result + "<br>")*/



/*Q4
var ticket = 600;
document.write("Total cost to buy 5 tickets to a movie is " + ticket*5 + "PKR");*/



/*Q5
document.write("Table of 4<br>")

for (var i = 1; i <= 10; i++){
		document.write(4 + " x " + i + " = " + 4*i + "<br>");
}*/



/*Q7
var item1 = parseInt(prompt("Price of item 1:"));
var item2 = parseInt(prompt("Price of item 2:"));
var quantity1 = parseInt(prompt("Ordered quantity of item 1:"));
var quantity2 = parseInt(prompt("Ordered quantity of item 2:"));
var charges = parseInt(prompt("Shipping charges:"));

document.write("<h2> Shopping Cart</h2>");
document.write("Price of item 1 is " + item1 + "<br>");
document.write("Quantity of item 1 is " + quantity1 + "<br>");
document.write("Price of item 2 is " + item2 + "<br>");
document.write("Quantity of item 1 is " + quantity2 + "<br>");
document.write("Shipping Charges: " + charges + "<br><br>");

var item1total = item1*quantity1; 
var item2total = item2*quantity2; 

var total = ((+item1total) + (+item2total) + (+charges));
document.write("Total cost of your order is " + total);
*/



/*Q8
var totalMarks = parseInt(prompt("Enter your total marks!!"));
var marksObtained = parseInt(prompt("Enter your obtained marks!!"));

document.write("<h3>Marks Sheet</h3> <br>");
document.write("Total marks : "+ totalMarks +" <br>");
document.write("Marks obtained : " + marksObtained + "<br>");

var percent = marksObtained/totalMarks * 100;
document.write("Percentage : " + percent +"%<br>");
*/



/*Q9
var dollar = 10;
var riyal = 25;

var total = ((dollar*104.80) + (riyal*28))

document.write("<h2> Currency in PKR</h2>");
document.write("Total Currency in PKR: " + total);
*/


/*Q10
var num1 = 10;
var addFive = 5;

var final = (((+num1)+(+addFive)) * 10 ) / 2;
document.write("The final answer is: " + final)
*/


/*Q11
var year = 2016;
var birth = 1992;
var age = year - birth;

document.write("<h2>Age Calculator </h2>");
document.write("Current year is: " + year + "<br>");
document.write("Birth year: " + birth + " <br> ");

var possible = age+1;
document.write("Your age is: " + age + " or " + possible);
*/



/*Q12
var r = 20;

var cir = 2 * 3.142 * r;
var area = 3.142 * (r*r);

document.write("<h2>The Geomertrizer </h2>");
document.write("Radius of a circle: " + r + " <br>");
document.write("The circumference is: " + cir + " <br>");
document.write("The area is: " + area + " <br>");
*/







/*CHAPTER 6 to 9*/



/*Q1 INCOMPLETE

var a = prompt("Enter a number!")

document.write("Result: " )
document.write("<br>The Value of a is : ", a)    

++a;
document.write("<br><br>The Value of ++a is : ", a)
document.write("<br>Now the Value of a is : ", a)

a++;
document.write("<br><br>The Value of a++ is : ", a)
document.write("<br>Now the Value of a is : ", a)
*/



/*Q2
var a = 2, b = 1;
document.write("Intial value of a is " +a+ " and Intial value of b is "+b)

var result = --a - --b + ++b + b--;

document.write("<br>--a; =>  1")
document.write("<br>--a - --b; => 1")
document.write("<br>--a - --b + ++b; => 2 ")
document.write("<br>--a - --b + ++b + b++; => 3 <br>")
document.write("Result : ", result)*/


/*Q3
var username = prompt("Please Enter your name!!");
alert("Welcome to my page " + username);
document.write("Welcome to my page " + username);*/


/*Q4
No Question at 4*/


/*Q5
var tableNumber = prompt("Enter a number: ");
var table = parseInt(tableNumber);

if ( tableNumber === ""){
	for (var i = 1; i <= 10; i++){
		document.write(5 + " x " + i + " = " + 5*i + "<br>");
	}	
}

else{
	for (var i = 1; i <= 10; i++){
		document.write(table + " x " + i + " = " + table*i + "<br>");
	}
}*/



/*Q6
var English = prompt("Enter 1st subject name!!");
var Urdu = prompt("Enter 2nd subject name!!");
var Maths = prompt("Enter 3rd subject name!!");

var total = 100;

var EnglishMarks = parseInt(prompt("Enter your english marks!!"));
var UrduMarks = parseInt(prompt("Enter your urdu marks!!"));
var MathsMarks = parseInt(prompt("Enter your math marks!!"));

var engpercent = EnglishMarks/100 * 100;
var urdupercent = EnglishMarks/100 * 100;
var mathpercent = EnglishMarks/100 * 100;

document.write("<b>Subject  Total Marks  Obtained Marks  Percentage</b> <br>");
document.write(English+ " 100  " + EnglishMarks + " " + engpercent + "% <br>");
document.write(Urdu+ " 100  " + UrduMarks + " " + urdupercent + "% <br>");
document.write(English+ " 100  " + EnglishMarks + " " + mathpercent + "% <br>");

var sum = EnglishMarks += UrduMarks += MathsMarks;
var percent = sum/300 * 100;

document.write("<b> 300  " + sum + " " + percent + "% </b><br>");
*/



/*CHAPTER 9 to 11*/


/*Q1
var cityName = prompt("Enter your city name!!");
var city = cityName.toLowerCase()

if (city === "karachi"){
	document.write("Welcome to the city of lights");
}
else{
	document.write("Welcome to other city.")
}*/


/*Q2
var gen = prompt("Enter your gender!!");
var gender = gen.toLowerCase()

if (gender === "male"){
	document.write("Good morning Sir.");
}
else if (gender === "female"){
	document.write("Good morning Maam.");
}*/


/*Q3
var color = prompt("Enter your signal color!!");
var colorLower = color.toLowerCase()

if (colorLower === "red"){
	document.write("Must Stop.");
}
else if (colorLower === "yellow"){
	document.write("Ready to move.");
}
else if (colorLower === "green"){
	document.write("Move now.");
}*/



/*Q4
var fuel = prompt("Please share the remaining fuel status!!");
var status = parseFloat(fuel);

if (status <= 0.25){
	document.write("Please refill the fuel in your car.");
}
else{
	document.write("You are fine please drive.")
}
*/


/*Q5
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
document.write("Displayed")
}


var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
document.write("Not Displayed");


var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
document.write("2 and 4 is true");


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
document.write("Displayed because of concatenation operator");


if (true){
alert("True");
}
if (false){
alert("False");
}
document.write("Displayed true");


if("car" < "cat"){
alert("car is smaller than cat");
}
document.write("Displayed car is smaller");
*/


/*Q6
var English = parseInt(prompt("Enter your english marks!!"));
var Urdu = parseInt(prompt("Enter your urdu marks!!"));
var Maths = parseInt(prompt("Enter your math marks!!"));

var total = (English += Urdu += Maths)
var percent = total/300 * 100;

document.write("<h3>Marks Sheet</h3> <br>");
document.write("Total marks : 300 <br>");
document.write("Marks obtained : " + total + "<br>");
document.write("Percentage : " + percent+"%<br>");

if (percent >= 80){
	document.write("Grade : A-one <br>");
	document.write("Remarks : Excellent");
}
else if (percent >= 70){
	document.write("Grade : A <br>");
	document.write("Remarks : Good");
}
else if (percent >= 60){
	document.write("Grade : B <br>");
	document.write("Remarks : You need to improve");
}
else if (percent < 60){
	document.write("Grade : Fail <br>");
	document.write("Remarks : Sorry");
}*/



/*Q7
var number = Math.floor(Math.random() * 10) + 1;
alert(number);
var closeEnough = number - 1;

var userGuess = prompt("Please enter a number from 1 to 10");
var guess = parseInt(userGuess);

if(guess === number){
	alert("Bingo! Correct answer")
}
else if ( guess === closeEnough){
	alert("Close enough to the correct answer");
}
else{
	alert("Better Luck next time");
}*/



/*Q8
var three = prompt("Enter a number!");
var threeNumber = parseInt(three);


if(threeNumber % 3 === 0){
	alert("Number is divided by Three!");
}
else{
	alert("Number is not divided by 3");
}
*/



/*Q9
var evenOdd = prompt("Enter a number and this program will tell you the number is even or odd!");
var evenOddNumber = parseInt(evenOdd);


if(evenOddNumber % 2 === 0){
	alert("Number is Even!");
}
else{
	alert("Number is Odd!");
}*/



/*Q10
var temp = prompt("Enter temperature :");

if (temp > 40){
	document.write("It is too hot outside.");
}
else if (temp > 30){
	document.write("The Weather today is Normal");
}
else if (temp > 20){
	document.write("Todays Weather is cool.");
}
else if (temp > 10){
	document.write("“OMG! Today’s weather is so Cool.");
}
else if (temp <= 10){
	document.write("Freezing Weather");
}*/



/*Q11

var val1 = prompt("Enter your 1st value: ");
var val2 = prompt("Enter your 2nd value: ");
var sign = prompt("Enter operator: ");

if (sign === '+'){
	alert((+val1)+(+val2));
}
else if (sign === '-'){
	alert(val1-val2);
}
else if (sign === '*'){
	alert(val1*val2);
}
else if (sign === '/'){
	alert(val1/val2);
}
else if (sign === '%'){
	alert(val1/val2*100);
}*/




/*CHAPTER 12 to 13*/



/*Q1
var a = prompt("Enter alphabet ASCII number:");

if (a >= 65 && a <= 90){
	document.write("Its Uppercase Letter.")
}
else if(a >= 97 && a <= 122){
	document.write("Its Lowercase Letter.")
}*/



/*Q2
var num1 = prompt("Please enter 1st number!");
var num2 = prompt("Please enter 2nd number!");

var number1 = parseInt(num1);
var number2 = parseInt(num2);

if(number1 > number2){
	alert("1st Number is larger: " + number1);
}
else if(number2 > number1){
	alert("2nd Number is larger: " + number2);
}
else if(number1 === number2){
	alert("Both numbers are same!");
}*/


/*Q3
var numOne = prompt("Please enter a number!");
var One = parseInt(numOne);

if(One > 0){
	alert("Number is positive: " + One);
}
else if(One < 0){
	alert("Number is Negitive: " + One);
}
else if(One === 0){
	alert("Number is Zero!");
}
*/


/*Q4
var str = prompt("Please enter a letter and this program will tell you, its vowel or not!");
var res = str.toLowerCase();

if (res.length > 1){
	alert("Please enter only one letter!")
}

else{
	if(res === 'a' || res === 'e' || res === 'i' || res === 'o' || res === 'u'){
		alert("This is a vowel: " + res);
	}
	else{
		alert("This is not a vowel: ", + res)
	}
}*/


/*Q5
var passOne = prompt("Please enter your password!");
var passTwo = prompt("Please re-enter your password!");

var correctPass = "Password";

if (passOne === "" || passTwo === ""){
	alert("Please enter password in both fields!");
}
else{
	if (passOne == correctPass && passTwo == correctPass) {
		alert("Correct! The password you entered matches the original password")
	}
	else{
		alert("Incorrect password");
	}
}
*/


/*Q6
var greeting;
var hour = 13;

if (hour < 18) {
greeting = "Good day";
alert(greeting)
}
else{
greeting = "Good evening";
alert(greeting);
}
*/


/*Q7
var time = prompt("Enter clock time in this format like: 1900");

if( time >= 0000 && time < 1200){
	document.write("Good Morning");
}
else if (time >= 1200 && time < 1700){
	document.write("Good Afternoon");
}
else if (time >= 1700 && time < 2100){
	document.write("Good Evening");
}
else if (time >= 2100 && time <= 2359){
	document.write("Good Night");
}*/



/*CHAPTER 14 to 16*/


/*Q1
var students = [];*/


/*Q2
var students = { "":"", "":, "":"" };
*/


/*Q3
Declare and initialize a strings array
var array = ["hassan", "ahmed", "khan"];*/


/*Q4
Declare and initialize a numbers array
var array = [1,2,3,4,5];*/


/*Q5
Declare and initialize a boolean array
var boolArray = [true,false];*/


/*Q6
Declare and initialize a mixed array
var array = [1, "hassan", 2, "ahmed"];*/


/*Q7
var array = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];

document.write("<h3>Qualifications: </h3> <br>")

for(var i =0; i < array.length; i++){
	document.write((i + 1) + ") " + array[i] + "<br>");
}

*/



/*Q8
var studName = ["Michael", "John", "Tony"];
var studMarks = [320, 230, 480];

for(var i = 0; i <= 2; i++){
	document.write("Scores of " + studName[i] + " is " + studMarks[i] + ". Percentage: " + studMarks[i]/500*100 + "% <br>");
}*/



/*Q9 INCOMPLETE Due to shift function is not working


var arry = ["Red", "Green", "Blue"];
document.write(arry + "<br>");
var a = prompt("Which color do you want to add at the beginning ?");
arry.unshift(a);
document.write(arry + "<br>");
var b = prompt("Which color do you want to add at the end ?");
arry.pop(b);
document.write(arry + "<br>");
var c = prompt("Which two color do you want to add at the beginning type 1st?");
var d = prompt("type 2nd ?");
arry.unshift(c,d);
document.write(arry);
arry.shit();
document.write(arry+"<br>");
arry.pop();
document.write(arry + "<br>");*/




/*Q10
var studentScore = [320, 230, 480, 120];
document.write("Scores of Students : ")

for(var i = 0; i < studentScore.length; i++){
	document.write(studentScore[i]);

	if(i < studentScore.length - 1){
		document.write(",")
	}
}

document.write("<br>Ordered Scores of Students : " + studentScore.sort());
*/



/*Q11
var cities =  ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var second = [];

var second = cities.slice(1,4);

document.write("Cities list: <br>" + cities)
document.write("<br><br>Selected cities list: <br>" +second)*/



/*Q12
var arr = ["This", "is", "my", "cat"];

document.write("Array:<br>")
for (var i = 0; i < arr.length ; i++) {
 	document.write(arr[i])

 	if(i < arr.length - 1){
		document.write(",")
	}
}
document.write("<br><br>String:")
document.write("<br>" + arr.join(" "));*/


/*Q13
var arr = ["keyboard", "mouse", "printer", "monitor"];
document.write("Devices:<br>")

for(var k = 0; k < arr.length; k++){
	document.write(arr[k])
	if(k < arr.length - 1){
		document.write(",")
	}
}

document.write("<br>")
for (var  i = 0; i <= arr.length - 1; i++) {
	document.write("<br>Out: <br>" + arr[i])
}*/



/*Q14
var arr = ["keyboard", "mouse", "printer", "monitor"];
document.write("Devices:<br>")

for(var k = 0; k < arr.length; k++){
	document.write(arr[k])
	if(k < arr.length - 1){
		document.write(",")
	}
}

document.write("<br>")
for (var i = arr.length - 1; i >= 0; i--) {
	document.write("<br>Out: <br>" + arr[i])
}*/



/*Q15
var arr = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

document.write("<select>")

for(i = 0; i < arr.length; i++){
	document.write("<option>" + arr[i] + "</option>")
}
document.write("</select>")*/




/*CHAPTER 17 to 20*/


/*Q1
Declare and initialize an empty multidimensional array. (Array of arrays)
var arrayOfArrays = [  ["" , ""],  ["" , ""],  ["" , ""]  ];*/


/*Q2
var arrayOfArrays = [  [0, 1, 2, 3],  [1, 0, 1, 2],  [2, 1, 0, 1]  ];

for (var i = 0; i < arrayOfArrays.length; i++){
	
	for( var j = 0; j < 4; j++ ){
		
		document.write(arrayOfArrays[i][j]);
	}

	document.write("<br>")
}
*/



/*Q3
for(var i = 1; i <= 10; i++ ){
	document.write(i + "<br>")
}
*/


/*Q4
var tableNumber = prompt("Enter a number to show its mutliplication table:");
var tableLength = prompt("Enter length mutliplication table:");

document.write("Multiplication table of " + tableNumber + " Length " + tableLength + "<br><br>")
for(var i = 1; i <= tableLength; i++){
	document.write(tableNumber + " x " + i + " = " + tableNumber*i + "<br>");
}*/


/*Q5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for(i = 0; i < fruits.length; i++){
	document.write(fruits[i] + "<br>")
}

document.write("<br><br>")

for(j = 0; j < fruits.length; j++){
	document.write("Element at index " + j + " is " + fruits[j] + "<br>")
}*/


/*Q6
document.write("<h3>Counting:</h3>");
for(i = 1; i <= 15; i++){
	document.write(i);
		if(i != 15){	
				document.write(",")
		}
}

document.write("<br><h3>Reverse Counting:</h3> ")
for (var j = 10; j > 0; j--) {
	document.write(j)
		if(j != 1){	
				document.write(",")
		}
}
	
document.write("<br><h3>Even:</h3> ")
for (var k = 0; k <= 20; k++) {
	if(k % 2 == 0){
		document.write(k)
			
			if(k != 20){	
				document.write(",")
			}
	}
}

document.write("<br><h3>Odd:</h3> ")
for (var l = 0; l <= 20; l++) {
	if(l % 2 != 0){
		document.write(l)
			if(l != 19){	
				document.write(",")
			}
	}
}

document.write("<br><h3>Series: </h3>")
for (var m = 2; m <= 20; m++) {
	if(m % 2 == 0){
		document.write(m+"k")
			
			if(m != 20){	
				document.write(",")
			}
	}
}*/


/*Q7
var arr = ["cake", "apple pie", "cookie", "chips", "patties"]
var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/maam?")
var input = userInput.toLowerCase();

var a = arr.indexOf(input);
if (a != -1)
	{
		document.write(arr[a] + " is <b> available </b> at index " + a + " in our bakery")
}
else
	{
		document.write("We are sorry. " + userInput + " is <b>not available </b> in our bakery")
}
*/


/*Q8
var A = [24, 53, 78, 91, 12];
var a = Math.max(...A);

document.write("Array items: ")

for (i = 0; i < A.length; i++)
	{
	document.write(A[i] + ",");
}

document.write("<br>The largest number is " + a)
*/ 


/*Q9
var A = [24, 53, 78, 91, 12];
var a = Math.min(...A);

document.write("Array items: ")

for (i = 0; i < A.length; i++)
	{
	document.write(A[i] + ",");
}

document.write("<br>The smallest number is " + a)
 */


/*Q10
for (var i = 1; i <= 20; i++){
	document.write(i*5 + ",")
}*/






//  ASSIGNMENT 6 CHAPTER 21 to 38



// CHAPTER 21 to 25


// Q1
// var firstName = prompt("Please enter your first name!");
// var lastName = prompt("Please enter your last name!");

// var fullName = firstName+lastName;
// alert("Welcome to my website " + firstName + " " + lastName);




// Q2
// var model = prompt("Your favorite mobile model:");

// var len = model.length;
// document.write("My favorite phone is: " + model + "<br>");
// document.write("Length of string: " + len);




// Q3
// var country = "Pakistani";
// var index = country.indexOf("n");

// document.write("String: " + country + "<br>");
// document.write("Index of 'n': " + index);




// Q4
// var text = "Hello World";
// var segIndex = text.lastIndexOf("l");

// document.write("String: " + text + "<br>");
// document.write("Last index of 'l': " + segIndex);




// Q5
// var country = "Pakistani";
// var firstChar = country.charAt(3)

// document.write("String: " + country + "<br>");
// document.write("Character at index of 3: " + firstChar);




// Q6
// var firstName = prompt("Please enter your first name! ");
// var space = " ";
// var lastName = prompt("Please enter your last name!");

// var fullName = firstName.concat(space, lastName);
// alert("Welcome to my website " + fullName);




// Q7
// var str = "Hyderabad";
// var rep = str.replace("Hyder", "Islam");

// document.write("City: " + str + "<br>")
// document.write("After replacement: " + rep);




// Q8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var rep = message.replace(/and/g, "&");

// document.write("Message: " + message + "<br>");
// document.write("After replacement: " + rep);




// Q9
// var str = "472";
// var typeStr = typeof str;
// var num = parseInt(str);
// var typeNum = typeof num;

// document.write("Value: " + str + "<br>");
// document.write("Type: " + typeStr + "<br>");
// document.write("Value: " + num + "<br>");
// document.write("Type: " + typeNum);




// Q10
// var userInput = prompt("Please enter your favorite food:");

// document.write("User input: " + userInput + "<br>");
// document.write("Upper case: " + userInput.toUpperCase() + "<br>");




// Q11
// var userInput = prompt("Please enter your favorite food:");
// var firstChar = userInput.slice(0,1);
// var otherChar = userInput.slice(1);

// document.write("User input: " + userInput + "<br>");
// document.write("Title case: " + firstChar.toUpperCase() + otherChar.toLowerCase() + "<br>");




// Q12
// var num = 35.36;
// var str = num.toString();
// var rmDot = str.replace(".", "");

// document.write("Number: " + num + "<br>");
// document.write("Result: " + rmDot);




// Q13 incomplete
// var name = prompt("Enter your username!");

// for (i = 0; i < name.length; i++){
//     if (name[i] == '@' || name[i] == '.' || name[i] == ',' || name[i] == '!'){
//         alert("Please enter a valid username.");
//         break;
//     }
// }
// alert("You have entered this username: " + name)




// Q14
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"]
// var userInput = prompt("Welcome to ABC Bakery. What do you want to order sir/maam?")
// var input = userInput.toLowerCase();

// var a = arr.indexOf(input);
// if (a != -1)
// 	{
// 		document.write(arr[a] + " is <b> available </b> at index " + a + " in our bakery")
// }
// else
// 	{
// 		document.write("We are sorry. " + userInput + " is <b>not available </b> in our bakery")
// }





// // Q15
// function alphaNumericPassword(str) {

// 	var patt1 = /[a-zA-Z]/g; 
// 	var patt2 = /[0-9]/g; 
// 	var result1 = str.match(patt1);
// 	var result2 = str.match(patt2);
// 	var fLetter = str.charAt(0);

// 	if ((result1 != null) && (result2 != null)){
// 		if( fLetter.match(/[0-9]/g) == null){
// 			if(str.length > 6){
// 				document.write("Password is good enough!");
// 			}
// 			else{
// 				document.write("Please enter at least 6 characters long password!");
// 			}
// 		}
// 		else{
// 			document.write("Please don't start with numbers!");
// 		}
// 	}
// 	else{
// 		document.write("Please enter password with alphabets and numbers <br>");
// 	}
// }
	
// var str = prompt("Please input your password");

// alphaNumericPassword(str);





// Q16
// var university = "University of Karachi";

// for(i = 0; i < university.length; i++){
//     document.write(university[i] + "<br>")
// }




// Q17
// var str = prompt("Please enter any word and this program will give you the last character of that word!");
// var lastChar = str[str.length - 1];

// document.write("User input: " + str + "<br>");
// document.write("Last character of input: " + lastChar);




// Q18
// var str = "The quick brown fox jumps over the lazy dog";
// var smallStr = str.toLowerCase();
// var count = 0;

// for (var i = 0; i < smallStr.length; i++) {
//     if (smallStr.slice(i, i + 3) === "the") {
//         count = count + 1;
//     }
// }

// document.write("Text: " + str + "<br>");
// document.write("There are " + count + " occurrence(s) of word 'the' ");





// CHAPTER 26 to 30





// Q1
// var num = parseFloat(prompt("Please enter a number:"));
// var round = Math.round(num);
// var floor = Math.floor(num);
// var ceil = Math.ceil(num)

// document.write("Number: " + num + "<br>");
// document.write("Round off value: " + round + "<br>");
// document.write("Floor value: " + floor + "<br>");
// document.write("Ceil value: " + ceil + "<br>");





// Q2
// var num = parseFloat(prompt("Please enter a number:"));
// var round = Math.round(num);
// var floor = Math.floor(num);
// var ceil = Math.ceil(num)

// document.write("Number: " + num + "<br>");
// document.write("Round off value: " + round + "<br>");
// document.write("Floor value: " + floor + "<br>");
// document.write("Ceil value: " + ceil + "<br>");




// Q3
// var num = parseInt(prompt("Please enter a number:"));
// var abs = Math.abs(num);

// document.write("The absolute value of " + num + " is " + abs);




// Q4
// var randNumber = Math.random() * 6;
// var ceil = Math.ceil(randNumber);

// document.write("Random dice value: " + ceil + "<br>");




// Q5
// var randNumber = Math.random() * 2;
// var ceil = Math.ceil(randNumber);


// if(ceil == 1){
//     document.write(ceil + "<br>Random coin value: Tails");
// }   

// else{
//     document.write(ceil + "<br>Random coin value: Heads");
// }




// Q6
// var randNumber = Math.random() * 100;
// var ceil = Math.ceil(randNumber);

// document.write("Random number between 1 to 100: " + ceil );




// Q7
// var weight = parseFloat(prompt("Enter your weight in kilograms:"));

// document.write("The weight of user is " + weight + " kilograms");




// Q8
// var userInput = parseInt(prompt("Enter a number between 1 to 10:"));
// var randNumber = Math.random() * 10;
// var ceil = Math.ceil(randNumber);

// if (userInput == ceil){
//     document.write("Congrats! you guess the right number");
// }
// else{
//     document.write("Try Again")
// }




// CHATPER 31 to 34




// Q1
// var rightNow = new Date();
// document.write(rightNow);




// Q2
// var rightNow = new Date();
// var theMonth = rightNow.getMonth();
// var monthName = ["January", "Feberary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var nameOfMonth = monthName[theMonth]; 

// alert("Current month: " + nameOfMonth);




// Q3
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];

// alert("Today is " + nameOfToday);




// Q4
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// var now = new Date();
// var theDay = now.getDay();
// var nameOfToday = dayNames[theDay];

// if(theDay == 0 || theDay == 6){
//     document.write("It's Fun day");
// }
// else{
//     document.write(nameOfToday);
// }




// Q5
// var rightNow = new Date();
// var theDate = rightNow.getDate();

// if( theDate < 16 ){
//     alert("First fifteen days of the month");
// }
// else{
//     alert("Last days of the month");
// }





// Q6
// var rightNow = new Date();
// var millsSince = rightNow.getTime();
// var theMinutes = millsSince/60;

// document.write("Current Date: " + rightNow + "<br>");
// document.write("Elapsed milliseconds since January 1, 1970: " + millsSince + "<br>");
// document.write("Elapsed minutes since January 1, 1970: " + theMinutes);




// Q7
// var rightNow = new Date();
// var theHour = rightNow.getHours();

// if( theHour < 12 ){
//     alert("It's AM");
// }
// else{
//     alert("It's PM");
// }




// Q8
// var laterDate = new Date("December 31, 2020"); 

// document.write("Later date: " + laterDate)




// Q9
// var today = new Date();
// var doomsday = new Date("June 18, 2015");
// var msToday = today.getTime();
// var msDoomsday = doomsday.getTime();
// var msDiff = msToday - msDoomsday;
// var dDiff = msDiff / (1000 * 60 * 60 * 24);
// var floor = Math.floor(dDiff);

// document.write(floor + " days have been passed since 1st Ramandan, 2015");




// Q10
// var startDate = new Date("Jan 1,2015");
// var endDate = new Date("Dec 05, 2015 22:50:16");
// var startMS = startDate.getTime();
// var endMS = endDate.getTime();
// var diffMS = endMS - startMS;
// var dDiff =  diffMS / (1000 * 60);
// var ceil = Math.ceil(dDiff);

// document.write("On reference date " + endDate + ", " + ceil + " seconds had passed since beginning of 2015");




// Q11
// var startDate = new Date();
// var oneHourAgo = 1000 * 60 * 60;
// var finalDate = new Date(startDate - oneHourAgo);

// document.write("Current date: " + startDate);
// document.write("<br>1 hour ago, it was " + finalDate);




// Q12
// var startDate = new Date();
// var hundredYear = 1000 * 60 * 60 * 24 * 365 * 100;
// var finalDate = new Date(startDate - hundredYear);

// alert("Current date: " + startDate + "\n100 years back, it was " + finalDate);




// Q13
// var userAge = parseInt(prompt("Enter your age"));
// var startDate = new Date();
// var userOldage = 1000 * 60 * 60 * 24 * 365 * userAge;
// var finalDate = new Date(startDate - userOldage);
// var birthYear = finalDate.getFullYear();

// document.write("Your age is " + userAge + "<br>Your birth year is " + birthYear)




// Q14
// var customName = prompt("Customer Name: ");
// var currentMonth = prompt("Month: ");
// var numberofUnits = parseInt(prompt("Number of units: "));
// var chargesPerunit = parseInt(prompt("Charges per units: "));
// var lateCharges = 350;

// var netAmount = numberofUnits * chargesPerunit;
// var grossAmount = ((+netAmount) + (+lateCharges))


// document.write("<h2>K-Electric Bill</h3>");
// document.write("Customer Name: <b>" + customName + "</b><br>")
// document.write("Month: <b>" + currentMonth + "</b><br>")
// document.write("Number of units: <b>" + numberofUnits + "</b><br>")
// document.write("Charges per unit: <b>" + chargesPerunit + "</b></br><br>")
// document.write("Net Amount Payable (within Due Date): <b>" + netAmount + "</b><br>")
// document.write("Late payment surcharge: <b>" + lateCharges + "</b><br>")
// document.write("Gross Amount Payable (after Due Date): <b>" + grossAmount + "</b>")






// CHAPTER 35 to 38





// Q1
// function tellTime() {
//     var now = new Date();
//     document.write(now);
//     }

// tellTime();





// Q2
// function fullName() {
//     var firstName = prompt("Enter your First name: ");
//     var lastName = prompt("Enter your Last name: ");

//     document.write("Welcome to my page " + firstName + " " + lastName);
//     }

// fullName();





// Q3
// function sum() {
//     var firstNumber = parseInt(prompt("Enter your First name: "));
//     var secondNumber = parseInt(prompt("Enter your Last name: "));
//     var sumOftwoNumbers = ((+firstNumber) + (+secondNumber));

//     return sumOftwoNumbers;
//     }

// document.write("This is the Sum: " +sum());





// Q4
// function calculator(val1, val2, sign){

//     if (sign === '+'){
//         alert((+val1)+(+val2));
//     }
//     else if (sign === '-'){
//         alert(val1-val2);
//     }
//     else if (sign === '*'){
//         alert(val1*val2);
//     }
//     else if (sign === '/'){
//         alert(val1/val2);
//     }
//     else if (sign === '%'){
//         alert(val1/val2*100);
//     }
// }

// var val1 = prompt("Enter your 1st value: ");
// var val2 = prompt("Enter your 2nd value: ");
// var sign = prompt("Enter operator: ");

// calculator(val1, val2, sign);





// Q5
// function square(x) {
//     return x * x;
//  }

// var value = parseInt(prompt("Enter any number and this program will return you the square of it:"));
// var sqr = square(value);

// document.write("Square of " + value + " is: " + sqr);





// Q6
// function factorialize(num) {
//     if (num < 0) 
//           return -1;
//     else if (num == 0) 
//         return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }
//   }

// var value = parseInt(prompt("Enter any number and this program will return you the factorial of it:"));
// var result = factorialize(value);

// document.write(result);





// Q7
// function counting(start, end) {
//     document.write("<h3>Your Desired Counting: </h3>")
//     for(i = start; i <= end; i++){
//         document.write(i + "<br>")
//     }
// }

// var start = parseInt(prompt("Enter starting point for counting:"));
// var end = parseInt(prompt("Enter ending point for counting:"));

// counting(start, end);





// // Q8
// function calculateHypotenuse(base, perp){

//     function calculateSquare(x){

//         var sqr = x * x;
//         return sqr;
//     }

//     var b = calculateSquare(base);
//     var p = calculateSquare(perp);

//     var hypo = ((+b) + (+p));
//     var final = Math.pow(hypo, 2);

//     document.write("The base is " + base + " and the perpendicular is " + perp + "<br>");
//     document.write("The hypotenuse is " + final);

// }

// var base = parseFloat(prompt("Please enter the base: "));
// var perp = parseFloat(prompt("Please enter the perpendicular: "));

// calculateHypotenuse(base, perp);





// Q9
// // Arguments as value
// function rec(width, height){
//     var recArea = width * height;
//     return recArea;
// }

// document.write("This is the rectangle area by arguments as value: " +  rec(10, 15));

// // Arguments as variables
// function rec(width, height){
//     var recArea = width * height;
//     return recArea;
// }

// var width = parseInt(prompt("Please enter the width of rectangle:"));
// var height = parseInt(prompt("Please enter the height of rectangle:"));

// document.write("This is the rectangle area by arguments as variable: " +  rec(width, height));




// Q10
// function palinDrome(word){
//     var reverseOrder = '' ;

//     for (i = word.length; i > 0;  i--){
//         reverseOrder += word[i-1];
//     }
//     if (word === reverseOrder){
//         document.write(word + " is a palindrome word.");
//     }
//     else{
//         document.write(word + " is not a palindrome word.");
//     }
// }

// var word= prompt("Please enter a word then this program will tell you it's palindrome or not!");
// var lowerCaseWord = word.toLowerCase();

// palinDrome(lowerCaseWord);




// // Q11
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }

// var str = prompt("Please type string and this program will converts the first letter of each word of the string in upper case");
// document.write(uppercase(str));




// Q12
// function findLongestWord(str) {
//     var strSplit = str.split(' ');
//     var longestWord = 0;

//     for(var i = 0; i < strSplit.length; i++){

//         if(strSplit[i].length > longestWord){
//         longestWord = strSplit[i].length;
//         var longest = strSplit[i];
//         }
//     }
//     return longest;
// }

// var line = "Web Development Tutorial";

// document.write(line + "<br><br>");
// document.write("This is the longest word in the above string: " + findLongestWord(line));




// // Q13
// function sameLetter(str, ch){
    
//     var count = 0;

//     for (var i = 0; i < str.length; i++) {
//         if (smallStr.slice(i, i + 1) === ch) {
//             count = count + 1;
//         }
//     }
//     return count;
// }

// var str = prompt("Please enter any string:");
// var ch = prompt("Please enter a character to check the occurence of this word in the above string:");
// var smallStr = str.toLowerCase();
// var smallch = ch.toLowerCase();


// document.write("Text: " + str + "<br>");
// document.write("There are " + sameLetter(smallStr, smallch) + " occurrence(s) of word: " + ch);




// // Q14
// function calcCircumference(radius){

//     var cir = 2 * 3.142 * radius;
//     document.write(radius + " is is the radius of the circle and the circumference of this circle is: " + cir + "<br>")
    
// }

// function calcArea(radius){

//     var area = 3.142 * (radius*radius);
//     document.write(radius + " is the radius of circle and the circumference of this circle is: " + area + "<br>")
// }

// var radius = parseFloat(prompt("Please enter the radius of the circle: "));

// calcCircumference(radius);
// calcArea(radius);









//  ASSIGNMENT 9 CHAPTER 38 to 67


// chapters38-42



// Q1
// function powerFun(num, pow){
//     var result = Math.pow(num, pow);
//     return result;

// }

// number = parseFloat(prompt('Please enter number'));
// power = parseFloat(prompt('Please enter power'));

// alert('This is your result: ' + powerFun(number, power));




// Q2
// function leapyear(year)
//     {
//         return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
//     }  

// year = parseInt(prompt('Please enter year'));
// alert(year + ' Is a leap year : ' + leapyear(year));




// Q4
// function avg(eng, urdu, math){
//     var sum = ((+eng) + (+urdu) + (+math))
//     var avgRes = sum / 3;
//     return avgRes;
// }

// function per(eng, urdu, math){
//     var sum = ((+eng) + (+urdu) + (+math))
//     var avgRes = sum / 300;
//     var perRes = avgRes * 100;
//     return perRes;
// }

// function mainFun(eng, urdu, math){

//     alert('This is average: ' + avg(eng, urdu, math));
//     alert('This is percentage: ' + per(eng, urdu, math) + '%');
// }

// Eng = parseInt(prompt('Please enter your english marks:'));
// Urdu = parseInt(prompt('Please enter your urdu marks:'));
// Math = parseInt(prompt('Please enter your math marks:'));

// mainFun(Eng, Urdu, Math);





// Q6
// var strings = ["bongo drums", "guitar", 
//   "flute", "double bass", "xylophone","piano"];                          

//    string = strings.map(x=>x.replace( /[aeiou]/g, '' ));              

// document.write(strings + "<br>")
// document.write(string)




// Q7
// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var res = str.match(/[aeiou]{2}/g);
//     return res ? res.length : 0;
//   }

//   var found = findOccurrences();

//   var str = "Pleases read this application and give me gratuity";

//   document.write(str + '<br>');
//   document.write('The number of occurrences of any two vowels: ' + found);





// Q8
// function disMeter(a, b){
//     var distance = b - a 
//     var meter = distance * 1000;
//     alert('Distance in meter : ' + meter)
// }

// function disFeet(a, b){
//     var distance = b - a 
//     var feet = distance * 3280.84;
//     alert('Distance in feet : ' + feet)
// }

// function disInch(a, b){
//     var distance = b - a 
//     var inch = distance * 39370.1;
//     alert('Distance in inch : ' + inch)
// }

// function disCenti(a, b){
//     var distance = b - a 
//     var centi = distance * 100000;
//     alert('Distance in centimeter : ' + centi)
// }

// pointA = parseInt(prompt('Please enter your 1st point:'));
// pointB = parseInt(prompt('Please enter your 2nd point:'));

// disMeter(pointA, pointB);
// disFeet(pointA, pointB);
// disInch(pointA, pointB);
// disCenti(pointA, pointB);




// Q9
// function overTime(hours){
//     var overTimeHours = hours - 40;
//     var overTimeRate = overTimeHours * 12;
//     alert('This is your over time Rs: ' + overTimeRate)
// }

// hours = parseInt(prompt('Please enter your overtime hours:'));
// overTime(hours)




// Q10
// function withdrawer(amount){

// let hundreds = Math.floor(amount / 100);
// var fifty = Math.floor((amount % 100) / 50);
// var ten = Math.floor((((amount % 100) % 50) / 10));
// var remain = Math.floor((((amount % 100) % 50) % 10));

// alert('You will have ' + hundreds + ' hundred notes ' + fifty + ' fifty notes ' + ten + ' ten notes.');

// }

// amount = parseInt(prompt('Please enter amount to withdraw:'));
// withdrawer(amount)





// chapters43-48



// Q1 is in html
// <a href="JavaScript:void(0)" onClick="alert('Hi');">Click</a> 



// Q2 is in html




// Q4 is in html




// Q5 is in html


// var x = 0;
// var minHeading = document.getElementById("min");

// function increase(){
//     x++;
//     minHeading.innerHTML = x;
// }

// function decrease(){
//     x--;
//     minHeading.innerHTML = x;
// }




// chapters49-52



// Q1 is in HTML


// Q2

// function readMore() {
//     var text = document.getElementById('text').innerHTML;
//     var para = document.getElementById("para").innerHTML = text;
//     para.innerHTML = text;
//  }



// DOM
// CHAPTER 58-67


// Q1 part 1
// function getElement(){
//     var mainContent = document.getElementById("main-content");
//     console.log(mainContent)
// }


// Q1 part 2
// function getElement(){
//     var mainContent = document.getElementById("main-content");

//     for (i = 0 ; i < mainContent.childNodes.length; i++){
//     document.write(mainContent.childNodes[i])
// }
// }




// Q1 part 3

// var renderClass = document.getElementsByClassName("render");

// function getElement(){
    
//         for (i = 0 ; i < renderClass.length; i++){
//             console.log(renderClass[i].innerHTML);
//             // document.write(renderClass[i].innerHTML) 
//         }
//     }





// Q2 part 1 

// var x = document.getElementById("form-content");

// function getElement(){
//     document.write(x)
// }




// Q2 part 2

// var x = document.getElementById("lastName").nodeType;
// console.log(x);



// Q2 part 3
// var textnode = document.createTextNode("Water");
// var item = document.getElementById("lastName").childNodes;
// x = item.replaceChild(textnode, item);
// console.log(x)




// Q4 part 4
// var x = document.getElementById("main-content").firstChild;
// console.log(x)

// var x = document.getElementById("main-content").lastChild;
// console.log(x)




// Q5 part 5
// var x = document.getElementById("lastName").nextSibling;

// console.log(x)
// var x = document.getElementById("lastName").previousSibling;

// console.log(x)



// Q6 part 6
// var x = document.getElementById("email").parentNode.nodeName;
// console.log(x)









