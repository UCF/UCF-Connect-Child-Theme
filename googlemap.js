<script>
      function initMap() {
        var cocoa = {lat: 28.383844, lng: -80.7565986};
		var southlake = {lat: 28.551185, lng: -81.7106726};
		var image ='/wp-content/uploads/2017/09/universityBLK.png';
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 9,
          center: {lat: 28.6468325, lng: -81.4179264}
        });
        var cocoamarker = new google.maps.Marker({
          position: cocoa,
          map: map,
		  icon: image,
		  title: "UCF Connect Cocoa"
	    });
		google.maps.event.addListener(cocoamarker, 'click', function () {
  			window.location.href = '/cocoa';
		});
		var altamontemarker = new google.maps.Marker({
          position: cocoa,
          map: map,
		  icon: image,
		  title: "UCF Connect Altamonte Springs",
		  Position: {lat: 28.6468325, lng: -81.4179264}
	    });
		google.maps.event.addListener(altamontemarker, 'click', function () {
  			window.location.href = '/altamonte-springs';
		});
		 var southlakemarker = new google.maps.Marker({
          position: southlake,
		  icon: image,
          map: map,
		  title: "UCF Connect South Lake"
        });
		google.maps.event.addListener(southlakemarker, 'click', function () {
  			window.location.href = '/south-lake';
		});
		var ocalamarker = new google.maps.Marker({
          map: map,
		  icon: image,
		  title: "UCF Connect Ocala",
		  Position: {lat: 29.1625079, lng: -82.1734549}
	    });
		google.maps.event.addListener(ocalamarker, 'click', function () {
  			window.location.href = '/ocala';
		});
		var valenciaeastmarker = new google.maps.Marker({
          map: map,
		  icon: image,
		  title: "UCF Connect Valencia East",
		  Position: {lat: 28.5540746, lng: -81.2521435}
	    });
		google.maps.event.addListener(valenciaeastmarker, 'click', function () {
  			window.location.href = '/valencia-east';
		});
		var palmbaymarker = new google.maps.Marker({
          map: map,
		  icon: image,
		  title: "UCF Connect Palm Bay",
		  Position: {lat: 27.9939248, lng: -80.6310368}
	    });
		google.maps.event.addListener(palmbaymarker, 'click', function () {
  			window.location.href = '/palm-bay';
		});
		var valenciaosmarker = new google.maps.Marker({
          map: map,
		  icon: image,
		  title: "UCF Connect Valencia Osceola",
		  Position: {lat: 28.3076811, lng: -81.382373}
	    });
		google.maps.event.addListener(valenciaosmarker, 'click', function () {
  			window.location.href = '/valencia-osceola';
		});
		var daytonamarker = new google.maps.Marker({
          map: map,
		  icon: image,
		  title: "UCF Connect Daytona Beach",
		  Position: {lat: 29.2024752, lng: -81.0503145}
	    });
		google.maps.event.addListener(daytonamarker, 'click', function () {
  			window.location.href = '/daytona-beach';
		});
		var sanfordmarker = new google.maps.Marker({
          map: map,
		  icon: image,
		  title: "UCF Connect Sanford/Lake Mary",
		  Position: {lat: 28.7439547, lng: -81.3053671}
	    });
		google.maps.event.addListener(sanfordmarker, 'click', function () {
  			window.location.href = '/sanfordlake-mary';
		});
		var valenciawestmarker = new google.maps.Marker({
          map: map,
		  icon: image,
		  title: "UCF Connect Valencia West",
		  Position: {lat: 28.5200718, lng: -81.4624083}
	    });
		google.maps.event.addListener(valenciawestmarker, 'click', function () {
  			window.location.href = '/valencia-west';
		});
		var leesburgmarker = new google.maps.Marker({
          map: map,
		  icon: image,
		  title: "UCF Connect Leesburg",
		  Position: {lat: 28.8292413, lng: -81.7993409}
	    });
		google.maps.event.addListener(leesburgmarker, 'click', function () {
  			window.location.href = '/leesburg';
		});
		var cemarker = new google.maps.Marker({
          map: map,
		  icon: image,
		  title: "UCF Connect Continuing Education",
		  Position: {lat: 28.5899657, lng: -81.2017792}
	    });
		google.maps.event.addListener(cemarker, 'click', function () {
  			window.location.href = 'http://www.ce.ucf.edu';
		});   
		}
    </script>
    <script async defer
	 src="https://maps.googleapis.com/maps/api/js?key=AIzaSyChokjEzXYMdEufz5KyZUPGhItDZGvwMgs&callback=initMap" type="text/javascript">
    </script>