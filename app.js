window.onload = function() {
    main();
}

function main() {

    // create Random color with rendom Color button work
    document.getElementById("randomColor").addEventListener("click", function() {
        hexOrRbgCheck(generateRandomHexCode())
    })

    // change Text Color button work
    document.getElementById("TextColor").addEventListener("click", function() {
        document.body.style.color = document.getElementById('colorcode').innerText
    })

    // change background Color button work
    document.getElementById("ChangeBackgroundColor").addEventListener("click", function() {
        document.body.style.backgroundColor = document.getElementById('colorcode').innerText
    })

    // reset button work
    document.getElementById("reset").addEventListener("click", reset)

    // find color from buttons
    const SelectedColor = document.getElementsByName('SelectedColor')
    for (let i = 0; i < SelectedColor.length; i++) {
        SelectedColor[i].addEventListener('click', function() {
            hexOrRbgCheck(SelectedColor[i].value)
        })
    }
}
//check tha what is selected Hex Or RGB then return it's Hex or RGB and Chenge the color show box color
function hexOrRbgCheck(color) {
    const hexOrRbgCheck = document.querySelector("input[name=Color_Code]:checked").value
    if (hexOrRbgCheck === 'Hex') {
        document.getElementById('colorcodename').innerText = 'Hex'
        document.getElementById('colorcode').innerText = color
        document.getElementById("colorshow").style.backgroundColor = color

    } else if (hexOrRbgCheck === 'rgb') {
        document.getElementById('colorcodename').innerText = 'RGB'
        document.getElementById('colorcode').innerText = hexToRGB(color)
        document.getElementById("colorshow").style.backgroundColor = color

    }
}

//Genarate Rendom Hex Color
function generateRandomHexCode() {
    return '#' + ((Math.random() * 0xfffff * 1000000).toString(16)).slice(0, 6);
}

//Hex Color to RGB Color Converter
function hexToRGB(color) {
    let colorArray = color.toString().split('')
    return `rgb(${parseInt((colorArray[1] + colorArray[2]), 16)},${parseInt((colorArray[3] + colorArray[4]), 16)},${parseInt((colorArray[5] + colorArray[6]), 16)})`
}

// create reset function
function reset() {
    document.body.style.backgroundColor = '#ffffff'
    document.body.style.color = '#000000'
    document.getElementById('colorshow').style.backgroundColor = '#ffffff'
    document.getElementById('colorcode').innerText = "Code"
    document.getElementById('colorcodename').innerText = "Hex/RGB"
    document.getElementById('Hex').checked = true
}