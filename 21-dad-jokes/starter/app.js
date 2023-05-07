const url = 'https://icanhazdadjoke.com/';

console.log('Dad Jokes Starter');

const btn = document.querySelector('.btn');
const result = document.querySelector('.result');

const fetchDadJoke = async () => {
  result.textContent = 'Laden...';
  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/json',
        'User-Agent': 'learning app',
      },
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      throw new Error('Whoops!');
    }
    result.textContent = data.joke;
  } catch (error) {
    console.log(error.message);
    result.textContent = 'Fehler aufgetreten';
  }
};

btn.addEventListener('click', () => {
  fetchDadJoke();
});

fetchDadJoke();
