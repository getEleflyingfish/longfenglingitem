
document.getElementsByTagName('html')[0].style.fontSize = $(window).width() * 100 / 720 + 'px';

$(window).resize(function () {
    document.getElementsByTagName('html')[0].style.fontSize = $(window).width() * 100 / 720 + 'px';
});

$(function () {
    function fontSize() {
        var deviceWidth = $(document).width();
        if (deviceWidth > 720) {
            deviceWidth = 720;
            console.log(deviceWidth);
        }

        var fontSize = deviceWidth / 7.2;
        $('html').css('fontSize', fontSize);
        console.log(fontSize);
    }

    fontSize();

    $(window).resize(function () {
        fontSize();
    });
});













/* ============================================== */

tim = 1
setInterval("tim++", 100)
b = 1
var autourl = new Array();
autourl[1] = 'http://www.js00333bet.com';
autourl[2] = 'http://www.js20333bet.com';
autourl[3] = 'http://www.js90333bet.com';
autourl[4] = 'http://www.js30333bet.com';
autourl[5] = 'http://www.js40333bet.com';
autourl[6] = 'http://www.js50333bet.com';


function auto(url) {
    for (var i = 1; i < autourl.length; i++) {
        if (autourl[i] === url) {
            if (tim > 200) {
                $(".fform .title-item").eq(i - 1).find(".uitul").val(autourl[i]);
                $(".fform .title-item").eq(i - 1).find(".stimer").val("链接超时");
            } else {
                $(".fform .title-item").eq(i - 1).find(".uitul").val(autourl[i]);
                $(".fform .title-item").eq(i - 1).find(".stimer").val(tim * 0.01 + "s");
            }
        }
    }

}


window.onload = function () {
    clisju();

}


function clisju() {
    var mms = document.querySelectorAll(".stimer");
    var arrs = [];
    for (let i = 0, len = mms.length; i < len; i++) {
        mms[i].index = i;
        var lem = mms[i].value;

        arrs.push(lem);
        arrs.map(item => item.replace(/s$/, ""));
        //  console.log(arrs) 
        var min = arrs[0];
        if (arrs[i] < min) {
            min = arrs[i]
        }

        if (min == lem) {
            let n1 = getNextElement(mms[i]);
            let n2 = getNextElement(n1);
            console.log(n2)
            n2.classList.add("amtt")
            n2.value = "推荐访问"
        }
    }
}

//获取下一个兄弟元素的兼容函数
function getNextElement(element) {
    if (element.nextElementSibling) {
        return element.nextElementSibling;
    } else {
        var next = element.nextSibling;//下一个兄弟节点
        while (next && 1 !== next.nodeType) {//有 并且 不是我想要的
            next = next.nextSibling;
        }
        return next;
    }
}

/* console.log(tim) */
function run() {
    for (var i = 1; i < autourl.length; i++)
        document.write("<img src=" + autourl[i] + "/" + Math.random() + " width=1 height=1 display=none onerror=auto('" + autourl[i] + "')>")
}
run()
