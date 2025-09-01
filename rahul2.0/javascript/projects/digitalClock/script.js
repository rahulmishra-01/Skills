const clock = document.getElementById("clock");
const time = document.getElementById("time");
const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const dayDate = document.getElementById("dayDate");

function Clock(){
    const date = new Date();
    const options = {hour:"2-digit", minute:"2-digit", second:"2-digit"};
    time.innerHTML = date.toLocaleTimeString(options);
    day.innerHTML = date.toLocaleDateString("en-Us",{weekday: "long"});
    month.innerHTML = date.toLocaleDateString("en-Us",{month:"long"});
    dayDate.innerHTML = date.toLocaleDateString("en-Us",{day:"numeric"});
    year.innerHTML = date.toLocaleDateString("en-Us",{year:"numeric"});
    console.log("run");
    
}

setInterval(Clock,1000);
// Clock()