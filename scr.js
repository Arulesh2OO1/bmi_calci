function fun(){

var weight = document.getElementById('weight').value;
var height = document.getElementById('height').value;

//bmi calculation part

var bmi=Math.floor((weight*10000)/(height*height));

document.getElementById('output').innerHTML=bmi;

if (bmi<18.5) {document.getElementById('output1').innerHTML="Underweight"; }
else if(bmi>=18.5 && bmi<=24.9){document.getElementById('output1').innerHTML="Normal"; }
else if(bmi>=25.0 && bmi<=29.9){document.getElementById('output1').innerHTML="Overweight"; }
else{document.getElementById('output1').innerHTML="Obesity";}
}