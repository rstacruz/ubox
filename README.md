uBox (for jQuery)
=================

How to use
----------

Requires jQuery 1.3+.

1. Load the jQuery and uBox scripts (in that order).
   You may also load the CSS files. If you do, be sure to place them (incl.
   the images) in your project's folder as well.

       <head>
           ...
           <script type="text/javascript" src="jquery.js"></script>
           <script type="text/javascript" src="ubox.js"></script>
           
           <!-- The CSS (and images) are optional -->
           <link rel="stylesheet" href="ubox.css" type="text/css" media="screen" />
           ...
       </head>

2. Add a link in your document with rel="ubox".
   The href must point to the ID of your popup, or the HTML file to be loaded
   through AJAX.

        <!-- Will open #my-id -->
        <a href="#my-id" rel="ubox">Click to open</a>

        <!-- You may also open via AJAX -->
        <a href="callback.html" rel="ubox">Click to open via AJAX</a>
    
   The legacy `class="popup-button"` and `class="popup-close"` will also work for
   backward-compatibility reasons.
    
3. If you're going to link to an element in the page like the #my-id
  example above, make a hidden div in your document with an ID of your
  choice. This can be placed anywhere (it will work no matter where it is),
  but it's recommended to be placed right before `</body>` so that the page
  will load before the popup does.
  
  You can add a close button through a link with rel="ubox-close" added
  to it.
  
  You may style your popup window and close button with CSS as you please.
  
        <div id="my-id" style="display: none">
           <a href="#" rel="ubox-close">Close this</a>
            ...
        </div>

Using with photos
-----------------

The `rel="ubox"` attribute only supports loading external HTML's via AJAX or
inline content. To load images, load the `jquery.ubox-photos.js` file (after
`jquery.ubox.js`) and use:

    <a href="image.jpg" rel="ubox-photo">Click to open photo</a>

Customizing
-----------

1. Edit this script, or place these in one of your other JS files:

        // Example: change the loading delay
        $.ubox.options.set({'delay': 400 });
  
  The complete list of options are in the JS code.
  
More advanced info
------------------

This is what the script does when a opener link (an anchor link with
`rel="ubox"`) gets clicked:

1. A new DIV is created with the ID `ubox-screen`, which serves as a black
  screen that fades in.
  
2. A container DIV with the ID `ubox-container` will be created:

      <div id="ubox-container">
         <div id="ubox-subcontainer">
            (your popup element will be moved here)
            .ubox-content
            #ubox-loader
         </div>
      </div>
  
3. `#ubox-container` will be faded in.

Extra notes & tips
------------------

1. Try styling the containers yourself. The CSS file has info on this.

2. AJAX calls are limited to the same domain (browser restriction). Hence, you
   can't do anything like:

       <a href="http://www.google.com" rel="ubox">Open google</a>

3. To get around this limitation, try opening an inline popup to an iframe:

       <a href="#google" rel="ubox">Open google</a>
       <iframe src="http://www.google.com" id="google" style="display: none" />

JavaScript usage
----------------

Ubox can also be accessed through some simple JQuery commands.

    // To show a certain popup:
    $("#my-id").ubox();

    // Or you may also use:
    $.ubox("#my-id");
    $.ubox("another_page.html");

    // To close the currently-open ubox:
    $.ubox.kill();

Credits
-------

Contains the bgIframe plugin. http://github.com/brandonaaron/bgiframe
