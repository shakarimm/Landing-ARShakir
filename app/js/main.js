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
  let btn = document.querySelector('.input__btn')
  let input = document.querySelector('.input-password')

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
  let btnSecond = document.querySelector('.input__btn-second')
  let inputSecond = document.querySelector('.input-password__second')

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




function checkForm()
{
    const inputMail = document.querySelector('.input-mail').value;
    const inputValue = document.querySelector('.input-password').value
    const inputSecondValue = document.querySelector('.input-password__second').value
    const inputTel = document.querySelector('.input-number').value;

    const cansubmit = (inputMail.length > 0 && inputValue.length > 0 && inputSecondValue.length > 0 && inputTel.length > 0);
    document.getElementById("myButton").disabled = !cansubmit;
};

$('.menu__btn').on('click', function () {
  $('.menu__list').toggleClass('menu__list--active')
});