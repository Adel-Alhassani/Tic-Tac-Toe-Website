const winner = document.querySelector('#winner')
const sqr1 = document.querySelector('#sqr1')
const sqr2 = document.querySelector('#sqr2')
const sqr3 = document.querySelector('#sqr3')
const sqr4 = document.querySelector('#sqr4')
const sqr5 = document.querySelector('#sqr5')
const sqr6 = document.querySelector('#sqr6')
const sqr7 = document.querySelector('#sqr7')
const sqr8 = document.querySelector('#sqr8')
const sqr9 = document.querySelector('#sqr9')
const sqrs = document.querySelectorAll('.sqrs')
const resetBtn = document.querySelector('#reset')
// 1=cross, 0=circle
let turn = 1

function setCross(element) {
    const crossSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    const crossLine1 = document.createElementNS('http://www.w3.org/2000/svg', 'line')
    const crossLine2 = document.createElementNS('http://www.w3.org/2000/svg', 'line')

    crossSVG.setAttribute('id', 'cross')
    crossSVG.setAttribute('width', '70')
    crossSVG.setAttribute('height', '70')
    crossSVG.setAttribute('viewBox', '0 0 135 154')
    crossSVG.setAttribute('fill', 'none')
    crossSVG.setAttribute('xmlns', 'http://www.w3.org/2000/svg')

    crossLine1.setAttribute('y1', '-2.5')
    crossLine1.setAttribute('x2', '195.18')
    crossLine1.setAttribute('y2', '-2.5')
    crossLine1.setAttribute('transform', 'matrix(-0.642788 -0.766044 0.797526 -0.603284 130.043 150.259)')
    crossLine1.setAttribute('stroke', '#09E1FF')
    crossLine1.setAttribute('stroke-width', '5')

    crossLine2.setAttribute('y1', '-2.5')
    crossLine2.setAttribute('x2', '195.181')
    crossLine2.setAttribute('y2', '-2.5')
    crossLine2.setAttribute('transform', 'matrix(-0.642788 0.766044 -0.797525 -0.603286 130.043 0.741577)')
    crossLine2.setAttribute('stroke', '#09E1FF')
    crossLine2.setAttribute('stroke-width', '5')

    crossSVG.append(crossLine1)
    crossSVG.append(crossLine2)
    element.append(crossSVG)
}

function setCircle(element) {
    const circleSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    const pathSVG = document.createElementNS('http://www.w3.org/2000/svg', 'path')

    circleSVG.setAttribute('id', 'circle')
    circleSVG.setAttribute("width", "70")
    circleSVG.setAttribute("height", "70")
    circleSVG.setAttribute("viewBox", "0 0 172 171")
    circleSVG.setAttribute("fill", "none")
    circleSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg")

    pathSVG.setAttribute("d", "M169.5 85.5C169.5 131.326 132.13 168.5 86 168.5C39.8705 168.5 2.5 131.326 2.5 85.5C2.5 39.6741 39.8705 2.5 86 2.5C132.13 2.5 169.5 39.6741 169.5 85.5Z")
    pathSVG.setAttribute("fill", "none")
    pathSVG.setAttribute("stroke", "#09E1FF")
    pathSVG.setAttribute("stroke-width", "5")

    circleSVG.append(pathSVG)
    element.append(circleSVG)
}

function isValid(element) {
    if (element.querySelector('svg')) {
        return false
    } else {
        return true
    }
}
function makeAMove(element) {
    if (!isValid(element)) {
        return
    }
    if (turn == 1) {
        setCross(element)
        turn = 0
    } else {
        setCircle(element)
        turn = 1
    }
    removeHover(element)
    checkWin()
}

function colorizeWinner(element1, element2, element3) {
    if (element1.id == 'circle') {
        element1.querySelector('path').setAttribute('stroke', '#09FF3F')
        element2.querySelector('path').setAttribute('stroke', '#09FF3F')
        element3.querySelector('path').setAttribute('stroke', '#09FF3F')
        winner.innerText = "O-player is the winner"
    }
    else {
        element1.querySelectorAll('line')[0].setAttribute('stroke', '#09FF3F')
        element1.querySelectorAll('line')[1].setAttribute('stroke', '#09FF3F')
        element2.querySelectorAll('line')[0].setAttribute('stroke', '#09FF3F')
        element2.querySelectorAll('line')[1].setAttribute('stroke', '#09FF3F')
        element3.querySelectorAll('line')[0].setAttribute('stroke', '#09FF3F')
        element3.querySelectorAll('line')[1].setAttribute('stroke', '#09FF3F')
        winner.innerText = "X-player is the winner"
    }
}

function removeHover(element) {
    element.classList.remove('sqrsHover')
}
function addHover(element) {
    element.classList.add('sqrsHover')
}

function sqrsDisable() {
    for (const sqr of sqrs) {
        sqr.classList.add('sqrsDisable')
        removeHover(sqr)
    }
}
function sqrsEnable() {
    for (const sqr of sqrs) {
        sqr.classList.remove('sqrsDisable')
        addHover(sqr)
    }
}

function checkWin() {
    try {
        const sqr1SVG = sqr1.querySelector('svg')
        const sqr2SVG = sqr2.querySelector('svg')
        const sqr3SVG = sqr3.querySelector('svg')
        const sqr4SVG = sqr4.querySelector('svg')
        const sqr5SVG = sqr5.querySelector('svg')
        const sqr6SVG = sqr6.querySelector('svg')
        const sqr7SVG = sqr7.querySelector('svg')
        const sqr8SVG = sqr8.querySelector('svg')
        const sqr9SVG = sqr9.querySelector('svg')

        if (sqr1SVG && sqr2SVG && sqr3SVG) {
            if (sqr1SVG.id == sqr2SVG.id && sqr1SVG.id == sqr3SVG.id) {
                colorizeWinner(sqr1SVG, sqr2SVG, sqr3SVG)
                sqrsDisable()
                return
            }
        }
        if (sqr4SVG && sqr5SVG && sqr6SVG) {
            if (sqr4SVG.id == sqr5SVG.id && sqr4SVG.id == sqr6SVG.id) {
                colorizeWinner(sqr4SVG, sqr5SVG, sqr6SVG)
                sqrsDisable()
                return
            }
        }
        if (sqr7SVG && sqr8SVG && sqr9SVG) {
            if (sqr7SVG.id == sqr8SVG.id && sqr7SVG.id == sqr9SVG.id) {
                colorizeWinner(sqr7SVG, sqr8SVG, sqr9SVG)
                sqrsDisable()
                return
            }
        }

        if (sqr1SVG && sqr4SVG && sqr7SVG) {
            if (sqr1SVG.id == sqr4SVG.id && sqr1SVG.id == sqr7SVG.id) {
                colorizeWinner(sqr1SVG, sqr4SVG, sqr7SVG)
                sqrsDisable()
                return
            }
        }
        if (sqr2SVG && sqr5SVG && sqr8SVG) {
            if (sqr2SVG.id == sqr5SVG.id && sqr2SVG.id == sqr8SVG.id) {
                colorizeWinner(sqr2SVG, sqr5SVG, sqr8SVG)
                sqrsDisable()
                return
            }
        }
        if (sqr3SVG && sqr6SVG && sqr9SVG) {
            if (sqr3SVG.id == sqr6SVG.id && sqr3SVG.id == sqr9SVG.id) {
                colorizeWinner(sqr3SVG, sqr6SVG, sqr9SVG)
                sqrsDisable()
                return
            }
        }
        if (sqr1SVG && sqr5SVG && sqr9SVG) {
            if (sqr1SVG.id == sqr5SVG.id && sqr1SVG.id == sqr9SVG.id) {
                colorizeWinner(sqr1SVG, sqr5SVG, sqr9SVG)
                sqrsDisable()
                return
            }
        }
        if (sqr3SVG && sqr5SVG && sqr7SVG) {
            if (sqr3SVG.id == sqr5SVG.id && sqr3SVG.id == sqr7SVG.id) {
                colorizeWinner(sqr3SVG, sqr5SVG, sqr7SVG)
                sqrsDisable()
                return
            }
        }

    } catch (e) {
        console.log('Error', e)
    }
}

for (const sqr of sqrs) {
    sqr.addEventListener('click', function () {
        makeAMove(this)
    })
}

function reset() {
    winner.innerText = ""
    sqrsEnable()
    for (const sqr of sqrs) {
        addHover(sqr)
        if (sqr.querySelector('svg')) {
            sqr.querySelector('svg').remove()
        }
    }

}

resetBtn.addEventListener('click', reset)