# WanderLust

WanderLust is a web application designed for managing and booking accommodations, similar to Airbnb. It enables users to create, view, and book property listings with a user-friendly interface.

## Features

- **User Authentication:** Secure sign-up and login functionality.  
- **Map Integration:** Utilizes **Mapbox** for interactive map features to efficiently display and locate listings.  
- **Review System:** Allows customers to write and submit reviews for each listing, providing feedback and ratings.  
- **Image Upload System:** Enables owners to upload pictures of their listings, with images securely stored on the cloud using **Cloudinary**.  
## Technologies Used

- **Frontend:**
  - HTML
  - CSS
  - JavaScript
  - Bootstrap

- **Backend:**
  - Node.js
  - Express.js

- **Database:**
  - MongoDB with Mongoose

- **Version Control:**
  - Git

## Installation

### Prerequisites

- **Node.js** (v14 or later)
- **npm** (Node Package Manager)
- **MongoDB** (local or remote instance)

### Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/VinayakSharma012/WanderLust.git

    Navigate to Project Directory:

cd WanderLust

Install Dependencies:

npm install

Set Up Environment Variables:

    Create a .env file in the root directory and add your MongoDB connection string:

    MONGO_URL=mongodb://127.0.0.1:27017/wanderlust

Start the Application:

    npm start

    The application will be running on http://localhost:3000.

Usage

    Create a New Listing:
        Navigate to the "Create Listing" page and fill out the form to add a new property listing.

    Search for Listings:
        Use the search functionality on the homepage to find accommodations based on your criteria.

    Make a Booking:
        Select a listing from the search results and follow the steps to book it.

Contributing

    Fork the Repository:
        Click the "Fork" button on GitHub to create your copy of the repository.

    Clone Your Fork:

git clone https://github.com/YOUR_USERNAME/WanderLust.git

Create a New Branch:

git checkout -b feature/your-feature

Make Your Changes:

    Implement your feature or fix a bug.

Commit Your Changes:

git add .
git commit -m "Add a descriptive commit message"

Push to Your Fork:

    git push origin feature/your-feature

    Create a Pull Request:
        Go to the original repository on GitHub and create a pull request from your branch.

License

This project is licensed under the MIT License. See the LICENSE file for details.
Acknowledgements

    Bootstrap for the front-end framework.
    Mongoose for MongoDB object modeling.
    Node.js and Express.js for backend development.
    Git for version control.

This README file provides a clear and comprehensive overview of your project, making it easier for others to understand, use, and contribute to 
