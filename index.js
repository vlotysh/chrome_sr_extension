var dom = document.getElementById('rso');
var links = dom.getElementsByClassName('g');

var formatedLinks = {};

for(let i = 0; i < links.length; i++) {

    formatedLinks[links[i].getElementsByTagName('h3')[0].innerText] =  links[i].getElementsByTagName('a')[0].href;
}

chrome.runtime.sendMessage({"action": "print_links", "data": formatedLinks});
