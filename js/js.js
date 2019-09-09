// --- variables ---
let degree= 0;


// --- creating graduations in teh clock..
let graduation = () => {
    let element = document.getElementById('graduations');
    for(i= 1; i<13; i++){
        element.innerHTML += `<h1 class="graduation">${i}</h1>`;
    }
}
graduation();

// --- setting up time in teh clock using date methods..
let date= new Date();
console.log(date.getHours()-12);
console.log(date.getMinutes());
console.log(date.getSeconds());

setTimeout(() => {
    let sec = document.getElementById('needleSecond');
    degree= degree+6;
    console.log('abs');
    sec.style.transform = "translate(50%,75%) rotate(${degree}deg)";
    console.log('abs');
}, 1000);
// setInterval(() => {
//     let sec = document.getElementById('needleSecond');
//     degree= degree+6;
//     sec.style.transform = `rotate(${degree}deg) translate(50%,75%)`;
// }, 1000);
