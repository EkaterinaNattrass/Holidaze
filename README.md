# Holidaze
Noroff graduation exam app which allows users both rent out and book holiday venues presented at the website.

<img src="Landing_page.png"></img>

## Deployment

[Holidaze website](https://holidaze-ekanat.netlify.app/)

## User stories

- A user may view a list of Venues
- A user may search for a specific Venue
- A user may view a specific Venue page by id
- A user may view a calendar with available dates for a Venue
- A user with a stud.noroff.no email may register as a customer
- A registered customer may create a booking at a Venue
- A registered customer may view their upcoming bookings
- A user with a stud.noroff.no email may register as a Venue manager
- A registered Venue manager may create a Venue
- A registered Venue manager may update a Venue they manage
- A registered Venue manager may delete a Venue they manage
- A registered Venue manager may view bookings for a Venue they manage
- A registered user may login
- A registered user may update their avatar
- A registered user may logout

## Description

The project contains:

- Landing page - advertises the service with images and describes the essence of the app 
- Home page - renders the venues, features a search bar
- Details page  - shows a venue chosen by id, including three images, the name, description, location, rating and price data, wifi/parking/breakfast/pets availability
- Profile page - features the avatar with possibility to update it, the name and email address of the client; in case of a customer renders their bookings if any, with a delete button to delete a certain booking; in case of a venue manager renders the venues with their bookings, includes the delete and update buttons
- Clients page - renders the reviews by customers
- About us page - tells a story behind the idea
- Services page - gives more details about the way the service operates
- Navbar - has popover modals allowing users to choose if they are a customer/manager and register/login/logout; there is also a link ot their profile (rendered conditionally if they are logged in)

## Tech Stack

The project was built with:

- Noroff API application
- React
- MUI

## Available Scripts
In the project directory, you can run:

### npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

### npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

### npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

### npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

Code Splitting
This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Making a Progressive Web App
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Advanced Configuration
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

npm run build fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


