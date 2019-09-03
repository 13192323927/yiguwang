$(function () {
    //开关
    // $('#phone_tips').html('&nbsp;')
    // <img src="../img/icon/login_error.png">
    //                 <b>请输入正确的手机号码</b>
    num_switch = false;
    pwd_switch = false;
    note_switch = false;
    pwds_switch = false;
    //账号验证
    $('.reg_number').focus(function () {
       $(this).find('.admin-register-ts').html( ' ')
    })
    $('.reg_number').blur(function () {
        let ID = $('.reg_number').val();
        console.log(ID)
        if (!ID) {
            console.log('不能为空');
            $('#phone_tips').html('<img src="../img/icon/login_error.png"><b>请输入正确的手机号码</b>')
            num_switch = false;
        } else {
            let ZZ =/^1[3456789]\d{9}$/;
            if (!ZZ.test(ID)) {
                console.log('请输入字母开头的账号');
                $('#phone_tips').html('<img src="../img/icon/login_error.png"><b>请输入正确的手机号码</b>')
                num_switch = false;
            } else {
                $.get('../api/php/register.php', { 'froms': 'user', 'target': 'ID','content':ID, 'operation': 'search' }, function (res) {
                    if (res >= 1) {
                        console.log('账号已存在');
                        $('#phone_tips').html('<img src="../img/icon/login_error.png"><b>手机号码已被注册</b>')
                        num_switch = false;
                    } else {
                        // console.log(res)
                        console.log('账号可以使用')
                        num_switch = true;
                    }
                }
                )
            }
        }
    })

    //密码验证
    var pwd = '';
    $('.reg_pwd').blur(function () {
        pwd = $('.reg_pwd').val();
        if (!pwd) {
            console.log('密码不能为空');
            $('#pwd_tips').html('<img src="../img/icon/login_error.png"><b>密码不能为空</b>')
            pwd_switch = false;
        } else {
            let ZZ = /^[a-zA-Z]\w{5,17}$/; //(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
            if (!ZZ.test(pwd)) {
                console.log('请输入以字母开头的密码');
                $('#pwd_tips').html('<img src="../img/icon/login_error.png"><b>请输入正确的密码</b>')
                pwd_switch = false;
            } else {
                console.log('密码格式正确');
                pwd_switch = true;
            }
        }
    })
    $('.reg_pwds').blur(function () {
        let pwds =  $('.reg_pwds').val();
        pwds_switch = true;
        if(pwd !== pwds){
            console.log('密码不同')
            $('#t_pwd_tips').html('<img src="../img/icon/login_error.png"><b>两次输入的密码不相同</b>')
            pwds_switch = false;
        }
    })

    //短信验证
    $('.reg_note').click(function () {
        // console.log($('#validcode').val())
        let num = $('.reg_number').val();
        console.log(num)
        $.get('../api/php/duanxin.php', { 'userphone': num }, function (str) {
            let obj = jQuery.parseJSON(str).phonecode;
            let error_code = jQuery.parseJSON(str).message.error_code;
            console.log(error_code)
            // console.log(jQuery.parseJSON(str))
            if (error_code == 0) {
                $('.reg_note').val('重新获取验证码')
                $('#validcode').blur(function () {
                    // console.log(222)
                    let Yz = $('#validcode').val();
                    if (Yz == obj) {
                        console.log('验证码正确');
                        note_switch = true;
                    } else {
                        console.log('验证码出错');

                        note_switch = false;
                    }
                })
            } else {
                alert('手机号码格式错误')
            }
        })
    })




    // 注册

    
    $('.amdin-login-nr-login').click(function () {
        if (num_switch == false || pwd_switch == false || pwds_switch == false || note_switch == false) {
            console.log('信息错误');
        } else {
            let number = $('.reg_number').val();
            let pwd = $('.reg_pwd').val();
            $.get('../api/php/register.php', { 'froms': 'user', 'number': number, 'pwd': pwd,'operation': 'register' }, function (res) {
                console.log(res)
                if (res = true) {
                   
                    alert('注册成功');
                    location.href = '../html/login.html'
                } else {
                    console.log('注册失败')
                }
            })

        }
    })

    //  $('#button1').click
   
})
