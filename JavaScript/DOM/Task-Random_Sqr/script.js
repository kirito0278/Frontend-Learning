var btn = document.querySelector('#btn');
var body = document.querySelector('body');

btn.addEventListener('click',function() {
        var v1 = document.createElement('div');
        body.appendChild(v1);

        var l = Math.floor(Math.random()*101);
        var t = Math.floor(Math.random()*101);
        var r = Math.floor(Math.random()*361);
        v1.style.rotate = r+"deg";
        v1.style.left = l+"%";
        v1.style.top = t+"%";

        var c1 = Math.floor(Math.random()*256);
        var c2 = Math.floor(Math.random()*256);
        var c3 = Math.floor(Math.random()*256);
        v1.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
})
