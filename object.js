// 리스트의 값마다 목적이 불분명 할 때 objuect를 사용한다.

const player = {
    name : "nico",
    points : 10,
    fat : true,
};

console.log(player);
console.log(player.name);

// 리스트의 값을 지정하여 변경
player.points = player.points + 15;

console.log(player);
