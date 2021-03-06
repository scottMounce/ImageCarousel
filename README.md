# Petsy Image Carousel

> This is an image carousel meant to mimic the look and functionality of the one used by Etsy (ex. https://www.etsy.com/listing/568729539/pumpkin-pie-cat-and-small-pet-hat-felt?ref=hp_merch_co-6&variation0=718853680). It displays thumbnails for all images linked to a specific product and displays a main image. The main image can be changed by either clicking on the thumbnails or using the navigation buttons to either side of the main image. Clicking on the main image will bring up a modal that allows a user a more interactive way to view the product photos. The page will dim and the modal carousel will appear center-screen. The thumbnails of the modal are larger and clicking on the main image of the modal will either enlarge it to its actual size if there is room in the window, or pull up a 'zoomed' version of that photo which the user can scroll over using the mouse. The modal can be exited using either the 'X' button at the top right of the screen or by clicking on a dimmed area.

> This service was created and refined over a two-week period as part of a Front End Capstone for the Hack Reactor Remote Software Engineering Immersive program. It is intended to be joined with the other services within this repository via a proxy server to mimic the look and feel of Etsy's site.

## Related Projects

  - https://github.com/HRR48-FEC-SquawkinPhoenix/Seller
  - https://github.com/HRR48-FEC-SquawkinPhoenix/Add-To-Cart
  - https://github.com/HRR48-FEC-SquawkinPhoenix/Reviews

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Notes](#notes)

## Usage

> Some usage instructions

1. Run 'npm install' from the root. This installs the necessary dependencies for the service to run.
1. Run 'npm run build' from the root. This will bundle the React components into a single file that is run as a script from the index.html file. This ensures that service can be run in older browsers.
1. Ensure that a MySQL database server is running, then run 'npm run init_db' from the root. This will create the database and tables this service relies on and seed the tables with some example data.
1. Run 'npm start' from the root. The MySQL server with the database seeded in the previous step must still be open. This will start an Express server on port 3001, and the server will respond to a request to root by serving up a static file--the index.html that runs our bundle created in step 2.
1. Once the Express server is running, the service can be accessed at 'http://localhost:3001', which has a default product it will display images for.
1. To display the image carousel for a different product, the URL parameter 'products={value}' can be used. Ex. 'http://localhost:3001/?products=2' will display the images for the product with ID 2 in the database. The root URL endpoint is identical to 'http://localhost:3001/?products=1', as default URL parameters are used if none are explicitly used.

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Notes

There are some idiosyncracies with this service that I would fix given more time.

- First, the spacing of the main images and navigation arrows is not perfect in the first level or the modal, and could be tweaked. It works within normal-sized windows but can get a little squeezed in very small windows or too spaced in large windows. Given that this is intended to be a part of a larger webpage, it should not hit a point where things are too spaced apart, but it might be possible that they could become too compact.

- The thumbnail stack on the modal has set thumbnail sizes that look good and are organized for standard window sizes, but are not responsive when the window is resized beyond simply moving. They could be changed to keep their aspect ratio but resize and probably look slightly better.

- The zoom functionality on the modal's main image uses react-image-magnifiers, which bases the zoomed in version of the photo on the original filesize. At larger window sizes, it is possible for images to already be their full size, and therefore not zoom. At medium window sizes, if there is enough space, the photos will simply expand to their full size. It is only at relatively smaller window sizes where the photos can't expand much where the zoom works as expected, though when it works it is exactly as intended. The modal's main image can also be spaced somewhat oddly relative to the left margin of the screen at small window-sizes.

> Overall, most hangups with this project relate primarily to CSS. Given a short time period to learn to use flex, some things could be cleaner, and overall the service is not as responsive as it could be. This is worth noting, but the functionality and look are definitely passable at typical window sizes.