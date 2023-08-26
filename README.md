# API-TestCases-Generator
A utility package to generate JSON combinations which can use used further write positive and negative test cases of an API with a POST request having JSON body.

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

## Example
-  Consider a API with a below request body
  ```
{
        "name": "username",
        "age":24,
        "address":{state: TN,city: Chennai}
        "hobbies":["reading","travelling"]
}
```
- In the above json, name and age are mandatory fields for the API to give a valid response. We can convert the above json to below
```
[{
name:"username",
type:String,
mandatory:true
}.{
age:25,
type:Number,
mandatory:true
}.
{
address:{state:TN, city: Chennai},
type: Object,
mandatory:false
}.
{
hobbies:["reading","travelling"],
type:Array,
mandatory:false
}]
```
- When the above object is passed as parameter in the getCases function, it will return the combination of json requests which can be used further to write postive and negative test cases.
- The generated combination for the above request is mentioned as below
```
Positive Test Cases
 [
      { username: 'exampleString', age: 42 },// only mandate params
      { username: 'exampleString', age: 42, address: {} },// with mandate and not all non mandate params
      { username: 'exampleString', age: 42, hobbies: [] },// with mandate and not all non mandate params
      { username: 'exampleString', age: 42, address: {}, hobbies: [] }// with all params
    ]

Negative Test Cases
 [
      { age: 42, address: {}, hobbies: [] },// mandate param username missing
      { username: 'exampleString', address: {}, hobbies: [] },// mandate param age missing
      { username: 12345, age: 42, address: {}, hobbies: [] },// username is String, but passed as number
      {
        username: 'exampleString',//age is a number, but passed as string
        age: 'InvalidInteger',
        address: {},
        hobbies: []
      },
      {
        username: 'exampleString',//address is an object, but passed as string
        age: 42,
        address: 'InvalidInteger',
        hobbies: []
      },
      {
        username: 'exampleString',// hobbies is a array, but passed as string
        age: 42,
        address: {},
        hobbies: 'InvalidInteger'
      }
    ]

```

## License
This project is licensed under the MIT License.
