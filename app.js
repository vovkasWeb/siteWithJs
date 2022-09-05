const products =[
	{
		_id: 1003447,
		name: 'Картофель фри',
		img: 'https://cdn-tipmymenus-com.fra1.digitaloceanspaces.com/files/fd791255-fa3e-4da5-b4b2-9c9171e3a829-medium.jpg',
		descriptions: 'Ayam Goreng khas dengan nasi hangat dan tambahan scrambled egg.',
		price: '30,00',
	},
	{
		_id: 1003497,
		name: 'Куриные палочки',
		img: 'https://cdn-tipmymenus-com.fra1.digitaloceanspaces.com/files/efdcb012-cd9a-482a-8327-ce5a7c469b12-medium.jpg',
		descriptions: 'Ayam Goreng khas dengan nasi hangat dan tambahan scrambled egg.',
		price: '110,00',
	},
	{
		_id: 1003845,
		name: 'Бургер Kentucky',
		img: 'https://cdn-tipmymenus-com.fra1.digitaloceanspaces.com/files/a7f114c8-cba9-4217-84f8-75338c299fa1-medium.jpg',
		descriptions: 'Ayam Goreng khas dengan nasi hangat dan tambahan scrambled egg.',
		price: '100,00',
	},
	{
		_id: 1003445,
		name: 'Бургер The Burger',
		img: 'https://cdn-tipmymenus-com.fra1.digitaloceanspaces.com/files/6f9e233c-8598-4810-a9bf-2ec8532c56a9-medium.jpg',
		descriptions: 'Ayam Goreng khas dengan nasi hangat dan tambahan scrambled egg.',
		price: '200,00',
	},
	{
		_id: 1078985,
		name: 'Бургер The Burger',
		img: 'https://cdn-tipmymenus-com.fra1.digitaloceanspaces.com/files/79366c82-c36e-48a4-9c2d-2981d8c19a43-medium.jpg',
		descriptions: 'Ayam Goreng khas dengan nasi hangat dan tambahan scrambled egg.',
		price: '200,00',
	},
];
const productGrup = document.querySelector('.product__block');


const objOfProducts= products.reduce((acc,product)=>{
	acc[product._id] =product;
	return acc;
},{});
//console.log(objOfProducts);

function rendeAllProducts(productList){
if(!productList) return;

const fragment = document.createDocumentFragment();
Object.values(productList).forEach(product =>{
//console.log(product);
const div= listItemTemplate(product);
fragment.appendChild(div);
});
productGrup.appendChild(fragment);
}

function listItemTemplate({_id,name,img,descriptions,price} ={}){
const div = document.createElement('div');
div.classList.add('product__item');

const imgf = document.createElement('img');
imgf.setAttribute("src", `${img}`);
imgf.setAttribute("alt", 'photo');
imgf.classList.add('product__img');

const divBody  =document.createElement('div');
divBody.classList.add('product__body');

const h3 = document.createElement('h3');
h3.classList.add('product__title');
h3.textContent = `${name}`;

const p = document.createElement('p');
p.classList.add('product__text');
p.textContent =`${descriptions}`;

const divBottom = document.createElement('div');
divBottom.classList.add('product__bottom');

const span = document.createElement('span');
span.classList.add('product__price');
span.textContent = `${price}` + " uan";

const a  = document.createElement('a');
a.classList.add('product__buy');
a.textContent = "Order Now";
a.setAttribute("href", '#');

divBottom.appendChild(span);
divBottom.appendChild(a);
//console.log(divBottom);

divBody.appendChild(h3);
divBody.appendChild(p);
divBody.appendChild(divBottom);
div.appendChild(imgf);
div.appendChild(divBody);

return div;

}
rendeAllProducts(objOfProducts);



/*slider */
const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider .slider-line');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

init();
window.addEventListener('resize', init);

document.querySelector('.slider-next').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

document.querySelector('.slider-prev').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';

}
