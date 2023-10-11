
/***
@title:
Favicons

@version:
2.0

@author:
Andreas Lagerkvist

@date:
2008-09-16

@url:
http://andreaslagerkvist.com/jquery/favicons/

@license:
http://creativecommons.org/licenses/by/3.0/

@copyright:
2008 Andreas Lagerkvist (andreaslagerkvist.com)

@requires:
jquery
***/
// jQuery.fn.favicons = function(conf) {
//   var config = jQuery.extend({
//     insert: 'appendTo',
//     defaultIco: 'favicon.png'
//   }, conf);

//   return this.each(function() {
//     jQuery('a[href^="http://"]', this).each(function() {
//       var link = jQuery(this);
//       var faviconURL = link.attr('href').replace(/^(http:\/\/[^\/]+).*$/, '$1') + '/favicon.ico';
//       var faviconIMG = jQuery('<img src="' + config.defaultIco + '" class="favico" alt="" />')[config.insert](link);
//       var extImg = new Image();

//       extImg.src = faviconURL;

//       if (extImg.complete) {
//         faviconIMG.attr('src', faviconURL);
//       } else {
//         extImg.onload = function() {
//           faviconIMG.attr('src', faviconURL);
//         };
//       }
//     });
//   });
// };

// Or, hide them
// $("img").error(function() {
//   $(this).hide();
// });

// $('.header .button').on('click', function() { $('.header .button').toggleClass('is-checked')
//           $('.menudiv').toggleClass('open')
//         });

// external js: isotope.pkgd.js
$(function() {
    //.isotope({ {
    var $container = $('#list');
  
    // Fire Isotope  
    $container.isotope({
      itemSelector: '.card',
      layoutMode: 'masonry',
      //getSortData: { grade: 'class^="grade"'   }
    });
  
    // store filter for each group  
    var filters = {};
  
    $('.filters').on('click', '.button', function() {
      var $this = $(this);
      // get group key
      var $buttonGroup = $this.parents('.button-group');
      var filterGroup = $buttonGroup.attr('data-filter-group');
      // set filter for group
      filters[filterGroup] = $this.attr('data-filter');
      // combine filters
      var filterValue = '';
      for (var prop in filters) {
        filterValue += filters[prop];
      }
      // set filter for Isotope
      $container.isotope({
        filter: filterValue
      });
    });
  
    // change is-checked class on buttons
    $('.button-group').each(function(i, buttonGroup) {
      var $buttonGroup = $(buttonGroup);
      $buttonGroup.on('click', 'button', function() {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
      });
    });
  
  });