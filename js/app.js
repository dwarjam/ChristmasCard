const countdown = document.querySelector('.countdown');
const launchdate = new Date('Dec 24, 2019, 00:00:01').getTime();
console.log(launchdate);

const interval = setInterval(()=> {
    console.log('tick');
    const now = new Date().getTime();
    const distance = launchdate - now;
    console.log(distance);

    const days = Math.floor(distance/(1000*60*60*24));
    const hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
    const minutes = Math.floor((distance % (1000*60*60)/(1000*60)));
    const seconds = Math.floor((distance % (1000*60))/1000);

    console.log(days, "days");
    console.log(hours, "hours");
    console.log(minutes, "minutes");
    console.log(seconds, "seconds");

    //template literals
    countdown.innerHTML = `
        <div><span>${days} päeva</span></div>
        <div><span>${hours} tundi</span></div>
        <div><span>${minutes} minutit</span></div>
        <div><span>${seconds} sekundit</span></div>
    `;

    if(distance < 0){
        clearInterval(interval);
        countdown.style.color = '#fff';
        countdown.innerHTML = "Häid jõule!";
    }

}, 1000);