# API-TestCases-Generator
A utility package to generate positive and negative test cases of an API with a POST request having JSON body

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory. 
3. Install project dependencies using npm install.

## Usage

- Different requests body parameters are defined in the file cases.js including its name, type of the property and if the property is mandate for an API.
- The function getCases file in test-generator.js is responsible for taking the input request json body as parameter and return list of request parameter combination which will be helpful in writing positive and negative test cases.
- To add any specific request write a new function in the cases.js file and write the test case for the same. Generated request parameter combination can be printed in the console.

## Contributing
Contributions are welcome! If you have suggetions or improvements, feel free to submit a pull request. 

## License
This project is licensed under the MIT License.
