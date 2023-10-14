const currentTheme = localStorage.getItem('theme');
// switchTheme()

function switchTheme(e) {
    if (currentTheme==="light") {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); // Save theme preference to local storage
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }    
}

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}
