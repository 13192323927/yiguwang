// console.log($('.jia'))
$(function () {
  // $('.cp-img-box').load('../lib/jquery-Fdj/index.html')

  $('.jia').click(function () {
    let val = $('.buy_num').val()
    val++
    $('.buy_num').val(val)
  });
  $('.jian').click(function () {
    let val = $('.buy_num').val()
    val <= 1 ? val = 1 : val--;
    $('.buy_num').val(val)
  });

  //  let url = window.location.search;
  //  console.log(url)

  var url = location.search;
  let id = url.split("=")[1]; //分割取出cid
  $.get('../api/php/register.php', { 'froms': 'commodity', 'target': 'commodityID', 'content': id, 'operation': 'search' }, function (res) {
    let json = eval(res)
    // console.log(json)


     let arr = json[0].previewImg.split('&');
    //  console.log(arr)

    var str = arr.map(function (item) {

      $('.jqzoom img').attr('src', arr[0])
    //  console.log(arr)
      return `
                <li>
                    <img src="${item}" style="border: 1px solid rgb(255, 255, 255); padding: 0px;">
                </li>

                `
    }).join('');
      $('.list-h').html(str)

  })
})