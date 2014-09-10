
var cUser, 
	cUserGroups = {};

WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var loginBar = {};	// @login
	var documentEvent = {};	// @document
// @endregion// @endlock

	cUser = WAF.directory.currentUser();

// eventHandlers// @lock

	loginBar.logout = function loginBar_logout (event)// @startlock
	{// @endlock
		cUser = WAF.directory.currentUser();
		$$('testContainer').displayLoggedinStatus(cUser != null);
		if(cUser == null) this.showLoginDialog();

	};// @lock

	loginBar.login = function loginBar_login (event)// @startlock
	{// @endlock
		cUser = WAF.directory.currentUser();
		$$('testContainer').displayLoggedinStatus(cUser != null);

	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		cUser = WAF.directory.currentUser();
		$$('testContainer').displayLoggedinStatus(cUser != null);
		if(cUser == null) $$('loginBar').showLoginDialog();
	};// @lock

// @region customWidgetFunctions
	WAF.widget.Container.prototype.displayLoggedinStatus = function(isLoggedIn) {
		if(this.id == 'testContainer') {
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
