window.onload = function() {
    function changeBackgroundColor() {
        console.log('Button clicked');
        const homepageSection = document.querySelector('.homepage');
        homepageSection.style.backgroundColor = getRandomColor();
    }
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        console.log(color);
        return color;
    }
}
function letsPlay(q1,q2){
}
function game(){
    var q1 = prompt("Guess my favourite game : a)hide and seek b)hunger games");
    var q2 = prompt("Are you sure?😈")
    alert("Game");
}
game();  