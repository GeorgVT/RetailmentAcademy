var cUser = {}; 
var cUserGroups = {};

WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
	var loginBar = {};	// @login
// @endregion// @endlock

// eventHandlers// @lock

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
//				$$('mainMenuBar').onLoggedStatusChanged(cUser != null);
//			} else {
//				$$('mainMenuBar').onLoggedStatusChanged(cUser != null);
//				$$('mainMenuBar').destroy();
				
				this.showLoginDialog();
			}
		}
	};

// @endregion


// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("loginBar", "logout", loginBar.logout, "WAF");
	WAF.addListener("loginBar", "login", loginBar.login, "WAF");
// @endregion
};// @endlock
