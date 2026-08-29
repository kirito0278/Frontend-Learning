var count = document.querySelector('h1');
var inc_btn = document.querySelector('#inc');
var dec_btn = document.querySelector('#dec');

var counter = 0;

inc_btn.addEventListener('click',function() {
        counter++;
        count.innerHTML = counter;
})

dec_btn.addEventListener('click',function() {
        if(counter > 0){
                counter--;
                count.innerHTML = counter;
        }
})