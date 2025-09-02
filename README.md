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

 #10 Most Common Matchers
 <p>Here are some of the most common matchers used in JavaScript testing frameworks like Jest, Vitest, and Jasmine, categorized by what they assert.</p>
 <ol>
  <li>Equality</li>
   <ol>
    <li>.toBe(value): Checks for strict equality (===), comparing both the value and its type</li>
    <li>.toEqual(value): Checks for "deep" equality, recursively comparing the contents of objects and arrays. Use this when the values and properties should match, but the references might be differen</li>
    <li>.toStrictEqual(value): A stricter version of .toEqual(), ensuring both the type and structure of objects are identical.</li>
   </ol>
  <li>Truthiness---These matchers help test values based on their "truthiness" in a boolean context.</li>
   <ol>
    <li> .toBeNull(): Matches only null.</li>
    <li>.toBeUndefined(): Matches only undefined.</li>
    <li>.toBeDefined(): The opposite of toBeUndefined.</li>
    <li>.toBeTruthy(): Matches anything that an if statement considers true.</li>
    <li>.toBeFalsy(): Matches anything that an if statement considers false.</li>
   </ol>
   <li>Numbers</li>
   <ol>
    <li>.toBeGreaterThan(number): Checks if a value is greater than another.</li>
    <li>.toBeLessThan(number): Checks if a value is less than another.</li>
    <li>.toBeGreaterThanOrEqual(number): Checks if a value is greater than or equal to another.</li>
    <li>.toBeLessThanOrEqual(number): Checks if a value is less than or equal to another.</li>
    <li>.toBeCloseTo(number, numDigits): For comparing floating-point numbers where you might not need exact precision. </li>
   </ol>
   <li>Strings</li>
   <ol>
    <li>.toMatch(regexp): Checks if a string matches a given regular expression.</li>
   </ol>
  <li>Arrays and Iterables</li>
   <ol>
    <li>.toContain(item): Checks if an item is in an array or a substring is in a string.</li>
    <li>.toHaveLength(number): Checks the number of items in an array or characters in a string.</li>
   </ol>
  <li>Objects</li>
   <ol>
    <li>.toHaveProperty(keyPath, value): Checks if an object has a certain property and, optionally, if it has a specific value.</li>
    <li>.toMatchObject(object): Checks if a JavaScript object matches a subset of the properties of an object. </li>
   </ol>
  <li>Negating Matchers</li>
   <ol>
    <li>You can reverse the logic of any matcher by chaining .not. </li>
    <code> expect(2 + 2).not.toBe(5);</code>
   </ol>
 </ol>
    
