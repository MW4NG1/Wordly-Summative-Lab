# Wordly Dictionary

## Project Overview

Wordly Dictionary SPA is a Single Page Application that allows users to search for English words and retrieve information such as pronunciation, definitions, example sentences, synonyms, and pronunciation audio using the Free Dictionary API that was provided.

## Problem Statement

Many users need a quick and simple way to look up word meanings, pronunciations, and synonyms without navigating through multiple web pages or refreshing the browser.

## Solution

The project provides an interactive dictionary application where users can:

- Search for English words
- View word definitions
- View pronunciation
- View part of speech
- View example sentences
- View synonyms
- Listen to pronunciation audio
- View previously searched words in the search history

## Project Structure

The project consists of the following files:

- index.html that contains the structure of the application.
- style.css which handles the styling and layout.
- script.js which handles API requests, DOM manipulation, event handling, and search history.

## Technologies Used

- HTML for Structure
- CSS for Styling
- JavaScript for DOM Manipulation and Logic
- Free Dictionary API for retrieving word information

## How It Works

1. The user enters a word into the search bar.
2. JavaScript sends a request to the Free Dictionary API.
3. The API returns information about the word.
4. The application displays the word information without refreshing the page.
5. The searched word is added to the search history.
6. If pronunciation audio is available, the user can play it.

## Responsiveness

The application uses Flexbox to organize the layout and create a clean, user-friendly interface that adapts well to different screen sizes.

## API Used

A Free Dictionary API
The application uses the Free Dictionary API to retrieve information about English words, including definitions, pronunciations, synonyms, examples, and audio when available.

## Known Issues

- Some words may not contain pronunciation audio because it is unavailable from the Dictionary API.
- Some words may not have synonyms or example sentences.

## Future Improvements

- Allow users to click a word from the search history to search it again.
- Have a clear button in the search history section
- Save search history using Local Storage.
- Display multiple definitions for each word.

## Author

Developed by Mwangi Michael for the Wordly Summative Lab.

## How to Run the Project

1. Download or clone the repository.
2. Open the project folder in VS Code.
3. Open index.html using Live Server.
4. Search for any English word to begin using the application.

## Conclusion

This project demonstrates the use of HTML, CSS, and JavaScript to build an interactive Single Page Application that communicates with a public API.
