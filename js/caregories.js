$(function () {

    




    $('#head').load("../html/head.html", function () {
        let url = location.search;
        let id =decodeURIComponent(url.split("=")[1]) 
        console.log(id)

        if(id !== 'undefined'){
            $.get('../api/php/register.php',
            {
                'content': id,
                'target2': 'commodityName',
                'target': 'category',
                'froms': 'commodity',
                'operation': 'fuzzySearch'
            }, function (res3) {
                var json2 = eval(res3)
                let str = xuanran(json2,id)
                let cons =  $('.m').attr('data-con');
                $('#goods_list').html(str)
                $('.ASC').unbind("click"); //移除click
                $('.DESC').unbind("click");
                $('.ASC').click(function () { 
                   
                    $.get('../api/php/register.php', { 
                        'content': cons,
                        'target2': 'commodityName',
                        'target': 'category',
                        'froms': 'commodity',
                        'operation': 'fuzzySearchPX',
                        'content2': 'price01',
                        'content3':'ASC'
                     }, function (res) {
                        let json = eval(res);
                        let str = xuanran(json,'null')
                        $('#goods_list').html(str,'NULL')
                    })
                 })
                 $('.DESC').click(function () { 
                    $.get('../api/php/register.php', { 
                        'content': cons,
                        'target2': 'commodityName',
                        'target': 'category',
                        'froms': 'commodity',
                        'operation': 'fuzzySearchPX',
                        'content2': 'price01',
                        'content3':'DESC'
                     }, function (res) {
                        let json = eval(res);
                        let str = xuanran(json,'null')
                        $('#goods_list').html(str,'NULL')
                    })
                 })
            })
        }else{
            XR()
        }












        $('#search-bnt').click(function () {
           
            // $.get('../api/php/register.php',
            //     {
            //         'content': con,
            //         'target2': 'commodityName',
            //         'target': 'category',
            //         'froms': 'commodity',
            //         'operation': 'fuzzySearch'
            //     }, function (res3) {
            //         var json2 = eval(res3)
            //         let str = xuanran(json2,con)
            //         let cons =  $('.m').attr('data-con');
            //         $('#goods_list').html(str)
            //         $('.ASC').unbind("click"); //移除click
            //         $('.DESC').unbind("click");
            //         $('.ASC').click(function () { 
                       
            //             $.get('../api/php/register.php', { 
            //                 'content': cons,
            //                 'target2': 'commodityName',
            //                 'target': 'category',
            //                 'froms': 'commodity',
            //                 'operation': 'fuzzySearchPX',
            //                 'content2': 'price01',
            //                 'content3':'ASC'
            //              }, function (res) {
            //                 let json = eval(res);
            //                 let str = xuanran(json,'null')
            //                 $('#goods_list').html(str,'NULL')
            //             })
            //          })
            //          $('.DESC').click(function () { 
            //             $.get('../api/php/register.php', { 
            //                 'content': cons,
            //                 'target2': 'commodityName',
            //                 'target': 'category',
            //                 'froms': 'commodity',
            //                 'operation': 'fuzzySearchPX',
            //                 'content2': 'price01',
            //                 'content3':'DESC'
            //              }, function (res) {
            //                 let json = eval(res);
            //                 let str = xuanran(json,'null')
            //                 $('#goods_list').html(str,'NULL')
            //             })
            //          })
            //     })
        })
    })
    $('#quick').load("../html/quick.html")
    $('#nav').load("../html/nav.html")
    $('#Bottom').load("../html/bottom.html")
    // $('#nav').css('position: absolute,margin:auto,left: 0,right: 0,width:1400px')

    function xuanran(json,con) {
        $('.m').html("共" + json.length + "个商品").attr('data-con',con);
        var str = json.map(function (item) {
            let previewImg = item.previewImg.split('&')[0]
            return `
        <li class="cp-list-ul-li-sel">
        <span class="img">
            <a target="_blank">
                <img src="${previewImg}" width="250px">
            </a>
        </span>
        <span class="price">
            <em>￥${item.price01}</em>
        </span>
        <span class="t">
            <a target="_blank" title="${item.commodityName}">${item.commodityName}</a>
        </span>
        <p>
            <font>自营</font>
            <em>深圳平湖仓</em>
            <em>同城速递</em>
        </p>
        <div class="shop">
            <div class="Spinner">
                <a class="DisDe">
                    <i>-</i>
                </a>
                <input class="Amount" value="1">
                <a class="Increase">
                    <i>+</i>
                </a>


            </div>
            <a class="bth-jrshop">加入购物车</a>
            <div class="clear"></div>
        </div>
    </li>
        `
        }).join('');
        return str;
    }


    function  XR() { 
         $.get('../api/php/register.php', { 'operation': 'suoyou', 'froms': 'commodity' }, function (res) {
        let json = eval(res);
        let str = xuanran(json,'null')
        $('#goods_list').html(str,'NULL')
    })
    $('.ASC').click(function () { 
        $.get('../api/php/register.php', { 
            'operation': 'suoyouPX',
             'froms': 'commodity',
             'content':'price01',
            'content2':'ASC'
         }, function (res) {
            let json = eval(res);
            let str = xuanran(json,'null')
            $('#goods_list').html(str,'NULL')
        })
     })
     $('.DESC').click(function () { 
        $.get('../api/php/register.php', { 
            'operation': 'suoyouPX',
             'froms': 'commodity',
             'content':'price01',
            'content2':'DESC'
         }, function (res) {
            let json = eval(res);
            let str = xuanran(json,'null')
            $('#goods_list').html(str,'NULL')
        })
     })
     }
   

})