function PageClick(info, tab) {
    console.log('Click on page', info, tab )

   // chrome.tabs.create({url: chrome.extension.getURL('background.html')});
}

function ImageClick(info, tab) {
    console.log('Click on page', info, tab )

   // chrome.tabs.create({url: chrome.extension.getURL('background.html')});
}


chrome.contextMenus.create({
        "title": "Share",
        "contexts": ["page"],
        "onclick": PageClick
})

chrome.contextMenus.create({
    "title": "Share image",
    "contexts": ["image"],
    "onclick": ImageClick
})

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
console.log(message.action, message.data);
sendResponse({'text': 'Links are passed: '+ message.data.length});
});
