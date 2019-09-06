$(function () {
    if (!document.cookie) {

    } else {
        cookie = document.cookie.split('=');;
        // console.log(cookie);
        accountNumber = cookie[1].split('&');
        // console.log(accountNumber)
        $.get('../api/php/register.php', { 'number': accountNumber[0], 'pwd': accountNumber[1], 'froms': 'user', 'operation': 'login' }, function (res) {

            // console.log(res)
            if (res == 1) {
                // $('.name').html( accountNumber[0]);
                // $('.logout').click(function(){
                //  $.removeCookie('accountNumber',{ path: '/'});
                // })
               
                // var str = accountNumber.map(function (item) {
                //     console.log(accountNumber[0])
                //      return `
                       
                //      `
                //  }).join('');
                //  $('').html(str)



                $('.personal').html(
                    `
                    <li>
                        <a href="#" style="color:#58bc58">${accountNumber[0 ]}</a>
                    </li>
                    <li>
                        <a href="../html/cart.html">购物车</a>
                    </li>
                    <li class = 'exit'>退出</li>
                    <li class="erwm">关注依谷网
                        <img src="../img/icon/wx.jpg" class="erwmimg" width="250px" height="298px">
                    </li>
                    <li>
                        <font color="green">食品经营许可</font>
                    </li>
                    `
                )


                $('.exit').click(function (param) {  
                $.removeCookie('accountNumber',{ path: '/'});
                // location.reload([true])
                location.href="../index.html"
                })
             }
         })
        }
          $('#search-bnt').click(function () {
            let con = $('#searchKey').val();
            let url = '../html/categories.html'+'?'+'ID='+con;
            location.href = url;
            
        })
     })
 