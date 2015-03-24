function loadSquire() {
	if (!document.getElementById('squireContent'))
	{
		document.getElementById("content").innerHTML = "<div id='squireContent'><h3>Squire</h3><div id='squireData'></div><br><div id='squireBattleSkills'></div><br><div id='squireOtherSkills'></div></div>";
	
		loadGoogleDriveTable('squireData', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A2:M3', '1067242928');
		loadGoogleDriveTable('squireBattleSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A1:O7', '0');
		loadGoogleDriveTable('squireOtherSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A9:D14', '0');
	}
}
function loadBlueMage() {
	if (!document.getElementById('blueMageContent'))
	{
		document.getElementById("content").innerHTML = "<div id='blueMageContent'><h3>Blue Mage</h3><div id='blueMageData'></div><br><div id='blueMageBattleSkills'></div><br><div id='blueMageOtherSkills'></div></div>";
	
		loadGoogleDriveTable('blueMageData', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A6:M7', '1067242928');
		loadGoogleDriveTable('blueMageBattleSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A1:O17', '1402009882');
		loadGoogleDriveTable('blueMageOtherSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A19:D24', '1402009882');
	}
}
function loadKnight() {
	if (!document.getElementById('knightContent')) {
		document.getElementById("content").innerHTML = "<div id='knightContent'><h3>Knight</h3><div id='knightData'></div><br><div id='knightBattleSkills'></div><br><div id='knightOtherSkills'></div></div>";
		
		loadGoogleDriveTable('knightData', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A10:M11', '1067242928');
		loadGoogleDriveTable('knightBattleSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A1:O7', '1154943354');
		loadGoogleDriveTable('knightOtherSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A9:D14', '1154943354');
	}
}
function loadThief() {
	if (!document.getElementById('thiefContent')) {
		document.getElementById("content").innerHTML = "<div id='thiefContent'><h3>Thief</h3><div id='thiefData'></div><br><div id='thiefBattleSkills'></div><br><div id='thiefOtherSkills'></div></div>";
		
		loadGoogleDriveTable('thiefData', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A10:M11', '1067242928');
		loadGoogleDriveTable('thiefBattleSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A1:O7', '1154943354');
		loadGoogleDriveTable('thiefOtherSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A9:D14', '1154943354');
	}
}
function loadWizard() {
	if (!document.getElementById('wizardContent')) {
		document.getElementById("content").innerHTML = "<div id='wizardContent'><h3>Wizard</h3><div id='wizardData'></div><br><div id='wizardBattleSkills'></div><br><div id='wizardOtherSkills'></div></div>";
		
		loadGoogleDriveTable('wizardData', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A18:M19', '1067242928');
		loadGoogleDriveTable('wizardBattleSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A1:O12', '1069647013');
		loadGoogleDriveTable('wizardOtherSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A14:D17', '1069647013');
	}
}
function loadPriest() {
	if (!document.getElementById('priestContent')) {
		document.getElementById("content").innerHTML = "<div id='priestContent'><h3>Priest</h3><div id='priestData'></div><br><div id='priestBattleSkills'></div><br><div id='priestOtherSkills'></div></div>";
		
		loadGoogleDriveTable('priestData', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A22:M23', '1067242928');
		loadGoogleDriveTable('priestBattleSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A1:O12', '1414372521');
		loadGoogleDriveTable('priestOtherSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A14:D17', '1414372521');
	}
}
function loadMonk() {
	if (!document.getElementById('monkContent')) {
		document.getElementById("content").innerHTML = "<div id='monkContent'><h3>Monk</h3><div id='monkData'></div><br><div id='monkBattleSkills'></div><br><div id='monkOtherSkills'></div></div>";
		
		loadGoogleDriveTable('monkData', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A26:M27', '1067242928');
		loadGoogleDriveTable('monkBattleSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A1:O9', '1120224444');
		loadGoogleDriveTable('monkOtherSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A11:D14', '1120224444');
	}
}
function loadArcher() {
	if (!document.getElementById('archerContent')) {
		document.getElementById("content").innerHTML = "<div id='archerContent'><h3>Archer</h3><div id='archerData'></div><br><div id='archerBattleSkills'></div><br><div id='archerOtherSkills'></div></div>";
		
		loadGoogleDriveTable('archerData', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A30:M31', '1067242928');
		loadGoogleDriveTable('archerBattleSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A1:O8', '89371398');
		loadGoogleDriveTable('archerOtherSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A10:D15', '89371398');
	}
}
function loadOracle() {
	if (!document.getElementById('oracleContent')) {
		document.getElementById("content").innerHTML = "<div id='oracleContent'><h3>Oracle</h3><div id='oracleData'></div><br><div id='oracleBattleSkills'></div><br><div id='oracleOtherSkills'></div></div>";
		
		loadGoogleDriveTable('oracleData', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A34:M35', '1067242928');
		//loadGoogleDriveTable('oracleBattleSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A1:O7', '27536525');
		//loadGoogleDriveTable('oracleOtherSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A9:D14', '27536525');
	}
}
function loadTimeMage() {
	if (!document.getElementById('timeMageContent')) {
		document.getElementById("content").innerHTML = "<div id='timeMageContent'><h3>Time Mage</h3><div id='timeMageData'></div><br><div id='timeMageBattleSkills'></div><br><div id='timeMageOtherSkills'></div></div>";
		
		loadGoogleDriveTable('timeMageData', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A38:M39', '1067242928');
		//loadGoogleDriveTable('timeMageBattleSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A1:O7', '849735220');
		//loadGoogleDriveTable('timeMageOtherSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A9:D14', '849735220');
	}
}
function loadGeomancer() {
	if (!document.getElementById('geomancerContent')) {
		document.getElementById("content").innerHTML = "<div id='geomancerContent'><h3>Geomancer</h3><div id='geomancerData'></div><br><div id='geomancerBattleSkills'></div><br><div id='geomancerOtherSkills'></div></div>";
		
		loadGoogleDriveTable('geomancerData', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A42:M43', '1067242928');
		//loadGoogleDriveTable('geomancerBattleSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A1:O7', '397057246');
		//loadGoogleDriveTable('geomancerOtherSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A9:D14', '397057246');
	}
}
function loadLancer() {
	if (!document.getElementById('lancerContent')) {
		document.getElementById("content").innerHTML = "<div id='lancerContent'><h3>Lancer</h3><div id='lancerData'></div><br><div id='lancerBattleSkills'></div><br><div id='lancerOtherSkills'></div></div>";
		
		loadGoogleDriveTable('lancerData', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A46:M47', '1067242928');
		//loadGoogleDriveTable('lancerBattleSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A1:O7', '1329184108');
		//loadGoogleDriveTable('lancerOtherSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A9:D14', '1329184108');
	}
}
function loadLich() {
	if (!document.getElementById('lichContent')) {
		document.getElementById("content").innerHTML = "<div id='lichContent'><h3>Lich</h3><div id='lichData'></div><br><div id='lichBattleSkills'></div><br><div id='lichOtherSkills'></div></div>";
		
		loadGoogleDriveTable('lichData', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A50:M51', '1067242928');
		//loadGoogleDriveTable('lichBattleSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A1:O7', '2112018993');
		//loadGoogleDriveTable('lichOtherSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A9:D14', '2112018993');
	}
}
function loadGunMage() {
	if (!document.getElementById('gunMageContent')) {
		document.getElementById("content").innerHTML = "<div id='gunMageContent'><h3>Gun Mage</h3><div id='gunMageData'></div><br><div id='gunMageBattleSkills'></div><br><div id='gunMageOtherSkills'></div></div>";
		
		loadGoogleDriveTable('gunMageData', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A54:M55', '1067242928');
		//loadGoogleDriveTable('gunMageBattleSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A1:O7', '443091292');
		//loadGoogleDriveTable('gunMageOtherSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A9:D14', '443091292');
	}
}
function loadSamurai() {
	if (!document.getElementById('samuraiContent')) {
		document.getElementById("content").innerHTML = "<div id='samuraiContent'><h3>Samurai</h3><div id='samuraiData'></div><br><div id='samuraiBattleSkills'></div><br><div id='samuraiOtherSkills'></div></div>";
		
		loadGoogleDriveTable('samuraiData', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A58:M59', '1067242928');
		//loadGoogleDriveTable('samuraiBattleSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A1:O7', '1138940421');
		//loadGoogleDriveTable('samuraiOtherSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A9:D14', '1138940421');
	}
}
function loadNinja() {
	if (!document.getElementById('ninjaContent')) {
		document.getElementById("content").innerHTML = "<div id='ninjaContent'><h3>ninja</h3><div id='ninjaData'></div><br><div id='ninjaBattleSkills'></div><br><div id='ninjaOtherSkills'></div></div>";
		
		loadGoogleDriveTable('ninjaData', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A62:M63', '1067242928');
		//loadGoogleDriveTable('ninjaBattleSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A1:O7', '296720882');
		//loadGoogleDriveTable('ninjaOtherSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A9:D14', '296720882');
	}
}
function loadSummoner() {
	if (!document.getElementById('summonerContent')) {
		document.getElementById("content").innerHTML = "<div id='summonerContent'><h3>Summoner</h3><div id='summonerData'></div><br><div id='summonerBattleSkills'></div><br><div id='summonerOtherSkills'></div></div>";
		
		loadGoogleDriveTable('summonerData', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A66:M67', '1067242928');
		//loadGoogleDriveTable('summonerBattleSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A1:O7', '1928150846');
		//loadGoogleDriveTable('summonerOtherSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A9:D14', '1928150846');
	}
}
function loadDuelist() {
	if (!document.getElementById('duelistContent')) {
		document.getElementById("content").innerHTML = "<div id='duelistContent'><h3>Duelist</h3><div id='duelistData'></div><br><div id='duelistBattleSkills'></div><br><div id='duelistOtherSkills'></div></div>";
		
		loadGoogleDriveTable('duelistData', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A70:M71', '1067242928');
		//loadGoogleDriveTable('duelistBattleSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A1:O7', '1270574969');
		//loadGoogleDriveTable('duelistOtherSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A9:D14', '1270574969');
	}
}
function loadPerormer() {
	if (!document.getElementById('performerContent')) {
		document.getElementById("content").innerHTML = "<div id='performerContent'><h3>Performer</h3><div id='performerData'></div><br><div id='performerBattleSkills'></div><br><div id='performerOtherSkills'></div></div>";
		
		loadGoogleDriveTable('performerData', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A74:M75', '1067242928');
		//loadGoogleDriveTable('performerBattleSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A1:O7', '786857142');
		//loadGoogleDriveTable('performerOtherSkills', '1UhDJ0G118_RKeToUh_JxCf0HzJg026a6CmCmQ8wMPJ0', 'A9:D14', '786857142');
	}
}