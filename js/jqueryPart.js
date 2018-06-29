const animationTime = 1000;
const withoutAnimation = 0;
const delayTime = 1000;
const withoutDelay = 0;

//---------- secondary function ----------\\
function hideElement(elementId, dlay, duration)
{
    $(elementId).delay(dlay).fadeOut(duration);
}

function showElement(elementId, dlay, duration)
{
    $(elementId).delay(dlay).fadeIn(duration);
}

function hideGroupOfElements(elementClassName, dlay, duration)
{
    $(elementClassName).each(function()
    {
        hideElement($(this), dlay, duration);
    });
}

function showGroupOfElements(elementClassName, dlay, duration)
{
    $(elementClassName).each(function()
    {
        showElement($(this), dlay, duration);
    });
}

//---------- registrar ---------\\
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

//----------------- my functions -----------------\\
function openMobileMenu()
{
    showElement("#top_menu_mobile", withoutDelay, animationTime);
    showElement("#close_mobile_menu", withoutDelay, animationTime);
    hideElement("#open_mobile_menu", withoutDelay, withoutAnimation);
}

function closeMobileMenu()
{
    hideElement("#close_mobile_menu", withoutDelay, animationTime);
    hideElement("#top_menu_mobile", withoutDelay, animationTime);
    showElement("#open_mobile_menu", delayTime, withoutAnimation);
}

function openAddMovieForm()
{
    showGroupOfElements(".add_movie_modal_part", withoutDelay, withoutAnimation);
}

function closeAddMovieForm()
{
    hideGroupOfElements(".add_movie_modal_part", withoutDelay, withoutAnimation);
}

function clearFieldError()
{
    $(this).removeClass("red_border");
}

function fieldError(field)
{
    $(field).addClass("red_border");
}

function addNewMovie(movieFields)
{
    let newMovie = (
        '<div class="movie">' +
        '<img class="movie_image" src="'+ $(movieFields[0]).val() +'" alt="movie picture">' +
        '<h4 class="movie_name revealator-slideup revealator-delay3">'+ $(movieFields[1]).val() +'</h4>' +
        '<p class="movie_brief revealator-slideup revealator-delay3">'+ $(movieFields[2]).val() +'</p>' +
        '</div>'
    );
    $("#hidden_movie_container").append(newMovie);
}

function processAddMovieForm(event)
{
    event.preventDefault();
    let movieFields = $(".checked_movie_field");
    let noFieldEmpty = true;

    $(movieFields).each(function()
    {
        if ($(this).val() === '')
        {
            fieldError(this);
            noFieldEmpty = false;
        }
    });

    if (noFieldEmpty)
    {
        addNewMovie(movieFields);
        closeAddMovieForm();
    }
}

function smoothScroll(className, targetId)
{
    registerClickOnSet(className, scrollToTarget);

    function scrollToTarget()
    {
        closeMobileMenu();
        $.smoothScroll(
        {
            scrollTarget: $(targetId)
        });
    }
}

//---------- start ----------\\
$(window).on("load", function ()
{
    registerClick("#open_mobile_menu", openMobileMenu);
    registerClick("#close_mobile_menu", closeMobileMenu);
    registerClickOnSet(".add_film_button", closeMobileMenu);
    registerClickOnSet(".add_film_button", openAddMovieForm);
    registerClick("#send_add_movie", processAddMovieForm);
    registerClickOnSet(".checked_movie_field", clearFieldError);
    registerClickOnSet(".close_modal_window", closeAddMovieForm);
    smoothScroll(".about_me_button", "#name");
    smoothScroll(".my_hobby_button", "#hobby");
    smoothScroll(".favorite_films_button", "#my_movies");
});