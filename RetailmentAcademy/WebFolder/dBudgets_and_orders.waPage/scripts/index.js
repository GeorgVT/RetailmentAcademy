
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var loginBar = {};	// @login
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	loginBar.logout = function loginBar_logout (event)// @startlock
	{// @endlock
		vUser = WAF.directory.currentUser();
		if(vUser == null) {
			$$('testContainer').setBackgroundColor("red");
			this.showLoginDialog();
		}

	};// @lock

	loginBar.login = function loginBar_login (event)// @startlock
	{// @endlock
		vUser = WAF.directory.currentUser();
		if(vUser != null) {
			$$('testContainer').setBackgroundColor("blue")
		}

	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		vUser = WAF.directory.currentUser();
		if(vUser == null) {
			$$('testContainer').setBackgroundColor("red")
			$$('loginBar').showLoginDialog();
		} else {
			$$('testContainer').setBackgroundColor("blue")
		}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("loginBar", "logout", loginBar.logout, "WAF");
	WAF.addListener("loginBar", "login", loginBar.login, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
