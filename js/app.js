(function() { 'use strict';
if( window.jQuery ) { $ = jQuery; }

document.addEventListener( 'DOMContentLoaded', onReady );
window.addEventListener( 'load', onLoad );

function onReady() {
  myApp.init();
  myNav.init();
}

function onLoad() {
  // script that runs when everything is loaded
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
if('registerElement' in document) { document.createElement( 'h-grid' ); document.createElement( 'h-tile' ); }
})();
