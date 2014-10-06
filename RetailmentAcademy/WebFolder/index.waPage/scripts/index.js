var cUser = {}; 
var cUserGroups = {};

WAF.onAfterInit = function onAfterInit() {// @lock

// @region customNamespaceDeclaration
	var mainTabView = {};	// @TabView
// @endregion

// @region namespaceDeclaration// @startlock
	var strCurrentTabIdEvent = {};	// @dataSource
	var tabItemValuty = {};	// @menuItem
	var tabItemRoliVSysteme = {};	// @menuItem
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

	strCurrentTabIdEvent.onAttributeChange = function strCurrentTabIdEvent_onAttributeChange (event)// @startlock
	{// @endlock
		$$('mainTabView').onTabChanged("" + strCurrentTabId);	//Let's prevent passing by reference
	};// @lock

	tabItemValuty.click = function tabItemValuty_click (event)// @startlock
	{// @endlock
		strCurrentTabId = this.id.substr( $$('mainTabView').strTabItemPrefix.length	);
		sources.strCurrentTabId.sync();
	};// @lock

	tabItemRoliVSysteme.click = function tabItemRoliVSysteme_click (event)// @startlock
	{// @endlock
		strCurrentTabId = this.id.substr( $$('mainTabView').strTabItemPrefix.length	);
		sources.strCurrentTabId.sync();
	};// @lock

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

	$$('loginBar').onLoggedStatusChanged = function loginBar_onLoggedStatusChanged() {
	
			cUser = WAF.directory.currentUser();
			
			if (cUser != null) {
				//??Update user rights list based on group membership

				//Let's process logged in status change
				$$('mainMenuBar').onLoggedStatusChanged(cUser != null);
			} else {
				$$('mainMenuBar').onLoggedStatusChanged(false);
				$$('mainMenuBar').destroy();
				
				this.showLoginDialog();
			}
	};

// @endregion

// @region customMenuBarWidgetFunctions

	$$('mainMenuBar').visibilityControl = function mainMenuBar_visibilityControl() {
		//??Initialize main menu items visibility on current user rights
		
		var siblingTerminalItemsIDs = {};
		$$('mainContainer').visibilityControl(siblingTerminalItemsIDs);
	}

	$$('mainMenuBar').onLoggedStatusChanged = function mainMenuBar_onLoggedStatusChanged(isLoggedIn) {
		if (! isLoggedIn) {
			$$('mainContainer').onLoggedStatusChanged(false);
			$$('mainContainer').destroy();
		} else {
			//Let's initialize main menu items visibility based on user's groups
			this.visibilityControl();
		}
	};

	$$('mainMenuBar').processEvents = function mainMenuBar_processEvents(event) {
		
		//!!
		alert("Event.type: " + event.type 
							+ "\nTarget: "+event.currentTarget.id 
							+ " (of kind: " + $$(event.currentTarget.id).kind + ")");
		//if(event.Type == "click") alert("Target: "+event.target.id);
		
		return false;
	};

// @endregion

// @region customContainerWidgetFunctions

	$$('mainContainer').onLoggedStatusChanged = function mainContainer_onLoggedStatusChanged(isLoggedIn) {
		if (! isLoggedIn) {
			//?? Do something for correct session close
		}
	};

	$$('mainContainer').visibilityControl = function mainContainer_visibilityControl(siblingTerminalItemsIDs) {
		//!!$$('tabItemRoliVSysteme').show();
		
		if (0 < $$('mainTabView').countTabs()) {
			$$('mainTabView').selectTab(2);
			
			strCurrentTabId = ($$('mainTabView').getSelectedTab()).menuItem.id.substr(
																				$$('mainTabView').strTabItemPrefix.length
																				);
			alert("Name: " + strCurrentTabId);
			
			sources.strCurrentTabId.sync();
//			$$('mainTabView').onTabChanged(
//							($$('mainTabView').getSelectedTab()).menuItem.id.substr(
//																				$$('mainTabView').strTabItemPrefix.length
//																				)
//						);
		}
	}
// @endregion

// @region customTabViewWidgetFunctions
	$$('mainTabView').onTabChanged = function mainTabView_onTabChanged (strSelectedTabId) {
//		alert("Selected="+strSelectedTabId);
		
		if (typeof (this.timeTabLoaded[strSelectedTabId]) === 'undefined') {
			//!!$$('tabContainer' + strSelectedTabId).show();
			
			$$('tabComponent' + strSelectedTabId).loadComponent({
				//?? userData: { strSelectedTabId: "" + strSelectedTabId },
				onSuccess: function () {
								var dateD = new Date();
								$$('mainTabView').timeTabLoaded[strSelectedTabId] = dateD.getTime();
					
								//!!$$('tabContainer' + strSelectedTabId).show();
								
//								alert("Id = "+$$('mainTabView').getSelectedTab().container.id);
								$$('mainTabView').getSelectedTab().container.show();
							}
			});
		}
	};
// @endregion

// @region customTabViewWidgetProperties
	$$('mainTabView').timeTabLoaded =  {};
	$$('mainTabView').strTabItemPrefix = "tabItem";

// @endregion

// @region eventManager// @startlock
	WAF.addListener("strCurrentTabId", "onAttributeChange", strCurrentTabIdEvent.onAttributeChange, "WAF");
	WAF.addListener("tabItemValuty", "click", tabItemValuty.click, "WAF");
	WAF.addListener("tabItemRoliVSysteme", "click", tabItemRoliVSysteme.click, "WAF");
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
