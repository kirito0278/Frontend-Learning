var spot = document.querySelector('.spot-light')
document.body.addEventListener('mousemove',(e)=>{
    spot.style.setProperty('--x',e.clientX + 'px');
    spot.style.setProperty('--y',e.clientY + 'px');
})

var text = document.querySelector('h1');
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
text.innerText = 'qwKedjkdlrkncoRnK';
var p = text.innerText;
var main_text = 'Profile Cards UI:';
var iteration = 0


text.addEventListener('mouseenter',()=>{

    var num = setInterval(()=>{
    const val = p.split('').map((char,index)=>{
        if(index<iteration){
            return main_text[index]
        }
        return characters[Math.floor(Math.random()*characters.length)]
    }).join("");
    console.log(val)
    iteration+=0.2

    text.innerText = val;
    },10)

    setTimeout(function () {
            clearInterval(num)
            iteration = 0
    },1000)
})