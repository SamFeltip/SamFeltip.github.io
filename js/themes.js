let theme_button = document.getElementById("theme-button");
let theme = "light";

theme_button.addEventListener("click", e => {

    const root = document.querySelector(':root');

    let theme_color = getComputedStyle(root).getPropertyValue('--background-primary');



    if(theme_color === "#fbfbfb"){
        theme = "dark";

        root.style.setProperty('--text-secondary', 'var(--white)');
        root.style.setProperty('--text-primary', 'var(--white)');
        root.style.setProperty('--navbar-colour', 'var(--dark-black)');
        root.style.setProperty('--background-primary', 'var(--gray)');
        root.style.setProperty('--background-secondary', 'var(--light-gray)');
        root.style.setProperty('--background-color', 'var(--gray)');
        root.style.setProperty('--footer-background', 'var(--dark-black)');
        root.style.setProperty('--background-image-url', 'url(/img/home/background_image_dark.svg)');

        root.style.setProperty('--theme-button-icon', "☀️");
        theme_button.innerHTML =  "☀️";

    }else if(theme_color === "#202020"){
        theme = "light";

        root.style.setProperty('--text-secondary', 'var(--white)');
        root.style.setProperty('--text-primary', 'var(--gray)');
        root.style.setProperty('--navbar-colour', 'var(--gray)');
        root.style.setProperty('--background-primary', 'var(--white)');
        root.style.setProperty('--background-secondary', 'var(--light-blue)');
        root.style.setProperty('--background-color', 'var(--white)');
        root.style.setProperty('--footer-background', 'var(--light-blue)');
        root.style.setProperty('--background-image-url', 'url(/img/home/background_image.svg)');



        root.style.setProperty('--theme-button-icon', "🌙");
        theme_button.innerHTML = "🌙";

    }
})