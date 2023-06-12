Simple Mail Inbox
This is a simple mail inbox application built with React, Redux, and Redux Saga. It allows users to view and filter their mails based on different tags.

Features
List all mails with the inbox tag as the default view.
Open and view the body of each mail.
Apply filters using tags such as inbox, draft, spam, and trash.
View all mails regardless of tags.
Implement a word search functionality with a direct URL to search results.
Retain the applied filter when the user reloads the page.
Data is fetched from the https://run.mocky.io/v3/15a3a1c3-1cda-4409-b1b1-2f39f5f25123.
No signup/login 
Cutom CSS is used throughout the project.
React, Redux, Redux Saga and React Router are used.


Setup
Clone the repository or download the source code.
Install the dependencies by running npm install or yarn install.
Start the development server with npm start or yarn start.
Open the application in your browser at http://localhost:3000.


Usage
Upon opening the application, the user is presented with the mail inbox view by default, showing all mails with the inbox tag.
Click on a mail to open and view its content.
Use the filter buttons/tags (inbox, draft, spam, trash) to view mails based on different tags.
Click on the "All Mails" button to view all mails regardless of tags.
To perform a word search, append the search query to the URL, for example: http://localhost:3000/search?term=sint.
Direct URLs to each filter can be used to access the filtered views directly, and the applied filter will be retained when the page is reloaded.
Testing
Basic test cases have been written using the react-testing-library. To run the tests, use the command npm test or yarn test.