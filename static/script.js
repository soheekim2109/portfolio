'use strict'

var cssStyle = document.querySelector(":root").style

var homebutton = document.getElementById('home-button')
var themebutton = document.getElementById('theme-button')
var contactbuttons = document.getElementsByClassName('contact-button')


initialise()

function initialise() {
    // check for machine dark mode setting only if website dark mode setting does not exist
    if (localStorage.getItem('darkmode') != 'TRUE' && localStorage.getItem('darkmode') != 'FALSE') {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            localStorage.setItem('darkmode', 'TRUE')
        } else {
            localStorage.setItem('darkmode', 'FALSE')
        }
    }

    changeThemeColours()
}

// toggle dark mode by theme button click
function toggleDarkMode() {
    if (localStorage.getItem('darkmode') == 'TRUE') {
        localStorage.setItem('darkmode', 'FALSE')
    } else {
        localStorage.setItem('darkmode', 'TRUE')
    }

    changeThemeColours()
}

// change css to match the theme
function changeThemeColours() {
    if (localStorage.getItem('darkmode') == 'TRUE') {
        // dark mode

        if (homebutton) {
            homebutton.getElementsByTagName('img')[0].src = 'static/img/icons/home-dark.png'
        }
        themebutton.getElementsByTagName('img')[0].src = 'static/img/icons/theme-dark.png'
        if (contactbuttons.length == 3) {
            contactbuttons[0].getElementsByTagName('img')[0].src = 'static/img/icons/github-dark.png'
            contactbuttons[1].getElementsByTagName('img')[0].src = 'static/img/icons/linkedin-dark.png'
            contactbuttons[2].getElementsByTagName('img')[0].src = 'static/img/icons/mail-dark.png'
        }

        cssStyle.setProperty('--background-colour', 'rgb(40 41 48)')
        cssStyle.setProperty('--main-text-colour', '#dfdfe0')
        cssStyle.setProperty('--light-grey', 'rgb(84 86 97)')
        cssStyle.setProperty('--project-card-shadow', 'rgb(0 0 0 / 36%)')
        cssStyle.setProperty('--highlight-colour', 'rgb(136 255 232 / 40%)')
        cssStyle.setProperty('--name-title-color', '#ffffff59')
    } else {
        // light mode

        if (homebutton) {
            homebutton.getElementsByTagName('img')[0].src = 'static/img/icons/home-light.png'
        }
        themebutton.getElementsByTagName('img')[0].src = 'static/img/icons/theme-light.png'
        if (contactbuttons.length == 3) {
            contactbuttons[0].getElementsByTagName('img')[0].src = 'static/img/icons/github-light.png'
            contactbuttons[1].getElementsByTagName('img')[0].src = 'static/img/icons/linkedin-light.png'
            contactbuttons[2].getElementsByTagName('img')[0].src = 'static/img/icons/mail-light.png'
        }

        cssStyle.setProperty('--background-colour', 'rgb(247 247 244)')
        cssStyle.setProperty('--main-text-colour', '#313130')
        cssStyle.setProperty('--light-grey', 'rgb(204 204 199)')
        cssStyle.setProperty('--project-card-shadow', 'rgb(0 0 0 / 15%)')
        cssStyle.setProperty('--highlight-colour', 'rgb(0 189 153 / 36%)')
        cssStyle.setProperty('--name-title-color', '#ffffff0f')
    }
}
