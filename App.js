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
    document.getElementById('about-me-info-dynamic-content').innerHTML = "<span>2018-2022</span><ul><li>NIT SURAT</li></ul>"
})



  const scriptURL = 'https://script.google.com/macros/s/AKfycby0wOpWkFonZTYmHNlRu5rz-k0G4r8zXfjdj9WA-Q6F18gy3TkXlmsksTONjrM13OiT5g/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML = "Message sent successfully"
      setTimeout(function(){
        msg.innerHTML = ""
      }, 5000)
      form.reset()
    })
      .catch(error => console.error('Error!', error.message))
  })








