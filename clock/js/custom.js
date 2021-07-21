
const secondarrow = document.getElementById('second-arrow');
const minutesarrow = document.getElementById('minutes-arrow');
const hourarrow = document.getElementById('hour-arrow');

setInterval(() => {

    getdate = new Date();
    hour = getdate.getHours();
    minutes = getdate.getMinutes();
    second = getdate.getSeconds();
    console.log(hour);
    //rotate calculation
    secondrotate = second*6;
    minutesrotate = minutes*6;
    hourrotate = hour*30 + minutes/2;
    // console.log(hourrotate);

    //rotate 
    secondarrow.style.transform = `rotate(${secondrotate}deg)`;
    minutesarrow.style.transform = `rotate(${minutesrotate}deg)`;
    hourarrow.style.transform = `rotate(${hourrotate}deg)`;

    
}, 1000);