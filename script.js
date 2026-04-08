const commands = {
    fun: [
        { name: '/love', desc: 'Szerelmi kalkulátor két felhasználó között.' },
        { name: '/8ball', desc: 'Kérdezz valamit, és a bot válaszol.' },
        { name: '/rps', desc: 'Kő-papír-olló játék a bot ellen.' },
        { name: '/animal', desc: 'Cuki állatos képek.' },
        { name: '/rank', desc: 'Megmutatja a jelenlegi szintedet.' },
        { name: '/leaderboard', desc: 'A szerver legaktívabb tagjai.' }
    ],
    music: [
        { name: '/play', desc: 'Zene lejátszása link vagy név alapján.' },
        { name: '/skip', desc: 'Az aktuális dal kihagyása.' },
        { name: '/stop', desc: 'Zene leállítása és kilépés.' },
        { name: '/radio', desc: 'Különböző online rádiók streamelése 24/7.' },
        { name: '/queue', desc: 'A várólista megtekintése.' }
    ],
    mod: [
        { name: '/kick', desc: 'Felhasználó kirúgása a szerverről.' },
        { name: '/ban', desc: 'Felhasználó kitiltása a szerverről.' },
        { name: '/mute', desc: 'Felhasználó némítása.' },
        { name: '/warn', desc: 'Figyelmeztetés küldése.' },
        { name: '/clear', desc: 'Üzenetek tömeges törlése.' }
    ],
    other: [
        { name: '/uptime', desc: 'A bot futási idejének lekérdezése.' },
        { name: '/ping', desc: 'A bot válaszidejének ellenőrzése.' },
        { name: '/info', desc: 'Részletes információk a botról.' }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    const commandsDisplay = document.getElementById('commands-display');
    const categoryBtns = document.querySelectorAll('.category-btn');

    function renderCommands(category) {
        commandsDisplay.innerHTML = '';
        commands[category].forEach(cmd => {
            const cmdEl = document.createElement('div');
            cmdEl.className = 'command-item';
            cmdEl.innerHTML = `
                <span class="command-name">${cmd.name}</span>
                <p class="command-desc">${cmd.desc}</p>
            `;
            commandsDisplay.appendChild(cmdEl);
        });
    }

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderCommands(btn.dataset.category);
        });
    });

    // Kezdő kategória betöltése
    renderCommands('fun');

    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Görgetési animáció (egyszerű fade-in)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.feature-card, .section-title').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
});
