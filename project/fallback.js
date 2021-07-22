
chrome.storage.sync.get(["focusState"], function(items){
	console.log("DATA_FocusState",items)
    document.getElementById("switch").checked = items["focusState"]
});

document.getElementById("switch").onclick = function(){
	console.log("switchState:",document.getElementById("switch").checked)

	chrome.storage.sync.set({"focusState": document.getElementById("switch").checked}, function(){
		console.log("test")
	})

	chrome.storage.sync.get(["focusState"], function(items){
	console.log("securing_DATA_FocusState",items)});
}