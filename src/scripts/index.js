import '../styles/style.css';
import { buildHomePage } from './home';
import { buildMenuPage } from './menu';
import { buildAboutPage } from './about';


(function () {
    const homeBtn = document.querySelector('#homeBtn');
    const menuBtn = document.querySelector('#menuBtn');
    const aboutBtn = document.querySelector('#aboutBtn');

    homeBtn.addEventListener('click', buildHomePage);
    menuBtn.addEventListener('click', buildMenuPage);
    aboutBtn.addEventListener('click', buildAboutPage);

    buildHomePage();
})();




