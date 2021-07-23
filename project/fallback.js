
chrome.storage.sync.get(["focusState"], function(items){
    document.getElementById("switch").checked = items["focusState"]
});

document.getElementById("switch").onclick = function(){

	chrome.storage.sync.set({"focusState": document.getElementById("switch").checked}, function(){
		console.log("Updated focus state",document.getElementById("switch").checked)
	})

	if (document.getElementById("switch").checked == true){
		currentDate = new Date()
		chrome.storage.sync.set({"focusedSince": currentDate.toString()}, function(){
			console.log("Updated latest focus date",currentDate)
		})

		chrome.storage.sync.get(["focusedSince"], function(items){
			console.log("itemsDebug",items["focusedSince"])

	})
	}
	else{
		document.getElementById("streak_focus").innerHTML = ""
	}
	countFocus()

}

countFocus()

function countFocus(){
	var whileTrue = setInterval(function() {
		chrome.storage.sync.get(["focusState"], function(items){
		    if(items["focusState"]==true || items["focusState"]=="True"){
				chrome.storage.sync.get(["focusedSince"], function(items){
					var now = new Date();
					var pastDate = new Date(items["focusedSince"]);

					distance = now - pastDate

					// Math from: https://www.w3schools.com/howto/howto_js_countdown.asp
					var days = Math.floor(distance / (1000 * 60 * 60 * 24));
					var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
					var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
					var seconds = Math.floor((distance % (1000 * 60)) / 1000);

					if (days == 1){
						document.getElementById("streak_focus").innerHTML = "Focus streak "+days+" Day "//+hours+" Hours "+minutes+" Minutes "+seconds+" Seconds"
					}
					if (days > 1){
						document.getElementById("streak_focus").innerHTML = "Focus streak "+days+" Days "//+hours+" Hours "+minutes+" Minutes "+seconds+" Seconds"
					}
					if (days == 0 && hours == 1){
						document.getElementById("streak_focus").innerHTML = "Focus streak "+hours+" Hour "//+minutes+" Minutes "+seconds+" Seconds"
					}
					if (days == 0 && hours > 1){
						document.getElementById("streak_focus").innerHTML = "Focus streak "+hours+" Hours "//+minutes+" Minutes "+seconds+" Seconds"
					}
					if (days == 0 && hours == 0 && minutes == 1){
						document.getElementById("streak_focus").innerHTML = "Focus streak "+minutes+" Minute "//+seconds+" Seconds"
					}
					if (days == 0 && hours == 0 && minutes > 1){
						document.getElementById("streak_focus").innerHTML = "Focus streak "+minutes+" Minutes "//+seconds+" Seconds"
					}
					if (days == 0 && hours == 0 && minutes == 0 && seconds == 1){
						document.getElementById("streak_focus").innerHTML = "Focus streak "+seconds+" Second"
					}
					if (days == 0 && hours == 0 && minutes == 0 && seconds > 1){
						document.getElementById("streak_focus").innerHTML = "Focus streak "+seconds+" Seconds"
					}
				});
			}})
	}, 1000);
}

