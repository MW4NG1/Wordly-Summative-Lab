// Select the elements first
// Fot the search form
const searchForm = document.getElementById("search-form");
// For the input part
const wordInput = document.getElementById("word-input");
// Result elements after seraching word
const word = document.getElementById("word");
const pronunciation = document.getElementById("pronunciation");
const partOfSpeech = document.getElementById("part-of-speech");
const definition = document.getElementById("definition");
const example = document.getElementById("example");
const synonyms = document.getElementById("synonyms");
// Audio player element
const audio = document.getElementById("audio");
// Source element
const source = document.getElementById("source");
// Error message element
const errorMessage = document.getElementById("error-message");
// For the search history list
const historyList = document.getElementById("history-list");
// For storing users search history
const searchHistory = [];

// Add Event listener to the search form
// Listen for form submission
searchForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the page from refreshing
  // Get the word entered by the user
  const searchedWord = wordInput.value.trim();
  if (searchedWord === "") {
    // Check if the input is empty
    errorMessage.textContent = "Please enter a word.";
    return;
  }
  // Clear any previous error message
  errorMessage.textContent = "";
  // Call the function that searches the API
  fetchWord(searchedWord);
});

// Fetch word data from the API
// Function to search for a word
async function fetchWord(searchedWord) {
  // Dictionary API url given
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchedWord}`;
  try {
    // Send a request to the API
    const response = await fetch(url);
    // Check if the request was successful
    if (!response.ok) {
      errorMessage.textContent = "Word not found. Please try another word.";
      return;
    }
    // Convert the response into JSON
    const data = await response.json();
    // Display the fetched word information
    displayWord(data);
  } catch (error) {
    // Display an error message if something goes wrong
    errorMessage.textContent = "Something went wrong. Please try again.";
  }
}

// To display the word information on the page
// Function to display the API data
function displayWord(data) {
  // Store the first word returned by the API
  const result = data[0];
  // Display the searched word
  word.textContent = result.word;
  // Clear any previous error message
  errorMessage.textContent = "";
  // Display the pronunciation
  if (result.phonetic) {
    pronunciation.textContent = "Pronunciation: " + result.phonetic;
  } else {
    pronunciation.textContent = "Pronunciation: Not available";
  }
  // Display the part of speech
  if (result.meanings[0].partOfSpeech) {
    partOfSpeech.textContent =
      "Part of Speech: " + result.meanings[0].partOfSpeech;
  } else {
    partOfSpeech.textContent = "Part of Speech: Not available";
  }
  // Display the definition
  if (result.meanings[0].definitions[0].definition) {
    definition.textContent =
      "Definition: " + result.meanings[0].definitions[0].definition;
  } else {
    definition.textContent = "Definition: Not available";
  }
  // Display an example sentence
  if (result.meanings[0].definitions[0].example) {
    example.textContent =
      "Example: " + result.meanings[0].definitions[0].example;
  } else {
    example.textContent = "Example: No example available.";
  }
  // Display synonyms
  // Clear previous synonyms
  synonyms.innerHTML = "";
  // Get the synonyms
  const synonymArray = result.meanings[0].synonyms;
  // Check if there are any synonyms
  if (synonymArray && synonymArray.length > 0) {
    // Loop through each synonym
    synonymArray.forEach(function (synonym) {
      // Create a list item
      const listItem = document.createElement("li");
      // Add the synonym text
      listItem.textContent = synonym;
      // Add it to the list
      synonyms.appendChild(listItem);
    });
  } else {
    // Create a message if no synonyms exist
    const listItem = document.createElement("li");
    listItem.textContent = "No synonyms available.";
    synonyms.appendChild(listItem);
  }
  // Display the source link
  if (result.sourceUrls && result.sourceUrls.length > 0) {
    source.innerHTML =
      'Source: <a href="' +
      result.sourceUrls[0] +
      '" target="_blank">' +
      result.sourceUrls[0] +
      "</a>";
  } else {
    source.textContent = "Source: Not available";
  }
  // Display pronunciation audio
  // No audio has been found here yet
  let audioFound = false;
  // Check every phonetic for audio
  for (let i = 0; i < result.phonetics.length; i++) {
    // If this phonetic has audio
    if (result.phonetics[i].audio !== "") {
      // Set the audio source
      audio.src = result.phonetics[i].audio;
      // Reload the audio player
      audio.load();
      // We found audio
      audioFound = true;
      // Stop the loop
      break;
    }
  }
  // If no audio was found
  if (!audioFound) {
    audio.pause();
    audio.removeAttribute("src");
    audio.load();
  }
  // Add the searched word to the history
  updateHistory(result.word);
}

// Function that updates the search history list
function updateHistory(searchedWord) {
  // Add the searched word to the array
  searchHistory.push(searchedWord);
  // Clear the current history list
  historyList.innerHTML = "";
  // Loop through every searched word
  searchHistory.forEach(function (word) {
    // Create a new list item
    const listItem = document.createElement("li");
    // Display the searched word
    listItem.textContent = word;
    // When the user clocks the word, it searches again
    listItem.addEventListener("click", function () {
      // Show the word in input box
      wordInput.value = word;
      // Search for the word again
      fetchWord(word);
    }
    );
    // Add the list item to the history section
    historyList.appendChild(listItem);
  });
}
