chrome.runtime.onInstalled.addListener((reason) => {
  chrome.tabs.create({
      url: 'landing/focus.html'
    });
});

console.log("background.js running")

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  console.log("New tab open")
  chrome.storage.sync.get(["focusState"], function(items){
    console.log("Analyzing")
    console.log("focusState:",items)
    if (items["focusState"] == true || items["focusState"] == "True"){
      urlSplitSlash = tab.url.split("//");
      splitLast = urlSplitSlash[1].split("/");


      list_data = chrome.storage.sync.get(["userData"], function(items){
        list_data_split = items["userData"].split("\n")

        for (let i = 0; i < 100; ++i){
          console.log("COMPARING:",splitLast[0],list_data_split[i]);
          
          if(splitLast[0]==list_data_split[i]){
            chrome.tabs.update({url: "getFocused.html"});
          }
          else if(splitLast[0]==("www."+list_data_split[i])){
            chrome.tabs.update({url: "getFocused.html"});
          }
          else if(splitLast.length > 1){
            console.log("FullComparing",urlSplitSlash[1],list_data_split[i])
          }
        }
      })
    }
  });
});
