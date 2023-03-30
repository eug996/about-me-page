let isFavourited = false;
let favouriteButton = document.getElementById("Favouritebutton");

let commentsection = document.getElementById("commentsection")
let button = document.getElementById("button2")

const ul = document.querySelector("#myList")

const liList = ul.querySelectorAll("li:nth-child(even)");
liList.forEach(li => {
    li.style.fontSize="2.5vw";
});




function toggleFavourite() {
    if (isFavourited) {
      favouriteButton.innerHTML = "Favourite";
      favouriteButton.classList.remove("favourited");
      favouriteButton.classList.add("not-favourited");
      isFavourited = false;
    } else {
      favouriteButton.innerHTML = "Favourited";
      favouriteButton.classList.remove("not-favourited");
      favouriteButton.classList.add("favourited");
      isFavourited = true;
    }
  }
  
  favouriteButton.addEventListener("click", toggleFavourite);


button.addEventListener("click", function(){
    let commentValue = commentsection.value;
    alert(commentValue);
});


  














