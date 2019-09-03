$(function () {
     let code_switch = false;
    // 验证码
    $('.code').createCode({
        len: 4
    });

    $('.input-code').blur(function () {
        if ($(this).val().toLowerCase() !== $('.code').children('input').val().toLowerCase().split('').reverse().join('')) {
            console.log('验证码不正确')
            code_switch = false;
        } else {
            console.log('验证通过')
            code_switch = true;
        }
    })


    //是否免登录
    $('.squaredTwo').click(function () {

        let checkbox = $('#squaredTwo').prop('checked');
        if (checkbox == true) {
            $('.squaredTwo label a').css('opacity', '1')
        } else {
            $('.squaredTwo label a').css('opacity', '0.1')
        }
    })


    $('.amdin-login-nr-login').click(function () {
        let num  = $('.log_num').val();
        let pwd  = $('.log_pwd').val();
        console.log(num,pwd,code_switch);
        
        if(code_switch == true){
            $.get('../api/php/register.php', { 'number': num, 'pwd': pwd, 'froms': 'user', 'operation': 'login' }, function (res) {
                console.log(res)
                if (res >= 1) {
                    console.log('登录成功')
                    if($('#squaredTwo').prop('checked') == true){
                        var   date = new Date();  
                        date.setDate(date.getDate() +7); 
                    }else{
                        data = ' ';
                    }
                       document.cookie =  'accountNumber' +'='+num+'&'+pwd + ';Path = /' + ';expires='+date;
                        location.href = '../index.html'
                } else {
                    console.log('登录失败')
                }
            })
        }

    })







})


