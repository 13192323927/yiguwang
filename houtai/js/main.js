$(function () {
    let cookie = getCookie('admin');

    if (cookie) {
        cookie = document.cookie.split('=');
        accountNumber = cookie[1].split('&');
        // console.log(accountNumber[0])

        $('#profile-messages .text').html(`欢迎你,${accountNumber[0]}`);
        // console.log('22')
    } else {
        alert('请先登录')
        location.href = '../html/adminlogin.html'
        $('#profile-messages .text').html('您没未登录,请先').append('<a style="color:#fff" href="../html/adminlogin.html">登录<a/>');  
    }
    $('.out a').click(function () {
        removeCookie('admin');
        location.href = '../html/adminlogin.html';
    })

    console.log($('.widget-content table'))
   
})