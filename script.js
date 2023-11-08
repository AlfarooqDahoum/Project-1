// Selecting all elements with the class 'key' and 'audio' on the page


const keys = Array.from(document.querySelectorAll('.key'));

const audios = Array.from(document.querySelectorAll('audio'));




// Event listener for keydown (when a key is pressed)


window.addEventListener('keydown', function(e) {
    const audio = audios.find(audio => audio.dataset.key == e.keyCode.toString()); // Find the audio element that matches the pressed key's keyCode

    const key = keys.find(key => key.dataset.key == e.keyCode.toString()); // Find the corresponding HTML element with the pressed key's keyCode

    if (audio) {
        audio.currentTime = 0;
        audio.play(); // Rewind the audio to the beginning and play it
        if (key) {
            key.classList.add('playing'); // If matching HTML element is found, add a class 'playing' to it
        }
    }
});




// Event listeners for each key


keys.forEach(key => {  // Click event listener for each key

    key.addEventListener('click', function() { // Find the audio element associated with the clicked key

        const audio = audios.find(audio => audio.dataset.key == this.dataset.key);

        if (audio) {
            audio.currentTime = 0;
            audio.play();   // Rewind the audio to the beginning and play it
        }
        this.classList.add('playing'); // Add a class 'playing' to the clicked key
    });




    // Transitionend event listener for CSS transitions

    
    key.addEventListener('transitionend', function(e) {
        if (e.propertyName !== 'transform') return;
        this.classList.remove('playing'); // Remove the class 'playing' from the key
    }); 
});
