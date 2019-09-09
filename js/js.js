let graduation = () => {
    let element = document.getElementById('graduations');
    for(i= 1; i<13; i++){
        element.innerHTML += `<h1 class="graduation">${i}</h1>`;
    }
}
graduation();

// console.log(moment().fromNow());