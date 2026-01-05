const btn = document.getElementById('mob-menu-btn');

btn.addEventListener('click', () => {
  btn.classList.toggle('animated');
  btn.classList.toggle('not-animated');
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    btn.classList.remove('animated'); 
    btn.classList.add('not-animated');
  });
});

const jobTitle = document.querySelector('.about__job-title');
if (window.innerWidth > 768 && jobTitle) {
  let nStrJobTitle = '';
  [...jobTitle.innerText].forEach((letter, idx) => {
    nStrJobTitle += `<span class="title-animate" style="animation-delay: ${idx / 10}s;">${letter}</span>`;
  });
  jobTitle.innerHTML = '';
  jobTitle.innerHTML = nStrJobTitle;

}