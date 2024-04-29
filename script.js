const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
    const widthRatio=Math.floor(window.innerWidth/300);
    let clikCounter = 0;
    const imageItem = movieList[i].querySelectorAll("img").length;
    arrow.addEventListener("click", function () {
        clikCounter++;
  
    if (imageItem - (4 + clikCounter) +(4-widthRatio) >= 0) {
      

           

            movieList[i].style.transform = `translatex(${movieList[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;
      

    }else{
        movieList[i].style.transform="translateX(0)"
        clikCounter=0;

    }
});



});

/*  dark mode */
const ball=document.querySelector(".toogle-ball");
const items=document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toogle,.toogle-ball,.movie-list-filter select,.movie-list-title");
console.log(ball);

ball.addEventListener("click",function(){
    items.forEach((item) => item.classList.toggle("active"));



})