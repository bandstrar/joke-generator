import jokesData from '../helpers/data/jokesData';

const getAJoke = () => {
  $('#getJoke').on('click', (e) => {
    e.preventDefault();

    jokesData.getJoke().then((response) => {
      $('#app').append(`<h2>${response.setup}</h2>
      <button type="button" class="btn btn-success" id="${response.id}Punchline">Punchline</button>`);
      $(`#${response.id}Punchline`).on('click', () => {
        $('#app').append(`<h2>${response.punchline}</h2>`);
      });
    });
  });
};

const showJoke = () => {
  $('#app').html('<button type="button" class="btn btn-primary" id="getJoke">Get Joke</button>');
  getAJoke();
};

export default { showJoke };
