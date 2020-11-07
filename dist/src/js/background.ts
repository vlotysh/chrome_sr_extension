/// <reference path="./../../types/chrome.d.ts"/>

function PageClick(info:any, tab:any) {
    console.log('Click on page', info, tab )

    chrome.tabs.create({url: chrome.extension.getURL('background.html')});
}

function ImageClick(info:any, tab:any) {
    console.log('Click on page', info, tab )

   // chrome.tabs.create({url: chrome.extension.getURL('background.html')});
}


chrome.contextMenus.create({
        "title": "Share",
        "contexts": ["page"],
        "id": "Share",
})

chrome.contextMenus.create({
    "title": "Share image",
    "contexts": ["image"],
    "id": "Share image",
})

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
console.log(message.action, message.data);
sendResponse({'text': 'Links are passed: '+ message.data.length});
});

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    switch (info.menuItemId) {
        case 'Share image':
            ImageClick(info, tab);
            break;
        case 'Share':
            PageClick(info, tab);
            break;
        default:
            alert( "No action" );
    }
});

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({color: '#3aa757'}, function() {
      console.log('The color is green.');
    });
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        conditions: [new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostEquals: 'developer.chrome.com'},
        })
        ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });