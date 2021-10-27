/* slider */
window.addEventListener ('load', function(){
    let imgs =[];
    imgs[0]='./img/img1.jpg';
    imgs[1]='./img/img2.jpg';
    imgs[2]='./img/img3.jpg';
    imgs[3]='./img/img4.jpg';
    imgs[4]='./img/img5.jpg';
    imgs[5]='./img/img6.jpg';
    imgs[6]='./img/img7.jpg';

    let indiImg =0;
    let tiempo=2000;
    function actualizaImg(){
        document.slider.src=imgs[indiImg];
        if(indiImg < 6){
            indiImg++;
        }else{
            indiImg=0;
        }
    }

    setInterval(actualizaImg,tiempo);

});

/* cards */
import {peliculas} from './data.js'

const card = document.querySelector('#cards')

cargarPelis(peliculas)

function cargarPelis(peliculas){
    card.innerHTML = ''
    peliculas.forEach(data => {
        const item = document.createElement('div')

        item.innerHTML =`
            <div class="col d-flex justify-content-center mb-2 mt-2 ">
                <div class="card shadow mb-1 bg-dark rounded text-white" style="max-width: 18rem;">
                    <h5 class="card-title text-center pt-2">${data.name}</h5>
                    <img src="${data.image}" class="card-img-top" height="300px" alt="${data.name}">
                    <div class="card-body">
                    <p class="card-text description">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
            </div>
    `
    card.appendChild(item)
    });
}
/* <a href="#" class="btn btn-primary">${data.precio}</a>
<h5 class="card-title text-center pt-2">${data.precio}</h5> */