// small JS for interactive bits
document.addEventListener('DOMContentLoaded', () => {
  // current year
  document.getElementById('year').textContent = new Date().getFullYear();

    // Typing effect cho tên
  const nameEl = document.getElementById('typed-name');
  const fullName = "Nguyễn Trung Đức";
  let i = 0;

  function typeWriter() {
    if (i < fullName.length) {
      nameEl.textContent += fullName.charAt(i);
      i++;
      setTimeout(typeWriter, 120); // tốc độ gõ
    }
  }
  typeWriter();

  // mobile menu (simple)
  const btn = document.getElementById('menu-btn');
  btn.addEventListener('click', () => {
    const nav = document.querySelector('.nav');
    if (!nav) return;
    if (nav.style.display === 'flex') {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.right = '20px';
      nav.style.top = '64px';
      nav.style.background = 'rgba(8,12,20,0.9)';
      nav.style.padding = '12px';
      nav.style.borderRadius = '12px';
      nav.style.boxShadow = '0 10px 30px rgba(2,6,23,0.6)';
    }
  });

  // disable all links with .disabled
  document.querySelectorAll('a.disabled').forEach(a => {
    a.addEventListener('click', e => e.preventDefault());
    a.style.opacity = '0.6';
  });
});
