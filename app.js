/* Main navigation script
------------------------------------------------------------*/
var CBC_scripts = CBC_scripts || {}; // Si « CBC_scripts » a déjà été crée dans un précédent fichier on le reprend. Sinon on le créer.

(function( $ , publics ){


      // Options
      var settings = {
        version: "0.0.1",

        debugMode: true,

        introCBComplete: false
      }



      var privates = {}; // Tout ce qui ne devra pas quitter le contexte d'execution sera accroché à « privates » et accessible uniquement via « privates ».

      /* Attributs / Fonctions privées */

      // ... //

      /* Attributs / Fonctions publiques */
      publics.init = function () {
        //var  s = this.settings;
        var codeVersion = settings.version;

        //publics.initPhotoSwipe();
        //console.log('Le script CBC_scripts version '+codeVersion+' est initialisé.');
        publics.manageEvents();


        // Le code ici sera exécutable via « publics.init() ».
      }

      // Detecter la largeur desktop - Cette animation ne s'applique qu'a cette condition
      publics.is_desktop = function(){ // En réalité tous (tablette et petit ecran) sauf mobile
        if (window.matchMedia("(min-width: 768px)").matches){
          return true;
        }
        else{
          return false;
        }
      }
      publics.is_mobile = function(){
        if (window.matchMedia("(max-width: 767px)").matches){
          return true;
        }
        else{
          return false;
        }
      }

      publics.scrollTo = function(element){
         $(element).velocity("scroll", { duration: 1500 });
      }

      publics.introCBC = function (){
        $('.cbc-intro h1').velocity("fadeIn", { duration: 1000, delay: 1000, 
          complete: function() { 
            $( document ).trigger( "introCBCompleted", function(){
              console.log('Intro CBC completed !');
            });
          }
        })
      }


      publics.getFlickrGallery = function(){
        // source : https://www.ashlynnpai.com/blog/a-simple-flickr-gallery-using-the-public-feed/
        // var flickerURL = "https://api.flickr.com/services/feeds/photos_public.gne?ids=121060987%40N03&tags=Turkey&format=json&jsoncallback=?";
        // $.getJSON(flickerURL)
        //   .done(function( data ) {
        //     $.each( data.items, function( i, item ) {
        //       $( "<img>" ).attr( "src", item.media.m ).appendTo( "#flickr-gallery" );
        //       if ( i === 11 ) {
        //         return false;
        //       }
        //     });
        //   });

        // Last public photos
        var flickerURL = "https://api.flickr.com/services/feeds/photos_public.gne?ids=63076902%40N05&tags=portfolio&format=json&jsoncallback=?";

        $.getJSON(flickerURL)
          .done(function( data ) {
            $.each( data.items, function( i, item ) {
              $( "<img>" ).attr( "src", item.media.m ).appendTo( "#flickr-gallery" ).addClass('img');
              if ( i === 40 ) {
                return false;
              }
            });
          });

      }

      publics.getFlickrAlbum = function(){
        //var flickerURL = "https://api.flickr.com/services/feeds/photos_public.gne?ids=63076902%40N05&tags=portfolio&format=json&jsoncallback=?";
        var flickerURL = "https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=37f5eabc4e9b3994cd62571562fcc451&photoset_id=72157685410201262&user_id=63076902%40N05&privacy_filter=4&format=json&nojsoncallback=1&auth_token=72157686904753694-7539fd7f1d39a70f&api_sig=e821dadc04bd44f5f56fb3a1fa7719e4";


        // $.getJSON(flickerURL)
        //   .done(function( data ) {

        //     $.each( data.items, function( i, item ) {
        //       var imgURL = 'https://farm5.staticflickr.com/'+item.server+'/'+item.id+'_'+item.secret+'_m.jpg';
        //       console.log(imgURL);
        //       $( "<img>" ).attr( "src", imgURL ).appendTo( "#flickr-gallery" ).addClass('img');
        //       if ( i === 10 ) {
        //         return false;
        //       }
        //     });
        //   });

        var request = $.ajax({
          url: flickerURL,
          method: "GET",
          dataType: "json",
          cache: true
         });

      request.done(function(response) {
        console.log(response);
        //var items = [];
          $.each( response.photo, function(i, item){
            var imgURL = 'https://farm5.staticflickr.com/'+item.server+'/'+item.id+'_'+item.secret+'_m.jpg';
            console.log(imgURL);
              $( "<img>" ).attr( "src", imgURL ).appendTo( "#flickr-gallery" ).addClass('img');
              if ( i === 10 ) {
                return false;
              }
          });

      });

      request.fail(function( jqXHR, textStatus ) {
        console.error( "Request failed: " + textStatus );
      });

      request.always(function() {
          console.log( "complete" );
      });



      }

      publics.doIsotope = function(){

        $('.gallery-height').isotope({
          // options
          itemSelector: '.img',
          layoutMode: 'masonry'
          });

      }


      publics.initPhotoSwipe = function(){
      



    }



    // All events
    publics.manageEvents = function(){


      $( window ).on('load', function() {


        


      });

        // Au Chargement du dom
        $(document).ready(function($) {
          publics.introCBC();
          //publics.getFlickrGallery();
          //publics.getFlickrAlbum();
        })


      // Au resize de la fenêtre et au chargement
      $( window ).on('resize', function() {

      });


      // Init empty gallery array
      var container = [];

      // Loop over gallery items and push it to the array
      $('#flickr-gallery').find('figure').each(function() {
        var $link = $(this).find('a>img'),
          item = {
            src: $link.data('src-hd'),
            w: $link.data('width'),
            h: $link.data('height')/*,
            title: $link.data('caption')*/
          };

          console.log(item);
        container.push(item);
      });


      // Define click event on gallery item
       $("#flickr-gallery").on('click', 'a', function(e) {

        // Prevent location change
        e.preventDefault();

        // Define object and gallery options
        var $pswp = $('.pswp')[0],
          options = {
            index: $(this).parent('figure').index(),
            bgOpacity: 0.85,
            showHideOpacity: true
          };

        
       
         // Initialize PhotoSwipe
         // var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        var gallery = new PhotoSwipe($pswp, PhotoSwipeUI_Default, container, options);
        gallery.init();
  

      });

      // CLICK EVENTS
      /*$("#flickr-gallery").on('click', 'a', function(e) {
        e.preventDefault();
        var imageGalleryIndex = $(this).index();
        console.log( "Index: " +  imageGalleryIndex + typeof(imageGalleryIndex) );
        publics.openPhotoSwipe();
      });*/

      // Custom events
      $(document).on('introCBCompleted', function(){
         publics.scrollTo('.cbc-about-me');
      })
    }


  // On exécute le code commun sur la page courante.

  publics.init();




}) (jQuery, CBC_scripts);






