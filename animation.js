const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 1000;

for (let i = 0; i < numberOfColorBoxes; i++){
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)

}