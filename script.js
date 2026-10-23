const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Tutup menu' : 'Buka menu');
});
navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  navMenu.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Buka menu');
}));

document.getElementById('year').textContent = new Date().getFullYear();

const modal = document.getElementById('loginModal');
const openLoginButtons = document.querySelectorAll('[data-open-login]');
const closeLogin = document.getElementById('closeLogin');
function showLogin() {
  modal.hidden = false;
  document.body.classList.add('modal-open');
  document.getElementById('loginRole').focus();
}
function hideLogin() {
  modal.hidden = true;
  document.body.classList.remove('modal-open');
}
openLoginButtons.forEach(button => button.addEventListener('click', showLogin));
closeLogin.addEventListener('click', hideLogin);
modal.addEventListener('click', event => { if (event.target === modal) hideLogin(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !modal.hidden) hideLogin(); });

document.getElementById('loginForm').addEventListener('submit', event => {
  event.preventDefault();
  const role = document.getElementById('loginRole').value;
  const roleName = role === 'admin' ? 'Admin' : 'Mahasantri';
  document.getElementById('loginStatus').textContent =
    `Prototipe ${roleName}: autentikasi belum aktif. Tidak ada akun atau kata sandi yang diverifikasi maupun disimpan.`;
});

document.getElementById('contactForm').addEventListener('submit', event => {
  event.preventDefault();
  document.getElementById('contactMessageStatus').textContent =
    'Formulir berhasil dicoba secara lokal, tetapi pesan tidak dikirim atau disimpan. Hubungkan ke backend untuk mengaktifkannya.';
});
