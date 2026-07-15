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