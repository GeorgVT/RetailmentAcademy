

WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var loginBar = {};	// @login
	var documentEvent = {};	// @document
// @endregion// @endlock


// eventHandlers// @lock

	loginBar.logout = function loginBar_logout (event)// @startlock
	{// @endlock
		$$('testContainer').displayLoggedinStatus(WAF.directory.currentUser() != null);
		if(WAF.directory.currentUser() == null) this.showLoginDialog();

	};// @lock

	loginBar.login = function loginBar_login (event)// @startlock
	{// @endlock
		$$('testContainer').displayLoggedinStatus(WAF.directory.currentUser() != null);

	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		$$('testContainer').displayLoggedinStatus(WAF.directory.currentUser() != null);

	};// @lock

// @region customWidgetFunctions
	WAF.widget.Container.prototype.displayLoggedinStatus = function(isLoggedIn) {
		if(this.id == 'testContainer')
			if (isLoggedIn) this.setBackgroundColor("blue")
			else this.setBackgroundColor("red");
		}
	};
// @endregion

// @region eventManager// @startlock
	WAF.addListener("loginBar", "logout", loginBar.logout, "WAF");
	WAF.addListener("loginBar", "login", loginBar.login, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
