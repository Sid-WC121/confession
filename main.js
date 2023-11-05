const scriptURL = 'https://script.google.com/macros/s/AKfycbzzFv_J2zMftSJOtb09vjAQ6VT5kbmO33RQFmF0kOXcH33_e4JI9NYpCUzMd3xO3NyWJQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

