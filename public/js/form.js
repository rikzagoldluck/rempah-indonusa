const scriptURL = 'https://script.google.com/macros/s/AKfycbxXc2GfOKgsvJGxhO5INiiOOBc36sPYuI64hRcRg78nancGWL8cZ0XMXw1n8mnNqAbR/exec';
const form = document.forms['submit-to-google-sheet'];

function displayError(error) {
  document.querySelector('.loading').classList.remove('d-block');
  // eslint-disable-next-line no-param-reassign
  document.querySelector('.error-message').innerHTML = error;
  document.querySelector('.error-message').classList.add('d-block');
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelector('.loading').classList.add('d-block');
  document.querySelector('.error-message').classList.remove('d-block');
  document.querySelector('.sent-message').classList.remove('d-block');

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      document.querySelector('.loading').classList.remove('d-block');
      if (response.ok) {
        document.querySelector('.sent-message').classList.add('d-block');
        form.reset();
      }
    })
    .catch((error) => {
      displayError(error);
    });
});
