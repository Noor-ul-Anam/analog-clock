// --- creating graduations in teh clock..
let graduation = () => {
    let element = document.getElementById('graduations');
    for(i= 1; i<13; i++){
        element.innerHTML += `<h1 class="graduation">${i}</h1>`;
    }
}
graduation();

// --- setting up time in the clock using date methods..
let date= new Date();
console.log(date.getHours()-12);
console.log(date.getMinutes());
console.log(date.getSeconds());

let angleHour = ((date.getHours()-12)*30);
let angleMinute = (date.getMinutes()*6);
let angleSecond = (date.getSeconds()*6);
console.log(angleHour);
console.log(angleMinute);
console.log(angleSecond);

// --- clock hands movement --- 
let clockGraduation= () =>{   
    let sec = document.getElementById('needleSecond');
    sec.style.transform = `translate(-50%,-70%) rotate(${angleSecond}deg) `;
    setInterval(() => {
        let date= new Date();
        angleSecond = (date.getSeconds()*6);
        sec.style.transform = `translate(-50%,-70%) rotate(${angleSecond}deg) `;
    }, 1000);
    let min = document.getElementById('needleMinute');
    min.style.transform = `translate(-50%,-67%) rotate(${angleMinute}deg) `;
    setInterval(()=> {
        min.style.transform =`translate(-50%,-67%) rotate(${angleMinute}deg) `;
        angleMinute> 360? angleMinute= 6: angleMinute= angleMinute+6;
    },60000);
    let hour = document.getElementById('needleHour');
    hour.style.transform = `translate(-50%,-62%) rotate(${angleHour}deg) `;
    setInterval(()=> {
        hour.style.transform =`translate(-50%,-62%) rotate(${angleHour}deg) `;
        angleHour> 360?angleHour= 30: angleHour=angleHour+30;
    },3600000);
}
clockGraduation();
