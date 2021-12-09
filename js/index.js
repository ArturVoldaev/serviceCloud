/*if (window.innerWidth <= 1024) {
  $('.slider').slick();
 }
*/
const feedback = document.getElementById('form-select');
const feedbackSelect = feedback.querySelector('.special-input__select');
const feedbackInput = feedback.querySelector('.special-input__input');

feedbackSelect.addEventListener('change', function (evt) {
  feedbackInput.value = `+ ${evt.target.value}`;
});

const useItForm = document.getElementById('down-form-lesect');
const useItFormSelect = useItForm.querySelector('.special-input__select');
const useItFormInput = useItForm.querySelector('.special-input__input');

useItFormSelect.addEventListener('change', function (evt) {
  useItFormInput.value = `+ ${evt.target.value}`;
});

$(document).ready(function () {
  $(".slider").slick({
    arrows:true,
    dots:true,
    autoplay:true,
    infinity: true,
    autoplaySpeed:1000,
    slidesToShow: 1,
    centerMode: false,
    draggable: true,
    variableWidth: true,
  });
});

$(document).ready(function () {
  $(".slider-mobile").slick({
    arrows:false,
    dots:true,
    autoplay:true,
    infinity: true,
    autoplaySpeed:1000,
    slidesToShow: 1,
    centerMode: false,
    draggable: true,
    variableWidth: true,
  });
});

$(document).ready(function(){
  $(".burger").click(function (e) { 
    e.preventDefault();
    $(".menu-burger__list,.burger,.menu-burger").toggleClass("active")
  });
})


function changeTitleforTablet(father, aim, newWord, oldWord) {
  let section = document.querySelector(father);
  let title = section.querySelector(aim);
  let colorSpan = document.getElementById('orange');
  if (document.documentElement.clientWidth <= 900) {
    title.innerHTML = newWord;
    colorSpan.style.color = 'orange';
  } 
  else {
    title.textContent = oldWord;
  }
}
function changeTitleformobile(father, aim, newWord, oldWord) {
  let section = document.querySelector(father);
  let title = section.querySelector(aim);
  let colorSpan = document.getElementById('orange');
  if (document.documentElement.clientWidth <= 400) {
    title.innerHTML = newWord;
    colorSpan.style.color = 'orange';
  } 
  else {
    title.textContent = oldWord;
  }
}

changeTitleforTablet('.comparing','.sub-title-less', 'Отличия функционала версий ПРОФ и КОРП', 'Сравнение функционала версий ПРОФ и КОРП');
changeTitleformobile('.form','.sub-title-less', `Цена на 1С: Управление сервисным центром в облаке <span><br> от 760 ₽ в месяц</span>`, 'Цена на 1С: ЗУП 8 онлайн от 760 ₽ в месяц');

