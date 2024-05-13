let formData = {
  email: '',
  message: '',
};

const storedData = localStorage.getItem('feedback-form-state');
if (storedData) {
  formData = JSON.parse(storedData);
  document.querySelector('input[name="email"]').value = formData.email;
  document.querySelector('textarea[name="message"]').value = formData.message;
}

document.querySelector('.feedback-form').addEventListener('input', event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

document.querySelector('.feedback-form').addEventListener('submit', event => {
  event.preventDefault();

  if (formData.email.trim() === '' || formData.message.trim() === '') {
    alert('Fill please all fields');
    return;
  }

  console.log('Form Data:', formData);
  localStorage.removeItem('feedback-form-state');
  formData = {
    email: '',
    message: '',
  };

  document.querySelector('input[name="email"]').value = '';
  document.querySelector('textarea[name="message"]').value = '';
});

document.querySelectorAll('form > label').forEach(label => {
  if (!label.classList.contains('form-label')) {
    label.classList.add('form-label', 'form-label:not(:last-child)');
  }
});

document.querySelectorAll('form > label > input').forEach(input => {
  if (!input.classList.contains('form-input')) {
    input.classList.add('form-input');
  }
});

const formBtn = document.querySelector('button');

formBtn.classList.add('form-btn');
