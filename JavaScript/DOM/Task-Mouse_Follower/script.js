var body = document.querySelector('body');
var mouse = document.querySelector('img')

body.addEventListener('mousemove',function(val) {
    mouse.style.left = val.x + 'px';
    mouse.style.top = val.y + 'px';

})