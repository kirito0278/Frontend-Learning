var btn = document.querySelector('#btn');
var body = document.querySelector('body');

var arr = ["Kirito","Naruto","Asta","Ken Kaneki","Luffy","Deku","Gintama","Guts","Rimuru","Rudeus"];

btn.addEventListener('click',function() {

        var num = arr[Math.floor(Math.random()*arr.length)];
        
        var v1 = document.createElement('h1');
        v1.innerHTML = num;
        body.appendChild(v1);
        console.log(v1);
        var l = Math.floor(Math.random()*101);
        var t = Math.floor(Math.random()*101);
        var r = Math.floor(Math.random()*361);
        var s = Math.floor(Math.random()*5)+1;
        v1.style.rotate = r+"deg";
        v1.style.left = l+"%";
        v1.style.top = t+"%";
        v1.style.scale = s;
})
