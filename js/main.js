//-------SHOW MORE-------\\
function showMoreFilms(event)
{
    event.preventDefault();
    let hiddenMovieContainer = document.getElementById("hidden_movie_container");
    
    document.getElementById("all_movies_button").style.display = "none";
    document.getElementById("all_movies_button").style.height = "0";
    document.getElementById("all_movies").style.margin = "0";
    hiddenMovieContainer.classList.add("display_movie_container");
    setTimeout(function()
    {
        hiddenMovieContainer.classList.add("opacity_movie_container");
    }, 0);
}

//-------Проверка формы на пустые поля-------\\
function checkForm(event)
{
    event.preventDefault();
    let name = document.getElementById("username");
    let email = document.getElementById("email");
    let message = document.getElementById("message");
    let fields = [name, email, message];

    for(let i = 0; i < fields.length; i++)
    {
        if(fields[i].value == "")
        {
            fields[i].classList.add("red_border");
        }
    }
}

//-------Отмена красных полей-------\\
function getNormal(event)
{
    event.target.classList.remove("red_border"); //event - событие которым вызываеться функцией.
}                                                //target - цель события, в даном случае: document.getElementById("...")

//-------Модальное окно-------\\

function writeMe(event)
{
    event.preventDefault();
    let modal = document.getElementById("modal");
    let modalOverlay = document.getElementById("modal_overlay");
    modal.classList.add("view_modal");
    modalOverlay.classList.add("view_modal");
}

//-------Закрытие модального окна-------\\
function closeModal(event)
{
    event.preventDefault();
    let modal = document.getElementById("modal");
    let modalOverlay = document.getElementById("modal_overlay");
    modal.classList.remove("view_modal");
    modalOverlay.classList.remove("view_modal");
}

window.onload = function()
{
    document.getElementById("all_movies_button").onclick = showMoreFilms;

    document.getElementById("send_form").onclick = checkForm;
    document.getElementById("username").onclick = getNormal;
    document.getElementById("email").onclick = getNormal;
    document.getElementById("message").onclick = getNormal;

    document.getElementById("write_me_link").onclick = writeMe;
    document.getElementById("modal_overlay").onclick = closeModal;
    document.getElementById("close_modal_button").onclick = closeModal;
};


$(window).on('load', function ()
{
    //----------smoothScroll----------\\
    $('#about_me_button').on('click', function()
    {
        $.smoothScroll(
            {
                scrollTarget: '#name'
            });
        return false;
    });

    $('#my_hobby_button').on('click', function()
    {
        $.smoothScroll(
            {
                scrollTarget: '#hobby'
            });
        return false;
    });

    $('#favorite_films_button').on('click', function()
    {
        $.smoothScroll(
            {
                scrollTarget: '#my_movies'
            });
        return false;
    });

    //----------Open mobile menu ----------\\
    let top_menu = [$('#close_mobile_menu'), $('#about_me_button'), $('#my_hobby_button'), $('#favorite_films_button'), $('#add_film_button')];

    $('#mobile_menu').on('click', function()
    {
        $('#mobile_menu').css('display', 'none');
        for (let i = 0; i < top_menu.length; i++)
        {
            top_menu[i].css('display', 'block');
            top_menu[i].animate({ "opacity": "1" }, 1000 );
        }

    });

    //----------Close mobile menu ----------\\
    $('#close_mobile_menu').on('click', function()
    {
        for (let i = 0; i < top_menu.length; i++)
        {
            setTimeout(function () {
                top_menu[i].css('display', 'none');
            }, 1000);
            top_menu[i].animate({ "opacity": "0" }, 1000 );
        }

        setTimeout(function () {
            $('#mobile_menu').css('display', 'block');
        }, 1000);
    });
});