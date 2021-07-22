chrome.runtime.onInstalled.addListener((reason) => {
  chrome.tabs.create({
      url: 'savvy.html'
    });
});



chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  chrome.storage.sync.get(["focusState"], function(items){
    console.log("focusState:",items)
    if (items["focusState"] == true){
    urlSplitSlash = tab.url.split("//");
    splitLast = urlSplitSlash[1].split("/");


    list_data = chrome.storage.sync.get(["userData"], function(items){
      list_data_split = items["userData"].split("\n")

        for (let i = 0; i < 100; ++i){
          console.log("COMPARING:",splitLast[0],list_data_split[i]);
          
          if(splitLast[0]==list_data_split[i]){
            chrome.tabs.update({url: "savvy.html"});
          }
          else if(splitLast[0]==("www."+list_data_split[i])){
            chrome.tabs.update({url: "savvy.html"});
          }
        }
      })
    }
  });
});


chrome.storage.onChanged.addListener(function (changes, namespace) {
  for (let [key, { oldValue, newValue }] of Object.entries(changes)) {
    console.log(
      `Storage key "${key}" in namespace "${namespace}" changed.`,
      `Old value was "${oldValue}", new value is "${newValue}".`
    );
  }
});