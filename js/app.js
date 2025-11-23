// js/app.js

// 1. MASTER LOADING LOGIC
window.addEventListener('load', () => {
    const loaderScreen = document.getElementById('loaderScreen');
    
    setTimeout(() => {
        loaderScreen.classList.add('fade-out');
        setTimeout(() => {
            loaderScreen.style.display = 'none';
            initHeroTyping();
        }, 800); 
    }, 500);
});

document.addEventListener('DOMContentLoaded', () => {

    // 2. AOS Initialization
    AOS.init({ duration: 800, once: true, offset: 50 });

    // 3. Mobile Menu
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            mainNav.classList.toggle('is-open');
        });
        mainNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('is-open');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // 4. Modal Logic
    const openModalLinks = document.querySelectorAll('[data-modal-target]');
    openModalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = link.getAttribute('data-modal-target');
            const modal = document.getElementById(modalId);
            if (modal && typeof modal.showModal === 'function') {
                modal.showModal();
            }
        });
    });

    const closeModalButtons = document.querySelectorAll('.modal-close-btn, .modal-cta');
    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('dialog');
            if (modal) modal.close();
        });
    });

    document.querySelectorAll('dialog.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) modal.close();
        });
    });

    // 5. Graphite Terminal Typing
    if (document.getElementById('code-typewriter')) {
        new Typed('#code-typewriter', {
            strings: [
                `<span class="code-comment"># QUANTEX CORE V2.4 - SECURE INIT</span>^500\n` +
                `<span class="code-keyword">import</span> <span class="code-function">quantex_neural</span> <span class="code-keyword">as</span> qx\n` +
                `<span class="code-function">encryption_layer</span> = qx.<span class="code-function">init_protocol</span>(<span class="code-string">"AES-256"</span>)\n\n` +
                `<span class="code-keyword">async def</span> <span class="code-function">deploy_agent</span>(target_node):\n` +
                `&nbsp;&nbsp;<span class="code-keyword">await</span> target_node.<span class="code-function">establish_uplink</span>(\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;security=<span class="code-keyword">True</span>,\n` +
                `&nbsp;&nbsp;&nbsp;&nbsp;latency=<span class="code-string">"ULTRA_LOW"</span>\n` +
                `&nbsp;&nbsp;)\n` +
                `&nbsp;&nbsp;<span class="code-keyword">return</span> <span class="code-string">"SYSTEM ONLINE"</span>`
            ],
            typeSpeed: 20,
            backSpeed: 0,
            showCursor: true,
            cursorChar: '█',
            loop: false,
            contentType: 'html'
        });
    }

    // 6. IMMERSIVE FEATURES

    // A. Live UTC Clock
    function updateClock() {
        const clockElement = document.getElementById('utc-clock');
        if (clockElement) {
            const now = new Date();
            const timeString = now.toISOString().split('T')[1].split('.')[0];
            clockElement.textContent = `${timeString} UTC`;
        }
    }
    setInterval(updateClock, 1000);
    updateClock(); 

    // B. Encryption Submit Effect
    const contactForm = document.getElementById('secure-contact-form');
    const transmitBtn = document.getElementById('transmit-btn');

    if (contactForm && transmitBtn) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); 
            
            const originalText = transmitBtn.innerText;
            
            transmitBtn.innerText = "ENCRYPTING...";
            
            setTimeout(() => {
                transmitBtn.innerText = "TRANSMITTING...";
                
                setTimeout(() => {
                    transmitBtn.innerText = "PACKET SENT";
                    transmitBtn.classList.add('success');
                    
                    setTimeout(() => {
                        transmitBtn.innerText = originalText;
                        transmitBtn.classList.remove('success');
                        contactForm.reset();
                    }, 3000);
                }, 1500);
            }, 1000);
        });
    }
});

function initHeroTyping() {
    if (document.getElementById('typed-hero')) {
        new Typed('#typed-hero', {
            strings: ['Engineered Intelligence.'],
            typeSpeed: 60,
            startDelay: 0, 
            showCursor: true,
            cursorChar: '█',
            loop: false,
            onComplete: (self) => { self.cursor.style.display = 'none'; }
        });
    }
}