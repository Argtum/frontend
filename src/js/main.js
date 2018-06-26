//----------------- SHOW MORE -----------------\\
function showMoreFilms(event)
{
    event.preventDefault();
    let hiddenMovieContainer = document.getElementById("hidden_movie_container");

    this.style.display = "none";
    this.style.height = "0";
    this.style.margin = "0";
    hiddenMovieContainer.classList.add("display_movie_container");
    setTimeout(function() {
        hiddenMovieContainer.classList.add("opacity_movie_container");
    }, 0);
}

//----------------- check form -----------------\\
let fields = document.getElementsByClassName("write_me_field");

function checkForm(event)
{
    event.preventDefault();
    for(let i = 0; i < fields.length; i++)
    {
        if(fields[i].value === '')
        {
            fields[i].classList.add("red_border");
        }
    }
}

//-------no red border-------\\
function getNormal(event)
{
    event.target.classList.remove("red_border");
}

//----------------- open modal -----------------\\

function writeMe(event)
{
    event.preventDefault();
    let modal = document.getElementById("write_me_form");
    let modalOverlay = document.getElementById("modal_overlay");
    modal.classList.add("view_modal");
    modalOverlay.classList.add("view_modal");
}

//-------close modal-------\\
function closeModal(event)
{
    event.preventDefault();
    let modal = document.getElementById("write_me_form");
    let modalOverlay = document.getElementById("modal_overlay");
    modal.classList.remove("view_modal");
    modalOverlay.classList.remove("view_modal");
}

window.onload = function()
{
    document.getElementById("all_movies").addEventListener("click", showMoreFilms);
    for(let i = 0; i < fields.length; i++)
    {
        fields[i].addEventListener("click", getNormal);
    }

    document.getElementById("send_write_me").addEventListener("click", checkForm);
    document.getElementById("write_me_link").addEventListener("click", writeMe);
    document.getElementById("modal_overlay").addEventListener("click", closeModal);
    document.getElementById("close_write_me_form").addEventListener("click", closeModal);
};