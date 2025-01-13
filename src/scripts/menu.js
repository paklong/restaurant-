
import * as styles from '../styles/menu.module.css';

const buildMenuPage = () => {
    console.log('Hi Pak! Nice!!');

    const headline = document.createElement('h1');
    headline.innerText = 'Welcome to Flavor Haven'

    const subHeading = document.createElement('h2');
    subHeading.classList.add(styles.heading);
    subHeading.innerText = 'Where Every Bite is a Delight'



    const tex1 = document.createElement('p');
    const tex2 = document.createElement('p');
    const tex3 = document.createElement('p');

    tex1.innerText = "Set1: Coffee + Egg";
    tex2.innerText = "Set2: Steak";
    tex3.innerText = "Set3: Fish + Soda";

    const content = document.querySelector('#content');

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }


    content.appendChild(headline);
    content.appendChild(subHeading);
    content.appendChild(tex1);
    content.appendChild(tex2);
    content.appendChild(tex3);
};

export { buildMenuPage };