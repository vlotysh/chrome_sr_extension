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
