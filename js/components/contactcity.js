const conButton = document.querySelector('.col3');
const cityUl =  document.querySelector('.city-ul-none');
const conButtonImg = document.querySelector('.button-img-unactive');


const cityMenu = (event) =>{
    if(cityUl.classList.contains('city-ul-none')){
        cityUl.classList.add('city-ul')
        cityUl.classList.remove('city-ul-none')
        conButton.classList.remove('button-unactive')
        conButton.classList.add('button-active')
        conButtonImg.classList.remove('button-img-unactive')
        conButtonImg.classList.add('button-img-active')
        conButton.innerHTML = 'City<img src="img/accactive.png" class="button-img-unactive">';
    }else{
        cityUl.classList.remove('city-ul')
        cityUl.classList.add('city-ul-none')
        conButton.classList.add('button-unactive')
        conButton.classList.remove('button-active')
        conButtonImg.classList.add('button-img-unactive')
        conButtonImg.classList.remove('button-img-active')
        conButton.innerHTML = 'City<img src="img/acc.png" class="button-img-unactive">';
    }
}
conButton.addEventListener('click', cityMenu);


