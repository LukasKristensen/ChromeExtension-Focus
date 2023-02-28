chrome.storage.sync.get(["customQuote"], function(items){
    document.getElementById("customQuote").innerHTML = items["customQuote"]
});

chrome.storage.sync.get(["customAuthor"], function(items){
    document.getElementById("customAuthor").innerHTML = items["customAuthor"]
});

chrome.storage.sync.get(["customImage"], function(items){
    document.getElementById("customImage").innerHTML = items["customImage"]
});



//SAVE DATA
document.getElementById("saveLocalData").onclick = function(){
	inputQuote = document.getElementById("customQuote").value
	inputAuthor = document.getElementById("customAuthor").value
	inputImage = document.getElementById("customImage").value

    chrome.storage.sync.set({"customQuote": inputQuote}, function(){
    	console.log("StorageSync Complete for customQuote:",inputQuote)
  	});
    chrome.storage.sync.set({"customAuthor": inputAuthor}, function(){
    	console.log("StorageSync Complete for customAuthor:",inputAuthor)
  	});
    chrome.storage.sync.set({"customImage": inputImage}, function(){
    	console.log("StorageSync Complete for customImage:",inputImage)
  	});

	document.getElementById("saveProgress").innerHTML= "Saved Data"
}


//UPDATE PROGRESS
document.getElementById("customQuote").onclick = function(){
	document.getElementById("saveProgress").innerHTML = "Unsaved Data"
}
document.getElementById("customAuthor").onclick = function(){
	document.getElementById("saveProgress").innerHTML = "Unsaved Data"
}
document.getElementById("customImage").onclick = function(){
	document.getElementById("saveProgress").innerHTML = "Unsaved Data"
}