//-------SHOW MORE-------\\
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

//-------Проверка формы на пустые поля-------\\
function checkForm(event)
{
    event.preventDefault();
    var name = document.getElementById("username");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    var fields = [name, email, message];

    for(var i = 0; i < fields.length; i++)
    {
        if(fields[i].value == "")
        {
            fields[i].classList.add("red_border");
        }
    }
}

//-------Отмена красных полей-------\\
function getNormalName()
{
    document.getElementById("username").classList.remove("red_border");
}

function getNormalEmail()
{
    document.getElementById("email").classList.remove("red_border");
}

function getNormalMessage()
{
    document.getElementById("message").classList.remove("red_border");
}

//-------Модальное окно-------\\

function writeMe()
{
    event.preventDefault();
    var modal = document.getElementById("modal");
    var modalOverlay = document.getElementById("modal_overlay");
    modal.classList.add("view_modal");
    modalOverlay.classList.add("view_modal");
}

//-------Закрытие модального окна-------\\
function closeModal()
{
    event.preventDefault();
    var modal = document.getElementById("modal");
    var modalOverlay = document.getElementById("modal_overlay");
    modal.classList.remove("view_modal");
    modalOverlay.classList.remove("view_modal");
}


window.onload = function()
{
    document.getElementById("all_movies_button").onclick = showMoreFilms;

    document.getElementById("send_form").onclick = checkForm;
    document.getElementById("username").onclick = getNormalName;
    document.getElementById("email").onclick = getNormalEmail;
    document.getElementById("message").onclick = getNormalMessage;

    document.getElementById("write_me_link").onclick = writeMe;
    document.getElementById("modal_overlay").onclick = closeModal;
    document.getElementById("close_modal_button").onclick = closeModal;
}