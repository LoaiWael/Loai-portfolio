window.onload = function () {
    theme();
    $('.loading-warper').fadeOut();
    contactAnimation();

    $("#certificates").slideUp();
    if ($(window).width() < 445) {
        $(".nav-links").slideUp();
    }
    $(".hamburger").click(function () {
        $(".nav-links").css("visibility", "visible");
        $(".nav-links").slideToggle("fast");
    });
    $("#certificate-button").click(function () {
        $("#certificates").slideDown("slow");
        document.getElementById("certificates").scrollIntoView();
        $("#certificates-header").addClass("certificates-animation-open");
        $(".certificates-container").addClass("certificates-animation-open");
        // $("#certificates-header").removeClass("certificates-animation-close");
        // $(".certificates-container").removeClass("certificates-animation-close");
    });
    $("#close-certificates").click(function () {
        $("#certificates").slideUp("slow");
        // $("#certificates-header").addClass("certificates-animation-close");
        // $(".certificates-container").addClass("certificates-animation-close");
        // $("#certificates-header").removeClass("certificates-animation-open");
        // $(".certificates-container").removeClass("certificates-animation-open");
    });
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
function contactAnimation() {
    const contactLinks = document.querySelectorAll(".contacts a");
    var timing = 1500;
    for (let i = 0; i < contactLinks.length; i++) {
        contactLinks[i].style.animationName = 'pop-up-contacts'
        contactLinks[i].style.animationTimingFunction = 'cubic-bezier(1, 0, 0, 1)'
        contactLinks[i].style.animationDuration = `${timing}ms`
        timing += 120
    }
}

