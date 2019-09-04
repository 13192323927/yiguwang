$(function () { 



    $('#head').load("../html/head.html")



    $('#quick').load("../html/quick.html")
    $('#nav').load("../html/nav.html",function (response) { 
        $('.x').remove();
        $('.menu').css('border-bottom','0px');
        $('.wrap').css('display','block');
        $('.m-1208').attr('data','index')
     })


    $.get('./api/php/register.php', { 'froms': 'commodity', 'content': '5','operation': 'random' }, function (res) {
    let json = eval(res)
    var str = json.map(function (item) {
        // console.log(item) 
        let previewImg = item.previewImg.split('&')[0]
        return `
        <li>
                                        <a>
                                            <i class="img">
                                                <img src="${previewImg}" width="190px" height="190px">
                                            </i>
                                            <span class="bt">${item.category}</span>
                                            <span class="jg">
                                                <em>￥ ${item.price01}</em>
                                                <i>￥ ${item.originalPrice01}</i>
                                            </span>
                                        </a>
                                    </li>
        `
     }).join('');
    //  console.log(str)
     $('.clone').html(str)
    })

    $.get('./api/php/register.php', { 'froms': 'commodity','target':'category', 'content': '新鲜水果','operation': 'fuzzySearch' }, function (res) {
        let json = eval(res)
        var str2 = json.map(function (item) {
            // console.log(item) 
            let previewImg = item.previewImg.split('&')[0]
            return `
            <li data-id = '${item.commodityID}'>
                        <div class="img" >
                            <a target="_blank">
                                <img src="${previewImg}" width="180px" height="180px" title="">
                            </a>
                        </div>
                        <p>
                            <em style="height: 30px;">
                                <a title="" target="_blank" style="font-size:14px">${item.commodityName}</a>
                            </em>
                            <span>
                                ￥
                                <i>${item.price01}</i>
                                <i class="ri">￥${item.originalPrice01}</i>
                            </span>
                        </p>
                    </li>
            `
         }).join('');
        //  console.log(str2)
          $('.bj_bj01 ul').html(str2 + str2+str2 + str2 + '<div class="clear"></div>')
    })
    $.get('./api/php/register.php', { 'froms': 'commodity','target':'category', 'content': '绿色菜篮','operation': 'fuzzySearch' }, function (res) {
        let json = eval(res)
        var str2 = json.map(function (item) {
            // console.log(item) 
            let previewImg = item.previewImg.split('&')[0]
            return `
            <li data-id = '${item.commodityID}'>
                        <div class="img">
                            <a target="_blank">
                                <img src="${previewImg}" width="180px" height="180px" title="">
                            </a>
                        </div>
                        <p>
                            <em style="height: 30px;">
                                <a title="" target="_blank" style="font-size:14px">${item.commodityName}</a>
                            </em>
                            <span>
                                ￥
                                <i>${item.price01}</i>
                                <i class="ri">￥${item.originalPrice01}</i>
                            </span>
                        </p>
                    </li>
            `
         }).join('');
        //  console.log(str2)
          $('.bj_bj02 ul').html(str2 + str2 + '<div class="clear"></div>')
    })


        $('.products-box').on('click','li',function(){
           let id = $(this).attr('data-id');
        //    location.href = '../'
        let url = 'http://localhost:1009/html/detail.html'+'?'+'ID='+id;
        location.href = url;
            
        })
 })