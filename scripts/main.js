const btn = document.getElementById('mob-menu-btn');

btn.addEventListener('click', () => {
  btn.classList.toggle('animated');
  btn.classList.toggle('not-animated');
});

const jobTitle = document.querySelector('.about__job-title');
let nStrJobTitle = '';
[...jobTitle.innerText].forEach((letter, idx) => {
  nStrJobTitle += `<span class="title-animate animate__animated" style="animation-delay: ${idx / 10}s;">${letter}</span>`;
});
jobTitle.innerHTML = '';
jobTitle.innerHTML = nStrJobTitle;