let isFavourited = false;
let favouriteButton = document.getElementById("Favouritebutton");

let commentsection = document.getElementById("commentsection")
let button = document.getElementById("button2")

const ul = document.querySelector("#myList")

const liList = ul.querySelectorAll("li:nth-child(even)");
liList.forEach(li => {
    li.style.fontSize="2.5vw";
});







favouriteButton.addEventListener("click", function (){

    if (isFavourited===false){
        favouriteButton.innerHTML= "Favourited!";
        isFavourited= true;

    } else {
        favouriteButton.innerHTML =" Favourite!";
        isFavourited = false;
    }
});

button.addEventListener("click", function(){
    let commentValue = commentsection.value;
    alert(commentValue);
});


  














