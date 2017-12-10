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


      publics.openPhotoSwipe = function(){
        var pswpElement = document.querySelectorAll('.pswp')[0];
        // build items array
        var items = [
            {
            src: 'assets/img/portfolio/HD/001.jpg',
            w: 1024,
            h: 685
        },
        {
            src: 'assets/img/portfolio/HD/002.jpg',
            w: 1024,
            h: 685
        },
        {
            src: 'assets/img/portfolio/HD/003.jpg',
            w: 1024,
            h: 768
        },
        {
            src: 'assets/img/portfolio/HD/004.jpg',
            w: 1024,
            h: 687
        },
        {
            src: 'assets/img/portfolio/HD/005.jpg',
            w: 1024,
            h: 685
        }
                
        ];
        
        // define options (if needed)
        var options = {
                 // history & focus options are disabled on CodePen        
            history: false,
            focus: false,
            allowPanToNext:true,
            showAnimationDuration: 0,
            hideAnimationDuration: 0
            
        };
        
        var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
  

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

      // CLICK EVENTS
      $("#flickr-gallery").on('click', 'a', function(e) {
        e.preventDefault();
        var imageGalleryIndex = $(this).index();
        console.log( "Index: " +  imageGalleryIndex + typeof(imageGalleryIndex) );
        publics.openPhotoSwipe();
      });

      // Custom events
      $(document).on('introCBCompleted', function(){
         publics.scrollTo('.cbc-about-me');
      })
    }


  // On exécute le code commun sur la page courante.

  publics.init();




}) (jQuery, CBC_scripts);






