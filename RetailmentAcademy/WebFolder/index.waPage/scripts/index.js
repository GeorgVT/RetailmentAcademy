var cUser = {}; 
var cUserGroups = {};
var strStaticTitle = "";

WAF.onAfterInit = function onAfterInit() {// @lock

// @region customNamespaceDeclaration
	var mainTabView = {};	// @TabView
// @endregion

// @region namespaceDeclaration// @startlock
	var sezonEvent = {};	// @dataSource
	var menuItemDinamicheskiyKlassifikator = {};	// @menuItem
	var tabItemDinamicheskiyKlassifikator = {};	// @menuItem
	var tabItemStaticheskiyKlassifikator = {};	// @menuItem
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

	strStaticTitle = ": " + document.title;

// eventHandlers// @lock

	sezonEvent.onCurrentElementChange = function sezonEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		var objCurrentSezon = this.getCurrentElement();
		if (objCurrentSezon !== null) {
			if (! objCurrentSezon.isNew()) 
					document.title = "" + objCurrentSezon.Name.value + strStaticTitle;
			console.log(objCurrentSezon);
		}
	};// @lock

	menuItemDinamicheskiyKlassifikator.click = function menuItemDinamicheskiyKlassifikator_click (event)// @startlock
	{// @endlock
		return $$('mainMenuBar').processEvents(event);
	};// @lock

	tabItemDinamicheskiyKlassifikator.click = function tabItemDinamicheskiyKlassifikator_click (event)// @startlock
	{// @endlock
		$$('mainTabView').onTabChanged(
										$$('tabMenuBar').stripChildIDsPrefixes( this.id )
									);
	};// @lock

	tabItemStaticheskiyKlassifikator.click = function tabItemStaticheskiyKlassifikator_click (event)// @startlock
	{// @endlock
		$$('mainTabView').onTabChanged(
										$$('tabMenuBar').stripChildIDsPrefixes( this.id )
									);
	};// @lock

	tabItemValuty.click = function tabItemValuty_click (event)// @startlock
	{// @endlock
		$$('mainTabView').onTabChanged(
										$$('tabMenuBar').stripChildIDsPrefixes( this.id )
									);
	};// @lock

	tabItemRoliVSysteme.click = function tabItemRoliVSysteme_click (event)// @startlock
	{// @endlock
		$$('mainTabView').onTabChanged(
										$$('tabMenuBar').stripChildIDsPrefixes( this.id )
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

		var arrChildren;
		if (typeof strLevelID === 'undefined') arrChildren = this.getChildren();
		else arrChildren = $$(""+strLevelID).getChildren();

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
	};
	
	WAF.widget.MenuBar.prototype.isItemFinite = function MenuBar_isItemFinite (strItemID) {
		return (this.getChildrenIDs(strItemID).length === 0);
	};

	WAF.widget.MenuBar.prototype.getSiblingFiniteItemIDs = function MenuBar_getSiblingFiniteItemIDs(strItemId) {
		var arrFiniteSiblings = [];
		var arrSiblings;
		var strKind='';
		
		if (typeof strItemId === 'undefined' ) 
			arrSiblings = this.getChildrenIDs();
		else if ( this.isItemFinite(""+strItemId) ) {
			arrSiblings = this.getChildrenIDs(	$$(""+strItemId).getParent().id	) ;
			strKind = $$(""+strItemId).kind;
		} else {
			arrSiblings = this.getChildrenIDs(	(this.getChildrenIDs(""+strItemId))[0]	) ;
			strKind = "";
		}

		for (var i = 0; i < arrSiblings.length; i++) 
			if (this.isItemFinite(arrSiblings[i]))
				if ((strKind === '') || (strKind === $$("" + arrSiblings[i]).kind)) 
					arrFiniteSiblings.push( arrSiblings[i] );

		return arrFiniteSiblings;
	};

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
	};

	$$('mainMenuBar').visibilityControl = function mainMenuBar_visibilityControl() {
		//??Initialize main menu items visibility on current user rights
		
		var arrNewTabsList = this.stripChildIDsPrefixes( this.getSiblingFiniteItemIDs() );
		
		if (arrNewTabsList.length > 0) {
			$$('mainContainer').visibilityControl(arrNewTabsList);
			$$('mainTabView').selectTab( $$('mainTabView').siblingFiniteItemsIDs[ arrNewTabsList[0] ] );
			$$('mainTabView').onTabChanged( arrNewTabsList[0] );
		}
	};

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
		var arrNewTabsList = this.stripChildIDsPrefixes(this.getSiblingFiniteItemIDs( event.currentTarget.id ));
		
		if (arrNewTabsList.length > 0) {
			$$('mainContainer').visibilityControl(arrNewTabsList);
			$$('mainTabView').selectTab( 
						typeof ( $$('mainTabView').siblingFiniteItemsIDs[ 
												this.stripChildIDsPrefixes( event.currentTarget.id ) 
												] 
								) 
								!== 'undefined'
						? $$('mainTabView').siblingFiniteItemsIDs[ this.stripChildIDsPrefixes( event.currentTarget.id ) ]
						: $$('mainTabView').siblingFiniteItemsIDs[ arrNewTabsList[0] ]
					);
			$$('mainTabView').onTabChanged( this.stripChildIDsPrefixes( event.currentTarget.id ) );
		}
				
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
		$$('mainTabView').visibilityControl(newSiblingFiniteItemsIDs);

		return;
	};
// @endregion

// @region customTabViewWidgetFunctions
	$$('mainTabView').visibilityControl = function mainTabView_visibilityControl(newSiblingFiniteItemsIDs) {
		var intCurrentTabPosition;
		var strTabID, i, blFound;
		
		//Let's hide unnnecesaary items
		for (strTabID in this.siblingFiniteItemsIDs) {
			blFound = false;
			
			for (i = 0; i < newSiblingFiniteItemsIDs.length; i++)
				if (strTabID == newSiblingFiniteItemsIDs[i]) {
					blFound = true;
					break;
				}
			
			if (! blFound) {
				$$('tabItem' + strTabID).hide("visibility");
				$$('tabContainer' + strTabID).hide("visibility");
				delete this.siblingFiniteItemsIDs[strTabID];
			}
		}
		
		//Let's show required items (was hided previously)
		for (i = 0; i < newSiblingFiniteItemsIDs.length; i++)
			if (typeof this.siblingFiniteItemsIDs[ newSiblingFiniteItemsIDs[i] ] === 'undefined') {
				
				$$('tabItem' + newSiblingFiniteItemsIDs[i]).show();
				$$('tabContainer' + newSiblingFiniteItemsIDs[i]).show();				
				
				this.siblingFiniteItemsIDs[ newSiblingFiniteItemsIDs[i] ] = 0;
			}
		
		//Let's update visible tabs numbers in siblingFiniteItemsIDs
		var arrFullTabsList = $$('tabMenuBar').stripChildIDsPrefixes( $$('tabMenuBar').getSiblingFiniteItemIDs() );
		for (i = 0; i < arrFullTabsList.length; i++)
			if (typeof this.siblingFiniteItemsIDs[ arrFullTabsList[i] ] !== 'undefined')
				this.siblingFiniteItemsIDs[ arrFullTabsList[i] ] = i + 1;
		
	};

	$$('mainTabView').onTabChanged = function mainTabView_onTabChanged (strSelectedTabId) {
		this.strCurrentTabId = "" + strSelectedTabId;
		
		//Let's load selected WebComponent for the first time since page load
		if (typeof (this.timeTabLoaded[strSelectedTabId]) === 'undefined') {

			$$('tabComponent' + strSelectedTabId).loadComponent({
			//!!WAF.loadComponent( {
			//!!			id: 'tabComponent' + strSelectedTabId,
						//?? userData: { strSelectedTabId: "" + strSelectedTabId },
						onSuccess: function mainTabView_onComponentLoaded() {
										var dateD = new Date();
										$$('mainTabView').timeTabLoaded[strSelectedTabId] = dateD.getTime();
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
	WAF.addListener("sezon", "onCurrentElementChange", sezonEvent.onCurrentElementChange, "WAF");
	WAF.addListener("menuItemDinamicheskiyKlassifikator", "click", menuItemDinamicheskiyKlassifikator.click, "WAF");
	WAF.addListener("tabItemDinamicheskiyKlassifikator", "click", tabItemDinamicheskiyKlassifikator.click, "WAF");
	WAF.addListener("tabItemStaticheskiyKlassifikator", "click", tabItemStaticheskiyKlassifikator.click, "WAF");
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
