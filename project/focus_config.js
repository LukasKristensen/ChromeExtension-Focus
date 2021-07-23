chrome.storage.sync.get(["userData"], function(items){
    document.getElementById("notebookInput").innerHTML = items["userData"]
    localStorage["testAttemptSave"] = "testSaveData"
});


//SAVE DATA
document.getElementById("saveLocalData").onclick = function(){
	userInput = document.getElementById("notebookInput").value

    chrome.storage.sync.set({ "userData": userInput }, function(){
    	console.log("StorageSync Complete")
  	});

	document.getElementById("saveProgress").innerHTML= "Saved Data"

	chrome.storage.sync.set({"focusState": "True"}, function(){
		console.log("test")
	})


	chrome.storage.sync.get(["userData"], function(items){
		console.log("savedData:",items)})	
}


//UPDATE PROGRESS
document.getElementById("notebookInput").onclick = function(){
	document.getElementById("saveProgress").innerHTML = "Unsaved Data"
}
