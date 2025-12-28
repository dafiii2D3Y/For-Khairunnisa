const welcomeScreen = document.getElementById('welcome-screen');
const startBtn = document.getElementById('startBtn');
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');

// Klik tombol awal
startBtn.addEventListener('click', () => {
    // Jalankan musik
    bgMusic.play().catch(error => console.log("Autoplay dicegah browser"));
    
    // Hilangkan Welcome Screen
    welcomeScreen.style.opacity = '0';
    setTimeout(() => {
        welcomeScreen.style.display = 'none';
        musicToggle.style.display = 'block'; // Tampilkan tombol on/off
        initDecorations();
    }, 800);
});

// Kontrol On/Off Musik
musicToggle.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicToggle.innerHTML = "⏸️ Musik On";
    } else {
        bgMusic.pause();
        musicToggle.innerHTML = "🎵 Musik Off";
    }
});

// Partikel Bintang & Balon
function initDecorations() {
    const sContainer = document.getElementById('stars-container');
    const bContainer = document.getElementById('balloons-container');
    const colors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff'];

    for (let i = 0; i < 50; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = star.style.height = Math.random() * 3 + 'px';
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        star.style.setProperty('--duration', Math.random() * 3 + 2 + 's');
        sContainer.appendChild(star);
    }

    for (let i = 0; i < 12; i++) {
        const b = document.createElement('div');
        b.className = 'balloon';
        b.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        b.style.left = Math.random() * 100 + '%';
        b.style.setProperty('--duration', Math.random() * 8 + 8 + 's');
        b.style.animationDelay = Math.random() * 5 + 's';
        bContainer.appendChild(b);
    }
}

// Scroll Reveal Logic
function handleReveal() {
    document.querySelectorAll('.reveal').forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 50) {
            el.classList.add('active');
        }
    });
}

window.addEventListener('scroll', handleReveal);
// Jalankan reveal saat load (untuk elemen yang sudah terlihat di atas)
handleReveal();