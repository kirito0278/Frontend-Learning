var btn = document.querySelector('button');
var h1 = document.querySelector('h1');
var loading = document.querySelector('#inner');
var grow = 0;


btn.addEventListener('click',function() {

        var num = Math.floor(Math.random()*100)+50;
        console.log('Your file will be downloaded in',num/10,'seconds'); 
        
        btn.style.pointerEvents = 'none';
        btn.innerHTML = "Downloaded";
        btn.style.opacity = .5;

        var time = setInterval(() => {
                grow++;
                h1.innerHTML = grow+"%";
                loading.style.width = grow+"%";
        }, num);

        setTimeout(() => {
                clearInterval(time);
        }, num*100);
})