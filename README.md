# Hot Gadgets

## Overview

This project is a dynamic and interactive web application that allows users to search for and view details about various phones. The application features a responsive design with a clean user interface, offering functionalities such as phone search, detailed views of phone specifications, and the ability to display a full list of search results.

## Features

- **Search Functionality**: Users can search for phones by entering a keyword in the search bar. The search results are displayed dynamically as cards.
- **Phone Details**: Clicking on a phone card will show detailed specifications of the selected phone in a modal.
- **Show All Button**: If more than 12 results are found, a "Show All" button will appear, allowing users to view the complete list of search results.
- **Loading Indicator**: A loading indicator is displayed while data is being fetched from the API.

## Technologies Used

- **HTML**: For structuring the web pages.
- **CSS (Tailwind CSS)**: For styling and layout.
- **JavaScript**: For handling the logic, API calls, and interactivity.

## How It Works

1. **Search**: Enter a keyword in the search bar and click the search button or press enter. The app fetches phone data matching the keyword from the API.
2. **Display Phones**: The first 12 results are displayed as phone cards with images and basic information.
3. **Show All**: If more than 12 results are returned, a "Show All" button will appear. Clicking this button displays the full list of phones.
4. **View Details**: Click the "Show Details" button on any phone card to open a modal with detailed specifications, including the release date, brand, and main features.

## Project Structure

- **index.html**: The main HTML file containing the structure of the page.
- **style.css**: The CSS file where custom styles and Tailwind CSS classes are applied.
- **app.js**: The JavaScript file that handles the functionality, including fetching data from the API and updating the DOM.

## API Reference

This project uses the [Programming Hero Phone API](https://openapi.programming-hero.com/api/phones) to fetch phone data.

- **Search Phones**: `https://openapi.programming-hero.com/api/phones?search={searchText}`
- **Phone Details**: `https://openapi.programming-hero.com/api/phone/{id}`

## How to Run

1. Clone the repository.
2. Open `index.html` in your browser.
3. Start searching for phones by typing in the search bar.
4. You can also [Click here](https://yugyadavv.github.io/weeklytest4js/?authuser=0) to view

## Future Improvements

- **Enhanced Filtering**: Add more filtering options like price range, brand, and operating system.
- **Pagination**: Implement pagination for better navigation through large search results.
- **User Authentication**: Add user authentication for saving favorite phones.

## Demo

Check out live demo here : [Live Demo](https://yugyadavv.github.io/weeklytest4js/?authuser=0)

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
