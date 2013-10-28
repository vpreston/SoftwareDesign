function initHomepage() {
	initLocationMap();
	initCharts();
}

function initCharts() {
	if (!S4.gglLibLoaded) {
		S4.timerTimeout--;
		if (S4.timerTimeout > 0) {
			window.setTimeout(initCharts, 500);
		} else {
			generateCharts();
		}
	} else {
		generateCharts();
	}
}

function initLocationMap() {
	
	S4.zipLocMap = null;
	
	var $map = $('#zip-place-map');
	
	if ($map.length > 0) {
		var elm = $map.get(0);
		var lat = parseFloat($map.data('lat'));
		var lng = parseFloat($map.data('long'));
		var zoom = parseInt($map.data('zoom'), 10);
		drawLocationMap(elm, lat, lng, zoom);
	}
	
}

function drawLocationMap(elm, lat, lng, zoom) {
	var mapOptions = {
		backgroundColor: '#F4F4F4',
		zoom: zoom,
		center: new google.maps.LatLng(lat, lng),
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		overviewMapControl: true
	};
	S4.zipLocMap = new google.maps.Map(elm, mapOptions);
}

// ==========================================================================

function generateGenderChart() {
	
	var $chart = $('#zip-demog-gender');
	
	if (S4.gglInteg) {
		if (S4.gglInteg.gender) {
			S4.gglInteg.gender.chart.clearChart();
			S4.gglInteg.gender.data = null;
		}
	} else {
		S4.gglInteg.gender = null;
	}
	
	var table_data = $chart.data('chart');
	
	var chartData = google.visualization.arrayToDataTable([
		['Gender', 'Quantity'],
		['Male', table_data.male[0]],
		['Female', table_data.female[0]]
	]);
	
	var chartProps = {
		width: 320,
		height: 240,
		backgroundColor: '#F4F4F4',
		colors: ['#95B4C1', '#E71A1A'],
		is3D: true,
		legend: {
			position: 'bottom',
			textStyle: {
				color: '#777777'
			}
		},
		chartArea: {
			left: '10%',
			top: '10%',
			width: '80%',
			height: '70%'
		},
		tooltip: {
			showColorCode: true
		}
	};
	
	var chartObj = new google.visualization.PieChart($chart.get(0));
	chartObj.draw(chartData, chartProps);
	
	S4.gglInteg.gender = {'chart': chartObj, 'data': chartData};
	
}

function generateHouseholdsChart() {
	
	var $chart = $('#zip-demog-households');
	
	if (S4.gglInteg) {
		if (S4.gglInteg.households) {
			S4.gglInteg.households.chart.clearChart();
			S4.gglInteg.households.data = null;
		}
	} else {
		S4.gglInteg.households = null;
	}
	
	var table_data = $chart.data('chart');
	
	var chartData = google.visualization.arrayToDataTable([
		['Households', 'Quantity'],
		['Family households', table_data.family[0]],
		['Nonfamily households', table_data.nonfamily[0]]
	]);
	
	var chartProps = {
		width: 320,
		height: 240,
		backgroundColor: '#F4F4F4',
		colors: ['#95B4C1', '#E71A1A'],
		is3D: true,
		legend: {
			position: 'bottom',
			textStyle: {
				color: '#777777'
			}
		},
		chartArea: {
			left: '10%',
			top: '10%',
			width: '80%',
			height: '70%'
		},
		tooltip: {
			showColorCode: true
		}
	};
	
	var chartObj = new google.visualization.PieChart($chart.get(0));
	chartObj.draw(chartData, chartProps);
	
	S4.gglInteg.households = {'chart': chartObj, 'data': chartData};
	
}

function generateHousingUnitsChart() {
	
	var $chart = $('#zip-demog-housing-units');
	
	if (S4.gglInteg) {
		if (S4.gglInteg.hunits) {
			S4.gglInteg.hunits.chart.clearChart();
			S4.gglInteg.hunits.data = null;
		}
	} else {
		S4.gglInteg.hunits = null;
	}
	
	var table_data = $chart.data('chart');
	
	var chartData = google.visualization.arrayToDataTable([
		['Housing Units', 'Quantity'],
		['Owner-occupied units', table_data.owner[0]],
		['Renter-occupied units', table_data.renter[0]],
		['Vacant units', table_data.vacant[0]]
	]);
	
	var chartProps = {
		width: 320,
		height: 240,
		backgroundColor: '#F4F4F4',
		colors: ['#95B4C1', '#697F88', '#E71A1A'],
		is3D: true,
		legend: {
			position: 'bottom',
			textStyle: {
				color: '#777777'
			}
		},
		chartArea: {
			left: '10%',
			top: '10%',
			width: '80%',
			height: '70%'
		},
		tooltip: {
			showColorCode: true
		}
	};
	
	var chartObj = new google.visualization.PieChart($chart.get(0));
	chartObj.draw(chartData, chartProps);
	
	S4.gglInteg.hunits = {'chart': chartObj, 'data': chartData};
	
}

function generateAgeChart() {
	
	var $chart = $('#zip-demog-age');
	
	if (S4.gglInteg) {
		if (S4.gglInteg.age) {
			S4.gglInteg.age.chart.clearChart();
			S4.gglInteg.age.data = null;
		}
	} else {
		S4.gglInteg.age = null;
	}
	
	var table_data = $chart.data('chart');
	var rows = [['Age', '2010', '2000']];
	for (var i = 0; i < table_data.length; i++) {
		var r = table_data[i];
		rows.push([r['label'], r['2010'] + 0, r['2000'] + 0]);
	}
	
	var chartData = google.visualization.arrayToDataTable(rows);
	
	var chartProps = {
		width: 320,
		height: 400,
		backgroundColor: '#F4F4F4',
		colors: ['#E71A1A', '#95B4C1'],
		legend: {
			position: 'in'
		},
		chartArea: {
			left: '4%',
			top: '10%',
			width: '92%',
			height: '78%'
		},
		hAxis: {
			slantedText: true,
			slantedTextAngle: 60
		},
		vAxis: {
			textPosition: 'in'
		}
	};
	
	var chartObj = new google.visualization.ColumnChart($chart.get(0));
	chartObj.draw(chartData, chartProps);
	
	S4.gglInteg.age = {'chart': chartObj, 'data': chartData};
	
}

function generateRaceChart() {
	
	var $chart = $('#zip-demog-race');
	
	if (S4.gglInteg) {
		if (S4.gglInteg.race) {
			S4.gglInteg.race.chart.clearChart();
			S4.gglInteg.race.data = null;
		}
	} else {
		S4.gglInteg.race = null;
	}
	
	var table_data = $chart.data('chart');
	var rows = [['Race', 'Quantity']];
	for (var i = 0; i < table_data.length; i++) {
		var r = table_data[i];
		rows.push([r['label'], r['2010']]);
	}
	
	var chartData = google.visualization.arrayToDataTable(rows);
	
	var chartProps = {
		width: 320,
		height: 300,
		backgroundColor: '#F4F4F4',
		is3D: true,
		legend: {
			position: 'bottom',
			textStyle: {
				color: '#777777'
			}
		},
		chartArea: {
			left: '10%',
			top: '10%',
			width: '80%',
			height: '70%'
		},
		tooltip: {
			showColorCode: true
		},
		sliceVisibilityThreshold: (3.6 / 360),
		pieResidueSliceColor: '#777777'
	};
	
	var chartObj = new google.visualization.PieChart($chart.get(0));
	chartObj.draw(chartData, chartProps);
	
	S4.gglInteg.race = {'chart': chartObj, 'data': chartData};
	
}

function generateCrimeChart() {
	
	var ncharts = $('.zip-demog-crime').length;
	
	if (ncharts < 1)
		return;
	
	if (S4.gglInteg && S4.gglInteg.crime) {
		if (S4.gglInteg.crime.length > 0) {
			for (var i = 0; i < S4.gglInteg.crime.length; i++) {
				S4.gglInteg.crime[i].chart.clearChart();
				S4.gglInteg.crime[i].data = null;
			}
		}
	} else {
		S4.gglInteg.crime = [];
	}
	
	var chartProps = {
		width: 320,
		height: 330,
		backgroundColor: '#F4F4F4',
		isStacked: true,
		vAxis: {
			textPosition: 'in'
		},
		chartArea: {
			left: '4%',
			top: '12%',
			width: '92%',
			height: '70%'
		},
		legend: {
			position: 'bottom'
		}
	};
	
	for (var i = 0; i < ncharts; i++) {
		
		var $chart = $('#zip-demog-crime-' + i);
		
		var table_data = $chart.data('chart');
		var rows = [['Type', 'Murder & Manslaughter', 'Forcible Rape', 'Robbery', 'Aggravated Assault', 'Burglary', 'Larceny & Theft', 'Motor Vehicle Theft', 'Arson']];
		for (var j = 0; j < table_data.length; j++) {
			var r = table_data[j];
			rows.push([r[0], r[1], r[2], r[3], r[4], r[5], r[6], r[7], r[8]]);
		}
		
		var chartData = google.visualization.arrayToDataTable(rows);
		var chartObj = new google.visualization.ColumnChart($chart.get(0));
		chartObj.draw(chartData, chartProps);
		
		S4.gglInteg.crime[i] = {'chart': chartObj, 'data': chartData};
		
	}
	
}

function generateEmploymentChart() {
	
	var $chart = $('#zip-econ-employment');
	
	if (S4.gglInteg) {
		if (S4.gglInteg.employment) {
			S4.gglInteg.employment.chart.clearChart();
			S4.gglInteg.employment.data = null;
		}
	} else {
		S4.gglInteg.employment = null;
	}
	
	var table_data = $chart.data('chart');
	var rows = [['Type', 'Quantity']];
	for (var i = 0; i < table_data.length; i++) {
		var r = table_data[i];
		rows.push([r['label'], r['n'] + 0]);
	}
	
	var chartData = google.visualization.arrayToDataTable(rows);
	
	var chartProps = {
		width: 320,
		height: 240,
		backgroundColor: '#F4F4F4',
		colors: ['#95B4C1', '#697F88', '#E71A1A'],
		is3D: true,
		legend: {
			position: 'bottom',
			textStyle: {
				color: '#777777'
			}
		},
		chartArea: {
			left: '10%',
			top: '10%',
			width: '80%',
			height: '70%'
		},
		tooltip: {
			showColorCode: true
		}
	};
	
	var chartObj = new google.visualization.PieChart($chart.get(0));
	chartObj.draw(chartData, chartProps);
	
	S4.gglInteg.employment = {'chart': chartObj, 'data': chartData};
	
}

function generateCommuteChart() {
	
	var $chart = $('#zip-econ-commute');
	
	if (S4.gglInteg) {
		if (S4.gglInteg.commute) {
			S4.gglInteg.commute.chart.clearChart();
			S4.gglInteg.commute.data = null;
		}
	} else {
		S4.gglInteg.commute = null;
	}
	
	var table_data = $chart.data('chart');
	var rows = [['Type', '']];
	for (var i = 0; i < table_data.length; i++) {
		var r = table_data[i];
		rows.push([r['label'], r['n'] + 0]);
	}
	
	var chartData = google.visualization.arrayToDataTable(rows);
	
	var chartProps = {
		width: 320,
		height: 300,
		backgroundColor: '#F4F4F4',
		colors: ['#95B4C1'],
		legend: {
			position: 'none'
		},
		chartArea: {
			left: '4%',
			width: '92%'
		},
		hAxis: {
			slantedText: true,
			slantedTextAngle: 60
		},
		vAxis: {
			textPosition: 'in'
		}
	};
	
	var chartObj = new google.visualization.ColumnChart($chart.get(0));
	chartObj.draw(chartData, chartProps);
	
	S4.gglInteg.commute = {'chart': chartObj, 'data': chartData};
	
}

function generateOccupationChart() {
	
	var $chart = $('#zip-econ-occupation');
	
	if (S4.gglInteg) {
		if (S4.gglInteg.occupation) {
			S4.gglInteg.occupation.chart.clearChart();
			S4.gglInteg.occupation.data = null;
		}
	} else {
		S4.gglInteg.occupation = null;
	}
	
	var table_data = $chart.data('chart');
	var rows = [['Type', '']];
	for (var i = 0; i < table_data.length; i++) {
		var r = table_data[i];
		rows.push([r['label'], r['n'] + 0]);
	}
	
	var chartData = google.visualization.arrayToDataTable(rows);
	
	var chartProps = {
		width: 320,
		height: 300,
		backgroundColor: '#F4F4F4',
		colors: ['#95B4C1'],
		legend: {
			position: 'none'
		},
		chartArea: {
			left: '4%',
			width: '92%'
		},
		hAxis: {
			slantedText: true,
			slantedTextAngle: 60
		},
		vAxis: {
			textPosition: 'in'
		}
	};
	
	var chartObj = new google.visualization.ColumnChart($chart.get(0));
	chartObj.draw(chartData, chartProps);
	
	S4.gglInteg.occupation = {'chart': chartObj, 'data': chartData};
	
}

function generateIndustryChart() {
	
	var $chart = $('#zip-econ-industry');
	
	if (S4.gglInteg) {
		if (S4.gglInteg.industry) {
			S4.gglInteg.industry.chart.clearChart();
			S4.gglInteg.industry.data = null;
		}
	} else {
		S4.gglInteg.industry = null;
	}
	
	var table_data = $chart.data('chart');
	var rows = [['Type', '']];
	for (var i = 0; i < table_data.length; i++) {
		var r = table_data[i];
		rows.push([r['label'], r['n'] + 0]);
	}
	
	var chartData = google.visualization.arrayToDataTable(rows);
	
	var chartProps = {
		width: 320,
		height: 600,
		backgroundColor: '#F4F4F4',
		colors: ['#95B4C1'],
		legend: {
			position: 'none'
		},
		chartArea: {
			left: '4%',
			width: '92%'
		},
		hAxis: {
			slantedText: true,
			slantedTextAngle: 60
		},
		vAxis: {
			textPosition: 'in'
		}
	};
	
	var chartObj = new google.visualization.ColumnChart($chart.get(0));
	chartObj.draw(chartData, chartProps);
	
	S4.gglInteg.industry = {'chart': chartObj, 'data': chartData};
	
}

function generateWorkerClassChart() {
	
	var $chart = $('#zip-econ-wclass');
	
	if (S4.gglInteg) {
		if (S4.gglInteg.wclass) {
			S4.gglInteg.wclass.chart.clearChart();
			S4.gglInteg.wclass.data = null;
		}
	} else {
		S4.gglInteg.wclass = null;
	}
	
	var table_data = $chart.data('chart');
	var rows = [['Type', 'Quantity']];
	for (var i = 0; i < table_data.length; i++) {
		var r = table_data[i];
		rows.push([r['label'], r['n'] + 0]);
	}
	
	var chartData = google.visualization.arrayToDataTable(rows);
	
	var chartProps = {
		width: 320,
		height: 240,
		backgroundColor: '#F4F4F4',
		colors: ['#95B4C1', '#708891', '#4B5A61', '#E71A1A'],
		is3D: true,
		legend: {
			position: 'bottom',
			textStyle: {
				color: '#777777'
			}
		},
		chartArea: {
			left: '10%',
			top: '10%',
			width: '80%',
			height: '70%'
		},
		tooltip: {
			showColorCode: true
		}
	};
	
	var chartObj = new google.visualization.PieChart($chart.get(0));
	chartObj.draw(chartData, chartProps);
	
	S4.gglInteg.wclass = {'chart': chartObj, 'data': chartData};
	
}

function generateIncomeChart() {
	
	var $chart = $('#zip-econ-income');
	
	if (S4.gglInteg) {
		if (S4.gglInteg.income) {
			S4.gglInteg.income.chart.clearChart();
			S4.gglInteg.income.data = null;
		}
	} else {
		S4.gglInteg.income = null;
	}
	
	var table_data = $chart.data('chart');
	var rows = [['Income', 'Households']];
	for (var i = 0; i < table_data.length; i++) {
		var r = table_data[i];
		rows.push([r['label'], r['n'] + 0]);
	}
	
	var chartData = google.visualization.arrayToDataTable(rows);
	
	var chartProps = {
		width: 320,
		height: 520,
		backgroundColor: '#F4F4F4',
		colors: ['#95B4C1'],
		legend: {
			position: 'none'
		},
		chartArea: {
			left: '4%',
			top: '10%',
			width: '92%',
			height: '78%'
		},
		hAxis: {
			slantedText: true,
			slantedTextAngle: 60
		},
		vAxis: {
			textPosition: 'in'
		}
	};
	
	var chartObj = new google.visualization.ColumnChart($chart.get(0));
	chartObj.draw(chartData, chartProps);
	
	S4.gglInteg.income = {'chart': chartObj, 'data': chartData};
	
}

function generateCharts() {
	
	generateGenderChart();
	generateHouseholdsChart();
	generateHousingUnitsChart();
	generateAgeChart();
	generateRaceChart();
	
	generateEmploymentChart();
	generateCommuteChart();
	generateOccupationChart();
	generateIndustryChart();
	generateWorkerClassChart();
	generateIncomeChart();
	
	generateCrimeChart();
	
}