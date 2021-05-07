

let element = document. getElementById('main');
element.parentNode.removeChild(element);

/* Enter the code to remove the main node element under this comment */
let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'YOUR-NAME is the champion';
document.body.appendChild(newHeader);
