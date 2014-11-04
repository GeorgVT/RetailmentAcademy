
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'Budgety';
	// @endregion// @endlock

	var strStaticTitle = "";

	this.load = function (data) {// @lock

	// @region namespaceDeclaration// @startlock
	var fileUpload = {};	// @fileUpload
	var sezonEvent = {};	// @dataSource
	// @endregion// @endlock

	// eventHandlers// @lock

	fileUpload.filesUploaded = function fileUpload_filesUploaded (event)// @startlock
	{// @endlock
		//
	};// @lock

	sezonEvent.onCurrentElementChange = function sezonEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		var objCurrentSezon = this.getCurrentElement();
		if (objCurrentSezon !== null) {
			if (! objCurrentSezon.isNew())
					$$(getHtmlId('titleText')).setValue("" 
						+ strStaticTitle 
						+ '"' + objCurrentSezon.Name.value + '"');
		}
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_fileUpload", "filesUploaded", fileUpload.filesUploaded, "WAF");
	WAF.addListener("sezon", "onCurrentElementChange", sezonEvent.onCurrentElementChange, "WAF");
	// @endregion// @endlock
	
		strStaticTitle = "" + $$(getHtmlId('titleText')).getValue() + ": ";
		var objCurrentSezon = sources.sezon.getCurrentElement();
		if (objCurrentSezon !== null)
				$$(getHtmlId('titleText')).setValue("" 
					+ strStaticTitle 
					+ '"' + objCurrentSezon.Name.value + '"');
	};// @lock


}// @startlock
return constructor;
})();// @endlock
