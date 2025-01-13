const buildAboutPage = () => {


    const headline = document.createElement('h1');
    headline.innerText = 'Welcome to Flavor Haven'

    const subHeading = document.createElement('h2');
    subHeading.innerText = 'Nothing in here 😝'


    const content = document.querySelector('#content');

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }


    content.appendChild(headline);
    content.appendChild(subHeading);
};

export { buildAboutPage };