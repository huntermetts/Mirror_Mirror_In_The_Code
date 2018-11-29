let artBlue = document.getElementById("art1")
let artRed = document.getElementById("art2")

document.querySelector('#message').addEventListener('keyup', function(event){
    art1.innerHTML = event.target.value;
    art2.innerHTML = event.target.value;
})
