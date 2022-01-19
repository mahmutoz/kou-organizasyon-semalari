$(document).ready(function () {
  // Zoom in / zoom out
  $('#chartMinus').on('click ', function () {
    let size = parseInt($('.chart-container').css('font-size'));
    if (size > 8) $('.chart-container').css('font-size', --size);
  });
  $('#oneToOne').on('click ', function () {
    $('.chart-container').css({ 'font-size': '10px' });
  });
  $('#chartPlus').on('click ', function () {
    let size = parseInt($('.chart-container').css('font-size'));
    if (size < 20) $('.chart-container').css('font-size', ++size);
  });
});
