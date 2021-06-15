let html = document.querySelector('#html')
let style = document.querySelector('#style')
let temp_string=''

let my_rec = `
/* 你好，我的名字是one， 
下面我要展示下动态显示制作一个太极， 
首先我要准备一个div */
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把 div 变成一个太极
 * 注意看好了
 * 首先，把 div 变成一个圆
 **/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 太极是阴阳形成的
 * 一黑一白
 **/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
    
}
/* 添加太极的两仪眼👁 */
#div1::before{
    display:block;
    position:absolute;
    content:'';
    width: 100px;
    height: 100px;
    left:50%;
    top:0;
    transform:translateX(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    
}
#div1::after{
    display:block;
    position:absolute;
    content:'';
    width: 100px;
    height: 100px;
    left:50%;
    bottom:0%;
    transform:translateX(-50%);
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
/* 现在让太极图转起来 */
@keyframes my_rotate{
    from{
        transform: translateX(-50%) rotate(0deg);
    }
    to{
        transform: translateX(-50%) rotate(360deg);
    }
}
`
let count = 0
function showCode(){
    setTimeout( () => {
        if (my_rec[count] === "\n"){
            temp_string += "<br>"
        } else if (my_rec[count] === " "){
            temp_string += "&nbsp"
        }
        if (count<my_rec.length){
            temp_string += my_rec[count]
            html.innerHTML = temp_string
            style.innerHTML = my_rec.substring(0, count)
            count++
            window.scrollTo(0,999)
            html.scrollTo(0,999)
            showCode()
        }
        // console.log(count)
    },5)
}

showCode()