Selenium Code challenge

This challenge was to automate the login process using selenium and mocha framework. It uses Chrome as selected browser to run the test. 

Getting Started
To Clone the repository https://github.com/bhavyesh9989/Selenium-Code-Challenge.git
After cloning the repository
To run please use following command in git bash ../node_modules/mocha/bin/mocha login.js

Break down and coding style
Throughout the code I wanted to wait for elements to be visible and loaded before proceeding to the next step. Using until.elementLoaded helped me achieve that. Reason for using this was to ensure that I would not have to use driver.sleep which would wait for certain amount of time but a lot of times what happens is element takes longer time to load then allotted forcing the test case to fail. 
