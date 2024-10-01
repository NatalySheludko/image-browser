## Image Search App
**Overview**
Adaptive design for desktop (1440px).
This project is a web application for searching and displaying images using the Pixabay API. The app allows users to search for images by keywords and view them in a gallery with support for pagination. The application is built using modern web technologies and includes the following features:

- Image search with pagination
- "Load More" button to fetch additional images
- Toast notifications for user feedback
- Smooth scrolling for better UX
- Integrated modal view for larger image previews using SimpleLightbox
- Error handling and user-friendly messaging

**Technologies Used**
- Vite - For fast project bundling and development.
- Axios - For handling HTTP requests to the Pixabay API.
- Async/Await - For managing asynchronous requests.
- SimpleLightbox - For lightbox functionality to display larger versions of images.
- iziToast - For providing user feedback through notifications.
- CSS - For styling the application.
- JavaScript (ES6+) - For the application logic and DOM manipulation.

**Project Structure**
The project follows a modular structure with separate files for each functionality:
- /src/js/pixabay-api.js - Contains the functions that handle API requests using Axios.
- /src/js/render-functions.js - Handles the rendering of the images and UI elements.
- /src/js/main.js - The entry point of the application where the main logic is implemented.
  
**Improvements**
- Button behavior: Ensure the "Load More" button does not appear during requests or when errors occur.
- Error handling: Improved error handling for better user feedback.
- Total Hits Information. The application fetches the totalHits property from the Pixabay API and hides the "Load More" button once all results have been displayed. If no more images are available, a message is shown to the user.
- Form Reset. On every new search, the page counter resets to 1, and previous search results are cleared to avoid mixing results from different queries.
