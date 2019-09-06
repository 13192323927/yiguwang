$(function () {


   $('#checkBtn').click(function () {
       let num  = $('.admin').val();
       let pwd  = $('.pwd').val();

    console.log(num, pwd)
           $.get('../api/register.php', {
                'number': num, 
                'pwd': pwd, 
                'froms': 'admin', 
                'operation': 'login' 
            }, function (res) {
               console.log(res)
               if (res >= 1) {
                   console.log('登录成功')
                  
                      document.cookie =  'admin' +'='+num+'&'+pwd + ';Path = /' ;
                       location.href = '../html/adminmain.html'
               } else {
                   console.log('登录失败')
               }
           })
       

   })







})

