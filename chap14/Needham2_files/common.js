function getAjaxRequest(params, callback, requestType, url, dataType, contentType) {
	
	// this is a wrapper for all gateway ajax requests
	
	if (url === undefined)
		url = 'gw.php';
		
	return jQuery.ajax({
		type: ((requestType === undefined) ? 'GET' : requestType),
		url: url,
		dataType: ((dataType === undefined) ? 'json' : dataType),
		contentType: ((contentType === undefined) ? 'application/x-www-form-urlencoded' : contentType),
		data: params,
		success: callback
	});
}

function balanceColumns() {
	var $lc = jQuery('#content-body .col-left');
	var $rc = jQuery('#content-body .col-right');
	var max = Math.max($lc.height(), $rc.height());
	$lc.height(max);
	$rc.height(max);
}

function initShare() {
	
	var page_title = encodeURIComponent(document.title);
	var page_url = encodeURIComponent(location.href);
	
	// twitter
	
	var twitter_url = 'https://twitter.com/share?';
	twitter_url += 'url=' + page_url;
	twitter_url += '&text=' + page_title;
	
	jQuery('#share-twitter').attr('href', twitter_url);
	
	// facebook
	
	var fb_appid = jQuery('body').data('fb');
	var abbr_logo_url = 'http://www.uszip.com/root/app_common/img/sml_logo_zip.png';
	
	var fb_url = 'http://www.facebook.com/dialog/feed?';
	fb_url += 'app_id=' + fb_appid;
	fb_url += '&link=' + page_url;
	fb_url += '&picture=' + abbr_logo_url;
	fb_url += '&name=' + page_title;
	fb_url += '&caption=' + page_url;
	//fb_url += '&description=' + page_title;
	fb_url += '&redirect_uri=' + page_url;
	
	jQuery('#share-facebook').attr('href', fb_url);
	
	// google plus
	
	var plusone_url = 'https://plus.google.com/share';
	plusone_url += '?url=' + page_url;
	
	jQuery('#share-googleplus').attr('href', plusone_url);
	
	// addthis
	
	var addthis_pubid = jQuery('body').data('atp');
	
	var addthis_url = 'http://api.addthis.com/oexchange/0.8/offer?';
	addthis_url += 'url=' + page_url;
	addthis_url += '&title=' + page_title;
	//addthis_url += '&description=' + page_title;
	addthis_url += '&pubid=' + addthis_pubid;
	
	jQuery('#share-addthis').attr('href', addthis_url);
	
}

function initBookmark() {
	
	var page_title = document.title;
	var page_url = location.href;
	
	jQuery('#page-bookmark').bind('click', function(event) {
		event.preventDefault();
		if (window.sidebar && ("addPanel" in window.sidebar)) {
			window.sidebar.addPanel(page_title, page_url, '');
		} else if (window.external) {
			window.external.AddFavorite(page_url, page_title);
		} else if (window.opera) {
			jQuery('#page-bookmark').attr({
				'href': encodeURIComponent(page_url),
				'title': encodeURIComponent(page_title),
				'rel': 'sidebar'
			});
		} else {
			alert("Your browser does not support bookmarking.");
			return false;
		}
	});
}

function initNetwork() {
	var $links = jQuery('#network-header-links');
	var $tab = jQuery('#network-header');
	var $arw = $tab.find('.arw');
	jQuery('#network-header-trigger').bind('click', function(event) {
		if ($links.is(':visible')) {
			$tab.removeClass('s');
			$arw.html('&#x25BC;');
			$links.slideUp(150);
		} else {
			$tab.addClass('s');
			$arw.html('&#x25B2;');
			$links.slideDown(150);
		}
	});
}

function initTopSearch() {
	jQuery('#page-word-search-query').placeholder();
}
