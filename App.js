const viewportHeight = window.innerHeight;
const viewportWidth = window.innerWidth;
document.getElementById('section-hero-container').style['min-height'] = `${viewportHeight - 80}px`

document.getElementById('nav-logo-redirect').setAttribute('href', window.location.href)
document.getElementById('self-direct-anchor').setAttribute('href', window.location.href)




for (let index = 0; index < document.getElementsByClassName('nav-ul-li').length; index++) {
    attachingEventsToDiffElements(document.getElementsByClassName('nav-ul-li')[index], document.getElementsByClassName('nav-ul-li')[index].children[1])
}

function attachingEventsToDiffElements(element, elementBorder) {
    let borderBottomHr = -1;
    let borderBottomHrWidthIncreaseInterval;
    let borderBottomHrWidthDecreaseInterval;
    element.addEventListener('mouseenter', function () {
        if (borderBottomHr === -1) {
            borderBottomHr = 0
            borderBottomHrWidthIncreaseInterval = setInterval(function () {
                elementBorder.style['width'] = `${borderBottomHr}%`
                if (borderBottomHr === 100) {
                    decrease()
                    clearInterval(borderBottomHrWidthIncreaseInterval)
                } else {
                    borderBottomHr += 25;
                }
            }, 40)
        }
    })
    function decrease() {
        borderBottomHrWidthDecreaseInterval = setInterval(function () {
            elementBorder.style['width'] = `${borderBottomHr}%`
            if (borderBottomHr === 0) {
                clearInterval(borderBottomHrWidthDecreaseInterval);
                borderBottomHr = -1
            } else {
                borderBottomHr -= 25;
            }
        }, 40)
    }
}



document.getElementsByClassName('about-me-info-list-item-skills')[0].addEventListener('click', function () {
    document.getElementsByClassName('about-me-info-list-item-skills')[0].classList.add('about-me-info-list-item-active')
    document.getElementsByClassName('about-me-info-list-item-experience')[0].classList.remove('about-me-info-list-item-active')
    document.getElementsByClassName('about-me-info-list-item-education')[0].classList.remove('about-me-info-list-item-active')
    document.getElementById('about-me-info-dynamic-content').innerHTML =
        "<span>Computer Languages:</span><ul><li>HTML</li><li>CSS</li><li>JAVASCRIPT</li><li>JAVA</li><li>PYTHON</li></ul><span>Software Packages</span><ul><li>Bootstrap</li><li>React.js</li></ul>"
})

document.getElementsByClassName('about-me-info-list-item-experience')[0].addEventListener('click', function () {
    document.getElementsByClassName('about-me-info-list-item-skills')[0].classList.remove('about-me-info-list-item-active')
    document.getElementsByClassName('about-me-info-list-item-experience')[0].classList.add('about-me-info-list-item-active')
    document.getElementsByClassName('about-me-info-list-item-education')[0].classList.remove('about-me-info-list-item-active')
    document.getElementById('about-me-info-dynamic-content').innerHTML = "<span>FEB 2023- present</span><ul><li>Software Engineer Intern at Newton School</li></ul>"
})

document.getElementsByClassName('about-me-info-list-item-education')[0].addEventListener('click', function () {
    document.getElementsByClassName('about-me-info-list-item-skills')[0].classList.remove('about-me-info-list-item-active')
    document.getElementsByClassName('about-me-info-list-item-experience')[0].classList.remove('about-me-info-list-item-active')
    document.getElementsByClassName('about-me-info-list-item-education')[0].classList.add('about-me-info-list-item-active')
    document.getElementById('about-me-info-dynamic-content').innerHTML = "<span>2018-2022</span><ul><li>National Institute of Technology Surat, Gujarat</li></ul>"
})




for (let ind = 0; ind < document.getElementsByClassName('my-projects-items').length; ind++) {
    projectOverlayAnimation(document.getElementsByClassName('my-projects-items')[ind], document.getElementsByClassName('my-projects-items')[ind].children[2])
}

function projectOverlayAnimation(element, overlayElement) {
    if (Number(viewportWidth) >= 640) {
        overlayElement.style['top'] = `350px`
        let topDecreaseInterval;
        let topIncreaseInterval;

        element.addEventListener('mouseenter', function () {
            clearInterval(topIncreaseInterval)
            if (Number(overlayElement.style['top'].split('px')[0]) <= 350) {
                topDecreaseInterval = setInterval(function () {
                    if (Number(overlayElement.style['top'].split('px')[0]) === 150) {
                        clearInterval(topDecreaseInterval)
                    } else {
                        overlayElement.style['top'] = `${Number(overlayElement.style['top'].split('px')[0]) - 50}px`
                    }
                }, 30)
            }
        })

        element.addEventListener('mouseleave', function () {
            clearInterval(topDecreaseInterval)
            if (Number(overlayElement.style['top'].split('px')[0]) >= 150) {
                topIncreaseInterval = setInterval(function () {
                    if (Number(overlayElement.style['top'].split('px')[0]) === 350) {
                        clearInterval(topIncreaseInterval)
                    } else {
                        overlayElement.style['top'] = `${Number(overlayElement.style['top'].split('px')[0]) + 50}px`
                    }
                }, 30)
            }

        })
    }else{
        overlayElement.style['top'] = `150px`
    }

}

if(Number(viewportWidth) >= 640){
    document.getElementsByClassName('ftr-btns')[0].addEventListener('mouseenter', function(){
        document.getElementsByClassName('ftr-btns')[0].style['background-color'] = 'white'
    })
    document.getElementsByClassName('ftr-btns')[0].addEventListener('mousedown', function(){
        document.getElementsByClassName('ftr-btns')[0].style['background-color'] = '#00FF7F'
        setTimeout(function(){
        document.getElementsByClassName('ftr-btns')[0].style['background-color'] = 'white'
        }, 200)
        
    })
    document.getElementsByClassName('ftr-btns')[0].addEventListener('mouseleave', function(){
        document.getElementsByClassName('ftr-btns')[0].style['background-color'] = '#00FF7F'
    })

    document.getElementsByClassName('ftr-btns')[1].addEventListener('mouseenter', function(){
        document.getElementsByClassName('ftr-btns')[1].style['background-color'] = 'white'
    })
    document.getElementsByClassName('ftr-btns')[1].addEventListener('mousedown', function(){
        document.getElementsByClassName('ftr-btns')[1].style['background-color'] = '#00FF7F'
        setTimeout(function(){
        document.getElementsByClassName('ftr-btns')[1].style['background-color'] = 'white'
        }, 200)
        
    })
    document.getElementsByClassName('ftr-btns')[1].addEventListener('mouseleave', function(){
        document.getElementsByClassName('ftr-btns')[1].style['background-color'] = '#00FF7F'
    })
}else{
    document.getElementsByClassName('ftr-btns')[0].addEventListener('mousedown', function(){
        document.getElementsByClassName('ftr-btns')[0].style['background-color'] = 'white'
        setTimeout(function(){
            document.getElementsByClassName('ftr-btns')[0].style['background-color'] = '#00FF7F'
        }, 200)
        
    })
}

let leftHamburger = 120;
let hamburgerStartInterval;
let hamburgerEndInterval;

document.getElementById('nav-hamburger').addEventListener('mousedown', function(){
    clearInterval(hamburgerEndInterval)
    clearInterval(hamburgerStartInterval)
    document.getElementById('nav-hamburger').style['color'] = 'white'
    setTimeout(() => {
        document.getElementById('nav-hamburger').style['color'] = '#00FF7F'
    }, 200);


    document.getElementById('hamburger-menu').style['display'] = ['block']

    hamburgerStartInterval = setInterval(() => {
        if (leftHamburger === 0){
            clearInterval(hamburgerStartInterval)
        }else{
            leftHamburger -= 20
            document.getElementById('hamburger-menu').style['left'] = `${leftHamburger}vw`
        }
    }, 60);
})


document.getElementById('hamburger-menu-btn').addEventListener('mousedown', function(){
    clearInterval(hamburgerStartInterval)
    clearInterval(hamburgerEndInterval)
    document.getElementById('hamburger-menu-btn').style['color'] = 'black'
    document.getElementById('hamburger-menu-btn').style['background-color'] = 'white'

    setTimeout(() => {
        document.getElementById('hamburger-menu-btn').style['color'] = 'white'
        document.getElementById('hamburger-menu-btn').style['background-color'] = 'black'
    }, 200);

    hamburgerEndInterval = setInterval(() => {
        if (leftHamburger === 120){
            clearInterval(hamburgerStartInterval)
            document.getElementById('hamburger-menu').style['display'] = ['none']
        }else{
            leftHamburger += 20
            document.getElementById('hamburger-menu').style['left'] = `${leftHamburger}vw`
        }
    }, 60);
})

function hamCloser(){
    clearInterval(hamburgerStartInterval)
    clearInterval(hamburgerEndInterval)
    hamburgerEndInterval = setInterval(() => {
        if (leftHamburger === 120){
            clearInterval(hamburgerStartInterval)
            document.getElementById('hamburger-menu').style['display'] = ['none']
        }else{
            leftHamburger += 20
            document.getElementById('hamburger-menu').style['left'] = `${leftHamburger}vw`
        }
    }, 60);
}



document.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;

    const overlay = document.getElementById('section-hero-container');

    const fadeEndHeight = 80;

    const maxOpacity = 0.9;

    const opacity = Math.min(scrollTop / fadeEndHeight, maxOpacity);

    if (scrollTop > fadeEndHeight) {
        overlay.style.transition = 'background-color 0.3s ease';
        overlay.style.backgroundColor = `rgba(0, 0, 0, ${opacity})`;
    } else {
        overlay.style.transition = 'background-color 0.3s ease';
        overlay.style.backgroundColor = 'transparent';
    }
});




function reloader(){
    document.getElementById('reloader'),setAttribute('href', window.viewportWidth)
}








const scriptURL = 'https://script.google.com/macros/s/AKfycby0wOpWkFonZTYmHNlRu5rz-k0G4r8zXfjdj9WA-Q6F18gy3TkXlmsksTONjrM13OiT5g/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function () {
                msg.innerHTML = ""
            }, 5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})








