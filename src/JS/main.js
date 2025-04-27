window.onload = function () {
    theme();
    if ($(window).width() < 445) {
        $(".nav-links").slideUp();
    }
    $(".hamburger").click(function () {
        $(".nav-links").css("visibility", "visible");
        $(".nav-links").slideToggle("fast");
    });
    $('.loading-warper').fadeOut();
}
function theme() {
    const themeToggle = document.getElementById('themeToggle');
    const rootElement = document.documentElement;

    // Function to apply theme
    function applyTheme(theme) {
        rootElement.classList.remove('light-theme', 'dark-theme'); // Remove any previous class
        if (theme === 'dark') {
            rootElement.classList.add('dark-theme');
            themeToggle.checked = true;
        } else {
            rootElement.classList.add('light-theme');
            themeToggle.checked = false;
        }
        localStorage.setItem('theme', theme); // Save user preference
    }

    // Check system preference first
    const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    if (systemDarkMode) {
        themeToggle.checked = true;
    }
    if (savedTheme) {
        applyTheme(savedTheme); // Use user preference if exists
    } else {
        applyTheme(systemDarkMode ? 'dark' : 'light'); // Otherwise, use system preference
    }

    // Toggle manually
    themeToggle.addEventListener('change', () => {
        applyTheme(themeToggle.checked ? 'dark' : 'light');
    });
}