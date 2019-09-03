$.get('../php/register.php', { 'operation': 'a' }, function (res) {
    let json = eval(res);
    console.log(json)
})