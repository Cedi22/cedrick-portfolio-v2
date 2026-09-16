/* Cedrick H. Regis Jr. — Portfolio
   Vanilla JavaScript. No dependencies, no build step.
   1. Accessible mobile menu
   2. Active nav tab while scrolling
   3. One small section reveal (skipped when reduced motion is requested) */

document.addEventListener('DOMContentLoaded', () => {
  /* ---------- 1. Mobile menu ---------- */
  const menuToggle = document.getElementById('menu-toggle');
  const mainNav = document.getElementById('main-nav');

  if (menuToggle && mainNav) {
    const setMenu = (open) => {
      menuToggle.setAttribute('aria-expanded', String(open));
      menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
      mainNav.classList.toggle('is-open', open);
    };

    const closeMenu = () => setMenu(false);

    menuToggle.addEventListener('click', () => {
      setMenu(menuToggle.getAttribute('aria-expanded') !== 'true');
    });

    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mainNav.classList.contains('is-open')) {
        closeMenu();
        menuToggle.focus();
      }
    });

    document.addEventListener('click', (e) => {
      if (
        mainNav.classList.contains('is-open') &&
        !mainNav.contains(e.target) &&
        !menuToggle.contains(e.target)
      ) {
        closeMenu();
      }
    });

    // Reset the menu state when the layout returns to desktop width.
    window.addEventListener('resize', () => {
      if (window.innerWidth > 860 && mainNav.classList.contains('is-open')) {
        closeMenu();
      }
    });
  }

  /* ---------- 2. Active nav tab ---------- */
  const navLinks = Array.from(document.querySelectorAll('.nav a[href^="#"]'));
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

  if (sections.length) {
    const setActive = (id) => {
      navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === '#' + id;
        link.classList.toggle('is-active', isActive);
        if (isActive) {
          link.setAttribute('aria-current', 'true');
        } else {
          link.removeAttribute('aria-current');
        }
      });
    };

    let ticking = false;

    const updateActive = () => {
      ticking = false;
      const line = window.scrollY + 90; // just under the sticky bar
      let current = sections[0];

      sections.forEach((section) => {
        if (section.offsetTop <= line) current = section;
      });

      // At the very bottom, the last section is the one being read.
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 4) {
        current = sections[sections.length - 1];
      }

      setActive(current.id);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateActive);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    updateActive();
  }

  /* ---------- 3. Small section reveal ---------- */
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reducedMotion && 'IntersectionObserver' in window) {
    const targets = document.querySelectorAll(
      '#about .card, #skills .skill-card, #skills .inventory, #projects .featured, #projects .project-card, #experience .card'
    );

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    targets.forEach((el) => {
      el.classList.add('reveal');
      revealObserver.observe(el);
    });
  }
});
