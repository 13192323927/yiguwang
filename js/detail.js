// console.log($('.jia'))
$(function () {
    $('.jia').click(function () {
      let val =  $('.buy_num').val()
      val ++
      $('.buy_num').val(val)
    });
    $('.jian').click(function () {
        let val =  $('.buy_num').val()
        val <=1 ? val = 1 : val --;
        $('.buy_num').val(val)
      });
});