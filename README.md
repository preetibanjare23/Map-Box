```markdown
# Mapbox App

This is a web application built using Mapbox GL JS, HTML, CSS, and the Mapbox Geocoding API to provide a user-friendly map interface with search, directions, and nearby places functionality.

## Features

- **Interactive Map:**  Displays an interactive map using Mapbox GL JS.
- **Search Functionality:** Allows users to search for locations using the Mapbox Geocoding API.
- **Directions:** Provides driving directions between locations using the Mapbox Directions API.
- **Nearby Places:**  Finds and displays nearby places of interest.
- **User Location:**  Gets the user's current location or sets a default location if unavailable.
- **Responsive Design:** Adapts to different screen sizes for optimal viewing.

## Technologies Used

- **HTML:** Structure of the web page.
- **CSS:** Styling the elements and layout.
- **JavaScript:**  Core functionality using Mapbox GL JS and APIs.
- **Mapbox GL JS:**  JavaScript library for interactive maps.
- **Mapbox Geocoding API:**  Converts location names to coordinates and vice versa.
- **Mapbox Directions API:** Provides routing information and directions.

## Functionality

1. **Map Initialization:**
   - Initializes a Mapbox map centered on the user's location (or a default location if unavailable).
   - Adds navigation controls (zoom, pan, compass).

2. **Search:**
   - Users can enter a location in the search bar and click "Search."
   - The app uses the Mapbox Geocoding API to find the location's coordinates.
   - The map flies to the searched location and adds a marker.

3. **Directions:**
   - Users can use the built-in directions functionality provided by Mapbox Directions API to get driving directions.
   - The directions panel updates in real-time as the user interacts with the map.

4. **Nearby Places:**
   - Users can click the "Nearby" button to find places of interest around their location.
   - The app uses the Mapbox Geocoding API to retrieve nearby places.
   - Markers are added to the map for each place, and popups display place names.

## How to Use

1. **Clone the Repository:** Clone this repository to your local machine using Git.
2. **Open `index.html`:** Open the `index.html` file in your web browser.
3. **Use the Features:**
   - **Search:** Enter a location in the search bar and click "Search."
   - **Directions:** Click on the map to set a starting point and an end point for directions.
   - **Nearby Places:** Click the "Nearby" button to find places near your location.


## Author

Gaurav Nag

## Acknowledgments

- Mapbox (https://www.mapbox.com/) for providing the mapping platform and APIs.
```