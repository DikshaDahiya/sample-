/* global document,window,localStorage */

/*Code for Image Changer */
/* var groupimage = document.querySelector('img');

'strict statement'; groupimage.onclick = function () {
    var myimages = groupimage.getAttribute('src');

    if(myimages === 'images/group.jpeg')
    {
        groupimage.setAttribute ('src' , 'images/possible.jpeg');
    }
    else {
        groupimage.setAttribute ('src','images/group.jpeg');

    }
    } */



    // Personalized Welcome Message code

    var nameButton = document.querySelector('button');
    var  myHeading = document.querySelector('h1');

    function setUserName() {
        'use strict'
        var myName = window.prompt('please enter your name');
        localStorage.setItem('name', myName);
        myHeading.textContent = 'have a rocking day , ' + myName;

    }

    if(!localStorage.getItem('name'))
    {
        setUserName();
        
    }
    else {
        var storedName = localStorage.getItem('name');
        myHeading.textContent = 'Have a Rocking Day' + storedName;

    }

    nameButton.onclick = function () {
         'use strict'
        setUserName();

    };