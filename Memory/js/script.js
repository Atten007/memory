//console.log("Test");


// Klick auf Karte
jQuery(".card").on("click", function() {
	let countActiveCards = jQuery(".card.active").length;
	
	if ( !jQuery(this).hasClass("active") && !jQuery(this).hasClass("resolved") ) {
		// falls noch keine Karte aufgedeckt ist
		if (countActiveCards === 0) {
			jQuery(this).addClass("active");
		}

		// falls eine Karte aufgedeckt ist
		else if (countActiveCards === 1) {
			jQuery(this).addClass("active");

			// Prüfung, ob Karten gleich sind
			if ( jQuery(".card.active:eq(0) div").data("content") === 
				 jQuery(".card.active:eq(1) div").data("content") ) {
				jQuery(".card.active").addClass("resolved").removeClass("active");

				// Prüfung, ob alle Karten gefunden wurden
				if ( jQuery(".card").length === jQuery(".card.resolved").length ) {
					window.setTimeout(function() {
						alert("alle karten gefunden");
					}, 2000);
				}
			}
		}

		// falls zwei Karten aufgedeckt sind
		else if (countActiveCards === 2) {
			jQuery(".card.active").removeClass("active");
			jQuery(this).addClass("active");
		}

		// in allen anderen Fällen
		else {
			jQuery(".card.active").removeClass("active");
		}
	}


	//sconsole.log(countActiveCards);
});


