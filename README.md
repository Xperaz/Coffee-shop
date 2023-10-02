# Coffee-shop using vanilla javascript

## DOM

**DOM**: The Document Object Model connects web pages to JavaScript by representing the structure of a document in memory.

## DOM API

**DOM API**: It's An API exposed by a browser to developers to manipulate the DOM from a Scripting language (Like javascript). So we can change a property, and add an element to that structure in memory. That will trigger an update in the rendering HTML that we see on the screen.

The DOM API is available on many objects: 
- window global object
- document object or dom (represent the current dom because we can have multiple documents in one window).
- One object per HTML element and other nodes in our document. (every HTML element in our web app will have an object, and that object will have a dom API.)

## Things that I learned:

### querySelector()

querySelector: The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
if we want to select multi-element we should use querySelectorAll(), 

to optimize app performance in JavaScript, we shouldn't query the whole document for a specific element.
instead, we should query the specific part and then get the element we want, for example: 

```
    let nav = document.querySelector("nav");
    //We use the nav variable for caching the reference
    nav.querySelector("a");

```

> In the code above we query the ```nav``` section then we query the ```a``` which in the nav, so we don't use the document to find ```a``` => we are narrowing the query for being more performant.
because the DOM API  is not just available in the document object, but also available in every DOM element.


## Q And A?

1. Why should you put a script tag in the bottom of the body and why do we use defer or async?

 Notice: using script tag at the bottom of the body now is deprecated,
 but the reason why we put the script tag at the bottom of HTML in the past is that when the browser is parsing the HTML line by line when it finds the script tag it stops parsing 
 and try to execute a javascript file, so the user should wait until the browser execute javascript so he can see some UI, which we put in the bottom to make HTML and CSS 
 load first, then start executing the javascript code.

 now we are using defer or async: the parser when it finds the script tag with defer will download the file but it will continue parsing the HTML file when it parses 
 the whole HTML file then it will try executing our javascript file.

 async is more suitable for small scripts, that need to be executed as soon as possible because async downloads the js file but when the file is ready it will stop 
 parsing and start executing the js file so Asyn doesn't help to parse too much, if you don't really know which one should use, use defer.
