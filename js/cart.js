$(function () {

    $('#head').load("../html/head.html")
    $('#quick').load("../html/quick.html")
    $('#nav').load("../html/nav.html", function (response) {
        // $('.x').remove();
        // $('.menu').css('border-bottom','0px');
        // $('.wrap').css('display','block');
        // $('.m-1208').attr('data','index')
    })
    $('#Bottom').load("../html/bottom.html")

    if (!document.cookie) {

    } else {
        cookie = document.cookie.split('=');;
        // console.log(cookie);
        accountNumber = cookie[1].split('&');
        // console.log(accountNumber)






        $.get('../api/php/register.php', { 'content': accountNumber[0], 'target': 'uid', 'froms': 'shopping', 'operation': 'search' }, function (res) {
            let json = eval(res);
            var gid = json[0].gid.split('&').join(',')
            var amount = json[0].amount.split('&')
            console.log(res)
            $.get('../api/php/register.php', { 'content': gid, 'target': 'commodityID', 'froms': 'commodity', 'operation': 'searchs' }, function (res2) {
                console.log(res2)
                let json2 = eval(res2)
                str2 = json2.map(function (item, index) {
                    let gids = gid.split(',')
                    let img = item.previewImg.split('&')[0]
                    let price = item.price01.split('&')[0]
                    let scale = item.scale01.split('&')[0]
                    let total = (price * amount[index]).toFixed(1);
                    return `
                    <li data-eq = '${gids[index]}'>
                                        <div class="cart-x">
                                            <input name="chk_goods" type="checkbox" value="" class="cart-checkbox-x fl">
                                        </div>
                                        <div class="cart-nr-li-line">
                                            <div class="cart-nr-li">
                                                <div class="cart-nr-li-img">
                                                    <img src="${img}">
                                                </div>
                                                <div class="cart-nr-li-wz">
                                                    <a href="/goods/detail.action?id=57852727x720mMn1dTkj">${item.commodityName}</a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="li-price red">${price}</div>
                                        <div class="li-num">
                                            <div class="cart-li-num">
                                                <em>
                                                    <input type="button" class="cart-li-num-lf" >
                                                </em> 
                                                    <input type="button " class="cart-li-num-c" value = "${amount[index]}" >
                                                <em>
                                                    <input type="button" class="cart-li-num-ri" >
                                                </em>
                                            </div>
                                        </div>
                                        <div class="li-sub red"> ${total}</div>
                                        <div class="li-w">${scale}</div>
                                        <div class="cart-nr-li-hd-sc">
                                            <a >移入收藏</a>
                                        </div>
                                        <div class="cart-nr-li-hd-de">
                                            <a >删除</a>
                                        </div>
                                    </li>

                    `
                }).join('');
                $('.cart-nr-right').html(str2)


                //加
                $('.cart-nr-right').on('click', '.cart-li-num-lf', function () {
                    let li = $(this).parent().parent().parent().parent()
                    let val = $(li).find('.cart-li-num-c').val();
                    if (val <= 1) {
                        val = 1
                    } else {
                        val--;
                    }
                    $(li).find('.cart-li-num-c').val(val);

                    $(li).find('.li-sub').html(($(li).find('.li-price').html() * val).toFixed(1));
                    SQL()
                    totalPrice()
                })
                //减
                $('.cart-nr-right').on('click', '.cart-li-num-ri', function () {
                    let li = $(this).parent().parent().parent().parent()
                    let val = $(li).find('.cart-li-num-c').val();
                    val++;
                    $(li).find('.cart-li-num-c').val(val);

                    $(li).find('.li-sub').html(($(li).find('.li-price').html() * val).toFixed(1));
                    SQL()
                    totalPrice()
                })

                //全选





                function checked(fh) {
                    let checked = $('.cart-nr-right').find('.cart-checkbox-x')
                    var checkedArr = []
                    var checkindex = []

                    $.each(checked, function (index) {
                        // console.log($(checked[index]).prop('checked') )
                        checkedArr.push($(checked[index]).prop('checked'))
                        if (checkedArr[index] == true) {
                            checkindex.push(index);
                            // console.log(checkindex)
                        }
                    })
                    if (fh == 'arr') {
                        return checkedArr;
                    } else {
                        return checkindex;
                    }
                }





                function totalPrice() {
                    let checkindex = checked()
                    let a = $('.cart-nr-right').find('li')
                    var quantity = 0;
                    var totalPrice = 0;

                    $.each(checkindex, function (index, value) {
                        let shuliang = $(a[value]).find('.cart-li-num-c').val();
                        quantity += Number(shuliang)
                        let zongjia = $(a[value]).find('.li-sub').html();
                        totalPrice += Number(zongjia)
                    })
                    $('.quantity').html(quantity.toFixed(1))
                    $('.totalPrice').html(totalPrice.toFixed(1))
                    $('.cart-nr-zj-js').html(totalPrice.toFixed(1))
                }



                // 判断是否全选
                $('.cart-nr-right').on('change', '.cart-checkbox-x', function () {
                    checkedArr = checked('arr')
                    console.log(checkedArr)
                    if (checkedArr.indexOf(false) == -1) {
                        $('.cart_checkbox').prop('checked', true);
                    } else {
                        $('.cart_checkbox').prop('checked', false);
                    }
                    totalPrice()


                })
                $('.cart_checkbox').change(function () {
                    console.log($(this).prop('checked'))
                    if ($(this).prop('checked') == true) {
                        $('.cart-checkbox-x').prop('checked', true);
                    } else {
                        $('.cart-checkbox-x').prop('checked', false);
                    }
                    totalPrice()
                })


                //修改数值
                $('.cart-li-num-c').change(function () {
                    let li = $(this).parent().parent().parent()
                    let val = $(li).find('.cart-li-num-c').val();
                    $(li).find('.li-sub').html(($(li).find('.li-price').html() * val).toFixed(1));
                    totalPrice();
                    SQL();
                })

                //  删除
                $('.cart-nr-li-hd-de').on('click', 'a', function () {
                    let sc = $(this).parent().parent();
                    // console.log()
                    let index = $(sc).attr('data-eq')


                    $(sc).remove();

                    totalPrice();
                    SQL()
                })

                //SQL
                function SQL() {
                    let inp = $('.cart-nr-right').find('.cart-li-num-c')
                    let ind = $('.cart-nr-right').find('li')
                    var val = [];
                    var id = []
                    $.each(inp, function (index) {
                        val.push($(inp[index]).val())
                        id.push($(ind[index]).attr('data-eq'))
                    });
                    let amount = val.join('&');
                    let gid = id.join('&');
                    $.get('../api/php/register.php',
                        {
                            'content': accountNumber[0],
                            'target': 'uid',
                            'content2': gid,
                            'target2': 'gid',
                            'content3': amount,
                            'target3': 'amount',
                            'froms': 'shopping',
                            'operation': 'xiugia'
                        }, function (res3) { })

                }
            })
        })

    }
})