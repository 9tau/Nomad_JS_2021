const clock = document.querySelector("h2#clock");


//padstart(a,b) 함수는 앞에 a자리수 만큼 b로 채운다
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,0);
    const minutes = String(date.getMinutes()).padStart(2,0);
    const seconds = String(date.getSeconds()).padStart(2,0);
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);