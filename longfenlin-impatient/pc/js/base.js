
// wv util
//1,获取节点
//使用： 
// query('要获取的节点')；
function query(dom) {
    const obj = document.querySelectorAll(dom);
    return obj.length > 1 ? obj : obj[0];
}
//////////////////////////////////////////////////////
//2，选项卡
//前提： 给按钮加 class：'tabs-btn',要切换的内容加class:'tabs-item',给他们共同的父级加class：'tabs-wrap';
//使用：	
// tabsChange([{
// 		changeClass: 'on1'//第一个选项卡要切换的class
// }, {
// 	changeClass: 'on2'//第二个选项卡要切换的class......
// }])
function tabsChange(config) {
    const tabsWrap = document.querySelectorAll('.tabs-wrap');
    for (let i = 0; i < tabsWrap.length; i++) {
        let tabsBtn = tabsWrap[i].querySelectorAll('.tabs-btn');
        let tabsItem = tabsWrap[i].querySelectorAll('.tabs-item');
        for (let j = 0; j < tabsBtn.length; j++) {
            tabsItem[j + 1] ? tabsItem[j + 1].style.display = 'none' : '';
            tabsBtn[j].addEventListener('click', () => {
                for (let k = 0; k < tabsBtn.length; k++) {
                    tabsBtn[k].classList.remove(config[i].changeClass);
                    tabsItem[k].style.display = 'none';
                }
                tabsBtn[j].classList.add(config[i].changeClass);
                tabsItem[j].style.display = 'block';
            })
        }
    }
}
///////////////////////////////////////////////////


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

var arrs = new Array();

function auto(url) {
    for (var i = 1; i < autourl.length; i++) {
        if(autourl[i] === url){
            if (tim > 200) {
                $(".fform .title-item").eq(i-1).find(".uitul").val(autourl[i]);
                $(".fform .title-item").eq(i-1).find(".stimer").val("链接超时");
            }else{
                $(".fform .title-item").eq(i-1).find(".uitul").val(autourl[i]);
                $(".fform .title-item").eq(i-1).find(".stimer").val(tim * 0.01 + "s");  
               // arrs.push( $(".stimer").val() )
           /*     console.log(  $(".stimer").val() )  */
        
            }
        }
    }
}  


window.onload = function () { 
    clisju();
}

 
    function clisju () { 
          var mms = document.querySelectorAll(".stimer");
          var arrs = [];
           for(let i=0,len = mms.length; i<len; i++){ 
              mms[i].index = i;
            var lem = mms[i].value;    
        
            arrs.push(lem);
            arrs.map(item => item.replace(/s$/,""));
           //  console.log(arrs) 
             var min = arrs[0];
             if(arrs[i]<min){
                 min = arrs[i]
             }
        
                 if(min==lem){ 
                    console.log(lem+"lem") 
                    console.log(min+"min") 
                     console.log('最小的弹出')
                  let mttwap = mms[i].previousElementSibling;
                  console.log(mttwap)
                  mttwap.classList.add("amtt")
                 }
              }
    }




function run() {
    for (var i = 1; i < autourl.length; i++)
        document.write("<img src=" + autourl[i] + "/" + Math.random() + " width=1 height=1 display=none onerror=auto('" + autourl[i] + "')>")
}
run()