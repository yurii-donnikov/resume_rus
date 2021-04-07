// --
import $ from './jquery-3.5.1.min.js';
global.jQuery = $;
global.$ = $;
// --


$(document).ready(function () {
  //прикрепляем клик по заголовкам acc-head
  $('.acc-head').on('click', f_acc);
  if (window.screen.width <= 820) {
    $('.acc-body').hide()
  }
});

function f_acc() {
  if (window.screen.width <= 820) {
    //скрываем все кроме того, что должны открыть
    $('.acc-body').not($(this).next()).slideUp(500);
    // открываем или скрываем блок под заголовком, по которому кликнули
    $(this).next().slideToggle(700);
  }
}
