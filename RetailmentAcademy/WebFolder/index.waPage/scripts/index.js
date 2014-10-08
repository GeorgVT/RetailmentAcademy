var cUser = {}; 
var cUserGroups = {};

WAF.onAfterInit = function onAfterInit() {// @lock

// @region customNamespaceDeclaration
	var mainTabView = {};	// @TabView
// @endregion

// @region namespaceDeclaration// @startlock
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

	tabItemValuty.click = function tabItemValuty_click (event)// @startlock
	{// @endlock
		$$('mainTabView').onTabChanged(
										this.id.substr(	$$('mainTabView').strTabItemPrefix.length	)
									);
	};// @lock

	tabItemRoliVSysteme.click = function tabItemRoliVSysteme_click (event)// @startlock
	{// @endlock
		$$('mainTabView').onTabChanged(
										this.id.substr(	$$('mainTabView').strTabItemPrefix.length	)
									);

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

// @region customMenuBarWidgetFunctionsAndProperties

	WAF.widget.MenuBar.prototype.arrChildIDPrefixes = ['menuItem', 'menu'];
	
	WAF.widget.MenuBar.prototype.getChildrenIDs = function mainMenuBar_getChildrenIDs(strLevelID) {
		var arrChildrenIDs = [];

		var arrChildren = typeof strLevelID === 'undefined' ? this.getChildren() : $$(""+strLevelID).getChildren() ;

		for (var i = 0; i < arrChildren.length; i++) {
			var strChildID = arrChildren[i].id;
			
			for (var iID = 0; iID < this.arrChildIDPrefixes.length; iID++) {
				if(strChildID.substring(0, this.arrChildIDPrefixes[iID].length) === this.arrChildIDPrefixes[iID]) {
					arrChildrenIDs.push(strChildID);
					break;
				}
			}
		}
		return arrChildrenIDs;
	}
	
	WAF.widget.MenuBar.prototype.isItemFinite = function MenuBar_isItemFinite (strItemID) {
		return (this.getChildrenIDs(strItemID).length === 0);
	}

	WAF.widget.MenuBar.prototype.getSiblingFiniteItemIDs = function MenuBar_getSiblingFiniteItemIDs(strItemId) {
		var arrFiniteSiblings = [];
		var arrSiblings;
		var strKind='';
		
		if (typeof strItemId === 'undefined' ) 
			arrSiblings = this.getChildrenIDs();
		else {
			arrSiblings = this.getChildrenIDs(	$$(""+strItemId).getParent().id	) ;
			strKind = $$(""+strItemId).kind;
		}

		for (var i = 0; i < arrSiblings.length; i++) 
			if (this.isItemFinite(arrSiblings[i]))
				if ((strKind === '') || (strKind === $$("" + arrSiblings[i]).kind)) 
					arrFiniteSiblings.push( arrSiblings[i] );

		return arrFiniteSiblings;
	}

	WAF.widget.MenuBar.prototype.stripChildIDsPrefixes = function MenuBar_stripChildIDsPrefix(siblingID) {
		var strippedID = [];
		if (typeof siblingID === 'string') {
			for (var j = 0; j < this.arrChildIDPrefixes.length; j++) {

				if(siblingID.substring(0, this.arrChildIDPrefixes[j].length) === this.arrChildIDPrefixes[j]) 
						return siblingID.substring(this.arrChildIDPrefixes[j].length);
			}
			strippedID = "" + siblingID;
			
		}
		else for (var i = 0; i < siblingID.length; i++) strippedID.push(this.stripChildIDsPrefixes(siblingID[i]));
		
		return strippedID;
	}

	$$('mainMenuBar').visibilityControl = function mainMenuBar_visibilityControl() {
		//??Initialize main menu items visibility on current user rights
		
		$$('mainContainer').visibilityControl(	this.getSiblingFiniteItemIDs()	);
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
//		alert("Event.type: " + event.type 
//							+ "\nTarget: "+event.currentTarget.id 
//							+ " (of kind: " + $$(event.currentTarget.id).kind + ")");
		//if(event.Type == "click") alert("Target: "+event.target.id);

		//var siblingFiniteItemsIDs = this.getSiblingFiniteItems( event.currentTarget.id );
		console.info(this.stripChildIDsPrefixes(this.getSiblingFiniteItemIDs( event.currentTarget.id )));

		return false;
	};

// @endregion

// @region customContainerWidgetFunctions

	$$('mainContainer').onLoggedStatusChanged = function mainContainer_onLoggedStatusChanged(isLoggedIn) {
		if (! isLoggedIn) {
			//?? Do something for correct session close
		}
	};

	$$('mainContainer').visibilityControl = function mainContainer_visibilityControl(newSiblingFiniteItemsIDs) {
		var intCurrentTabPosition;
		
		alert("1");
		
		for (var i = 0; i < $$('mainTabView').siblingFiniteItemsIDs.length; i++) {
			$$('tabItem' + $$('mainTabView').siblingFiniteItemsIDs[i]).show();
			$$('tabContainer' + $$('mainTabView').siblingFiniteItemsIDs[i]).show();
			alert("2");
			
			if($$('mainTabView').siblingFiniteItemsIDs[i] === $$('mainTabView').strCurrentTabId) intCurrentTabPosition = i;
		}

		//If this is first invocation after page loaded or after mainMenu paragraph switching
		if(($$('mainTabView').strCurrentTabId === "") || (typeof intCurrentTabPosition === 'undefined')) {
			$$('mainTabView').selectTab(1);
			intCurrentTabPosition = 0;
		}
		
		$$('mainTabView').onTabChanged(
						($$('mainTabView').getSelectedTab()).menuItem.id.substr(
																			$$('mainTabView').strTabItemPrefix.length
																			)
				);
	}
// @endregion

// @region customTabViewWidgetFunctions
	$$('mainTabView').onTabChanged = function mainTabView_onTabChanged (strSelectedTabId) {

//		alert("Selected="+strSelectedTabId);
			
		this.strCurrentTabId = "" + strSelectedTabId;
		
//		alert("Selected="+strSelectedTabId);
		
		//Let's load selected WebComponent for the first time since page load
		if (typeof (this.timeTabLoaded[strSelectedTabId]) === 'undefined') {
//			$$('tabContainer' + this.strSelectedTabId).show();

			$$('tabComponent' + strSelectedTabId).loadComponent({
				//?? userData: { strSelectedTabId: "" + strSelectedTabId },
				onSuccess: function () {
								var dateD = new Date();
								$$('mainTabView').timeTabLoaded[strSelectedTabId] = dateD.getTime();
					
								//!!$$('tabContainer' + strSelectedTabId).show();
								
//								alert("Id = "+$$('mainTabView').getSelectedTab().container.id);
//								$$('mainTabView').getSelectedTab().container.show();
							}
			});
		}
	};
// @endregion

// @region customTabViewWidgetProperties
	$$('mainTabView').strCurrentTabId = "";
	$$('mainTabView').timeTabLoaded =  {};
	$$('mainTabView').siblingFiniteItemsIDs = {};
	$$('mainTabView').strTabItemPrefix = "tabItem";
	$$('tabMenuBar').arrChildIDPrefixes = ['tabItem'];

// @endregion

// @region eventManager// @startlock
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
