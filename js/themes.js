const root = document.querySelector(':root');
let theme_button = document.getElementById("theme-button");
let body = document.body;

const LIGHT_THEME_ICON = "☀️";
const SYSTEM_THEME_ICON = "🖥️";
const DARK_THEME_ICON = "🌙";

function setTheme(theme){

    localStorage.setItem('theme_pref', theme);

    switch(theme){
        case 'system':
            // change to desktop pref

            body.classList.remove('light-theme');
            body.classList.remove('dark-theme');
            body.classList.add('system-theme')

            // theme_button.innerHTML = SYSTEM_THEME_ICON;

            break;
        case 'light':
            // change to light theme

            body.classList.add('light-theme');
            body.classList.remove('dark-theme');
            body.classList.remove('system-theme');

            theme_button.innerHTML = DARK_THEME_ICON;
            break;
        case 'dark':
            // change to dark theme
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
            body.classList.remove('system-theme');

            theme_button.innerHTML =  LIGHT_THEME_ICON;
            break;
    }
}

theme_button.addEventListener("click", e => {


    let is_light = body.classList.contains('light-theme');
    let is_dark = body.classList.contains('dark-theme');
    let is_system = body.classList.contains('system-theme');

    if(is_light) setTheme('dark');
    if(is_dark) setTheme('light');

    if(is_system) {
        // check what the system is and set to the opposite
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
        if (darkThemeMq.matches) {
            // Theme set to dark.
            setTheme('light');
        } else {
            // Theme set to light.
            setTheme('dark');
        }

    }


})




window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change',({ matches }) => {
        localStorage.setItem('theme_pref', 'system-theme');
        setTheme('system-theme');
    })


theme_color = localStorage.getItem('theme_pref');
setTheme(theme_color)

