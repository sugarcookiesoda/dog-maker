function getRandomDog() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            const dogImage = document.getElementById('dogImage');
            dogImage.src = data.message;
        })
        .catch(error => console.error('I COULDNT FIND A DOG AGHHHHHSDFFG:', error));
}
