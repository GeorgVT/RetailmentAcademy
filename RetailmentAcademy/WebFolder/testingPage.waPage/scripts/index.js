
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var mainAccordion = {};	// @accordion
// @endregion// @endlock

// eventHandlers// @lock

	mainAccordion.click = function mainAccordion_click (event)// @startlock
	{// @endlock
		$$('dataGrid3').redraw();
		console.log("Click! our tag is:", $$('dataGrid3'));
		console.info(" and has ", $$('container3'));
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("mainAccordion", "click", mainAccordion.click, "WAF");
// @endregion
};// @endlock
