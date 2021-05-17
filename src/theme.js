const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const refs = {
  input: document.querySelector('.theme-switch__toggle'),
  body: document.querySelector('body'),
};
savedTheme();
refs.input.addEventListener('change', onSwitchThemeHandler);
function savedTheme() {
  refs.body.classList.add(
    localStorage.getItem('theme') === null ? Theme.LIGHT : localStorage.getItem('theme'),
  );
  if (refs.body.classList.value === Theme.DARK) {
    refs.input.checked = true;
  }
}
function onSwitchThemeHandler(e) {
  e.preventDefault();
  if (e.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
    refs.body.classList.replace(Theme.LIGHT, Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    refs.body.classList.replace(Theme.DARK, Theme.LIGHT);
  }
}