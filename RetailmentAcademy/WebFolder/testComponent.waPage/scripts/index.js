
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		alert('Начали!');
		$$('mainComponent').loadComponent({
			userData: { sezonZakazov: 'Лето 2015' },
			onSuccess: function onComponentSuccessfullyLoaded () {
							alert("Загрузка успешно завершена!");
						}
		});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
