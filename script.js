const welcomeScreen = document.getElementById('welcome-screen');
const startBtn = document.getElementById('startBtn');
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');

// 1. Fungsi saat tombol "Buka Pesan" diklik
startBtn.addEventListener('click', () => {
    // Putar musik (Browser mengizinkan autoplay setelah ada interaksi klik)
    bgMusic.play().catch(error => {
        console.log("Autoplay dicegah oleh browser, musik akan menyala saat interaksi berikutnya.");
    });
    
    // Hilangkan Welcome Screen dengan efek transisi fade-out
    welcomeScreen.style.opacity = '0';
    setTimeout(() => {
        welcomeScreen.style.display = 'none';
        musicToggle.style.display = 'block'; // Tampilkan tombol On/Off musik
        initDecorations(); // Jalankan animasi bintang dan balon
    }, 800);
});

// 2. Fungsi Tombol On/Off Musik Manual
musicToggle.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicToggle.innerHTML = "⏸️ Musik On";
    } else {
        bgMusic.pause();
        musicToggle.innerHTML = "🎵 Musik Off";
    }
});

// 3. Fungsi Animasi Dekorasi (Bintang & Balon)
function initDecorations() {
    const sContainer = document.getElementById('stars-container');
    const bContainer = document.getElementById('balloons-container');
    const colors = ['#ffadad', '#ffd6a5', '#fdffb6', '#caffbf', '#9bf6ff'];

    // Membuat Bintang (Twinkling Stars)
    for (let i = 0; i < 45; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = star.style.height = Math.random() * 3 + 'px';
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        star.style.setProperty('--duration', Math.random() * 3 + 2 + 's');
        sContainer.appendChild(star);
    }

    // Membuat Balon Melayang (Floating Balloons)
    for (let i = 0; i < 10; i++) {
        const b = document.createElement('div');
        b.className = 'balloon';
        b.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        b.style.left = Math.random() * 100 + '%';
        b.style.setProperty('--duration', Math.random() * 8 + 8 + 's');
        b.style.animationDelay = Math.random() * 5 + 's';
        bContainer.appendChild(b);
    }
}

// 4. Fungsi Scroll Reveal (Elemen muncul saat di-scroll)
function handleReveal() {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 50; // Jarak trigger muncul

        if (elementTop < windowHeight - elementVisible) {
            el.classList.add('active');
        }
    });
}

// Jalankan fungsi reveal saat scroll dan saat halaman pertama kali dimuat
window.addEventListener('scroll', handleReveal);
window.onload = handleReveal;
