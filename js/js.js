let graduation = () => {
    let element = document.getElementById('graduations');
    for(i= 1; i<13; i++){
        element.innerHTML += `<h1 class="graduation" id=${i} >${i}</h1>`;
    }
}
graduation();