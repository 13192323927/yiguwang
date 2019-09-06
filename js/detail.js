
$(function () {
  $('#head').load("../html/head.html")
  $('#quick').load("../html/quick.html")
  $('#nav').load("../html/nav.html")
  $('#Bottom').load("../html/bottom.html")
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


  var url = location.search;
  let id = url.split("=")[1]; //分割取出cid
  $.get('../api/php/register.php', { 'froms': 'commodity', 'target': 'commodityID', 'content': id, 'operation': 'search' }, function (res) {
    let json = eval(res)
    $('.cp-attr').attr('data-id',json[0].commodityID)

    let arr = json[0].previewImg.split('&');

    var str = arr.map(function (item) {

      $('.jqzoom img').attr('src', arr[0])
      return `
      <li class="">
                                <img src="${item}">
       </li>
                `
    }).join('');
    $('.list-h').html(str)

    $('.cp-attr h3').html(json[0].commodityName)
    $('.list-h').on('click','li',function () { 
      $(this).addClass('libox')
      .siblings().removeClass('libox');
  
    let img = $(this).find('img').attr('src');
    $('.jqzoom').find('img').attr('src',img)
  })



    $('.jqzoom').on('mousemove','img',function (e) {
      let img = $(this).attr('src');
      let imgs =' url('+img+') '
      $('.jqzooms').css('background',imgs + 'no-repeat')
      $('.jqzooms').css('display','block')
      var parentOffset = $(this).parent().offset(); 
    var relX =parseInt( e.pageX - parentOffset.left);
    var relY =parseInt( e.pageY - parentOffset.top);
    $('.jqzooms').css('backgroundPosition','-'+relX +'px ' +'-'+ relY + 'px');
    }).mouseout(function () {
      $('.jqzooms').css('display','none')
      }) 
   




















    let arr2 = json[0];
    let gg1 = [];
    gg1.push(arr2.scale01, arr2.price01, arr2.originalPrice01)
    let gg2 = []
    gg2.push(arr2.scale02, arr2.price02, arr2.originalPrice02)

    let gg = [gg1, gg2];

    if (gg[1][1] == null) {
      gg.pop();
    }

    var str2 = gg.map(function (item) {
      return `
        <li class="" style="font-size:10px" data-price="${item[1]}" data-original= "${item[2]}">${item[0]}</li>
      `
    }).join(' ');
    $('.specification').html(str2);

    $('.specification ').on('click','li',function () { 
      $(this).addClass('c').siblings().removeClass('c')
     })
 
    $('.jg em font').html(json[0].price01)
    $('.jg  i').html(json[0].originalPrice01)


    $('.specification').on('click', '.c', function () {
      $('.jg em font').html($(this).attr('data-price'));
      $('.jg  i').html($(this).attr('data-original'))
    })






    let arr3 = arr2.details.split('&')
    //  console.log(arr3)
    // console.log($('#defParam').find('dd').eq(0))

    $.each(arr3, function (indexInArray, valueOfElement) {
      //  console.log(indexInArray, valueOfElement)
      $('#defParam').find('dd').eq(indexInArray).html(valueOfElement);
      $('#listParam').find('dd').eq(indexInArray).html(valueOfElement);

    });
    let arr4 = arr2.detailsImg.split('&');
    let str4 = arr4.map(function (item) {
      return `
         <img src="${item}">
         `
    }).join('');
    $('#descInfo').html(str4)

    console.log(arr2)
  })
  



  $('#desc_1').click(function () {
    $('#goodsDesc').css('display', ' block');
    $('#listParam').css('display', ' none');
    $('#serveDesc').css('display', ' none');
    $(this).addClass('cur').siblings().removeClass('cur')
  })
  $('#desc_2').click(function () {
    $('#goodsDesc').css('display', ' none');
    $('#listParam').css('display', ' block');
    $('#serveDesc').css('display', ' none');
    $(this).addClass('cur').siblings().removeClass('cur')
  })
  $('#desc_3').click(function () {
    $('#goodsDesc').css('display', ' none');
    $('#listParam').css('display', ' none');
    $('#serveDesc').css('display', ' block');
    $(this).addClass('cur').siblings().removeClass('cur')
  })






  $.get('../api/php/register.php', { 'froms': 'commodity', 'content': '5','operation': 'random' }, function (res) {
    let json = eval(res)
    var str = json.map(function (item) {
        let previewImg = item.previewImg.split('&')[0]
        return `
        <li>
                    <li class="cp-juijian" style="float: left; width: 220px;">
                            <div class="img">
                                <a href="">
                                    <img src="${previewImg}">
                                </a>
                            </div>
                            <em>￥${item.price01}</em>
                        </li>
                                    
        `
     }).join('');
    //  console.log(str)
     $('.swiper-slide2').html(str)
    })
    $.get('../api/php/register.php', { 'froms': 'commodity', 'content': '5','operation': 'random' }, function (res) {
      let json = eval(res)
      var str = json.map(function (item) {
          let previewImg = item.previewImg.split('&')[0]
          return `
          <li>
                      <li class="cp-juijian" style="float: left; width: 220px;">
                              <div class="img">
                                  <a href="">
                                      <img src="${previewImg}">
                                  </a>
                              </div>
                              <em>￥${item.price01}</em>
                          </li>
          `
       }).join('');
      //  console.log(str)
       $('.swiper-slide3').html(str)
      })
    
  

      // 加入购物车
      $('.btn-gwc').click(function () { 
        let sl = $('.buy_num').val();
        let id = $('.cp-attr').attr('data-id');
        $.get('../api/php/register.php', { 'content': accountNumber[0], 'target': 'uid', 'froms': 'shopping', 'operation': 'search' }, function (res) {
          let json = eval(res);
          var gid = json[0].gid.split('&');
          var amount = json[0].amount.split('&');
        
           if(gid.indexOf(id)  == -1){
               gid.push(id);
               amount.push(sl);
           }else{
             let ind =  gid.indexOf(id);
              amount[ind] = Number(amount[ind]) + Number(sl);
           }
          gids = gid.join('&');
          amounts = amount.join('&');

            $.get('../api/php/register.php',
                {
                    'content': accountNumber[0],
                    'target': 'uid',
                    'content2': gids,
                    'target2': 'gid',
                    'content3': amounts,
                    'target3': 'amount',
                    'froms': 'shopping',
                    'operation': 'xiugia'
                }, function (res3) { })


        })
       })
})


