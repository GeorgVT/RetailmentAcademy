
var cUser = {}; 
var cUserGroups = {};

WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var loginBar = {};	// @login
	var documentEvent = {};	// @document
// @endregion// @endlock


// @region customWidgetFunctions
//	WAF.widget.Container.prototype.onLoggedStatusChanged = function(isLoggedIn) {
//		if(this.id == 'testContainer') {
//			if (! isLoggedIn) this.destroy();
////			else this.rebuild();
//		}
//	};

//	WAF.widget.login.prototype.updateCurrentUser = function() {
////		alert("Hi " + cUser + "!");
//		cUser = WAF.directory.currentUser();
//		
//	}
// @endregion

	cUser = WAF.directory.currentUser();

// @region customEventHandlers
	$(document).off(".doc");
	
	$(document).bind("evLoginStatusChanged.doc", function (evt) {

		if(! (evt.isLoggedIn)) {
			//Let's destroy main widgets on our page
			$$('testContainer').destroy();
			$$('mainMenuBar').destroy();
			$$('loginBar').showLoginDialog();
		}
	});
// @endregion


// eventHandlers// @lock

	loginBar.logout = function loginBar_logout (event)// @startlock
	{// @endlock
		cUser = WAF.directory.currentUser();
//		this.updateCurrentUser();

//		$$('testContainer').onLoggedStatusChanged(cUser != null);
//		if(cUser == null) this.showLoginDialog();
		$(document).trigger({
			type:"evLoginStatusChanged.doc",
			isLoggedIn: (cUser != null)
		});

	};// @lock

	loginBar.login = function loginBar_login (event)// @startlock
	{// @endlock
		cUser = WAF.directory.currentUser();
//		this.updateCurrentUser();

		//Let's process logged in status change
		//$$('testContainer').onLoggedStatusChanged(cUser != null);
		$(document).trigger({
			type:"evLoginStatusChanged.doc",
			isLoggedIn: (cUser != null)
		});

		if(cUser != null) {
			//Let's reload current page
			var strTemp = window.location;
			window.location = strTemp;
		}

	};// @lock


	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		cUser = WAF.directory.currentUser();
		
//		alert("Loaded!");
		
//		$$('loginBar').updateCurrentUser();
				
//		$$('testContainer').onLoggedStatusChanged(cUser != null);
		$(document).trigger({
			type:"evLoginStatusChanged.doc",
			isLoggedIn: (cUser != null)
		});

		if(cUser == null) {
			$$('loginBar').showLoginDialog();
		}
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("loginBar", "logout", loginBar.logout, "WAF");
	WAF.addListener("loginBar", "login", loginBar.login, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
