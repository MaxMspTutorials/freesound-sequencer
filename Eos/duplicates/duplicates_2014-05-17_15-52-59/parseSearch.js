
function bang() {
	
	var searchDict = new Dict();
	searchDict.clone("search");
	post(searchDict.toSource());
	keys = searchDict.getkeys();
	for (key in keys) {
		
		post();
		post(key + " - " + keys[key]);
		if (keys[key] == 'body') {
			post();
			post("Getting Body");
			post (searchDict.get('body'));
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