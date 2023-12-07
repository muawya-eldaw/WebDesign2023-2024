function myClickFunction() {
    var element = document.getElementById('pageheading'); 
    element.firstChild.nodeValue = 'New Heading';
}

function myLoadFunction() {
    var element = document.getElementById('pageheading'); 
    element.addEventListener('click', myClickFunction);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);