(function($) {
'use strict';

$(document).ready(start);
$(document).on('page:load', start);
$(window).load(startOnLoad);

function start() {
  myApp.init();
}

// functions that needs to run only after everything loads
function startOnLoad() {
}



///// GENERAL LISTENERS
var myApp = {
  init() {
    $('.sample-button').on( 'click', this.sampleListener );
  },

  sampleListener( e ) {
    // do something
  }
};




// Browser compatibility, leave this untouched
if('registerElement' in document) { document.createElement( 'h-grid' ); }

})( jQuery );
