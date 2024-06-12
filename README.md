# Manifest Frontend

### Structure

The Manifest Frontend is a React/Vite Web App that connects to the Manifest Backend API. The components form a top-down structure with minimal component levels. At present, no context is used or needed on the site.

Users are not currently implemented, although the structure for them is in place.

### Functions

The frontend of the site provides three main page types, with each type also making use of the Navbar for the entire site.

#### Home

The home page offers a quick welcome along with a link to the Kickstarter page for the most recent Manifest project.

#### Kinships

This page offers several components that display the name and image of each of the six current kinships. Clicking on the individual kinships will take the user to the Kinship Detail page.

#### Kinship Detail

This page will dynamically change based on the kinship selected and provides a Wikipedia-stype article that will update based on the data received from the backend.