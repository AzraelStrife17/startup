# CS 260 Notes
I did modify this in vs

[My startup - Simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## AWS

My IP address is: 54.81.96.130
Launching my AMI I initially put it on a private subnet. Even though it had a public IP address and the security group was right, I wasn't able to connect to it.

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

Remember the button type because that may be needed later on when adding technology as well as the <form method = "get" action="characterBuilder.html"> will likely be used as well for when viewing community character builds

The part I didn't like was the duplication of the header and footer code. This is messy, but it will get cleaned up when I get to React.

## CSS

This took a couple hours to get it how I wanted. It was important to make it responsive and Bootstrap helped with that. It looks great on all kinds of screen sizes.

Bootstrap seems a bit like magic. It styles things nicely, but is very opinionated. You either do, or you do not. There doesn't seem to be much in between.

I did like the navbar it made it super easy to build a responsive header.

```html
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
            Calmer
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="play.html">Play</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
```

I also used SVG to make the icon and logo for the app. This turned out to be a piece of cake.

```html
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="#0066aa" rx="10" ry="10" />
  <text x="50%" y="50%" dominant-baseline="central" text-anchor="middle" font-size="72" font-family="Arial" fill="white">C</text>
</svg>
```

## React Part 1: Routing

Setting up Vite and React was pretty simple. I had a bit of trouble because of conflicting CSS. This isn't as straight forward as you would find with Svelte or Vue, but I made it work in the end. If there was a ton of CSS it would be a real problem. It sure was nice to have the code structured in a more usable way.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```
## Midterm
1.In the following code, what does the link element do?: establishes a linkt from the html to another external source typically css
2.In the following code,  what does a div tag do? divs group different parts together
3.In the following code, what is the difference between the #title and .grid selector? title uses and id selector "#" which is primarily used for very specific elements and grid uses a class selector "." which is often used to be reused multiple times
4.In the following code, what is the difference between padding and margin? padding creates space within an element margin creates space outside an element
5.Given this HTML and this CSS how will the images be displayed using flex? Flex will descide how the content within element will be displayey from row to collumn, alignment, and how it scales.
6.What does the following padding CSS do? Can be creating space within the element or increaseing the elements size
7.What does the following code using arrow syntax function declaration do? Uses =>, it inherits this value from an enclosed scope and is a short way to write an expression function. Essentially if the arrow function is within an object it can use this.count to grab the count variable, in a normal function we would have to create another variable within the fucntion equal to this.
8.What does the following code using map with an array output? Creates a new array the same size that transforms the values. For example if our map doubles the number at each index for example 1 at index 0, the new array will have 2 at index 0.
9.What does the following code output using getElementByID and addEventListener? Get elementID searches for the first html object with that ID and eventListener waits for an interaction to occur to perform a task
10.What does the following line of Javascript do using a # selector? document.querySelector() will grab the first element that matches the specified ID, while document.querySelectorAll() will grab a list of all elements that match that ID.
11.Which of the following are true? (mark all that are true about the DOM (Document Object Model)) Answer what he javascript does, Select elements:getElementId, querySelector, change: element.textContent, element.setAttribute(), Change Style: element.style.color, element.classList.add(), Respond: addEventListner()
12.By default, the HTML span element has a default CSS display property value of: display: inline, flows with content, ignores vertical dimension, respicts horizontal spacing, typically used on small non-structural piece of content like a word within a longer block
13.How would you use CSS to change all the div elements to have a background color of red? Bottom of page css that selects div and use background-color: red but can be overuled by ID selectors.
14.How would you display an image with a hyperlink in HTML? <a hrefe ="https://example.com"> <img src="path/to/your/image.jpg" alt="Description of the image"> </a>
15.In the CSS box model, what is the ordering of the box layers starting at the inside and working out? Content, Padding, Border, Margin in that order
16.Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected? Can apply CSS to seperate classes if setup like that, if trouble is firsts we can use an ID, if no id but seperate spans we ganc acess the second spand as a last-child to apply th color, atribute selector, P + P will target all P's after the first one.
17.What will the following code output when executed using a for loop and console.log? Identify what will be changed and what the starting and end conditions are and keep track of how the value being changed is logged
18.How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green? element = getElementById('byu') and element.style.color = 'green';
19.What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading? <p>, <ol>, <ul>, <h2>, <h1>, <h3>
20.How do you declare the document type to be html? <!DOCTYPE html> and followed by an <html> tag
21.What is valid javascript syntax for if, else, for, while, switch statements? if (condition){}, if(condition){}else{}, for (let i= 0; i < 10; i++), and while(condition){}, swith (expression){case value1: break; case value2: break; default:}
22.What is the correct syntax for creating a javascript object? const object = { //key-value paris firstName: 'Jane', age: 30, //Methods greet: function(){return 'Hello, ' + this.firstName;}}
23.Is it possible to add new properties to javascript objects? yes if mutable, example: person.lastName = 'Doe';
24.If you want to include JavaScript on an HTML page, which tag do you use? <script> tag
25.Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected? select element by id or class whatever the case is and use element.textcontent to change content. Can use use the .replace() if the text is part of one element
26.Which of the following correctly describes JSON? a lightweight, human-readable format for storing and exchanging data between server and a we application. Uses Text-based format and key-value pairs and ordered list to represent data.
27.What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo  do? pwd: displays directory currently in, ls: list all content in directory, cd: change directory, mkdir: creates a new folder, mv: move or renames a file or director, rm: dletes files or directories, wget: downloads files dirrectly from http, https, or ftp, chmod: changes the permissions of a file or directory, sudo: allows user to execute command wih security privliegs of another user
28.Which of the following console command creates a remote shell session? ssh
29.Which of the following is true when the -la parameter is specified for the ls console command? gives a complete list detailing everyting in current dirrectory that is both visible and hidden
30.Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain? .click is the top level domain, bozo is root domain, fruit and banana are subdomains
31.Is a web certificate is necessary to use HTTPS. Yes for encryption, authentication, and browser trust
32.Can a DNS A record can point to an IP address or another A record. only point to an IP address
33.Port 443, 80, 22 is reserved for which protocol? Secure, encrypted communication for web pages
34.What will the following code using Promises output when executed? Will eventually give you the value or told why it failed to
