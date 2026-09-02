var team = document.querySelector('h1');
var full_name = document.querySelector('h2');
var trophy = document.querySelector('p');
var btn = document.querySelector('#btn');
var main = document.querySelector('main');
var body = document.querySelector('body');
var arr = [
    {
        team: "RCB",
        full_name: "Royal Challengers Bangalore",
        trophies: 2,
        primary_clr: "red",
        secondary_clr: "gold"
    },
    {
        team: "MI",
        full_name: "Mumbai Indians",
        trophies: 5,
        primary_clr: "blue",
        secondary_clr: "gold"
    },
    {
        team: "CSK",
        full_name: "Chennai Super Kings",
        trophies: 5,
        primary_clr: "yellow",
        secondary_clr: "blue"
    },
    {
        team: "KKR",
        full_name: "Kolkata Knight Riders",
        trophies: 3,
        primary_clr: "purple",
        secondary_clr: "gold"
    },
    {
        team: "RR",
        full_name: "Rajasthan Royals",
        trophies: 1,
        primary_clr: "pink",
        secondary_clr: "blue"
    },
    {
        team: "SRH",
        full_name: "Sunrisers Hyderabad",
        trophies: 1,
        primary_clr: "orange",
        secondary_clr: "black"
    },
    {
        team: "DC",
        full_name: "Delhi Capitals",
        trophies: 0,
        primary_clr: "blue",
        secondary_clr: "red"
    },
    {
        team: "PBKS",
        full_name: "Punjab Kings",
        trophies: 0,
        primary_clr: "red",
        secondary_clr: "gold"
    },
    {
        team: "GT",
        full_name: "Gujarat Titans",
        trophies: 1,
        primary_clr: "navy",
        secondary_clr: "gold"
    },
    {
        team: "LSG",
        full_name: "Lucknow Super Giants",
        trophies: 0,
        primary_clr: "blue",
        secondary_clr: "green"
    }
];

btn.addEventListener('click',function() {
        var choice = arr[Math.floor(Math.random()*arr.length)];
        console.log(choice);
        team.innerHTML = choice.team;
        team.style.lineHeight = 0.8;
        full_name.style.lineHeight = 1;
        full_name.innerHTML = choice.full_name;
        trophy.innerHTML = "Trophy: "+choice.trophies+"🏆";
        body.style.backgroundColor = choice.primary_clr;
        main.style.color = choice.secondary_clr;

})