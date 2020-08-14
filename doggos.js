const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const doggos = document.querySelector('.doggos');

function addNewDoggo() {
  const promise = fetch(DOG_URL);

  promise
    .then(function(response) { return response.json() })
    .then(function(processedResponse) {
      const img = document.createElement('img');
      img.src = processedResponse.message;
      img.alt = 'Cute Doggo';
      img.width = 500;
      doggos.appendChild(img);
    })
}

document.querySelector('.add-doggo').addEventListener('click', addNewDoggo);