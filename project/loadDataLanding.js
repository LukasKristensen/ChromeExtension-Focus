// LOAD USER CUSTOM DATA
chrome.storage.sync.get(["customQuote"], function(items){
	document.getElementById("poem").innerHTML = items["customQuote"]
})
chrome.storage.sync.get(["customAuthor"], function(items){
	document.getElementById("poem_quote").innerHTML = items["customAuthor"]
})
chrome.storage.sync.get(["customImage"], function(items){
	document.body.style.backgroundImage = "url("+items["customImage"]+")";
	document.body.style.backgroundRepeat = "no-repeat";
	document.body.style.backgroundSize = "cover";
})