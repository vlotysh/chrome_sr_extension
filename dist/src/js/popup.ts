import $ from 'jquery';

$('#action_button').on('click', function() {
    console.log(chrome.runtime.getManifest());
    alert('Click!');
})
