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
        if(fields[i].value === '')
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
    let modal = document.getElementById("write_me_form");
    let modalOverlay = document.getElementById("modal_overlay");
    modal.classList.add("view_modal");
    modalOverlay.classList.add("view_modal");
}

//-------Закрытие модального окна-------\\
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
    document.getElementById("all_movies_button").onclick = showMoreFilms;

    document.getElementById("send_write_me").onclick = checkForm;
    document.getElementById("username").onclick = getNormal;
    document.getElementById("email").onclick = getNormal;
    document.getElementById("message").onclick = getNormal;

    document.getElementById("write_me_link").onclick = writeMe;
    document.getElementById("modal_overlay").onclick = closeModal;
    document.getElementById("close_write_me_button").onclick = closeModal;
};


$(window).on('load', function ()
{
    //----------smoothScroll----------\\
    let smoothScrollElements = [['#about_me_button', '#name'], ['#my_hobby_button', '#hobby'], ['#favorite_films_button', '#my_movies']];

    for (let i = 0; i < smoothScrollElements.length; i++) {
        let buttonId = smoothScrollElements[i][0];
        let targetElement = smoothScrollElements[i][1];

        $(buttonId).click(function() {
            $.smoothScroll({ scrollTarget: $(targetElement) });
        });
    }

    //----------Open mobile menu ----------\\
    let topMenuButtons = ['#close_mobile_menu', '#about_me_button', '#my_hobby_button', '#favorite_films_button', '#add_film_button'];

	$('#mobile_menu').click(function() {
		$('#mobile_menu').css('display', 'none');
		$('#top_menu').addClass('background_top_menu');
        for (let i = 0; i < topMenuButtons.length; i++) {
            $(topMenuButtons[i]).css('display', 'block');
            $(topMenuButtons[i]).animate({ "opacity": "1" }, 1000 );
        }
    });

    //----------Close mobile menu ----------\\
    $('#close_mobile_menu').click(function() {
        for (let i = 0; i < topMenuButtons.length; i++) {
            setTimeout(function() {
				$(topMenuButtons[i]).css('display', 'none');
            }, 1000);
			$(topMenuButtons[i]).animate({ "opacity": "0" }, 1000 );
        }

        setTimeout(function () {
            $('#mobile_menu').css('display', 'block');
        }, 1000);

        $('#top_menu').removeClass('background_top_menu');
    });

//------------------------------Add movie------------------------------\\
	$('#add_film_button').click(function() {
		$('#add_movie_form').css('display', 'block');
		$('#modal_overlay').css('display', 'block');
    });

    //------------------------------Close------------------------------\\
    let closeAddMovieForm = ['#modal_overlay', '#close_add_movie_button'];

    for (let i = 0; i < closeAddMovieForm.length; i++) {
        $(closeAddMovieForm[i]).click(function() {
            $('#add_movie_form').css('display', 'none');
		    $('#modal_overlay').css('display', 'none');
        });
    }

    //-------Проверка формы на пустые поля-------\\
    let addMovieFields = ['#url', '#movie_name', '#movie_description'];

    $('#send_add_movie').click(function() {
        event.preventDefault();
        function isEmptyFields() {
            let isEmpty = false;
			for(let i = 0; i < addMovieFields.length; i++) {
				if($(addMovieFields[i]).value === '') {
					$(addMovieFields[i]).addClass('red_border');
					isEmpty = true;
				} else {
				    console.log('1');
                }
			}
			return isEmpty;
        }

        if (!isEmptyFields()) {
            let newMovie = document.createElement('div');
			newMovie.classList.add('movie');

			let movieImg = document.createElement('img');
			movieImg.classList.add('movie_image');
			movieImg.src = $(addMovieFields[0]).value;

			let movieName = document.createElement('h4');
			movieName.classList.add('movie_name');
			movieName.value = $(addMovieFields[1]).value;

			let movieBrief = document.createElement('p');
			movieBrief.classList.add('movie_brief');
			movieBrief.value = $(addMovieFields[2]).value;

			let movie = [movieImg, movieName, movieBrief];

			for (let i = 0; i < movie.length; i++) {
				newMovie.appendChild(movie[i]);
            }
        }
	});
}); 
