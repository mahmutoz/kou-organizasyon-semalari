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

  // Draggable page
  (function ($) {
    $.fn.drags = function (opt) {
      opt = $.extend({ handle: '' }, opt);

      if (opt.handle === '') {
        var $el = this;
      } else {
        var $el = this.find(opt.handle);
      }

      return $el
        .css('cursor', opt.cursor)
        .on('mousedown', function (e) {
          if (opt.handle === '') {
            var $drag = $(this).addClass('draggable');
            $(this).css('cursor', 'grabbing');
          } else {
            var $drag = $(this)
              .addClass('active-handle')
              .parent()
              .addClass('draggable');
          }
          var z_idx = $drag.css('z-index'),
            drg_h = $drag.outerHeight(),
            drg_w = $drag.outerWidth(),
            pos_y = $drag.offset().top + drg_h - e.pageY,
            pos_x = $drag.offset().left + drg_w - e.pageX;
          $drag
            .css('z-index', 10)
            .parents()
            .on('mousemove', function (e) {
              $('.draggable')
                .offset({
                  top: e.pageY + pos_y - drg_h,
                  left: e.pageX + pos_x - drg_w,
                })
                .on('mouseup', function () {
                  $(this).removeClass('draggable').css('z-index', z_idx);
                });
            });
          e.preventDefault(); // disable selection
        })
        .on('mouseup', function () {
          if (opt.handle === '') {
            $(this).removeClass('draggable');
            $(this).css('cursor', 'grab');
          } else {
            $(this)
              .removeClass('active-handle')
              .parent()
              .removeClass('draggable');
          }
        });
    };
  })(jQuery);
  $('.chart-container').drags();

  // Line-2 Dropdown
  $('.dropdown-1 input').change(function (e) {
    var checked = $('.line-2 :checked').length;
    $('.line-2').addClass('h43');
    if (checked == 0) {
      $('.line-2').removeClass('h43 h52');
    }
  });
  $('.dropdown-2 input').change(function (e) {
    var checked = $('.line-2 :checked').length;
    $('.line-2').addClass('h52');
    if (checked == 0) {
      $('.line-2').removeClass('h43 h52');
    }
  });
});
