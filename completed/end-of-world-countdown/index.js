let counter = 0;

function time() {
    let beginOfTime = new Date(counter);
    let hour = beginOfTime.getUTCHours();
    let min = beginOfTime.getUTCMinutes();
    let sec = beginOfTime.getUTCSeconds();
    let mill = beginOfTime.getUTCMilliseconds();
    console.log(hour + min + ":" + sec + ":" + mill);
    counter += 10;
    if (counter === 3000) {
        clearInterval(timer);
    }
}

let timer = setInterval(time, 10);

console.log(timer); 

// If I have time I want to come back to this and do a countdown timer.