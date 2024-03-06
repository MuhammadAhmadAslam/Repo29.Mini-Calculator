var Username= prompt("Enter Your Username");
document.write("<h1 class= 'heading1'style='color: blue;'> This is yours calculator " + Username + '</h1>');
var calcNum1= +prompt("Enter A First Number To Calculate");
var calcNum2= +prompt("Enter A Second Number To Calculate");
var opreation= prompt("Enter a opreation what you want to do + , - , / , *");
if(opreation == "+"){
    document.write("<h1 class='heading2'>The Addition of Number 1 and Number 2 is: " + (calcNum1 + calcNum2) + "</h1><br>");

}
else if(opreation === "-"){
    document.write("<h1 class='heading2'>The Subtraction of Number 1 and Number 2 is: " + (calcNum1 - calcNum2) + "</h1><br>");

}
else if(opreation == "*"){
    document.write("<h1 class='heading2'>The Multiplication of Number 1 and Number 2 is: " + (calcNum1 * calcNum2) + "</h1><br>");
}
else if(opreation == "/"){
    document.write("<h1 class='heading2'>The Division of Number 1 and Number 2 is: " + (calcNum1 / calcNum2) + "</h1><br>");
}
else{
    document.write("<h1 class='heading2'>Invalid Operation</h1>\n<br>");
}