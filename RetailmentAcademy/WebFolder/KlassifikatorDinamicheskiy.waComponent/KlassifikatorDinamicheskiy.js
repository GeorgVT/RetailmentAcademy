
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'KlassifikatorDinamicheskiy';
	// @endregion// @endlock

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var container5 = {};	// @container
	var container2 = {};	// @container
	// @endregion// @endlock

	// eventHandlers// @lock

	container5.click = function container5_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('gridMagaziny')).redraw();
	};// @lock

	container2.click = function container2_click (event)// @startlock
	{// @endlock
		$$(getHtmlId('gridTradeMarks')).redraw();
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_container5", "click", container5.click, "WAF");
	WAF.addListener(this.id + "_container2", "click", container2.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
