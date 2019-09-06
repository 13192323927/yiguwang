/*
 * @Description: 生成随机颜色randomColor(type)
 * @Author: Haowei
 * @Date: 2019-07-23 16:06:57
 * @LastEditTime: 2019-07-23 19:18:04
 * @LastEditors: Please set LastEditors
 */
function randomColor(type) {
    var result = '';
    if (type == 'rgb') {
        // function randNumColor() {
        //     var n = parseInt(Math.random() * 256);
        //     return n
        // }
        var r = parseInt(Math.random() * 256);
        var g = parseInt(Math.random() * 256);
        var b = parseInt(Math.random() * 256);
        result = 'rgb(' + r + ',' + g + ',' + b + ')';
        return result
    }
    else if (type == 16) {
        result += '#'
        var html = '0123456789abcdef'
        for (var i = 0; i < 6; i++) {
            result += html[parseInt(Math.random() * 16)];
        }
        return result
    }
}

/*
 * @Description: 生成随机验证码randomCode(n)
 * @Author: Haowei
 * @Date: 2019-07-23 16:06:57
 * @LastEditTime: 2019-07-23 17:10:03
 * @LastEditors: Please set LastEditors
 */


function randomCode(n) {
    var html = '0123456789zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP';
    var res = '';
    for (var i = 0; i < n; i++) {
        res += html[parseInt(Math.random() * html.length)]
    }
    return res;
}



/*
 * @Description: 生成任意范围随机数randomNum(min,max)
 * @Author: Haowei
 * @Date: 2019-07-23 16:06:57
 * @LastEditTime: 2019-07-23 17:10:03
 * @LastEditors: Please set LastEditors
 */

function randomNum(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min)
}

/*
 * @Description: 获取实参里面最大的值并返回 getMax()
 * @Author: Haowei
 * @Date: 2019-07-23 16:06:57
 * @LastEditTime: 2019-07-23 17:10:03
 * @LastEditors: Please set LastEditors
 */

function getMax() {
    var max = 0;
    for (var i = 0; i < arguments.length; i++) {
        if (i == 0) {
            max = arguments[i];
        }
        if (max < arguments[i + 1]) {
            max = arguments[i + 1];
        }
    }
    return max;
}

/*
 * @Description: 阶乘运算factorial(n)
 * @Author: Haowei
 * @Date: 2019-07-23 16:06:57
 * @LastEditTime: 2019-07-23 17:10:03
 * @LastEditors: Please set LastEditors
 */

function factorial(n) {
    if (n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}


/*
 * @Description: 去重函数返回数组
 * @Author: Haowei
 * @Date: 2019-07-23 16:06:57
 * @LastEditTime: 2019-07-23 17:10:03
 * @LastEditors: Please set LastEditors
 */
function norepeat(arr) {
    var a = [];
    arr.forEach(function (item) {
        if (a.indexOf(item) == -1) {
            a.push(item);
        }
    })
    return a;
}

/*
 * @Description: 过滤敏感字
 * @Author: Haowei
 * @Date: 2019-07-23 16:06:57
 * @LastEditTime: 2019-07-23 17:10:03
 * @LastEditors: Please set LastEditors
 */
function filterStr(str) {
    var minGan = ['妈的', '操', 'fuck', 'tmd', '他妈的', '傻逼', '叼毛'];
    for (var i = 0; i < minGan.length; i++) {
        var word = minGan[i];
        var reg = new RegExp(word, 'ig');
        var str = str.replace(reg, '***');
    }
    return str

}

/*
 * @Description: 参数和对象互转
 * @Author: Haowei
 * @Date: 2019-07-23 16:06:57
 * @LastEditTime: 2019-07-23 17:10:03
 * @LastEditors: Please set LastEditors
 * name=laoxie&age=18&sex=male
 */

function strToObj(str) {
    var a = [];
    var obj = {};
    a = str.split('&');
    a.forEach(function (item) {
        var a2 = [];
        a2 = item.split('=');
        obj[a2[0]] = a2[1];
    })
    return obj;
}

function objToStr(obj) {
    var html = '';
    for (var i in obj) {
        html += i + '=' + obj[i] + '&';
    }
    html = html.slice(0, -1);
    return html
}

/*
 * @Description: 不足10补零
 * @Author: Haowei
 * @Date: 2019-07-23 16:06:57
 * @LastEditTime: 2019-07-23 17:10:03
 * @LastEditors: Please set LastEditors
 * name=laoxie&age=18&sex=male
 */
function toDb(num) {
    var html = '';
    if (num < 10) {
        html += '0' + num;
    } else {
        html = '' + num;
    }
    return html;
}


/*
 * @Description: 把秒转成天、时、分、秒
 * @Author: Haowei
 * @Date: 2019-07-23 16:06:57
 * @LastEditTime: 2019-07-23 17:10:03
 * @LastEditors: Please set LastEditors
 * name=laoxie&age=18&sex=male
 */

function secondToTime(sec) {
    var days = parseInt(sec / 60 / 60 / 24);
    var hours = parseInt(sec / 60 / 60 % 24);
    var mins = parseInt(sec / 60 % 60);
    var secs = parseInt(sec % 60);
    var obj = {};
    obj.days = days;
    obj.hours = hours;
    obj.mins = mins;
    obj.secs = secs;
    return obj;
}

/*
 * @Description: 封装设置和获取样式
 * @Author: Haowei
 * @Date: 2019-07-23 16:06:57
 * @LastEditTime: 2019-07-23 17:10:03
 * @LastEditors: Please set LastEditors
 * name=laoxie&age=18&sex=male
 */

function css() {
    if (arguments.length == 2) {
        if (getComputedStyle(arguments[0], false)[arguments[1]]) {
            /*
                *高级浏览器
            */
            return getComputedStyle(arguments[0], false)[arguments[1]];
        } else {
            return arguments[0].currentStyle[arguments[1]];
        }
    }
    if (arguments.length == 3) {
        arguments[0].style[arguments[1]] = arguments[2];
    }
}

/*
 * @Description: 封装纪元时间毫秒数转成 xx年xx月xx日xx时xx分xx秒
 * @Author: Haowei
 * @Date: 2019-07-23 16:06:57
 * @LastEditTime: 2019-07-23 17:10:03
 * @LastEditors: Please set LastEditors
 * name=laoxie&age=18&sex=male
 */
//60*60*24*
function mSectoNormTime(mSec) {
    var date = new Date(mSec);
    var time = '';
    time = date.getFullYear() + '年' + (date.getMonth() + 1) + '月' + date.getDate() + '日' + date.getHours() + '时' + date.getMinutes() + '分' + date.getSeconds() + '秒';
    return time;
}

/*
* @Description: 封装正则验证
* @Author: Haowei
* @Date: 2019-07-23 16:06:57
* @LastEditTime: 2019-07-23 17:10:03
* @LastEditors: Please set LastEditors
* name=laoxie&age=18&sex=male
*/

var checkReg = {
    email: function (str) {
        var reg = /^[\w&%$#!\-]+@[\w&%$#!\-]+\.[a-zA-Z]+$/;
        return reg.test(str);
    },
    telphone: function (str) {
        var reg = /^[1][3-9]\d{9}$/;
        return reg.test(str);
    },
    username: function (str) {
        var reg = /^[a-z][a-zA-Z0-9]{5,11}$/;
        return reg.test(str);
    },
    nickname: function (str) {
        var reg = /^[\u2E80-\u9FFF]+$/;
        return reg.test(str);
    },
    identity: function (str) {
        var reg = /^(\d{17}|\d{14})[\dX]$/;
        return reg.test(str);
    },
    birthday: function (str) {
        var reg = /^\d{4}([\/\-])?\d{1,2}([\/\-])?\d{1,2}$/;
        return reg.test(str);
    },
    password: function (str) {
        var reg = /^\S{6,18}$/;
        return reg.test(str);
    }
}



function yanZheng(input, output, name, mes) {
    input.onblur = function () {
        var inputname = input.value.trim();
        if (inputname) {//非空判断
            if (checkReg[name](inputname)) {
                output.innerHTML = mes.success;
                output.style.color = 'green';
                input.istrue = true;
            } else {
                output.innerHTML = mes.failure;
                output.style.color = 'red';
                input.istrue = false;
            }

        } else {
            output.innerHTML = mes.null;
            output.style.color = 'red';
            input.istrue = false;
        }
    }
}


/*
	运动框架封装：startMove()过渡    jq animate()
	最终版：多对象，多属性，链式运动框架(运动队列)
	参数一：对象名
	参数二：属性，目标值  键名：属性名，键值：目标值    {'width':200,'heigth':400}  实现：宽度和高度一起改变，宽度变成200，高度变成400
	参数三：回调函数(可选参数)
 */

function startMove(obj, json, fnend) {

    clearInterval(obj.timer); //防止定时器叠加
    obj.timer = setInterval(function () {

        var istrue = true;

        //1.获取属性名，获取键名：属性名->初始值
        for (var key in json) { //key:键名   json[key] :键值
            //			console.log(key); //width heigth opacity
            var cur = 0; //存初始值

            if (key == 'opacity') { //初始值
                cur = css(obj, key) * 100; //透明度
            } else {
                cur = parseInt(css(obj, key)); // 300px  300  width heigth borderwidth px为单位的

            }

            //2.根据初始值和目标值，进行判断确定speed方向，变形：缓冲运动
            //距离越大，速度越大,下面的公式具备方向
            var speed = (json[key] - cur) / 6; //出现小数
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //不要小数部分，没有这句话或晃动

            //保证上一个属性全部都达到目标值了
            if (cur != json[key]) { //width 200 heigth 400
                istrue = false; //如果没有达到目标值，开关false
            } else {
                istrue = true; //true true
            }

            //3、运动
            if (key == 'opacity') {
                obj.style.opacity = (cur + speed) / 100; //0-1
                obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')'; //0-100
            } else {
                obj.style[key] = cur + speed + 'px'; //针对普通属性 left  top height 
            }

        }

        //4.回调函数:准备一个开关,确保以上json所有的属性都已经达到目标值,才能调用这个回调函数
        if (istrue) { //如果为true,证明以上属性都达到目标值了
            clearInterval(obj.timer);
            if (fnend) { //可选参数的由来
                fnend();
            }
        }

    }, 30); //obj.timer 每个对象都有自己定时器

}

/*
	封装ajax函数：jq
            $.ajax({
                type : 'get',//请求方式
                data : {//传输数据(选填)
                    name : 'jingjing',
                    pwd : 123455
                },
                asyn : true,//异步，(选填)
                url : 路径，//请求的接口路径
                success : function(str) {
                    //成功的回调
                },
                failure : function(str) {
                    //失败的回调
                }
            });
 */
// let xhr = new XMLHttpRequest();

// //设置参数
// let url = 'api/check.php';
// xhr.open('post',url,true);

// //发送请求
// let data = 'username=' + name.value;
// xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
// xhr.send(data);

// //3.制作接口

// //4.接收数据做渲染
// xhr.onreadystatechange = () =>{
//     if(xhr.readyState == 4 && xhr.status == 200){
//         let data = xhr.responseText;
//         if(data == 'yes'){
//             
//         }else{
//            
//         }
//     }
// }
function ajax(opt) {
    defaultData = {
        data: '',
        asyn: true,
        failure: null
    }
    Object.assign(defaultData, opt);
    let xhr = new XMLHttpRequest();
    if (defaultData.type.toLowerCase() == 'get') {
        if (defaultData.data) {
            defaultData.url = defaultData.url + '?' + objToStr(defaultData.data);
        }
        xhr.open('get', defaultData.url, defaultData.asyn);
        xhr.send(null)

    }
    else if (defaultData.type.toLowerCase() == 'post') {
        xhr.open('post', defaultData.url, defaultData.asyn);
        defaultData.data = objToStr(defaultData.data);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(defaultData.data);
    }
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 304) {
                let data = xhr.responseText;
                defaultData.success(data);
            } else {
                //失败
                if (defaultData.failure) {
                    //写了这个回调
                    defaultData.failure(xhr.status);
                }
            }
        }
    }
}
/*
    *cookie
*/
function setCookie(key, val, iDay) {
    let now = new Date();
    now.setDate(now.getDate() + iDay);
    document.cookie = key + '=' + val + ';expires=' + now.toUTCString() + ';path=/';
}

function getCookie(key) {
    let cookies = document.cookie;
    let arr = cookies.split('; ');
    for (let i = 0; i < arr.length; i++) {
        let arr2 = arr[i].split('=');
        if(key == arr2[0]){
            return arr2[1];
        }
    };
}

function removeCookie(key){
    setCookie(key,'',-1);
}