Thank you for the opportunity allowing me to be part of the skill assessment process. I really enjoyed the automation challenge.

There is some important information that you have to know to run my UI Automation test in Chrome web browser smoothly.

To run the tests you have to use the following command // npm test //.

1. I built the test by using Javascript language, with WebdriverIO and mocha framework. I also used chai for the library. I chose that because I had a side project where I learned that framework recently. Previously at Cazoo I used also Javascript, but we used Gherkin and Cucumber beside WebdriverIO, therefore I can write Gherkin style test cases like Given, When, Then scenarios.

2. I created a bymiles.page.js file in the pages (folder) where I used class to grouping all variables and functions.
   You can find the actual getQuote.test.js file in the test (folder) where the actual test cases are.

3. Please note, I did not push the node_modules file into the github. It could be too big to upload. I assume you have to install the required framework on your machine anyway. I will direct you on how I achieved that. Please follow my notes if needed.

First, we need to install node.js (https://nodejs.org/en/) and npm (https://www.npmjs.com/)

- npm init // setup new npm package by creating package.json
- npm install webdriverio —save-dev // save it to our devDependencies
- npm install @wdio/cli 
- ./node_modules/.bin/wdio config // webdriverb configuration�selenium-standalone-service�base URL: https://www.bymiles.co.uk/
- npm install chai --save-dev
- npm install chai-webdriverio --save-dev 
- npm install @wdio/local-runner

I also made some configuration changes in the wdio.conf.js file to able to use chai assertions and for running the test easier.
