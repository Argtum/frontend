function willFaded(elementId, dlay, duration)
{
    $(elementId).delay(dlay).fadeOut(duration);
}

function willUnFaded(elementId, dlay, duration)
{
    $(elementId).delay(dlay).fadeIn(duration);
}

function groupWillFaded(elementClassName, dlay, duration)
{
    $(elementClassName).each(function()
    {
        willFaded($(this), dlay, duration);
    });
}

function groupWillUnFaded(elementClassName, dlay, duration)
{
    $(elementClassName).each(function()
    {
        willUnFaded($(this), dlay, duration);
    });
}

function openMobileMenu()
{
    willFaded("#open_mobile_menu", 0, 0);
    willUnFaded("#top_menu_mobile", 0, 1000);
    willUnFaded("#close_mobile_menu", 0, 1000);
}

function closeMobileMenu()
{
    willFaded("#close_mobile_menu", 0, 1000);
    willFaded("#top_menu_mobile", 0, 1000);
    willUnFaded("#open_mobile_menu", 1000, 0);
}

function openAddMovieForm()
{
    groupWillUnFaded(".add_movie_modal_part", 0, 0);
}

function closeAddMovieForm()
{
    groupWillFaded(".add_movie_modal_part", 0, 0);
}

function removeRedBorder()
{
    $(this).removeClass("red_border");
}

//----------- Add movie processing ----------\\
let movieFields = $(".checked_movie_field");

function processingMovieMenu(event)
{
    event.preventDefault();
    let empty = false;
    for (let i = 0; i < movieFields.length; i++)
    {
        if ($(movieFields[i]).val() === '')
        {
            $(movieFields[i]).addClass("red_border");
            empty = true;
        }
    }
    if (!empty)
    {
        let newMovie = (
            '<div class="movie">' +
            '<img class="movie_image" src="'+ $(movieFields[0]).val() +'" alt="movie picture">' +
            '<h4 class="movie_name revealator-slideup revealator-delay3">'+ $(movieFields[1]).val() +'</h4>' +
            '<p class="movie_brief revealator-slideup revealator-delay3">'+ $(movieFields[2]).val() +'</p>' +
            '</div>'
        );
        $("#hidden_movie_container").append(newMovie);
        closeAddMovieForm();
    }
}

function smoothScroll(className, targetId)
{
    $(className).each(function()
    {
        $(this).click(function()
        {
            closeMobileMenu();
            $.smoothScroll(
            {
                scrollTarget: $(targetId)
            });
        });
    });
}

function registerClickOnSet(className, func)
{
    $(className).each(function()
    {
        $(this).click(func);
    });
}

function registerClick(id, func)
{
    $(id).click(func);
}

$(window).on("load", function ()
{
    registerClick("#open_mobile_menu", openMobileMenu);
    registerClick("#close_mobile_menu", closeMobileMenu);
    registerClickOnSet(".add_film_button", openAddMovieForm);
    registerClickOnSet(".add_film_button", closeMobileMenu);
    registerClick("#send_add_movie", processingMovieMenu);
    registerClickOnSet(".checked_movie_field", removeRedBorder);
    registerClickOnSet(".close_modal_window", closeAddMovieForm);
    smoothScroll(".about_me_button", "#name");
    smoothScroll(".my_hobby_button", "#hobby");
    smoothScroll(".favorite_films_button", "#my_movies");
});