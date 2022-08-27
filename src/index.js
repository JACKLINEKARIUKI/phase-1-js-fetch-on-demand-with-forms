const init = () => {
  const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // console.log(event);
        const input = document.querySelector('input#searchByID');
        // console.log(input.value);
        fetch(`http://localhost:3000/movies/${input.value}`)
            .then(response => response.json())
            .then((movie) => {
            const title = document.querySelector('section#movieDetails h4');
            const summary = document.querySelector('section#movieDetails p');
            title.innerText = movie.title;
            summary.innerText = movie.summary;
            });
        })
}

document.addEventListener('DOMContentLoaded', init);
