

async function clickHandle(){
    const m = await import('./print.js');
    m.default();
} 

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    element.innerHTML = 'hello webpack';

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = clickHandle;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());