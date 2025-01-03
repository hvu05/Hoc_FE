let screenW = window.screen.width;
let screenH = window.screen.height;

setTimeout(() => {
    console.log(screenW);
    console.log(screenH);
}, 4000);

function reloadWeb()
{
    window.location.reload();
}

window.navigator; 