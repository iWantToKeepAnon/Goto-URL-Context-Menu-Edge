
function onRequest(info, tab) {
	var selection = info.selectionText;
	//do something with the selection
	var serviceCall = selection;
	chrome.tabs.create({url: serviceCall});
};

chrome.contextMenus.create({
	id: "goto_url",
	title: "Goto URL",
	"contexts":["selection"],
	"onclick" : onRequest
});
