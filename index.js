// let link = document.querySelector('a');
// let div = document.querySelector('div');
// let p = document.querySelector('p');

// Bad
// let span1 = document.querySelector('span#example-1');
// let span2 = document.querySelector('span#example-2');
// span1.addEventListener('click', function() {
//     alert(this.innerHTML);
// });
// span2.addEventListener('click', function() {
//     alert(this.innerHTML);
// });

// Ok
// let spans = document.querySelectorAll('span');
// for (const span of spans) {
//     span.addEventListener('click', function() {
//         alert(this.innerHTML);
//     });
// }

// Wow - Event bubling - ВСПЛЫТИЕ
// let ul = document.querySelector('ul');
// ul.addEventListener('click', function(event) {
//     if (event.target.tagName == 'SPAN') {
//         alert(event.target.innerHTML);
//     }
// })


// let p = document.querySelector('p')

// p.addEventListener('mouseup', function(event){
//     event.preventDefault()
// })

// let div = document.querySelector('div');
// let a = document.querySelector('a');
// let i = 0;

// div.addEventListener('mousedown', function(event) {
//     i++;
//     this.innerHTML = i + ". mousedown - " + event.which + "<br>" + this.innerHTML;
// });
// div.addEventListener('mouseup', function(event) {
//     i++;
//     this.innerHTML = i + ". mouseup<br>" + this.innerHTML;
// });
// div.addEventListener('click', function(event) {
//     console.log(event.clientX, event.clientY);
//     console.log(event.pageX, event.pageY);

//     i++;
//     this.innerHTML = i + ". click<br>" + this.innerHTML;
// });
// div.addEventListener('dblclick', function(event) {
//     i++;
//     this.innerHTML = i + ". dblclick<br>" + this.innerHTML;
// });
// div.addEventListener('contextmenu', function(event) {
//     i++;
//     this.innerHTML = i + ". contextmenu<br>" + this.innerHTML;
// });


a.addEventListener('click', function(event) {
    // altKey, shiftKey, metaKey
    if (!event.ctrlKey && !event.altKey) {
        event.preventDefault();
    }
});


let ol = document.querySelectorAll("ol");

ol.addEventListener('click' , function(event){
    if(event.target.tagName == 'LI'){
        event.target.classList.toggle('selected');
    }
});

let parent = document.querySelector('.parent');
let child = document.querySelector('.child');
let result = document.querySelector('#result');

parent.addEventListener('mouseenter', function(event) {
    console.log('mouseenter - ' + this.className);
});
parent.addEventListener('mouseleave', function(event) {
    console.log('mouseleave - ' + this.className);
});
child.addEventListener('mouseenter', function(event) {
    console.log('mouseenter - ' + this.className);
});
child.addEventListener('mouseleave', function(event) {
    console.log('mouseleave - ' + this.className);
});

parent.addEventListener('mousemove', function(event) {
    console.log('mousemove - ' + this.className);
});

parent.addEventListener('mouseover', function(event) {
    console.log('mouseover - ' + this.className);
});
parent.addEventListener('mouseout', function(event) {
    console.log('mouseout - ' + this.className);
});



// Timer
let timerID;
let button = document.querySelector('button#hello');
let cancel = document.querySelector('button#cancel');
button.addEventListener('click', function() {
   timerID  = setTimeout(sayHello, 5000);
});
cancel.addEventListener('click', function() {
   clearTimeout(timerID);
});

// Iterval
let intervalID;
let number = 10;
let countdown = document.querySelector('#countdown');
let start = document.querySelector('#start');
start.addEventListener('click', function() {
    clearInterval(intervalID);
    number = 10;
    
    intervalID = setInterval(function() {
        countdown.innerText = number;
        number--;
        if (number == -1) {
            clearInterval(intervalID);
        }
    }, 1000);
});