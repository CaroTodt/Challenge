# React-Challenge
Technical React Challenge - Newcombin

## Structure Folder
* devskillsadv = API Server
* frontend = Frontend of the website

## Start API server
* Clone this repository
* Go to the folder devskillsadv
* Install the dependencies with `npm install`
* Run the server with `npm run serve`

## Start Frontend
* Go to the folder frontend
* Install the dependencies with npm install
* Run the frontend with the command `npm start`

## Library used in the frontend 
* React
* Bootstrap
* React-router-dom
* React-hook-form
* Axios


## Task of the Challenge
- [x] Create in a new folder the following web site
- [x] The form data should be sent to the API, the table on the right should receive the form data when the site is loaded.
- [x] After each successful insertion, the data should be entered into the table, no need to use the GET endpoint.
- [x] The reset button should clear the form fields.
- [x] The save button should send data to the API
- [x] The social security number (ssn) is unique, and cannot be repeated in the list.
- [x] In case of a wrong insertion attempt, the error must be reported.
- [x] After 2 minutes of inactivity, the table must be refreshed automatically.

### API Validations
- [x] **firstName, lastName and address:** More than 1 character, no spaces at the sides (trim)
- [x]**ssn:** Have the format ###-##-#### (each # is a number, hyphens are mandatory)
- [x] If the front end does not meet the validations you must disable the submit button.

