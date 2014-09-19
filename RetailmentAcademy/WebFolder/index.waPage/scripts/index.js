var cUser = {}; 
var cUserGroups = {};

WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuItemValuty = {};	// @menuItem
	var menuItemStaticheskiyKlassifikator = {};	// @menuItem
	var menuItemRaspredelenieBudgeta = {};	// @menuItem
	var menuItemPlanFact = {};	// @menuItem
	var menuItemZakazy = {};	// @menuItem
	var menuItemBudgety = {};	// @menuItem
	var menuRoliVSysteme = {};	// @menuItem
	var menuKlassifikatory = {};	// @menuItem
	var menuOtchety = {};	// @menuItem
	var menuBudgetyIZakazy = {};	// @menuItem
	var mainMenuBar = {};	// @menuBar
	var documentEvent = {};	// @document
	var loginBar = {};	// @login
// @endregion// @endlock

// eventHandlers// @lock

	menuItemValuty.click = function menuItemValuty_click (event)// @startlock
	{// @endlock
		return $$('mainMenuBar').processEvents(event);
	};// @lock

	menuItemStaticheskiyKlassifikator.click = function menuItemStaticheskiyKlassifikator_click (event)// @startlock
	{// @endlock
		return $$('mainMenuBar').processEvents(event);
	};// @lock

	menuItemRaspredelenieBudgeta.click = function menuItemRaspredelenieBudgeta_click (event)// @startlock
	{// @endlock
		return $$('mainMenuBar').processEvents(event);
	};// @lock

	menuItemPlanFact.click = function menuItemPlanFact_click (event)// @startlock
	{// @endlock
		return $$('mainMenuBar').processEvents(event);
	};// @lock

	menuItemZakazy.click = function menuItemZakazy_click (event)// @startlock
	{// @endlock
		return $$('mainMenuBar').processEvents(event);
	};// @lock

	menuItemBudgety.click = function menuItemBudgety_click (event)// @startlock
	{// @endlock
		return $$('mainMenuBar').processEvents(event);
	};// @lock

	menuRoliVSysteme.click = function menuRoliVSysteme_click (event)// @startlock
	{// @endlock
		return $$('mainMenuBar').processEvents(event);
	};// @lock

	menuKlassifikatory.click = function menuKlassifikatory_click (event)// @startlock
	{// @endlock
		return $$('mainMenuBar').processEvents(event);
	};// @lock

	menuOtchety.click = function menuOtchety_click (event)// @startlock
	{// @endlock
		return $$('mainMenuBar').processEvents(event);
	};// @lock

	menuBudgetyIZakazy.click = function menuBudgetyIZakazy_click (event)// @startlock
	{// @endlock
		return $$('mainMenuBar').processEvents(event);
	};// @lock

	mainMenuBar.click = function mainMenuBar_click (event)// @startlock
	{// @endlock
		return $$('mainMenuBar').processEvents(event);
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		$$('loginBar').onLoggedStatusChanged();
	};// @lock

	loginBar.logout = function loginBar_logout (event)// @startlock
	{// @endlock
		$$('loginBar').onLoggedStatusChanged();
		
		return false;
	};// @lock

	loginBar.login = function loginBar_login (event)// @startlock
	{// @endlock
		//Let's reload current page
		if (WAF.directory.currentUser() != null) {
			var strTemp = window.location;
			window.location = strTemp;
		}
	};// @lock

// @region customLoginWidgetFunctions

	WAF.widget.Login.prototype.onLoggedStatusChanged = function() {
		if(this.id == 'loginBar') {
			cUser = WAF.directory.currentUser();
			
			if (cUser != null) {
				//??Update user rights list based on group membership

				//Let's process logged in status change
				$$('mainMenuBar').onLoggedStatusChanged(cUser != null);
			} else {
				$$('mainMenuBar').onLoggedStatusChanged(cUser != null);
				$$('mainMenuBar').destroy();
				
				this.showLoginDialog();
			}
		}
	};

// @endregion

// @region customMenuBarWidgetFunctions

	WAF.widget.MenuBar.prototype.onLoggedStatusChanged = function(isLoggedIn) {
		if(this.id == 'mainMenuBar') {
			if (! isLoggedIn) {
				$$('mainContainer').onLoggedStatusChanged(cUser != null);
				$$('mainContainer').destroy();
			} else {
				//??Initialize main menu items visibility based on user's groups
			}
		}
	};

	WAF.widget.MenuBar.prototype.processEvents = function(event) {
		
		if(this.id == 'mainMenuBar') {
			
			//!!
			alert("Event.type: " + event.type 
								+ "\nTarget: "+event.currentTarget.id 
								+ " (of kind: " + $$(event.currentTarget.id).kind + ")");
			//if(event.Type == "click") alert("Target: "+event.target.id);
			
			return false;
		}
	};

// @endregion

// @region customContainerWidgetFunctions

	WAF.widget.Container.prototype.onLoggedStatusChanged = function(isLoggedIn) {
		if(this.id == 'mainContainer') {
			if (isLoggedIn) {
				//??Initialize tabs visibility based on main menu items availability
			}
		}
	};

// @endregion

// @region eventManager// @startlock
	WAF.addListener("menuItemValuty", "click", menuItemValuty.click, "WAF");
	WAF.addListener("menuItemStaticheskiyKlassifikator", "click", menuItemStaticheskiyKlassifikator.click, "WAF");
	WAF.addListener("menuItemRaspredelenieBudgeta", "click", menuItemRaspredelenieBudgeta.click, "WAF");
	WAF.addListener("menuItemPlanFact", "click", menuItemPlanFact.click, "WAF");
	WAF.addListener("menuItemZakazy", "click", menuItemZakazy.click, "WAF");
	WAF.addListener("menuItemBudgety", "click", menuItemBudgety.click, "WAF");
	WAF.addListener("menuRoliVSysteme", "click", menuRoliVSysteme.click, "WAF");
	WAF.addListener("menuKlassifikatory", "click", menuKlassifikatory.click, "WAF");
	WAF.addListener("menuOtchety", "click", menuOtchety.click, "WAF");
	WAF.addListener("menuBudgetyIZakazy", "click", menuBudgetyIZakazy.click, "WAF");
	WAF.addListener("mainMenuBar", "click", mainMenuBar.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("loginBar", "logout", loginBar.logout, "WAF");
	WAF.addListener("loginBar", "login", loginBar.login, "WAF");
// @endregion
};// @endlock
