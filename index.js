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


let p = document.querySelector('p')

p.addEventListener('mousedown', function(event){
    event.preventDefault()
})