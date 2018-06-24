//---------- Open mobile menu ----------\\
let topMenuButtons = ['#close_mobile_menu', '#about_me_button', '#my_hobby_button', '#favorite_films_button', '#add_film_button'];

function openMobileMenu() {
    $(this).toggleClass('open_mm');
    $('#top_menu').toggleClass('mobile_top_menu');
    for (let i = 0; i < topMenuButtons.length; i++) {
        $(topMenuButtons[i]).fadeIn(1000);
    }
}

//---------- Close mobile menu ----------\\
function closeMobileMenu() {
    for (let i = 0; i < topMenuButtons.length; i++) {
        $(topMenuButtons[i]).fadeOut(1000);
        setTimeout(function() {
            $(topMenuButtons[i]).removeAttr('style');
        }, 1011);
    }
    setTimeout(function () {
        $('#mobile_menu').toggleClass('open_mm');
        $('#top_menu').toggleClass('mobile_top_menu');
    }, 1000);
}

//------------------------------Add movie form------------------------------\\
let movieFields = ".movie_form_field";  //['#url', '#movie_name', '#movie_description'];
let newMovie = (
    '<div class="movie">' +
        '<img class="movie_image" src="'+ $(movieFields[1]).val() +'" alt="movie picture">' +
        '<h4 class="movie_name revealator-slideup revealator-delay3">'+ $(movieFields[2]).val() +'</h4>' +
        '<p class="movie_brief revealator-slideup revealator-delay3">'+ $(movieFields[3]).val() +'</p>' +
    '</div>'
);

//---------- open-close add movie form ----------\\
function toggleAddMovieMenu() { $(['#add_movie_form', '#modal_overlay'].join()).toggleClass('view_modal'); }

//---------- No red border ----------\\
function getNormalBorder() { $(this).removeClass('red_border'); }

//----------- Add movie processing ----------\\
function MovieMenu() {
    event.preventDefault();
    let empty = true;
    for (let i = 1; i <= movieFields.length; i++) {
        if($(movieFields[i]).val() === '') {
            $(movieFields[i]).addClass('red_border');
            empty = false;
        }
    }
    if (empty) {
        $('#hidden_movie_container').append(newMovie);
        toggleAddMovieMenu();
    }
}

$(window).on('load', function ()
{

//---------- smoothScroll ----------\\
    let smoothScrollElements = [['#about_me_button', '#name'], ['#my_hobby_button', '#hobby'], ['#favorite_films_button', '#my_movies']];
    for (let i = 0; i < smoothScrollElements.length; i++) {
        let buttonId = smoothScrollElements[i][0];
        let targetElement = smoothScrollElements[i][1];
        $(buttonId).click(function() {
            $.smoothScroll({ scrollTarget: $(targetElement) });
        });
    }

    $('#close_mobile_menu').click(closeMobileMenu);
    $('#mobile_menu').click(openMobileMenu);
    $(['#add_film_button', '#modal_overlay', '#close_add_movie_button'].join()).click(toggleAddMovieMenu);
    $('#send_add_movie').click(MovieMenu);
    for (let i = 1; i <= movieFields.length; i++) {
        $(movieFields[i]).click(getNormalBorder);
    }
});