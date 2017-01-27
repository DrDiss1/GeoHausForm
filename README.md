# Geohaus Form
The scrapped form system for the [Geohaus Website](http://geohaus.com.au/). Injected into Woocommerce, it queries Google Maps with the coordinates of the chosen suburb, then calculates how far away that suburb is to a fixed location.
Then it'll assign a number to the Woocommerce product, so that can calculate the cost of the job.
This is probably more useful as a guide on what to do for interfacing with Google Maps.

## How To Use
Add these files into the parent folder of your wordpress theme. Woocommerce is optional, it's just an example I used. Please delete the woocommerce folder if you do not wish to use it. Include the javascript in whichever page you want to have it on, then inject the following code where you want the list:

  `<select id="suburbLocation">`
  
You can find an example of this in: GeoHausForm/woocommerce/single-product/add-to-cart/variable.php

Also note the custom code in the header and footer. The header creates a global variable to grab. The footer initiates the google maps api, and the javascript.

As I mentioned, this was written to be used in a very specific scenario. If you find this, study it to figure out how the Google Maps API can work for you!
