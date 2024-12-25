

document.addEventListener('DOMContentLoaded', function () {
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');



    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }


    changeColorBtn.addEventListener('click', function () {
        const randomColor = getRandomColor();
        colorBox.style.backgroundColor = randomColor;
    });
});
