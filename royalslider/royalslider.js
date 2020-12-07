jQuery(document).ready(function($) {
   $('#simple-vertical').royalSlider({
    arrowsNav: true,
    arrowsNavAutoHide: true,
	breakpoint:0,
    fadeinLoadedSlide: true,
    controlNavigation: 'none',
    imageScaleMode: 'fill',
    imageAlignCenter:true,
    loop: true,
    loopRewind: true,
    numImagesToPreload: 4,
    slidesOrientation: 'vertical',
    keyboardNavEnabled: false,
    video: {
      autoHideArrows:true,
      autoHideControlNav:true
    },  
		autoPlay: {
		// autoplay options go gere
		enabled: true,
		pauseOnHover: true,
		delay:4000,
		
	},

    autoScaleSlider: true, 
    autoScaleSliderWidth: 960,     
    autoScaleSliderHeight: 850,
    autoHeight:false,

    /* size of all images http://help.dimsemenov.com/kb/royalslider-jquery-plugin-faq/adding-width-and-height-properties-to-images */
    //imgWidth: 640,
    //imgHeight: 360
  });
});