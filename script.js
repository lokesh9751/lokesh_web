let menu = document.querySelector(".menu");
let navside = document.querySelector(".navside");

menu.addEventListener("click",function(){
    if(navside.style.display === "block"){
        navside.style.display = "none";
    }
    else{
        navside.style.display = "block";
    }
})