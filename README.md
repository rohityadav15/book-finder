# Project Name
 ## 📚 Book Finder App

A React.js application to search and display books using an external API.  
The project follows a modular folder structure with reusable components and Material-UI for styling.

## Features

 Search books by title, author, or keyword  
- Display book details in card format  
- Loader while fetching data  
- Error message handling  
- API integration for dynamic data  
- Responsive UI with **Material-UI**

## Technologies

- React.js - Frontend library  
- Material-UI (MUI) - UI components  
- Axios - API requests  

## Installation 

```npm install```

## Project Create

```npx create-react-app book-finder```

```npm start```

## Project upload on GitHub

**Clone the repository**

git clone https://github.com/rohityadav15/book-finder.git

## Available Scripts

```npm start – Runs the app in development mode```

```npm run build – Builds the app for production```

```npm test – Runs tests (if configured)```

## Material-UI Usage

This project uses Material-UI (MUI) for modern and responsive UI.

## API Service

The API logic is separated in src/services/api.js for maintainability.

## Deployed on
netlify.com

## Deployed Project link
https://book-finder-app-by-rohit.netlify.app/

## Author 

Developed by Rohit Kumar Yadav.

## GitHub project code link

```https://github.com/rohityadav15/book-finder.git```

# Project Structure

```plaintext
src/
│── components/
│   ├── ErrorMessage.js     # Displays error messages
│   ├── SearchBar.js        # Search input with Material-UI
│   ├── BookCard.js         # Single book card display
│   ├── BookList.js         # Renders list of books
│   ├── Loader.js           # Loading spinner
│
│── pages/
│   ├── HomePage.js         # Main page with search and results
│
│── services/
│   ├── api.js              # API fetch logic
│
│── App.js                  # Main entry point
│── index.js                # React DOM render

