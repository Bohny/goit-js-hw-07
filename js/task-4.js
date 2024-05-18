const form = document.querySelector('.login-form');

form.addEventListener('submit', handlerSubmit);

function handlerSubmit(event) {
  event.preventDefault();
  const email = event.currentTarget.elements.email.value.trim();
  const password = event.currentTarget.elements.password.value.trim();
  if (email === '' || password === '') {
    return alert('All form fields must be filled in');
  }
  console.log({ email, password });
  event.currentTarget.reset();
}

//.currentTarget (event) - той елемент на якому спрацювала подія
//preventDefault(); - відміна подведінкі за змовчуванням

// form.addEventListener('input', handlerInput);

// function handlerInput(event) {
//   console.log(event.target.value);
// }
