<?php
	//Cache busting so that we always load the last released version
	$app_version = '0.2.1';
?>
<!DOCTYPE html>
<html lang="FR">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Cristina Bautista Carmona - Web & Photo</title>

		<!--  Icones -->
		<link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon.png?v=<?php echo $app_version; ?>">
		<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=<?php echo $app_version; ?>">
		<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=<?php echo $app_version; ?>">
		<link rel="manifest" href="/manifest.json">
		<link rel="mask-icon" href="/safari-pinned-tab.svg?v=<?php echo $app_version; ?>" color="#5bbad5">
		<meta name="theme-color" content="#ffffff">

		<!-- Bootstrap CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />
		<link href="assets/css/screen.css?v=<?php echo $app_version; ?>" media="screen, projection" rel="stylesheet" type="text/css" />


		<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
			<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.2/html5shiv.min.js"></script>
			<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
		<![endif]-->
	</head>
	<body>

	<section class="cbc-intro" style="background-color: #931c3d; background-image: url('assets/img/cbc-intro-cover-sm.jpg?v=<?php echo $app_version; ?>');">
		<svg class="cbc-logo center-block" xmlns="http://www.w3.org/2000/svg" width="350.544" height="314.344" viewBox="0 0 350.544 314.344"><path fill="#931C3D" d="M350.544 167.34s-113.778 152.447-178.76 146.854C112.353 309.082 0 152.766 0 152.766S116.92-5.447 181.903.146c59.43 5.112 168.64 167.194 168.64 167.194z"/><path fill="#FFF" d="M322.365 167.65s-16.697 22.37-26.235 21.55c-8.724-.75-25.21-23.688-25.21-23.688s17.16-23.22 26.696-22.398c8.72.748 24.75 24.536 24.75 24.536zM182.817 62.086c24.34 0 41.454 10.27 54.005 22.058L221.228 104.3c-11.03-9.506-22.438-16.353-37.27-16.353-33.47 0-57.81 28.905-57.81 71.5 0 42.214 23.2 70.738 57.048 70.738 17.494 0 32.327-8.746 43.356-18.637l14.07 20.54c-16.733 14.83-38.03 23.958-60.09 23.958-49.06 0-86.71-35.37-86.71-96.6 0-61.99 41.455-97.36 88.995-97.36z"/></svg>
		<h1 class="text-center">
				Cristina Bautista Carmona
				<small>Web & Photo</small>
			</h1>

	</section>
	<section class="cbc-about-me">
		<div class="container">
			<h1 class="text-center hidden">
				Cristina Bautista Carmona
				<small>Web & Photo</small>
			</h1>
			<hr />
			<p class="lead" >Bonjour, je suis <strong>intégratrice Web</strong> pour un groupe de presse internationnal et j'évolue de plus en plus vers un poste de <strong>développement FrontEnd</strong>. J'habite actuellement en <strong>région parisienne</strong>. </p>

			<p class="lead" >Enfin, je suis passionnée de <strong>photographie</strong> depuis plus d'une dizaine d'années.</p>


		</div>
	</section>

	<section class="">
		<div id="flickr-gallery" class="gallery-height container">
			<?php // emmet a>img.img[src=assets/img/portfolio/$$$.jpg alt=$$$]*28 -->?>
			<a href="#"><img data-src="assets/img/portfolio/BD/001.jpg" alt="001" class="img lazy" data-size="1024x685"></a>
			<a href="#"><img data-src="assets/img/portfolio/BD/002.jpg" alt="002" class="img lazy" data-size=""></a>
			<a href="#"><img data-src="assets/img/portfolio/BD/003.jpg" alt="003" class="img lazy" data-size=""></a>
			<a href="#"><img data-src="assets/img/portfolio/BD/004.jpg" alt="004" class="img lazy" data-size=""></a>
			<a href="#"><img data-src="assets/img/portfolio/BD/005.jpg" alt="005" class="img lazy" data-size=""></a>
			<a href="#"><img data-src="assets/img/portfolio/BD/006.jpg" alt="006" class="img lazy" data-size=""></a>
			<a href="#"><img data-src="assets/img/portfolio/BD/007.jpg" alt="007" class="img lazy" data-size=""></a>
			<a href="#"><img data-src="assets/img/portfolio/BD/008.jpg" alt="008" class="img lazy" data-size=""></a>
			<a href="#"><img data-src="assets/img/portfolio/BD/009.jpg" alt="009" class="img lazy" data-size=""></a>
			<a href="#"><img data-src="assets/img/portfolio/BD/010.jpg" alt="010" class="img lazy" data-size=""></a>
			<a href="#"><img data-src="assets/img/portfolio/BD/011.jpg" alt="011" class="img lazy" data-size=""></a>
			<a href="#"><img data-src="assets/img/portfolio/BD/012.jpg" alt="012" class="img lazy" data-size=""></a>
			<a href="#"><img data-src="assets/img/portfolio/BD/013.jpg" alt="013" class="img lazy" data-size=""></a>
			<a href="#"><img data-src="assets/img/portfolio/BD/014.jpg" alt="014" class="img lazy" data-size=""></a>
			<a href="#"><img data-src="assets/img/portfolio/BD/015.jpg" alt="015" class="img lazy" data-size=""></a>
			<a href="#"><img data-src="assets/img/portfolio/BD/016.jpg" alt="016" class="img lazy" data-size=""></a>
			<a href="#"><img data-src="assets/img/portfolio/BD/017.jpg" alt="017" class="img lazy" data-size=""></a>
			<a href="#"><img data-src="assets/img/portfolio/BD/018.jpg" alt="018" class="img lazy" data-size=""></a>
			<a href="#"><img data-src="assets/img/portfolio/BD/019.jpg" alt="019" class="img lazy" data-size=""></a>
			<a href="#"><img data-src="assets/img/portfolio/BD/020.jpg" alt="020" class="img lazy" data-size=""></a>
			<a href="#"><img data-src="assets/img/portfolio/BD/021.jpg" alt="021" class="img lazy" data-size=""></a>
			<a href="#"><img data-src="assets/img/portfolio/BD/022.jpg" alt="022" class="img lazy" data-size=""></a>
			<a href="#"><img data-src="assets/img/portfolio/BD/024.jpg" alt="024" class="img lazy" data-size=""></a>
			<a href="#"><img data-src="assets/img/portfolio/BD/025.jpg" alt="025" class="img lazy" data-size=""></a>
			<a href="#"><img data-src="assets/img/portfolio/BD/026.jpg" alt="026" class="img lazy" data-size=""></a>
			<a href="#"><img data-src="assets/img/portfolio/BD/027.jpg" alt="027" class="img lazy" data-size=""></a>
			<a href="#"><img data-src="assets/img/portfolio/BD/028.jpg" alt="028" class="img lazy" data-size=""></a>

<!-- 				<div class="img" style="height:290px;background:#9B2322">2</div>
				 <div class="img" style="height:130px;background:#D968D9">3</div>
				 <div class="img" style="height:205px;background:#FA9">4</div>
				 <div class="img" style="height:130px;background:#5D9999">5</div>
				 <div class="img" style="height:210px;background:#FCA200">6</div>
				 <div class="img" style="height:125px;background:#14AFCB">7</div>
				 <div class="img" style="height:290px;background:#FF0087">8</div>
				 <div class="img" style="height:130px;background:#bb0303">9</div> -->
		</div>
	</section>
	<section class="cbc-social-networks">
		<!-- logo réseau sociaux + liens -->
		<h2>Suivez-moi</h2>
		<!-- facebook - --> <a href="https://twitter.com/hellmantica" target="_blank">twitter</a> - <a href="https://flickr.com/photos/hellmantica/" target="_blank">FlickR</a> -  <a href="https://500px.com/hellmantica" target="_blank">500px</a> - <a href="https://www.instagram.com/hellmantica/" target="_blank">instagram</a> - <!-- <a href="" target="_blank">codepen</a> - --> <a href="https://github.com/cbautistacarmona" target="_blank">github</a> - <a href="https://www.linkedin.com/in/cristina-bautista-carmona-868bb978/" target="_blank">linkedin</a>
	</section>
	<footer class="cbc-footer">
		Photos © Cristina Bautista Carmona - <?php echo date('Y'); ?>
	</footer>

<!-- Root element of PhotoSwipe. Must have class pswp. -->
	<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">

	    <!-- Background of PhotoSwipe. 
	         It's a separate element as animating opacity is faster than rgba(). -->
	    <div class="pswp__bg"></div>

	    <!-- Slides wrapper with overflow:hidden. -->
	    <div class="pswp__scroll-wrap">

	        <!-- Container that holds slides. 
	            PhotoSwipe keeps only 3 of them in the DOM to save memory.
	            Don't modify these 3 pswp__item elements, data is added later on. -->
	        <div class="pswp__container">
	            <div class="pswp__item"></div>
	            <div class="pswp__item"></div>
	            <div class="pswp__item"></div>
	        </div>

	        <!-- Default (PhotoSwipeUI_Default) interface on top of sliding area. Can be changed. -->
	        <div class="pswp__ui pswp__ui--hidden">

	            <div class="pswp__top-bar">

	                <!--  Controls are self-explanatory. Order can be changed. -->

	                <div class="pswp__counter"></div>

	                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>

	                <button class="pswp__button pswp__button--share" title="Share"></button>

	                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>

	                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>

	                <!-- Preloader demo http://codepen.io/dimsemenov/pen/yyBWoR -->
	                <!-- element will get class pswp__preloader--active when preloader is running -->
	                <div class="pswp__preloader">
	                    <div class="pswp__preloader__icn">
	                      <div class="pswp__preloader__cut">
	                        <div class="pswp__preloader__donut"></div>
	                      </div>
	                    </div>
	                </div>
	            </div>

	            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
	                <div class="pswp__share-tooltip"></div> 
	            </div>

	            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
	            </button>

	            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
	            </button>

	            <div class="pswp__caption">
	                <div class="pswp__caption__center"></div>
	            </div>

	        </div>

	    </div>

	</div>
	<!-- end of Root element of PhotoSwipe. Must have class pswp. -->
		<!-- jQuery -->
		<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
		<script src="assets/js/vendor/velocity.min.js"></script>
		<script src="app.js?v=<?php echo $app_version; ?>"></script>
		<script src="assets/js/vendor/jquery.lazyloadxt.js"></script>
		<script src="assets/js/plugins/photoswipe/photoswipe.min.js"></script>
		<!-- UI JS file -->
		<script src="assets/js/plugins/photoswipe/photoswipe-ui-default.min.js"></script> 
		<!--script src="dist/bundle.js"></script-->
		<!-- Bootstrap JavaScript -->
		<!-- <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script> -->
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-105574567-1', 'auto');
  ga('send', 'pageview');

</script>
	
</body>
</html>

