const liveClock = document.getElementById('live-clock');

let options = {timeZone: 'America/Denver'}; // IANA timezone for MST

function update() {
    let date = new Date();
    let mst = date.toLocaleString('en-US', options);
    liveClock.textContent = `${mst}, Edmonton`;
}

update(); //get time as soon as the website loads
setInterval(update, 1000) ; //update every 1s


