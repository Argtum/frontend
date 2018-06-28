//---------- getElements ----------\\
function getById(id)
{
    return document.getElementById(id);
}

function getByElementClass(className)
{
    return document.getElementsByClassName(className);
}

//---------- registrar ---------\\
function registerEvent(id, eventName, func)
{
    let element = getById(id);
    element.addEventListener(eventName, func);
}

function registerSetOfEvents(className, eventName, func)
{
    let elements = getByElementClass(className);
    for(let i = 0; i < elements.length; i++)
    {
        elements[i].addEventListener(eventName, func);
    }
}

//---------- secondary functions ----------\\
function addClass(targetElem, addedClass)
{
    let target = getById(targetElem);
    target.classList.add(addedClass);
}

function removeClass(targetElem, addedClass)
{
    let target = getById(targetElem);
    target.classList.remove(addedClass);
}

//----------------- my functions -----------------\\
function showMoreFilms(event)
{
    event.preventDefault();
    addClass("all_movies", "hide_button");
    addClass("hidden_movie_container", "display_movie_container");
    setTimeout(function() {
        addClass("hidden_movie_container", "opacity_movie_container");
    }, 0);
}

function checkForm(event)
{
    event.preventDefault();
    let fields = getByElementClass("checked_write_me_field");
    for(let i = 0; i < fields.length; i++)
    {
        if(fields[i].value === '')
        {
            fieldError(fields[i]);
        }
    }

    /*fields.forEach(function(item) {
            if(item.value === '')
            {
                addClass(item.id, "red_border");
            }
        }
    );*/
}

function undoFieldError()
{
    removeClass(this.id, "red_border");
}

function fieldError(field)
{
    addClass(field.id, "red_border");
}

function openModal(event)
{
    event.preventDefault();
    addClass("write_me_form", "visible");
    addClass("modal_overlay", "visible");
}

function closeModal(event)
{
    event.preventDefault();
    removeClass("write_me_form", "visible");
    removeClass("modal_overlay", "visible");
}

//---------- start ----------\\
function pageLoaded()
{
    registerEvent("write_me_link", "click", openModal);
    registerEvent("send_write_me", "click", checkForm);
    registerSetOfEvents("checked_write_me_field", "click", undoFieldError);
    registerEvent("modal_overlay", "click", closeModal);
    registerEvent("close_write_me_form", "click", closeModal);
    registerEvent("all_movies", "click", showMoreFilms);
}

window.addEventListener("load", pageLoaded);