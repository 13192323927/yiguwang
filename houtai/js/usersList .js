$(function () {
    $('tbody tr td').eq(0).attr('width', '5%')
    $('tbody tr td').eq(1).attr('width', '15%')
    $('tbody tr td').eq(2).attr('width', '15%')
    $('tbody tr td').eq(3).attr('width', '15%')
    $('tbody tr td').eq(4).attr('width', '20%')
    $('tbody tr td').eq(5).attr('width', '30%')
    





    $.get('../php/register.php', { 'operation': 'a' }, function (res) {
        let json = eval(res);
        console.log(json)
        var str = json.map(function (item) {
            return `
            <tr>
                    <td>
                        <input type="checkbox">
                    </td>
                    <td>
                        <input type="text" class="text id"  value="${item.ID}" >
                    </td>
                    <td>
                        <input type="text" class="text pwd" value="${item.pwd}">
                    </td>
                    <td>
                        <input type="text" class="text name" value="${item.name}">
                    </td>
                    <td>
                        <input type="text" class="text num" value="${item.num}">
                    </td>
                    <td>
                        <div class="operation">
                            <a class="set" >修改</a>
                            <a class="Remove" >删除</a>
                            <a class="Edit" >联系</a>
                        </div>
                    </td>
                </tr>
            `
        }).join('');
        $('tbody').html(str)
        $('.text').attr('disabled', 'false');
        $('.set').click(function () {
            // console.log($(this).parent().parent().siblings().children($('.text')))
            let text = $(this).parent().parent().siblings().children($('.text'));
            $(text).removeAttr('disabled').attr('style','border:1px solid #000');


            // $('.set').html('确定').click(function () {
            //     // confirm('确认修改信息？')
            //     // console.log(confirm('确认修改信息？'))
            //     if (confirm('确认修改信息？') == true) {

            //     }
            // });

        })
    })



})