* API's built on top of core javascript make javascript more powerful.
### API example
* DOM(Document Object Model) API
* Geolocation API
* Canvas and WebGL API
* Audio and Video API

A common use of javascript is to dynamically update the UI through the DOM API.

Javascript uses 'just in time compiling' - JS code gets compiled into a faster binary format while the script is being used.

In internal loading of javascript, the script tag is put at the end of body tag, so that the html elements are loaded first.

### External Javascript Usage
```
<script type="module" src="script.js"></script>
```

### Running http server with node
```
npx http-server path/to/project -o -p 9999
```

-o will open the index.html. If it's not present the project folder is open instead.  
To open current directory, the path can be given as ./  

Inline javascript is a bad practice which would pollute the html.
```
<button onclick="createParagraph()">Click me!</button>
```

### CORS Error
Browsers requesting local files from file:// will be considered as CORS(Cross Origin Request Sharing) error for security.

### Script Loading Strategies
The script which manipulate the html should only be loaded after the html is loaded. Otherwise it won't work.

* In internal javascript the script is added at the end of body so that the html will be loaded first. But if there are a lot of html then loading scripts will take time.
* For external javascript `<script type="module">` will make the script to be considered as a module. And these are added inside `<head>` tag.
* To load the script as non-module `defer` or `async` attribute can be used. `async` is for if you don't want the html to be ready first.
