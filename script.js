/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll('a.nav-link').forEach(link => {

    link.addEventListener('click', function (e) {

        if (this.hash !== '') {

            e.preventDefault();

            const target =
                document.querySelector(this.hash);

            if (target) {

                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

            }


            /* Close mobile navbar */

            const navbar =
                document.getElementById('navbarNav');

            if (
                navbar &&
                navbar.classList.contains('show')
            ) {

                const collapse =
                    bootstrap.Collapse.getInstance(navbar);

                if (collapse) {

                    collapse.hide();

                }

            }

        }

    });

});


/* =========================================
   BACK TO TOP
========================================= */

const backToTop =
    document.getElementById('backToTop');


window.addEventListener('scroll', function () {

    if (window.scrollY > 300) {

        backToTop.style.display = 'flex';

    } else {

        backToTop.style.display = 'none';

    }

});


backToTop.addEventListener('click', function () {

    window.scrollTo({

        top: 0,

        behavior: 'smooth'

    });

});


/* =========================================
   NAVBAR SHRINK
========================================= */

const navbar =
    document.getElementById('navbar');


window.addEventListener('scroll', function () {

    if (window.scrollY > 50) {

        navbar.classList.add('navbar-shrink');

    } else {

        navbar.classList.remove('navbar-shrink');

    }

});


/* =========================================
   SCROLL ANIMATION
========================================= */

function isInViewport(element) {

    const rect =
        element.getBoundingClientRect();

    return (
        rect.top <= window.innerHeight - 80 &&
        rect.bottom >= 0
    );

}


function animateOnScroll() {

    document
        .querySelectorAll('.animate')
        .forEach(element => {

            if (isInViewport(element)) {

                element.classList.add('visible');

            }

        });

}


window.addEventListener(
    'scroll',
    animateOnScroll
);


window.addEventListener(
    'load',
    animateOnScroll
);


/* =========================================
   DARK MODE
========================================= */

const themeToggle =
    document.getElementById('themeToggle');

const themeIcon =
    themeToggle.querySelector('i');


/* Load saved theme */

if (
    localStorage.getItem('theme') === 'dark'
) {

    document.body.classList.add('dark-mode');

    themeIcon.classList.remove(
        'fa-moon'
    );

    themeIcon.classList.add(
        'fa-sun'
    );

}


/* Toggle dark mode */

themeToggle.addEventListener(
    'click',
    function () {

        document.body.classList.toggle(
            'dark-mode'
        );


        const darkMode =
            document.body.classList.contains(
                'dark-mode'
            );


        if (darkMode) {

            localStorage.setItem(
                'theme',
                'dark'
            );


            themeIcon.classList.remove(
                'fa-moon'
            );


            themeIcon.classList.add(
                'fa-sun'
            );

        } else {

            localStorage.setItem(
                'theme',
                'light'
            );


            themeIcon.classList.remove(
                'fa-sun'
            );


            themeIcon.classList.add(
                'fa-moon'
            );

        }

    }
);


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById('contactForm');


contactForm.addEventListener(
    'submit',
    function (e) {

        e.preventDefault();


        const name =
            document
                .getElementById('name')
                .value
                .trim();


        const email =
            document
                .getElementById('email')
                .value
                .trim();


        const message =
            document
                .getElementById('message')
                .value
                .trim();


        if (
            name !== '' &&
            email !== '' &&
            message !== ''
        ) {

            alert(
                'Thank you for reaching out! I will get back to you soon.'
            );


            contactForm.reset();

        } else {

            alert(
                'Please fill in all fields.'
            );

        }

    }
);