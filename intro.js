// Exercise 1
var op1 = 12+12;
var op2 =46-22;
var op3 = 4*6;
var op4 = 48/2;


for(var i=0; i<10; i++){
    if (i%4 == 0){
    }
}
//Exercise 2
var ope1=6 % 3;
var ope2=10 % 2;
var ope3=5 % 2; 

//console.log(ope1 !== ope2)
//console.log(ope1 >=ope2)


//Exercise 3

var line1="Test Grades as follows \n";
var line2="\t Student1:96 \n";
var line3="\t Comment: \"None\" ";
console.log( line1+line2+line3 );

//Exercise 4
var number= [0,1,2,3,4,5,6,7,8,9];
console.log(number[2]+ number[4]);

//Exercise 5
var student ={
    firstname: "Arlaina", 
    lastname: "Reeves",
    Age:23,
    city:"Miramar",
    born:"Miami",
}
console.log(student.lastname)

//Exercise 6
var num = 0;
while (num <= 10) {
    if (num % 2 === 0) {
        console.log(num + " is even number");
    }
    num++;
  }

//Exercise 7

for(var numb=1; numb<=10; numb--){
    if (numb%2 == 1){
        console.log(numb)
    }