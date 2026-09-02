var like = document.querySelector('#like');
var img = document.querySelector('img');

img.addEventListener('dblclick', function () {
        like.style.opacity = 1;
        like.style.transform = "translate(-50%,-50%) scale(1) rotate(0deg)";
        setTimeout(() => {
                like.style.transform = "translate(-50%,-200%) scale(1) rotate(0deg)";
        }, 600);
        setTimeout(() => {
                like.style.opacity = 0;
        }, 900);
        setTimeout(() => {
                like.style.transform = "translate(-50%,-50%) scale(0) rotate(0deg)";
        }, 1200);
});  