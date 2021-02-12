let a = document.querySelector('body');

a.addEventListener('mousedown', function (event) {
    let div = document.createElement('div');
    div.style.backgroundColor = 'red';
    div.style.height = '20px'
    div.style.width = '20px'
    div.style.borderRadius = '50%';
    div.style.position = 'absolute';
    div.style.left = event.clientX + 'px';
    div.style.top = event.clientY + 'px';

    if (event.which == '2') {
        div.style.backgroundColor = 'violet';
    }
    if (event.which == '3') {
        div.style.backgroundColor = 'blue';
        event.preventDefault()
    }

    if (event.ctrlKey) {
        div.style.borderRadius = '0';

    }
    if (event.altKey) {
        div.style.width = '60px'
        div.style.borderRadius = '50%';
    }
    if (event.shiftKey) {
        div.style.width = '50px'
        div.style.borderRadius = '0';
    }

    let scale = 1;
    interval = setInterval(function () {
        div.style.transform = `scale(${scale})`;
        scale += .1;
    })
    document.body.append(div)


    
})
document.body.addEventListener('mouseup', function (event) {
    clearInterval(interval);
})
document.oncontextmenu = function () { return false }