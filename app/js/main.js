const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', function (e) {
  e.preventDefault();
  popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
  popUp.classList.remove('active');
})

var phoneMask = IMask(
  document.getElementById('phone-mask'), {
    mask: '+{7}(000)000-00-00'
  });


function showPassword() {
  const btn = document.querySelector('.input__btn')
  const input = document.querySelector('.input-password')

  btn.addEventListener('click', () => {
    btn.classList.toggle('active')

    if (input.getAttribute('type') === 'password'){
      input.setAttribute('type', 'text')
    }
    else {
      input.setAttribute('type', 'password')
    }
  })
}

showPassword()

function showPasswordSecond() {
  const btnSecond = document.querySelector('.input__btn-second')
  const inputSecond = document.querySelector('.input-password__second')

  btnSecond.addEventListener('click', () => {
    btnSecond.classList.toggle('active')

    if (inputSecond.getAttribute('type') === 'password'){
      inputSecond.setAttribute('type', 'text')
    }
    else {
      inputSecond.setAttribute('type', 'password')
    }
  })
}

showPasswordSecond()






