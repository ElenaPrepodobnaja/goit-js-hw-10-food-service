
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

 if(localStorage.getItem('theme') === Theme.DARK) {
      refs.body.classList.toggle(Theme.DARK);
      refs.input.checked = true;
     } else {
      refs.body.classList.toggle(Theme.LIGHT);
      refs.input.checked = false;
};
};

function onSwitchThemeHandler(e) {
    e.preventDefault();

    if(e.target.checked) {
        localStorage.setItem('theme', Theme.DARK);
        refs.body.classList.remove(Theme.LIGHT);
        refs.body.classList.add(localStorage.getItem('theme'));
    } else {
        localStorage.setItem('theme', Theme.LIGHT);
        refs.body.classList.remove(Theme.DARK);
    };
};
