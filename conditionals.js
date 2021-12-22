//parseInt 함수는 string 타입을 int 타입으로 바꿔줌
const age = parseInt(prompt("How old are you?"));


//변수의 타입을 알고싶으면 변수 앞에 typeof를 붙힐 것
//isNaN 함수는 숫자인지 참거짓 판정을 하는 함수 → true면 처음 조건이 false면 else 조건이 발현
console.log(isNaN(age));

if(isNaN(age) || age < 0) {
    console.log("Please write a positive number");
} else if (age < 18) {
    console.log("You are too young."); 
}
 else if (age >= 18 && age <= 50) {
     console.log("You can drink");
 } else if (age > 50 && age <=80 ) {
     console.log("You should excercise");
 }
 else {
     console.log("You can't drink");
 }


