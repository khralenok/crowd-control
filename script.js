// CSS owns motion; JavaScript only coordinates interactive state.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}
menuButton.addEventListener('click', () => {
  menuButton.setAttribute('aria-expanded', String(navigation.classList.toggle('open')));
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});

const reviews = [...document.querySelectorAll('[data-review]')];
let reviewIndex = 0;
function showReview(delta) {
  reviewIndex = (reviewIndex + delta + reviews.length) % reviews.length;
  reviews.forEach((review, index) => { review.hidden = index !== reviewIndex; });
  document.querySelector('#review-count').textContent = `0${reviewIndex + 1} / 0${reviews.length}`;
}
document.querySelector('#review-prev').addEventListener('click', () => showReview(-1));
document.querySelector('#review-next').addEventListener('click', () => showReview(1));

const tabs = [...document.querySelectorAll('.case-tab')];
function showCase(index) {
  tabs.forEach((tab, i) => {
    tab.classList.toggle('active', i === index);
    tab.setAttribute('aria-selected', String(i === index));
    tab.tabIndex = i === index ? 0 : -1;
    document.getElementById(tab.getAttribute('aria-controls')).hidden = i !== index;
  });
}
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => showCase(index));
  tab.addEventListener('keydown', event => {
    const next = { ArrowDown: (index + 1) % tabs.length, ArrowUp: (index + tabs.length - 1) % tabs.length, Home: 0, End: tabs.length - 1 }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    showCase(next);
    tabs[next].focus();
  });
});

document.querySelector('#year').textContent = new Date().getFullYear();
