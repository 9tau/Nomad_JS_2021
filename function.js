function sayHello(nameOfPerson, age) {
   console.log("hello my name is " + nameOfPerson, "and i'm " + age + " years old" );
}

sayHello("nico",10);


function plus (firstNumber, secondNumber) {
    console.log(firstNumber+secondNumber);
}

function divide(a,b) {
    console.log(a/b);
}

plus(8, 60);

divide(257,2);


//fucntion이 object 안에 들어갔을 때 문법이 다르다
const player = {
    name: "nico",
    sayHello: function (otherPersonName) {
        console.log("hello! " + otherPersonName + " nice to meet you!");
    },
};

player.sayHello("lynn");