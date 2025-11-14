tailwind.config = {
        darkMode: 'class', 
        theme: {
          extend: {
            colors: {
              neutral: {
                800: '#262626',
                900: '#171717',
                950: '#0a0a0a',
              }
            }
          }
        }
      }
        function applyTheme() {
            const isDarkMode = localStorage.getItem('theme') === 'dark' || 
                               (localStorage.getItem('theme') !== 'light' && 
                                window.matchMedia('(prefers-color-scheme: dark)').matches);
            
            if (isDarkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            return isDarkMode;
        }
        const initialDarkMode = applyTheme();
     //   <!-- Theme Toggle Script -->
           function toggleTheme() {
        const htmlElement = document.documentElement;
        const moonIcon = document.getElementById('moon-icon');
        const sunIcon = document.getElementById('sun-icon');

        if (htmlElement.classList.contains('dark')) {
            htmlElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            moonIcon.classList.remove('hidden');
            sunIcon.classList.add('hidden');
        } else {
            htmlElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            moonIcon.classList.add('hidden');
            sunIcon.classList.remove('hidden');
        }
    }
    
    document.addEventListener('DOMContentLoaded', () => {
         if (initialDarkMode) {
            document.getElementById('moon-icon').classList.add('hidden');
            document.getElementById('sun-icon').classList.remove('hidden');
        } else {
            document.getElementById('moon-icon').classList.remove('hidden');
            document.getElementById('sun-icon').classList.add('hidden');
        }
    });
 const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

   // Generic Intersection Observer for all elements
const animatedElements = document.querySelectorAll('section, div, h1, h2, h3, h4, p, a, button, img, svg');

animatedElements.forEach(el => {
    // نخلي العناصر مخفية افتراضياً
    el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // العنصر ظهر → شغّل الانيميشن
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            entry.target.classList.add('opacity-100', 'translate-y-0');
        } else {
            // العنصر خرج من الشاشة → رجّع للحالة الأصلية
            entry.target.classList.add('opacity-0', 'translate-y-10');
            entry.target.classList.remove('opacity-100', 'translate-y-0');
        }
    });
}, { threshold: 0.2 });

animatedElements.forEach(el => observer.observe(el));


    // Skill hover effect
    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('hover-bounce', 'bg-blue-500', 'dark:bg-blue-600', 'text-white');
        });
        card.addEventListener('mouseleave', () => {
            card.classList.remove('hover-bounce', 'bg-blue-500', 'dark:bg-blue-600', 'text-white');
        });
    });