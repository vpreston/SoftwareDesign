var div = document.getElementById('nmWidgetContainer');
if (div != null && ((div.getAttribute("data-client") != null) || (div.getAttribute("class") != null))) {
	var cl = div.getAttribute("data-client");
	if ((cl == null || cl == '') && div.getAttribute("class") != null)
		cl = div.getAttribute("class").replace("cid-", "");
	var trkurl = 'http://engine.adzerk.net/p/eyJhdiI6MjQ0NjksImF0IjoyMCwiY20iOjMzOTkzLCJjaCI6OTU4NywiY3IiOjk3NTgyLCJkbSI6NCwiZmMiOjEzNDQxNSwiZmwiOjY0Mjg4LCJudyI6NjM2MSwicnYiOjAsInByIjoyNzAyMSwic3QiOjAsInJlIjoxfQ/i.gif?';
	trkurl = trkurl + 'keywords=' + cl;
	trkurl = trkurl + '&r=' + Math.floor((Math.random() * 100000000) + 1);
	var trkimg = document.createElement("img");
	trkimg.src = trkurl;
	trkimg.height = '0px';
	trkimg.width = '0px';
	trkimg.alt = 'adzerk tracking image';
	div.parentNode.insertBefore(trkimg, div);

	var comscore = document.createElement("img");
	comscore.src = "http://b.scorecardresearch.com/p?c1=7&amp;c2=9248945&amp;c3=100000&amp;cv=2.0&amp;cj=1";
	comscore.height = '0px';
	comscore.width = '0px';
	comscore.alt = 'comscore image';
	div.parentNode.insertBefore(comscore, div);
}
if (window.NM === undefined) {
	var NM = new Object();
	var host = "cdn.nmcdn.us";
	//track at start.
	var loadJQuery = false;
	var JQueryExists = true;
	var jNM = null;

	//var host = "http://stagecms.newsmax.dev";
	NM.init = function (param) {
		if (param["host"]) {
			host = param["host"];
		}
		if (window.jQuery === undefined || parseFloat(jQuery.fn.jquery) < 1.7) {
			loadJQuery = true;
			if (window.jQuery === undefined) {
				JQueryExists = false;
			}
			var script_tag = document.createElement('script');
			script_tag.setAttribute("type", "text/javascript");
			script_tag.setAttribute("id", "jNM");
			script_tag.setAttribute("src", "http://" + host + "/js/newsmax.jquery.min.js");
			if (script_tag.readyState) {
				script_tag.onreadystatechange = function () { // For old versions of IE
					if (this.readyState == 'complete' || this.readyState == 'loaded') {
						load_nmjs();
					}
				};
			} else {
				script_tag.onload = load_nmjs;
			}
			// Try to find the head, otherwise default to the documentElement
			(document.getElementsByTagName("head")[0] || document.documentElement).appendChild(script_tag);
		} else {
			load_nmjs();
		}

		function load_nmjs() {
			if (loadJQuery) {
				if (JQueryExists == true) {
					jNM = jQuery.noConflict(true);
				} else {
					jNM = jQuery.noConflict(false);
				}
			}
			var scriptUrl = "http://" + host + "/cmspages/newsmax/feed/GetScript.ashx?ClientID=" + param["ClientID"];
			if (host.indexOf('nmcdn') > 0)
				scriptUrl = scriptUrl + "&md=1";
			var js, id = 'nmWidgetjs' + param["ClientID"], ref = document.getElementsByTagName('script')[0];
			if (document.getElementById(id)) {
				return;
			}
			js = document.createElement('script');
			js.id = id;
			js.async = true;
			js.src = scriptUrl;
			ref.parentNode.insertBefore(js, ref);
			if (param["ClientID"] != null)
				load_ados();

		}
	};
	window.NM = NM;
	function load_ados() {
		var p = "http", d = "static";
		if (document.location.protocol == "https:") {
			p += "s"; d = "engine";
		}
		var z = document.createElement("script");
		z.type = "text/javascript";
		z.async = true;
		z.src = "http://static.adzerk.net/ados.js";
		//          z.src="ados/ados.js";
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(z, s);
		var widget = document.getElementById("nmWidgetContainer");
		div = document.createElement("div");
		div.id = 'azk1';
		widget.parentNode.insertBefore(div, widget);
	}
}

var _comscore = _comscore || [];
_comscore.push({ c1: "7", c2: "9248945", c3: "100000" });
(function () {
    var s = document.createElement("script"), el = document.getElementsByTagName("script")[0]; s.async = true;
    s.src = (document.location.protocol == "https:" ? "https://sb" : "http://b") + ".scorecardresearch.com/beacon.js";
    el.parentNode.insertBefore(s, el);
})();