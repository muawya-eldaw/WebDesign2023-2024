// this function changes the content of the heading to 'new content'
function myClickFunction() {
    var element = document.getElementById('pageheading'); 
    element.firstChild.nodeValue = 'New Heading';
}

//this function detects the clicking on the paragraph
function myLoadFunction_2() {
    var element = document.getElementById('pID'); 
    element.addEventListener('click', myClickFunction);
}

/*
//this function detects the clicking on the heading
function myLoadFunction() {
    var element = document.getElementById('pageheading'); 
    element.addEventListener('click', myClickFunction);
}
*/

document.addEventListener('DOMContentLoaded', myLoadFunction_2);