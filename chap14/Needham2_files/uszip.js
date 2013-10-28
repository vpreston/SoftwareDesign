var S4 = {}; // app namespace

S4.gglLibLoaded = false;
S4.gglInteg = {};
S4.timerTimeout = 6;

try {
	google.setOnLoadCallback(function() {
		S4.gglLibLoaded = true;
		S4.gglInteg = {};
	});
} catch (e) {
	//
}

function getPageID() {
	return (jQuery('body').get(0).id).replace('s4-page-', '');
}

function route(pageid) {
	
	S4.pageid = pageid;
	
	Modernizr.load(
	[
		{
			test: (S4.pageid == 'homepage'),
			yep: 'js/page.homepage.js',
			callback: function(url, result, key) {
				if (result) {
					initHomepage();
				}
			}
		},
		{
			test: (S4.pageid == 'api-general'),
			yep: 'js/page.api-general.js',
			callback: function(url, result, key) {
				if (result) {
					//
				}
			}
		}
	]);
	
}

jQuery(document).ready(function() {
	Modernizr.load({
		load: 'js/common.js',
		complete: function() {
			if (jQuery('#sb-social').length > 0)
				initShare();
			initTopSearch();
			initBookmark();
			initNetwork();
			route(getPageID());
		}
	});
});