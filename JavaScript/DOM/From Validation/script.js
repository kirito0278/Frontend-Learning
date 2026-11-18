let form =  document.querySelector("form")
let nm = document.querySelector("#name")
let small = document.querySelector("div")

form.addEventListener("submit",function(dets) {
    dets.preventDefault();
    if(nm.value.length<8){
        small.style.display="block";
    }else{
        small.style.display="none";
    }
})