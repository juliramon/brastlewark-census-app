# Getting Started

Project was bootstrapped with [Create React App]. Follow the next steps to get started:

1. Clone this project to your local dev environment
2. In the project directory, run **npm install** or its alias **npm i** to install all package dependencies.
3. Run either one of the two scrips below to run the app in the development mode:

   1. `yarn start`
   2. `npm start`

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Testing offline mode

Should you are curious about how the app leverages the lack of network connection, run the following scripts to build and serve a production version:

   1. `yarn global add serve`
   2. `yarn build`
   3. `serve -s build`

## About this project

Project designed and developed by Juli Ramon.
Project built with React using CSS for styling and Tabler Icons for the icons.

* The UI of the app tries to mimic a CRM so that heroes can have a glance at the gnomes data very quickly
* The app features a search bar to quickly find gnomes by name
* The app features a filter bar to quickly sort gnomes by ID, name, age, weight and height
* The app features a coloured box to facilitate the identification of the hair colour of the gnomes
* Gnomes with no profession are tagged as "Is unemployed"
* Gnomes with no friends are tagged as "Has no friends"
* Since heroes are unsure of the gnomes gender, the app is rendomly assigning a gender to each gnome
* The app has been developed so that UI is not blocked by network connections or long operations using workingServices.
* Data is consumed from the URL provided, available in the `services`folder
* Images coming from the network are cached by the browser by default in order to improve performance
* Over the development process, HTML, CSS and ES6 syntax have been used
