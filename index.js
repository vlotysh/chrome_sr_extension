var dom = document.getElementById('rso');
var links = dom.getElementsByClassName('g');

for(let i = 0; i < links.length; i++) {
    console.log(links[i].getElementsByTagName('h3')[0].innerText + ' : ' + links[i].getElementsByTagName('a')[0].href);
}