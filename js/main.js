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

////////// ---------- JQUERY --------- \\\\\\\\\\

//---------- Open mobile menu ----------\\
let topMenuButtons = ['#close_mobile_menu', '#about_me_button', '#my_hobby_button', '#favorite_films_button', '#add_film_button'];

function openMobileMenu() {
	$('#mobile_menu').css('display', 'none');
	$('#top_menu').addClass('mobile_top_menu');
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
		$(topMenuButtons[i]).animate({ "opacity": "0" }, 1000 ).removeAttr('style');
        setTimeout(function() {
            $(topMenuButtons[i]).removeAttr('style');
        }, 1000);
	}
	setTimeout(function () {
		$('#mobile_menu').css('display', 'block').removeAttr('style');
        $('#top_menu').removeClass('mobile_top_menu');
	}, 1000);
}

//------------------------------Add movie------------------------------\\
function openAddMovieMenu() {
	$('#add_movie_form').css('display', 'block');
	$('#modal_overlay').css('display', 'block');
}

//---------- Close Add movie ----------\\
function closeAddMovieMenu() {
	$('#add_movie_form').css('display', 'none');
	$('#modal_overlay').css('display', 'none');
}

//----------- обработка формы добавления фильма ----------\\
let movieFields = ['#url', '#movie_name', '#movie_description'];

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
		closeAddMovieMenu();
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

	//---------- отмена крассных границ ----------\\
	for (let i = 0; i < movieFields.length; i++) {
		$(movieFields[i]).click(function() {
			$(movieFields[i]).removeClass('red_border');
		});
	}

	$('#close_mobile_menu').click(closeMobileMenu);
	$('#mobile_menu').click(openMobileMenu);
	$('#add_film_button').click(openAddMovieMenu);
	$(['#modal_overlay', '#close_add_movie_button'].join()).click(closeAddMovieMenu);
	$('#send_add_movie').click(MovieMenu);
}); 
