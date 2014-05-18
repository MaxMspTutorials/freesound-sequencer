
function bang() {
	
	var searchDict = new Dict();
	searchDict.clone("search");
	post(searchDict.toString());
	keys = searchDict.getkeys();
	for (key in keys) {
		
		post();
		post(key + " - " + keys[key]);
	}
	var body  = searchDict.get("body");
	post();
	post(body.toSource());
	/*keys = body.getkeys();
	for (key in keys) {
		
		post();
		post(key + " - " + keys[key]);
	}
	*/
	
}