const users = [
  {
    username: "Alex Johnson",
    image: "https://i.pravatar.cc/150?img=12",
    designation: "Frontend Developer",
    description: "Passionate frontend developer focused on building responsive and user-friendly web applications."
  },
  {
    username: "Sarah Williams",
    image: "https://i.pravatar.cc/150?img=47",
    designation: "UI/UX Designer",
    description: "Creative designer who enjoys crafting intuitive interfaces and engaging digital experiences."
  },
  {
    username: "Michael Brown",
    image: "https://i.pravatar.cc/150?img=33",
    designation: "Backend Developer",
    description: "Backend developer specializing in scalable APIs, databases, and reliable server-side applications."
  },
  {
    username: "Emily Davis",
    image: "https://i.pravatar.cc/150?img=44",
    designation: "Product Manager",
    description: "Product manager experienced in turning ideas into impactful products through strategy and collaboration."
  }
];

var body = document.querySelector('body');

var sum = '';
users.forEach(function(val) {

  sum+= `<main><img src="${val.image}" alt=""><h1>${val.username}</h1><h2>${val.designation}</h2><p>${val.description}</p></main>`;
});
console.log(sum);
body.innerHTML = sum;