
import Print from 'app2/Print'

function clickHandle(){
    Print();
} 

function component() {
    const element = document.createElement('div');
    element.id = 'test-container';

    const btn = document.createElement('button');

    element.innerHTML = 'hello webpack';

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = clickHandle;

    element.appendChild(btn);

    return element;
}
if(!document.querySelector('#test-container')){
    document.body.appendChild(component());
}
