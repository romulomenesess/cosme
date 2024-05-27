const images = document.getElementById("img");
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrosselImagens() {
    idx++;
    if(idx > img.length - 1){
        idx = 0;
    }

    images.style.transform = `translateX(${-idx * 150}px)`;
}

setInterval(carrosselImagens, 1000);