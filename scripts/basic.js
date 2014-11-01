var cssClassNames = {
	'headerRow': 'header-row center',
	'tableRow': 'table-row',
	'oddTableRow': 'odd-table-row',
	'selectedTableRow': 'selected-table-row',
	'hoverTableRow': 'hover-table-row',
	'headerCell': 'header-cell center',
	'tableCell': 'table-cell center',
	'rowNumberCell': ''};


function loadTempPage() {
	document.getElementById("content").innerHTML = "<h2>Please understand...</h2><p>This website is still under construction.</p>";
}
function loadGoogleDriveTable(elementID, documentKey, range, sheetID) {
	var query = new google.visualization.Query('https://docs.google.com/spreadsheet/ccc?key=' + documentKey + '&range=' + range + '&usp=drive_web&gid=' + sheetID + '#');
	query.send(function(response) {
		if (response.isError()) {
			alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
			return;
		}
	
		var options = { 'allowHtml': true, 'cssClassNames': cssClassNames, 'sort': 'disable' };
		var data = response.getDataTable();
		addIconsToTable(data);
		applyProgressBarToTable(data);
		var chart = new google.visualization.Table(document.getElementById(elementID));
		chart.draw(data, options);
	});
}
function addIconsToTable(dataTable) {
	var rows = dataTable.getNumberOfRows();
	var cols = dataTable.getNumberOfColumns();
	
	for(r = 0; r < rows; r++) {
		for(c = 0; c < cols; c++) {
			var cellValue = dataTable.getValue(r, c);
			
			if (typeof cellValue == 'string' || cellValue instanceof String) {
				if (cellValue.indexOf("Fire Element") > -1) {
					var newValue = cellValue.replace("Fire Element", "<img src=\"images/fireIcon.png\" alt=\"Fire\" title=\"Fire\">");
					dataTable.setValue(r, c, newValue);
				}
				cellValue = dataTable.getValue(r, c);
				if (cellValue.indexOf("Ice Element") > -1) {
					var newValue = cellValue.replace("Ice Element", "<img src=\"images/iceIcon.png\" alt=\"Ice\" title=\"Ice\">");
					dataTable.setValue(r, c, newValue);
				}
				cellValue = dataTable.getValue(r, c);
				if (cellValue.indexOf("Earth Element") > -1) {
					var newValue = cellValue.replace("Earth Element", "<img src=\"images/earthIcon.png\" alt=\"Earth\" title=\"Earth\">");
					dataTable.setValue(r, c, newValue);
				}
				cellValue = dataTable.getValue(r, c);
				if (cellValue.indexOf("Wind Element") > -1) {
					var newValue = cellValue.replace("Wind Element", "<img src=\"images/windIcon.png\" alt=\"Wind\" title=\"Wind\">");
					dataTable.setValue(r, c, newValue);
				}
				cellValue = dataTable.getValue(r, c);
				if (cellValue.indexOf("Water Element") > -1) {
					var newValue = cellValue.replace("Water Element", "<img src=\"images/waterIcon.png\" alt=\"Water\" title=\"Water\">");
					dataTable.setValue(r, c, newValue);
				}
				cellValue = dataTable.getValue(r, c);
				if (cellValue.indexOf("Lightning Element") > -1) {
					var newValue = cellValue.replace("Lightning Element", "<img src=\"images/lightningIcon.png\" alt=\"Lightning\" title=\"Lightning\">");
					dataTable.setValue(r, c, newValue);
				}
				cellValue = dataTable.getValue(r, c);
				if (cellValue.indexOf("Holy Element") > -1) {
					var newValue = cellValue.replace("Holy Element", "<img src=\"images/holyIcon.png\" alt=\"Holy\" title=\"Holy\">");
					dataTable.setValue(r, c, newValue);
				}
				cellValue = dataTable.getValue(r, c);
				if (cellValue.indexOf("Dark Element") > -1) {
					var newValue = cellValue.replace("Dark Element", "<img src=\"images/darkIcon.png\" alt=\"Dark\" title=\"Dark\">");
					dataTable.setValue(r, c, newValue);
				}
				cellValue = dataTable.getValue(r, c);
				if (cellValue.indexOf("All Elements") > -1) {
					var newValue = cellValue.replace("All Elements", "<img src=\"images/fireIcon.png\" alt=\"Fire\" title=\"Fire\"><img src=\"images/iceIcon.png\" alt=\"Ice\" title=\"Ice\"><img src=\"images/earthIcon.png\" alt=\"Earth\" title=\"Earth\"><img src=\"images/windIcon.png\" alt=\"Wind\" title=\"Wind\"><img src=\"images/waterIcon.png\" alt=\"Water\" title=\"Water\"><img src=\"images/lightningIcon.png\" alt=\"Lightning\" title=\"Lightning\"><img src=\"images/holyIcon.png\" alt=\"Holy\" title=\"Holy\"><img src=\"images/darkIcon.png\" alt=\"Dark\" title=\"Dark\">");
					dataTable.setValue(r, c, newValue);
				}
				cellValue = dataTable.getValue(r, c);
			}
		}
	}
}
function applyProgressBarToTable(dataTable) {
	var cols = dataTable.getNumberOfColumns();
	var formatter = new google.visualization.BarFormat({ base : 0, min: 0, max: 1, colorPositive: 'green' });
	
	for(c = 0; c < cols; c++) {
		var columnName = dataTable.getColumnLabel(c);
		
		if (columnName.indexOf("Percent Done") == 0) {
			formatter.format(dataTable, c);
		}
	}
}
function loadProgressPage() {
	if (!document.getElementById('progressContent')) {
		document.getElementById('content').innerHTML = "<div id='progressContent'><h3>In Development</h3><div id=\"development\"></div><br><h3>Total Progress</h3><div id='progress'></div></div>";
		loadGoogleDriveTable('progress', '13V6quW94TiJjoJ-h2sphQGv0F9iHZe8qOJoq4DgT-Xg', 'A:D', '0');
		loadGoogleDriveTable('development', '13V6quW94TiJjoJ-h2sphQGv0F9iHZe8qOJoq4DgT-Xg', 'A:B', '1126400717');
	}
}
function loadAccessories() {
	if (!document.getElementById('accessoryContent'))
	{
		document.getElementById('content').innerHTML = "<div id='accessoryContent'><h3>Accessories</h3><div id='accessories'></div></div>";
	
		loadGoogleDriveTable('accessories', '1YjWQOjYN9el3qZLbbBQMepUGvktLB2bb_8RO15zaLsY', 'A:E', '1691843470');
	}
}
function loadShields() {
	if (!document.getElementById('shieldContent'))
	{
		document.getElementById('content').innerHTML = "<div id='shieldContent'><h3>Shields</h3><div id='shields'></div></div>";
	
		loadGoogleDriveTable('shields', '1YjWQOjYN9el3qZLbbBQMepUGvktLB2bb_8RO15zaLsY', 'A:E', '1034987985');
	}
}
function loadHeadGear() {
	if (!document.getElementById('headGearContent'))
	{
		document.getElementById('content').innerHTML = "<div id='headGearContent'><h3>Helmets</h3><div id='helmets'></div><h3>Hats</h3><div id='hats'></div></div>";
	
		loadGoogleDriveTable('helmets', '1YjWQOjYN9el3qZLbbBQMepUGvktLB2bb_8RO15zaLsY', 'A:E', '1221923885');
		loadGoogleDriveTable('hats', '1YjWQOjYN9el3qZLbbBQMepUGvktLB2bb_8RO15zaLsY', 'A:E', '1050828015');
	}
}
function loadWeapons() {
	if (!document.getElementById('weaponContent'))
	{
		document.getElementById('content').innerHTML = "<div id='weaponContent'>"
													 + "<h3>Knives</h3><div id='knives'></div>"
													 + "<h3>Ninja Blades</h3><div id='ninjaBlades'></div>"
													 + "<h3>Swords</h3><div id='swords'></div>"
													 + "<h3>Knight Swords</h3><div id='knightSwords'></div>"
													 + "<h3>Katanas</h3><div id='katanas'></div>"
													 + "<h3>Axes</h3><div id='axes'></div>"
													 + "<h3>Rods</h3><div id='rods'></div>"
													 + "<h3>Staves</h3><div id='staves'></div>"
													 + "<h3>Guns</h3><div id='guns'></div>"
													 + "<h3>Crossbows</h3><div id='crossbows'></div>"
													 + "<h3>Bows</h3><div id='bows'></div>"
													 + "<h3>Harps</h3><div id='harps'></div>"
													 + "<h3>Books</h3><div id='books'></div>"
													 + "<h3>Spears</h3><div id='spears'></div>"
													 + "<h3>Poles</h3><div id='poles'></div>"
													 + "<h3>Bags</h3><div id='bags'></div>"
													 + "<h3>Rapiers</h3><div id='rapiers'></div>"
													 + "</div>";
													 
		loadGoogleDriveTable('knives', '1NXkEJRhnUf8JVMNZFV6_5zVibZbOcCOSYtD1lMB1Exk', 'A:I', '462286893');
		loadGoogleDriveTable('ninjaBlades', '1NXkEJRhnUf8JVMNZFV6_5zVibZbOcCOSYtD1lMB1Exk', 'A:I', '1095434110');
		loadGoogleDriveTable('swords', '1NXkEJRhnUf8JVMNZFV6_5zVibZbOcCOSYtD1lMB1Exk', 'A:I', '1852406365');
		loadGoogleDriveTable('knightSwords', '1NXkEJRhnUf8JVMNZFV6_5zVibZbOcCOSYtD1lMB1Exk', 'A:I', '117252269');
		loadGoogleDriveTable('katanas', '1NXkEJRhnUf8JVMNZFV6_5zVibZbOcCOSYtD1lMB1Exk', 'A:I', '1873153124');
		loadGoogleDriveTable('axes', '1NXkEJRhnUf8JVMNZFV6_5zVibZbOcCOSYtD1lMB1Exk', 'A:I', '1507377168');
		loadGoogleDriveTable('rods', '1NXkEJRhnUf8JVMNZFV6_5zVibZbOcCOSYtD1lMB1Exk', 'A:I', '900324854');
		loadGoogleDriveTable('staves', '1NXkEJRhnUf8JVMNZFV6_5zVibZbOcCOSYtD1lMB1Exk', 'A:I', '1892064881');
		loadGoogleDriveTable('guns', '1NXkEJRhnUf8JVMNZFV6_5zVibZbOcCOSYtD1lMB1Exk', 'A:I', '1470929399');
		loadGoogleDriveTable('crossbows', '1NXkEJRhnUf8JVMNZFV6_5zVibZbOcCOSYtD1lMB1Exk', 'A:I', '793655268');
		loadGoogleDriveTable('bows', '1NXkEJRhnUf8JVMNZFV6_5zVibZbOcCOSYtD1lMB1Exk', 'A:I', '654330770');
		loadGoogleDriveTable('harps', '1NXkEJRhnUf8JVMNZFV6_5zVibZbOcCOSYtD1lMB1Exk', 'A:I', '1412484817');
		loadGoogleDriveTable('books', '1NXkEJRhnUf8JVMNZFV6_5zVibZbOcCOSYtD1lMB1Exk', 'A:I', '1690330871');
		loadGoogleDriveTable('spears', '1NXkEJRhnUf8JVMNZFV6_5zVibZbOcCOSYtD1lMB1Exk', 'A:I', '70871086');
		loadGoogleDriveTable('poles', '1NXkEJRhnUf8JVMNZFV6_5zVibZbOcCOSYtD1lMB1Exk', 'A:I', '78683431');
		loadGoogleDriveTable('bags', '1NXkEJRhnUf8JVMNZFV6_5zVibZbOcCOSYtD1lMB1Exk', 'A:I', '1466145439');
		loadGoogleDriveTable('rapiers', '1NXkEJRhnUf8JVMNZFV6_5zVibZbOcCOSYtD1lMB1Exk', 'A:I', '1093677760');
	}
}
function loadSquire() {
	if (!document.getElementById('squireContent'))
	{
		document.getElementById("content").innerHTML = "<div id='squireContent'><h3>Squire</h3><div id='squireData'></div><br><div id='squireBattleSkills'></div><br><div id='squireOtherSkills'></div></div>";
	
		loadGoogleDriveTable('squireData', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A:M', '1067242928');
		loadGoogleDriveTable('squireBattleSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A1:O7', '0');
		loadGoogleDriveTable('squireOtherSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A:D', '1380116551');
	}
}
function loadAllArmor() {

	if (!document.getElementById('armorContent'))
	{
		document.getElementById("content").innerHTML = "<div id='armorContent'><h3>Heavy Armor</h3><div id='heavyArmor'></div><h3>Clothing</h3><div id='clothing'></div><h3>Robes</h3><div id='robes'></div></div>";
	
		loadGoogleDriveTable('heavyArmor', '1YjWQOjYN9el3qZLbbBQMepUGvktLB2bb_8RO15zaLsY', 'A:E', '509791939');
		loadGoogleDriveTable('clothing', '1YjWQOjYN9el3qZLbbBQMepUGvktLB2bb_8RO15zaLsY', 'A:E', '354402151');
		loadGoogleDriveTable('robes', '1YjWQOjYN9el3qZLbbBQMepUGvktLB2bb_8RO15zaLsY', 'A:E', '1138876377');
	}
}


