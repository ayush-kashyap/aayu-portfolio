changable=["Programmer","Full Stack Developer"]
var i=1
setInterval(() => {
    document.querySelector('.change').innerHTML=changable[i%2]
    i++;
}, 2000);
