$( function() {

  /**************
       JQUERY
   **************/
  // ABOUT PAGE - JQ-UI ACCORDION
  $( "#accordion" ).accordion({
    active: false,
    collapsible: true
  });

  // PLANTS PAGE - JQ-UI TOOLTIP
  $( document ).tooltip({
    items: "fieldset",
    position: {
      my: "left bottom-10",
      at: "center top",
      of: ".cb-container",
      using: function ( position, feedback) {
        $(this).css( position );
        $( "<div>")
          .addClass("arrow")
          .addClass(feedback.vertical)
          .addClass(feedback.horizontal)
          .appendTo( this )
      }
    }
  });

  // PLANTS PAGE - JQ MULTI-CHECKBOX FILTER
  $(':checkbox').change(function () {

    // Get a string of classes for each filter
    var sizes = $('.sizes input:checked').map(function(){ return "." + this.value; }).get().join();
    var light = $('.light input:checked').map(function(){ return "." + this.value; }).get().join();
    var pet = $('.pet input:checked').map(function(){ return "." + this.value; }).get().join();
    var humidity = $('.humidity input:checked').map(function(){ return "." + this.value; }).get().join();


    // Start with all plants
    var plants =  $('.box');

    // Size filter
    if(sizes) {
      plants = plants.filter(sizes);
    }

    // Light level filter
    if(light) {
      plants = plants.filter(light);
    }

    // Pet friendly filter
    if(pet) {
      plants = plants.filter(pet);
    }

    // Humidity filter
    if(humidity) {
      plants = plants.filter(humidity);
    }

    // Hide all
    $('.box').hide();
    // Show filtered results
    plants.show();
  });

  // PLANTS PAGE - JQ-UI CHECKBOX
  $( "input" ).checkboxradio();
} );

/**************
     GLOBAL
 **************/
// RESPONSIVE NAV
let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active'); // 1. DOM manipulation method
});


// ADD FOOTER COPYRIGHT YEAR ON LOAD
let footerYear = document.getElementById('year');

function getYear() {
  let currYear = new Date().getFullYear();
  footerYear.textContent = "\u00A9" + " " + currYear + " by "; // 2. DOM M Method
}
window.addEventListener("load", getYear);

/**************
  CONTACT PAGE
**************/
// CREATE GOOGLE MAP
var map;
function initMap() { // 3. DOM M Method
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 47.619616, lng: -122.353797},
    zoom: 15
  });
}

// FORM VALIDATION
$("[name='newsletters[]']:eq(0)")
  .valAttr('','validate_checkbox_group')
  .valAttr('qty','0-1')
$.validate({
  modules : 'date, security, file',
  validateOnBlur: false
});

// Restrict user text length
$('#presentation').restrictLength( $('#pres-max-length') );


// MAP API
const script = document.createElement("script");
script.type = "text/javascript";
script.src = "";
script.async = true;
script.dataset.cfasync = false;
document.head.appendChild(script);
script.addEventListener("load", () => {
  console.log("Script added successfully");
  resolve();
});

