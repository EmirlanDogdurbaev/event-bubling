// let a = document.querySelector('body');

// a.addEventListener('mousedown', function (event) {
//     let div = document.createElement('div');
//     div.style.backgroundColor = 'red';
//     div.style.height = '20px'
//     div.style.width = '20px'
//     div.style.borderRadius = '50%';
//     div.style.position = 'absolute';
//     div.style.left = event.clientX + 'px';
//     div.style.top = event.clientY + 'px';

//     if (event.which == '2') {
//         div.style.backgroundColor = 'violet';
//     }
//     if (event.which == '3') {
//         div.style.backgroundColor = 'blue';
//         event.preventDefault()
//     }

//     if (event.ctrlKey) {
//         div.style.borderRadius = '0';

//     }
//     if (event.altKey) {
//         div.style.width = '60px'
//         div.style.borderRadius = '50%';
//     }
//     if (event.shiftKey) {
//         div.style.width = '50px'
//         div.style.borderRadius = '0';
//     }

//     let scale = 1;
//     interval = setInterval(function () {
//         div.style.transform = `scale(${scale})`;
//         scale += .1;
//     })
//     document.body.append(div)

// })
// document.body.addEventListener('mouseup', function (event) {
//     clearInterval(interval);
// })
// document.oncontextmenu = function () { return false }

// a.addEventListener('mousedown', function (event) {
//     let span = document.createElement('span');
//     span.style.backgroundColor = 'yellow';
//     span.style.height = '50px';
//     span.style.width = '50px';
//     span.style.borderRadius = '50%';
//     span.style.opacity = '.5';
//     if(event.keyZ){
//         span.style.backgroundColor = 'yellow';
//         span.style.height = '50px';
//         span.style.width = '50px';
//         span.style.borderRadius = '50%';
//         span.style.opacity = '.5';
//     }
//     if (event.keyC){
//         span.style.backgroundColor = 'blue';
//         span.style.height = '50px';
//         span.style.width = '50px';
//         span.style.borderRadius = '50%';
//         span.style.opacity = '.5';
//     }
//     if( event.keyB){
//         span.style.backgroundColor = 'black';
//         span.style.height = '50px';
//         span.style.width = '50px';
//         span.style.borderRadius = '50%';
//         span.style.opacity = '.5';
//     }
//     document.body.append(span)
// })

// let fruits = ["apple", "lemon", "bananas", "greap"];
// let ul = document.createElement("ul");
// for (let i = 0; i < fruits.length; i++) {
//   let li = document.createElement("li");
//   let span = document.createElementAll('span');
//   span.innerText = fruits[i];
//   ul.append(li);
//   li.append(span);
//   let bt = document.createElement("button");
//   bt.innerText = "-";
//   li.append(bt);
//   bt.addEventListener("click", function (event) {
//     li.remove();
//   });
// }
// document.body.append(ul);

// let input = document.querySelector("input");
// let btn = document.querySelector("button");
// btn.addEventListener("click", function (event) {
//   if (input.value.trim()) {
//     let li = document.createElement("li");
//     let span = document.createElementAll('span');
//     span.innerText = input.value;
//     input.value = "";
//     ul.append(li);
//     li.append(span);
//     let bt = document.createElement("button");
//     bt.innerText = "-";
//     li.append(bt);
//     bt.addEventListener("click", function (event) {
//       li.remove();
//     });
//   }
// });

// let example1 = ["apple", "banana", "lemon", "oruk", "badyran"];

// let ul = document.createElement("ul");
// let li = document.createElement("li");

// document.body.append(ul);

// for (let i = 0; i < example1.length; i++) {
//   let li = document.createElement("li");
//   let span = document.createElement("span");
//   let button = document.createElement("button");

//   span.innerText = example1[i];

//   button.innerText = "-";

//   button.addEventListener("click", function (event) {
//     li.remove();
//   });
//   span.addEventListener("click", function () {
//     span.classList.toggle("done");
//   });

//   ul.append(li);
//   li.append(span);
//   li.append(button);
// }

// document.body.append(ul);

// let bt = document.querySelector("#bt");
// let input = document.querySelector("#in");

// bt.addEventListener("click", function (event) {
//   if (input.value.trim()) {
//     let li = document.createElement("li");
//     let span = document.createElement("span");
//     span.innerText = input.value;
//     ul.append(li);
//     li.append(span);
//     input.value = "";
//     let button = document.createElement("button");
//     button.innerText = "-";
//     li.append(button);
//     button.addEventListener("click", function (event) {
//       li.remove();
//     });
//     span.addEventListener("click", function () {
//       span.classList.toggle("done");
//     });
//   }
// });












// let fruits = ["Limon", "Lime", "Apple", "Banana", '', '   '];

// let ul = document.createElement("ul");
// let input = document.querySelector("input");
// let button = document.querySelector("button");

// document.body.append(ul);
// for (let i in fruits) {
//     let li = returnListItem(fruits[i]);
//     if (li) {
//         ul.append(li);
//     }
// }

// button.addEventListener("click", function () {
//     let li = returnListItem(input.value);
//     if (li) {
//         input.value = '';
//         ul.append(li);
//     }
// });

// function returnListItem(text = '') {
//     if (!text.trim()) {
//         return false;
//     }

//     let li = document.createElement("li");
//     let button = document.createElement("button");
//     let span = document.createElement("span");

//     button.innerText = "-";
//     span.innerText = text;

//     button.addEventListener("click", function () {
//         li.remove();
//     });
//     span.addEventListener("click", function () {
//         span.classList.toggle('done');
//     });

//     li.append(span);
//     li.append(button);
    
//     return li;
// }