//---------- Open mobile menu ----------\\
let topMenuButtons = ['#close_mobile_menu', '#about_me_button', '#my_hobby_button', '#favorite_films_button', '#add_film_button'];

function openMobileMenu() {
    $('#mobile_menu').toggleClass('open_mm');
    $('#top_menu').toggleClass('mobile_top_menu');
    for (let i = 0; i < topMenuButtons.length; i++) {
        $(topMenuButtons[i]).css('display', 'block').animate({ "opacity": "1" }, 1000 );
    }
}

//---------- Close mobile menu ----------\\
function closeMobileMenu() {
    for (let i = 0; i < topMenuButtons.length; i++) {
        setTimeout(function() {
            $(topMenuButtons[i]).css('display', 'none').removeAttr('style');
        }, 1000);
        $(topMenuButtons[i]).animate({ "opacity": "0" }, 1000 );
        if( $(topMenuButtons[i]).css('opacity') === "0"){
            $(topMenuButtons[i]).removeAttr('style');
        }
    }
    setTimeout(function () {
        $('#mobile_menu').toggleClass('open_mm');
        $('#top_menu').toggleClass('mobile_top_menu');
    }, 1000);
}

//------------------------------Add movie form------------------------------\\
let movieFields = ['#url', '#movie_name', '#movie_description'];

//---------- open-close add movie form ----------\\
function toggleAddMovieMenu() {
    $(['#add_movie_form', '#modal_overlay'].join()).toggleClass('view_modal');
}

//---------- No red border ----------\\
function getNormalBorder() {
    $(movieFields[i]).removeClass('red_border');
}

//----------- Add movie processing ----------\\
function MovieMenu() {
    event.preventDefault();
    let empty = true;
    for (let i = 0; i < movieFields.length; i++) {
        if($(movieFields[i]).val() === '') {
            $(movieFields[i]).addClass('red_border');
            empty = false;
        }
    }
    if (empty) {
        let newMovie = (
            '<div class="movie">' +
            '<img class="movie_image" src="'+ $(movieFields[0]).val() +'" alt="movie picture">' +
            '<h4 class="movie_name revealator-slideup revealator-delay3">'+ $(movieFields[1]).val() +'</h4>' +
            '<p class="movie_brief revealator-slideup revealator-delay3">'+ $(movieFields[2]).val() +'</p>' +
            '</div>'
        );
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
    for (let i = 0; i < movieFields.length; i++) {
        $(movieFields[i]).click(getNormalBorder);
    }
});