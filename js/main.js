//-------SHOW MORE-------\\
function showMoreFilms()
{
    event.preventDefault();
    let hiddenMovieContainer = document.getElementById("hidden_movie_container");
    
    document.getElementById("all_movies").style.display = "none";
    document.getElementById("all_movies").style.height = "0";
    document.getElementById("all_movies").style.margin = "0";
    hiddenMovieContainer.classList.add("display_movie_container");
    setTimeout(function()
    {
        hiddenMovieContainer.classList.add("opacity_movie_container");
    }, 0);
}

//-------check form-------\\
function checkForm()
{
    event.preventDefault();
    let name = document.getElementById("username");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let fields = [name, email, message];

    for(let i = 0; i < fields.length; i++)
    {
        if(fields[i].value === '')
        {
            fields[i].classList.add("red_border");
        }
    }
}

//-------no red border-------\\
function getNormal()
{
    event.target.classList.remove("red_border");
}

//-------open modal-------\\

function writeMe()
{
    event.preventDefault();
    let modal = document.getElementById("write_me_form");
    let modalOverlay = document.getElementById("modal_overlay");
    modal.classList.add("view_modal");
    modalOverlay.classList.add("view_modal");
}

//-------close modal-------\\
function closeModal()
{
    event.preventDefault();
    let modal = document.getElementById("write_me_form");
    let modalOverlay = document.getElementById("modal_overlay");
    modal.classList.remove("view_modal");
    modalOverlay.classList.remove("view_modal");
}

window.onload = function()
{
    document.getElementById("all_movies").onclick = showMoreFilms;

    document.getElementById("send_write_me").onclick = checkForm;
    document.getElementById("username").onclick = getNormal;
    document.getElementById("email").onclick = getNormal;
    document.getElementById("message").onclick = getNormal;

    document.getElementById("write_me_link").onclick = writeMe;
    document.getElementById("modal_overlay").onclick = closeModal;
    document.getElementById("close_write_me_form").onclick = closeModal;
};