/* ── Hamburger menu ──────────────────────────────────────────── */
const navToggle  = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');

navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  mobileMenu.classList.toggle('hidden');
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ── Form validation ─────────────────────────────────────────── */
function showError(id, message) {
  const input = document.getElementById(id);
  const error = document.getElementById(id + '-error');
  input.classList.add('field-error');
  if (error) {
    error.textContent = message;
    error.classList.remove('hidden');
  }
}

function clearError(id) {
  const input = document.getElementById(id);
  const error = document.getElementById(id + '-error');
  if (input) input.classList.remove('field-error');
  if (error) error.classList.add('hidden');
}

['name', 'email', 'area', 'message'].forEach(id => {
  const el = document.getElementById(id);
  el.addEventListener('input',  () => clearError(id));
  el.addEventListener('change', () => clearError(id));
});

document.getElementById('rodo').addEventListener('change', () => {
  document.getElementById('rodo-error').classList.add('hidden');
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const nameVal    = document.getElementById('name').value.trim();
  const emailVal   = document.getElementById('email').value.trim();
  const areaVal    = document.getElementById('area').value;
  const messageVal = document.getElementById('message').value.trim();
  const rodoVal    = document.getElementById('rodo').checked;

  let valid = true;

  if (!nameVal) {
    showError('name', 'Imię i nazwisko jest wymagane.');
    valid = false;
  }

  if (!emailVal || !emailVal.includes('@')) {
    showError('email', 'Podaj poprawny adres e-mail (wymagany znak @).');
    valid = false;
  }

  if (!areaVal) {
    showError('area', 'Wybierz dziedzinę prawa.');
    valid = false;
  }

  if (!messageVal) {
    showError('message', 'Opis sprawy jest wymagany.');
    valid = false;
  }

  if (!rodoVal) {
    const rodoError = document.getElementById('rodo-error');
    rodoError.textContent = 'Zgoda na przetwarzanie danych jest wymagana.';
    rodoError.classList.remove('hidden');
    valid = false;
  }

  if (valid) {
    const success = document.getElementById('form-success');
    success.classList.remove('hidden');
    success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    this.reset();
    ['name', 'email', 'area', 'message'].forEach(id => clearError(id));
  }
});
