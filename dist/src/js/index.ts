/// <reference path="./../../types/chrome.d.ts"/>

console.log(!('update_url' in chrome.runtime.getManifest()));
var dom = document.getElementById('rso');
if (dom) {
    var links = dom.getElementsByClassName('g');

    var formatedLinks = [];
    
    for(let i = 0; i < links.length; i++) {
    
        var map = {'text': links[i].getElementsByTagName('h3')[0].innerText, 'link': links[i].getElementsByTagName('a')[0].href};
        formatedLinks.push(map);
    }
    
    chrome.runtime.sendMessage({
        "action": "print_links", 
        "data": formatedLinks,
    }, res => {console.log(res)});
    
}

function loadJs(scriptName, context) {
    let isDevMod = !('update_url' in chrome.runtime.getManifest());
    let path = scriptName + '.js';

    if (isDevMod) {
        path = scriptName + '.min.js';
    }
    var script = context.createElement('script');
    script.src = path;
    script.async = false; // чтобы гарантировать порядок
    context.head.appendChild(script);
}

window.loadJs = loadJs;

console.log(loadJs);