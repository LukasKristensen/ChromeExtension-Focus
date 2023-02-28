setup()

function setup(){
    chrome.storage.sync.get(["reps"], function(items){
      	chrome.storage.sync.set({"reps": items["reps"]+=1}, function(){
            console.log("Reps updated to:",items["reps"])
        })
        document.getElementById("total_blocked").innerHTML = "Total distractions blocked: "+items["reps"]

        document.getElementById("totalReps").innerHTML = "Total reps taken in session: "+items["reps"]*20
    })
}