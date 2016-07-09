var HTMLheaderName = '<div class="name-message-container"><h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span class="role">%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="contact-text">%contact%</span><span class="white-text"><a href="%data%">%data%</a></span></li>';
var HTMLmobile = '<li class="flex-item"><span class="contact-text">%data%</a></span><br></li>';
var HTMLemail = '<li class="flex-item"><span class="contact-text"><a href="mailto:%data%">email</a></span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="contact-text"><a href="%data%">twitter</a></span></li>';
var HTMLlinkedin = '<li class="flex-item"><span class="contact-text"><a href="%data%">linkedin</a></span></li>';
var HTMLgithub = '<li class="flex-item"><span class="contact-text"><a href="%data%">github</a></span></li>';
var HTMLblog = '<li class="flex-item"><span class="contact-text">blog</span><span class="white-text"><a href="%data%">%data%</a></span></li>';
var HTMLlocation = '<li class="flex-item"><br><span class="contact-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic" alt="Benson Gardner logo">';
var HTMLwelcomeMsg = '<div class="welcome-message">%data%</div></div>';

var HTMLshowHideButton = '<div id="show-hide-container"><span class="show-hide-button"><a href="javascript:;">+</a></span></div>'
var HTMLskillsStart = '<ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li data-skill="%data%"><span class="skill"><a href="javascript:;">%data%</a></span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<span>%data% - ';
var HTMLworkTitle = '%data%</span>';
var HTMLworkYears = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLDuty = '<div class="duty-wrapper" data-related-skills="%data%"><div class="duty">%%data%%</div></div>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<div class="project-container"><span><a href="#">%data%</a></span>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectRole = '<br><h3 class="project-heading">My Role</h3><p> %data%</p>';
var HTMLprojectChallenge = '<h3 class="project-heading">The Challenge</h3><p>%data%</p></div>';
var HTMLprojectImage = '<a href = "#"><img width="150px"; src="%data%"></a>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<span><a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a></span>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div><p>';
var HTMLschoolMajor = 'Major: %data%. ';
var HTMLschoolNotable = '%data%.</p>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var googleMap = '<div id="map"></div>';

/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
});



/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

  var locations;

  var mapOptions = {
    disableDefaultUI: true
  };

  /*
  For the map to be displayed, the googleMap var must be
  appended to #mapDiv in resumeBuilder.js.
  */
  map = new google.maps.Map(document.querySelector('#map'), mapOptions);


  /*
  locationFinder() returns an array of every location string from the JSONs
  written for bio, education, and work.
  */
  function locationFinder() {

    // initializes an empty array
    var locations = [];

    // adds the single location property from bio to the locations array
    locations.push(bio.contacts.location);

    // iterates through school locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop
    education.schools.forEach(function(school){
      locations.push(school.location);
    });

    // iterates through work locations and appends each location to
    // the locations array. Note that forEach is used for array iteration
    // as described in the Udacity FEND Style Guide:
    // https://udacity.github.io/frontend-nanodegree-styleguide/javascript.html#for-in-loop

    // still working with this now thtat work is an object not array. earlier syntax was the standard forEach loop.
    //used a variable called job with an annon fcn (job)
    for (var key in work.jobs) {
      if (work.jobs.hasOwnProperty(key)) {
      locations.push(work.jobs[key].city);
    };
  };
    return locations;
  }

  /*
  createMapMarker(placeData) reads Google Places search results to create map pins.
  placeData is the object returned from search results containing information
  about a single location.
  */
  function createMapMarker(placeData) {

    // The next lines save location data from the search result object to local variables
    var lat = placeData.geometry.location.lat();  // latitude from the place service
    var lon = placeData.geometry.location.lng();  // longitude from the place service
    var name = placeData.formatted_address;   // name of the place from the place service
    var bounds = window.mapBounds;            // current boundaries of the map window

    // marker is an object with additional data about the pin for a single location
    var marker = new google.maps.Marker({
      map: map,
      position: placeData.geometry.location,
      title: name
    });

    // infoWindows are the little helper windows that open when you click
    // or hover over a pin on a map. They usually contain more information
    // about a location.
    var infoWindow = new google.maps.InfoWindow({
      content: name
    });

    // hmmmm, I wonder what this is about...
    google.maps.event.addListener(marker, 'click', function() {
      infoWindow.open(map, marker);
    });

    // this is where the pin actually gets added to the map.
    // bounds.extend() takes in a map location object
    bounds.extend(new google.maps.LatLng(lat, lon));
    // fit the map to the new marker
    map.fitBounds(bounds);
    // center the map
    map.setCenter(bounds.getCenter());
  }

  /*
  callback(results, status) makes sure the search returned results for a location.
  If so, it creates a new map marker for that location.
  */
  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMapMarker(results[0]);
    }
  }

  /*
  pinPoster(locations) takes in the array of locations created by locationFinder()
  and fires off Google place searches for each location
  */
  function pinPoster(locations) {

    // creates a Google place search service object. PlacesService does the work of
    // actually searching for location data.
    var service = new google.maps.places.PlacesService(map);

    // Iterates through the array of locations, creates a search object for each location
      for (var place in locations) {
      // New section to check if locations[place] exists
      // This keeps google maps from breaking if a location field is empty.
      if (!locations[place]) {
        continue;
      }
      // the search request object
      var request = {
        query: locations[place]
      };
      // Actually searches the Google Maps API for location data and runs the callback
      // function with the search results after each search.
      service.textSearch(request, callback);
    };
  }

  // Sets the boundaries of the map based on pin locations
  window.mapBounds = new google.maps.LatLngBounds();

  // locations is an array of location strings returned from locationFinder()
  locations = locationFinder();

  // pinPoster(locations) creates pins on the map for each location in
  // the locations array
  pinPoster(locations);

}



// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  //Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
