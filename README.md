#1 what is software testing?
 Software testing is the process of evaluating and verifying that a software product or application does what it's supposed to do

#2 Types of software testing
 <ol>
  <li>Manual</li>
   <ol>
    <li>Exploratory</li>
    <li>Ad-hoc</li>
   </ol>
  <li>Automation---using automated tools to execute test on the software e.g: Jest,</li>
  <ol>
   <li>White Box</li>
   <ol>
    <li>Unit Testing</li>
    <li>Integration Testing </li>
   </ol>
   <li>Black Box</li>
   <ol>
    <li>Security Testing</li>
   </ol>
    <li>Gary Box</li>
   <ol>
    <li>E2E Testing (Detox)</li>
   </ol>
  </ol>
 </ol>
#3 Set up a project and install jest
 npm install --save-dev jest

4# Add a test script package.json file
"scripts": {
  "test": "jest"
}

5# Create a file with siple function multiply index.js
<code>
  #index.js
  function multiply(a,b){
   return a*b
  }
  module.exports = multiply
</code>

#6 Create a test file with a same name but .test.js sufix (e.g., index.test.js )
<code>
  #index.test.js
  const multiply = require('./index.js')
  //test suite
  test('2 and 5 multipy equal 10',()=>{
    expect(multiply(2,5)).toBe(10) //checking exact equality
  )
  //test() A Jest function that defines a single test case.
  //accepts two argument one description and one function 
  //expect(): A function used for making assertions. It wraps the code you are testing.
  //toBe(): A "matcher" that compares the result to the expected value. 
</code>
    
