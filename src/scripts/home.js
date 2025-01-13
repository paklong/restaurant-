
import coffeeShopImg from '../assets/cozy-coffee-shop-stockcake.jpg';
import * as styles from '../styles/home.module.css';

const buildHomePage = () => {
    console.log(styles);
    console.log('Hi Pak! Nice!!');

    const headline = document.createElement('h1');
    headline.innerText = 'Welcome to Flavor Haven'

    const subHeading = document.createElement('h2');
    subHeading.classList.add(styles.heading);
    subHeading.innerText = 'Where Every Bite is a Delight'

    const coffeeShop = document.createElement('img');
    coffeeShop.src = coffeeShopImg
    coffeeShop.alt = 'An image of a coffee shop';

    const tex1 = document.createElement('p');
    const tex2 = document.createElement('p');
    const tex3 = document.createElement('p');

    tex1.innerText = "Nestled in the heart of the city, Flavor Haven is your destination for mouthwatering dishes, cozy ambiance, and unforgettable dining experiences.Whether you're craving classic comfort food or adventurous gourmet flavors, our menu has something for everyone.";
    tex2.innerText = "Our chefs use only the freshest ingredients to craft meals that will tantalize your taste buds and leave you coming back for more.";
    tex3.innerText = "Come join us and see why Flavor Haven is the talk of the town! We can’t wait to serve you.";

    const content = document.querySelector('#content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    content.appendChild(headline);
    content.appendChild(subHeading);
    content.appendChild(coffeeShop);
    content.appendChild(tex1);
    content.appendChild(tex2);
    content.appendChild(tex3);
};

export { buildHomePage };