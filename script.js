// Select the elements first
// Search form
const searchForm = document.getElementById("search-form");
// Input field
const wordInput = document.getElementById("word-input");
// Result elements
const word = document.getElementById("word");
const pronunciation = document.getElementById("pronunciation");
const partOfSpeech = document.getElementById("part-of-speech");
const definition = document.getElementById("definition");
const example = document.getElementById("example");
const synonyms = document.getElementById("synonyms");
// Audio player
const audio = document.getElementById("audio");
// Error message
const errorMessage = document.getElementById("error-message");
// Search history list
const historyList = document.getElementById("history-list");

// Add Event listener to the search form
// Listen for form submission
searchForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the page from refreshing
  // Get the word entered by the user
  const searchedWord = wordInput.value.trim();
  if (searchedWord === "") {  // Check if the input is empty
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
    // Dictionary API URL
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
        // Send the data to another function that will display it
        displayWord(data);
    }
    catch (error) {
        // Display an error message if something goes wrong
        errorMessage.textContent = "Something went wrong. Please try again.";
    }
}