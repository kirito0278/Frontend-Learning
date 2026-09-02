var btn = document.querySelector('#btn');
var clr_gen = document.querySelector('#clr_cnvs');

btn.addEventListener('click',function() {
        var c1 = Math.floor(Math.random()*256);
        var c2 = Math.floor(Math.random()*256);
        var c3 = Math.floor(Math.random()*256);

        clr_gen.style.backgroundColor = `rgb(${c1},${c2},${c3})`;
        clr_gen.innerHTML = `rgb(${c1},${c2},${c3})`;
        clr_gen.style.textAlign = 'center'
        clr_gen.style.fontSize = '12px'
})
