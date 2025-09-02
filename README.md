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
   
   <li>Gray Box</li>
   <ol>
    <li>E2E Testing (Detox)</li>
   </ol>
  </ol>
 </ol>
 
#3 Create a new directory for your project
  <code>
   mkdir javascript-test-project
   cd javascript-test-project
  </code>
  
#4 Initialize npm
<p>This creates a package.json file to manage your project's dependencies.</p>
  <code>
   npm init -y
  </code>
 
#5 Install Jest
<p>Install Jest as a development dependency.</p>
  <code>
   npm install --save-dev jest
  </code>

#6 Add a test script to your <bold>package.json</bold> file
<p>Open your package.json file and add the following to the "scripts" section to enable the npm test command.</p>
 <code>
 "scripts": {
   "test": "jest"
 }
 </code>

#7 Write the code to be tested
<p>Create a new file named index.js or anything you want with a simple function you can test. This function will multiply two numbers. </p>
 <code>
   #index.js
   function multiply(a,b){
    return a*b
   }
   module.exports = multiply
 </code>

#8 Write your first test
<p>Create a test file with a same name but .test.js sufix (e.g., index.test.js )</p>
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

 #9 Run your test
 <code>
  npm test
 </code>
    
