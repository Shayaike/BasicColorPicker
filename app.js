window.onload = function() {
    main();
}
const SelectedColor = document.getElementsByName('SelectedColor')

function main() {

    // create Random color with rendom Color button work

    document.getElementById("randomColor").addEventListener("click", function() {
        var randomColor = "#000000".replace(/0/g, function() { return (~~(Math.random() * 16)).toString(16); });
        hexorrbgcheck(randomColor)
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
    document.getElementById("reset").addEventListener("click", function() {
            document.body.style.backgroundColor = '#ffffff'
            document.body.style.color = '#000000'
            document.getElementById('colorshow').style.backgroundColor = '#ffffff'
            document.getElementById('colorcode').innerText = "Code"
            document.getElementById('colorcodename').innerText = "Hex/RGB"
        })
        // find color from buttons

    for (let i = 0; i < SelectedColor.length; i++) {
        SelectedColor[i].addEventListener('click', function() {
            hexorrbgcheck(SelectedColor[i].value)
        })
    }

}
//Hex Color to RGB Color Converter
function hex2rgb(randomColor) {
    let r = 0,
        g = 0,
        b = 0;

    // 3 digits
    if (randomColor.length == 4) {
        r = "0x" + randomColor[1] + randomColor[1];
        g = "0x" + randomColor[2] + randomColor[2];
        b = "0x" + randomColor[3] + randomColor[3];

        // 6 digits
    } else if (randomColor.length == 7) {
        r = "0x" + randomColor[1] + randomColor[2];
        g = "0x" + randomColor[3] + randomColor[4];
        b = "0x" + randomColor[5] + randomColor[6];
    }

    var rgb = "rgb(" + +r + "," + +g + "," + +b + ")";
    return rgb;
}
//check tha what is selected Hex Or RGB then return it's Hex or RGB and Chenge the color show box color
function hexorrbgcheck(randomColor) {
    const hexorrbgcheck = document.querySelector("input[name=Color_Code]:checked").value
    if (hexorrbgcheck === 'Hex') {
        document.getElementById('colorcodename').innerText = 'Hex'
        document.getElementById('colorcode').innerText = randomColor
        document.getElementById("colorshow").style.backgroundColor = randomColor
    } else if (hexorrbgcheck === 'rgb') {
        document.getElementById('colorcodename').innerText = 'RGB'
        document.getElementById('colorcode').innerText = hex2rgb(randomColor)
        document.getElementById("colorshow").style.backgroundColor = randomColor
    }
}