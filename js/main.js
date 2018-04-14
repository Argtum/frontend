window.onload = function()
{
	var movieButton = document.getElementsByClassName('all_movies_button')[0];
	var hiddenMovieContainer = document.getElementsByClassName('my_movies_container_two')[0];

	//	movieButton.onclick = function()
	movieButton.addEventListener('click', function()
	{
		movieButton.style.display = 'none';
		movieButton.style.height = '0';
		hiddenMovieContainer.style.display = 'block';
		hiddenMovieContainer.style.opacity = '0';
		hiddenMovieContainer.style.opacity = '1';
	});
}