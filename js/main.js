function showMoreFilms(event)
{
    event.preventDefault();
    var hiddenMovieContainer = document.getElementById("hidden_movie_container");
    
    document.getElementById("all_movies_button").style.display = "none";
    hiddenMovieContainer.classList.add("display_movie_container");
    setTimeout(function()
    {
        hiddenMovieContainer.classList.add("opacity_movie_container");
    }, 1);
}



window.onload = function()
{
    document.getElementById("all_movies_button").onclick = showMoreFilms;
}