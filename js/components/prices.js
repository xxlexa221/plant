const basics = document.querySelector('.basics');
const standart = document.querySelector('.standart');
const procare = document.querySelector('.pro-care');
const basicsprice = document.querySelector('.price-basics');
const standartprice = document.querySelector('.price-standart');
const procareprice = document.querySelector('.price-procare');

basics.addEventListener('click', ()=>{
    basicsprice.classList.toggle('hidden');
});

standart.addEventListener('click', ()=>{
    standartprice.classList.toggle('hidden');
});

procare.addEventListener('click', ()=>{
    procareprice.classList.toggle('hidden');
});

basics.addEventListener('click', ()=>{
    basics.classList.toggle('active');
    basics.classList.toggle('unactive');
    standart.classList.remove('active');
    standart.classList.add('unactive');
    standartprice.classList.add('hidden');
    procare.classList.remove('active');
    procare.classList.add('unactive');
    procareprice.classList.add('hidden');
});

standart.addEventListener('click', ()=>{
    standart.classList.toggle('active');
    standart.classList.toggle('unactive');
    basics.classList.remove('active');
    basics.classList.add('unactive');
    basicsprice.classList.add('hidden');
    procare.classList.remove('active');
    procare.classList.add('unactive');
    procareprice.classList.add('hidden');
});

procare.addEventListener('click', ()=>{
    procare.classList.toggle('active');
    procare.classList.toggle('unactive');
    standart.classList.remove('active');
    standart.classList.add('unactive');
    standartprice.classList.add('hidden');
    basics.classList.remove('active');
    basics.classList.add('unactive');
    basicsprice.classList.add('hidden');
});

