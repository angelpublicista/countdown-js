const getRemainTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
};


const countdown = (deadline, elem, finalMessage) => {
    const el = document.getElementById(elem);

    const timerUpdate = setInterval( () => {
        let t = getRemainTime(deadline);
        el.innerHTML = `
        
        <div class="box-number" id="days">
            <span class="number">${t.remainDays}</span>
            <span class="text">Days</span>
        </div>
        <div class="box-number" id="hours">
            <span class="number">${t.remainHours}</span>
            <span class="text">Hours</span>
        </div>
        <div class="box-number" id="minutes">
            <span class="number">${t.remainMinutes}</span>
            <span class="text">Minutes</span>
        </div>
        <div class="box-number" id="seconds">
            <span class="number">${t.remainSeconds}</span>
            <span class="text">Seconds</span>
        </div>
        `;

        if(t.remainTime <= 1){
            clearInterval(timerUpdate)
            el.innerHTML = finalMessage;
        }
    }, 1000)
};


countdown('Dec 24 2019 23:59:59 GMT-0500', 'clock' , 'Feliz 2020 :)')