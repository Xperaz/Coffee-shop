# Coffee-shop using vanilla javascript

## DOM

DOM: The Document Object Model connects web pages to JavaScript by representing the structure of a document in memory.

## DOM API

DOM API: Its An API exposed by a browser to developers to manipulate the DOM from a Scripting language (Like javascript). So we can change a property, add an element to that structure in memory. That will trigger an update in the rendering HTML that we see on the screen.

The DOM API is available on many objects : - window global object - document object or dom (represent the current dom because we can have multi-document in one window). - One object per HTML element and other nodes in our document. (every HTML element in our web app will have an object, and that object will have a dom API.)


## Things that I learned:

### querySelector()

    querySelector: The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
    if we want to slect multi element we should use querySelectorAll(), 

    to optimize app performance in javascript, we shouldn't querying all the document for a specific element.
    instead we should query the specifique part and then get the element we want, for example: 

    ```
    let nav = document.querySelector("nav");
    // we use nav variable for caching the reference
    nav.querySelector("a");

    ```
    in the code above we querying the ```nav``` section then we query the ```a``` wich in the nav, so we don't use document to find ```a``` => we are narrowing the query for being more performant.
    because the DOM API  is not just available in document object, also its available in every DOM element.


## Q And A ?

1- Why should you put script tag in bottom of the body and why we use defer or async?

    Notice: using script tag in bottom of body now is deprected,
    but the reason why we put sript tag in bottom of html in the past is: When browser is parsing the HTML line by line, when it finds script tag it stop parsing and try to excute javascript file, so user should wait until browser excute javascript then he can see some ui, that's we put in bottom to make html and css load first, then start excuting javascript code.

    now we are using defer or async: the parser when it finds script tag with defer it will download the file but it will continue parsing html file, when it parse all html file then it will try excuting our javascript file.

    async is more suitable for small scripts, that need to excuted as soon as possible because async it donwload the js file but when file is ready it will stop parsing and start excutin js file so asyn don't help parsign too much, if you don't realy know wich one should use , so use defer.
