$(function () { 


    $('#head').load("../html/head.html")
    $('#quick').load("../html/quick.html")
    $('#nav').load("../html/nav.html")
    $('#Bottom').load("../html/bottom.html")
    // $('#nav').css('position: absolute,margin:auto,left: 0,right: 0,width:1400px')
    $.get('../api/php/register.php',{'operation':'suoyou','froms':'commodity'},function (res) { 
        //    console.log(res)
        let json = eval(res);
        console.log(json.length);
        $('.m').html("共"+json.length+"个商品");
        
        var str = json.map(function (item) {
           let previewImg = item.previewImg.split('&')[0]
           console.log(json)
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
        $('#goods_list').html(str)
     })
 })