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

### "DOMContentLoaded"

**DOMContentLoaded** is an event we will need it when we use defer or async to make sure that the dom is ready for manipulation, because in some browser even if parser has finished but DOM structure in memory is not finished yet, that's rarely happen but it can happen, so we make sure that DOM is ready or not by ```DOMContentLoaded``` event.
> more about async and defer in Q And A section.
> Defferent between load event and DOMContentLoaded event also in Q And A section.

### Event binding

The event binding allows you to add an event handler for a specified event so that your chosen JavaScript function will be invoked when that event is triggered for the associated DOM element. This can be used to bind to any event, such as keypress, mouseover or mouseout.

#### Binding functions to events in DOM objects

Events are signals fired inside the browser window that notify of changes in the browser or operating system environment. Programmers can create event handler code that will run when an event fires, allowing web pages to respond appropriately to change.

To bind functions to event in DOM objects there are two ways:

- onevent properties: (named by prefixing "on" to the name of the event). These properties are called to run associated handler code when the event is fired, and may also be called directly by your own code.

- addEventListener: The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

> Check Q And A for defference between the Two.

### Dispatching Custom Events

We can not only assign handlers, but also generate our events from JavaScript.

Custom events can be used to create “graphical components”. For instance, a root element of our own JS-based menu may trigger events telling what happens with the menu: open (menu open), select (an item is selected) and so on. Another code may listen for the events and observe what’s happening with the menu.

We can generate not only completely new events, that we invent for our own purposes, but also built-in ones, such as click, mousedown etc. That may be helpful for automated testing.

```

const event = new Event("myCustomName");
element.dispatchEvent(event);

```

> In the code above we dispatch event over an element.

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

2. Defference between load event and DOMContentLoaded event?

The load waits for everything in the page to be loaded (vidos, fonts, images...) so we miss opportunity to manipulate the DOM earlier. DOMContentLoaded event is soon as possible event if some parts didn't loaded yet we can manipulate the DOM => so best option is to use DOMContentLoaded.

3. Deffrence between onevent and addEventListener?

When we use ``` onevent ``` technique, only one function can be attached per event/object combination:

```
    function eventHandler(event) {

    }

    element.onload = eventHandler;

    element.onload = (event) => {
        // it replace the first handler, because its property so it uses setter and getter,
        // there is place for only one event handler
    }

```

but for ``` addEventListener ``` it's using the observer design pattern, where i can subscribe a lot of listeners or observers and all of them will be fire, Also ``` addEventListener ``` supports more advanced event handling.

```
 function eventHandler(event) {
        console.log(options.once);
        options.once = false;
        console.log(options.once);
    }
    
    const options = {
        once: true,
        passive: true
    }
    
    element.addEventListener("click", eventHandler, options);

```

> For example in above code we can pass a third argument with some options, like option once i can use it to trigger event only once so when event happen i will turn to false iside event handler.
> For passive option, It enables developers to opt-in to better scroll performance by eliminating the need for scrolling to block on touch and wheel event listeners.

**Problem**: All modern browsers have a threaded scrolling feature to permit scrolling to run smoothly even when expensive JavaScript is running, but this optimization is partially defeated by the need to wait for the results of any touchstart and touchmove handlers, which may prevent the scroll entirely by calling preventDefault() on the event.

**Solution: {passive: true}**

By marking a touch or wheel listener as passive, the developer is promising the handler won't call preventDefault to disable scrolling. This frees the browser up to respond to scrolling immediately without waiting for JavaScript, thus ensuring a reliably smooth scrolling experience for the user.

ex: 

```

document.addEventListener("touchstart", function(e) {
    console.log(e.defaultPrevented);  // will be false
    e.preventDefault();   // does nothing since the listener is passive
    console.log(e.defaultPrevented);  // still false
}, Modernizr.passiveeventlisteners ? {passive: true} : false);

```

> once and passive are Advanced Event Handling.