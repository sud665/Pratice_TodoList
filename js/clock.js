const clock = document.querySelector("h2#clock");

function getClock(){
   const date = new Date();
   const Hours = String(date.getHours()).padStart(2, "0");
   const Minutes = String(date.getMinutes()).padStart(2, "0");
   const Seconds = String(date.getSeconds()).padStart(2, "0");
   
   clock.innerText = `${Hours}:${Minutes}:${Seconds}`
   
}

//이 함수를 바로 작동 시켜서 새로고침해도 1초를 기다리지 않게 한다!!!!!! 
getClock()
setInterval(getClock, 1000) 