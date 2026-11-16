let body = document.querySelector("main");
let inputs = document.querySelectorAll("input");
let form= document.querySelector("form")
form.addEventListener('submit',function(dets){
    dets.preventDefault();

    console.log(inputs);
    var card= document.createElement("div");
    card.classList.add("card");
    var profile= document.createElement("div");
    profile.classList.add("profile");
    var img= document.createElement("img");
    img.setAttribute("src",inputs[0].value)
    var p = document.createElement("p");
    p.textContent = inputs[3].value;
    var h1 = document.createElement("h1");
    h1.textContent = inputs[1].value;
    var h5 = document.createElement("h5");
    h5.textContent = inputs[2].value;

    profile.appendChild(img);
    card.appendChild(profile);
    card.appendChild(h1);
    card.appendChild(h5);
    card.appendChild(p);

    body.appendChild(card);

    
    form.reset();
    // inputs.forEach(function (inp) {
    //     if(inp.type!=="submit"){
    //         inp.value="";
    //     }
    // })
})