countFocus()

function countFocus(){
	prev_set = ""

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

					current_set = ""

					if (days == 1){
						current_set = "Current focus streak "+days+" Day "//+hours+" Hours "+minutes+" Minutes "+seconds+" Seconds"
					}
					else if (days > 1){
						current_set = "Current focus streak "+days+" Days "//+hours+" Hours "+minutes+" Minutes "+seconds+" Seconds"
					}
					else if (days == 0 && hours == 1){
						current_set = "Current focus streak "+hours+" Hour "//+minutes+" Minutes "+seconds+" Seconds"
					}
					else if (days == 0 && hours > 1){
						current_set = "Current focus streak "+hours+" Hours "//+minutes+" Minutes "+seconds+" Seconds"
					}
					else if (days == 0 && hours == 0 && minutes == 1){
						current_set = "Current focus streak "+minutes+" Minute "//+seconds+" Seconds"
					}
					else if (days == 0 && hours == 0 && minutes > 1){
						current_set = "Current focus streak "+minutes+" Minutes "//+seconds+" Seconds"
					}
					else if (days == 0 && hours == 0 && minutes == 0 && seconds == 1){
						current_set = "Current focus streak "+seconds+" Second"
					}
					else if (days == 0 && hours == 0 && minutes == 0 && seconds > 1){
						current_set = "Current focus streak "+seconds+" Seconds"
					}

					if (current_set != prev_set){
						prev_set = current_set
						document.getElementById("streak_focus").innerHTML = current_set
					}
				});
			}})
	}, 1000);
}

