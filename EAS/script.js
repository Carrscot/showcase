const container = document.querySelector('#container');


for(let i = 0; i < 256; i++) {
    const box = document.createElement('div');
        box.classList.add('box');
        box.style.height = '40px';
        box.style.width = '40px';
    
    const change = document.querySelector('.box');
        box.addEventListener('mouseover', black);

    function black(){
        box.style.backgroundColor = 'black';
    }

container.appendChild(box)
}

function startState() {
const old = document.querySelector('#container');
    old.innerHTML = '';

    for(let i = 0; i < 256; i++) {
        const box = document.createElement('div');
            box.classList.add('box');
            box.style.height = '40px';
            box.style.width = '40px';
        
        const change = document.querySelector('.box');
            box.addEventListener('mouseover', black);
    
        function black(){
            box.style.backgroundColor = 'black';
        }
container.appendChild(box)

    }
}

const options = document.querySelector('#options')

const start = document.createElement('button');
    start.classList.add('start');
    start.textContent = 'Start!';

options.appendChild(start);

const custom = document.createElement('button');
    custom.classList.add('custom');
    custom.textContent = 'Custom Grid';

options.appendChild(custom);

const startClick = document.querySelector('.start');
start.addEventListener('click', startState);


function cusGrid (){
    const old = document.querySelector('#container');
    old.innerHTML = '';

    const gridSize = prompt('Please choose the dimensions of the grid. INTEGERS <100 ONLY!', 'eg. 64');
    const boxSize = (672-gridSize*2)/gridSize;

    if (gridSize > 100 || gridSize <= 0 || gridSize ===''){
        old.innerHTML = '';
        alert('This selection is not valid.');
    }
    
    else {for(let i = 0; i < (gridSize*gridSize) ; i++) {
        const box = document.createElement('div');
            box.classList.add('box');
            box.style.width =  `${boxSize}px`;            
            box.style.height = `${boxSize}px`;            
        
        const change = document.querySelector('.box');
            box.addEventListener('mouseover', black);
    
        function black(){
            box.style.backgroundColor = 'black';
        }
container.appendChild(box)
        }

    }

}

const customClick = document.querySelector('.custom');
custom.addEventListener('click', cusGrid);

const bonus = document.querySelector('#bonus')

const rgb = document.createElement('button');
    rgb.classList.add('rgb');
    rgb.textContent = 'Custom RGB';

bonus.appendChild(rgb);

function rgbGrid (){
    const old = document.querySelector('#container');
    old.innerHTML = '';

    const gridSize = prompt('Please choose the dimensions of the grid. INTEGERS <100 ONLY!', 'eg. 64');
    const boxSize = (672-gridSize*2)/gridSize;

    if (gridSize > 100 || gridSize <= 0 || gridSize ===''){
        old.innerHTML = '';
        alert('This selection is not valid.');
    }
    
    else {for(let i = 0; i < (gridSize*gridSize) ; i++) {
        const box = document.createElement('div');
            box.classList.add('box');
            box.style.width =  `${boxSize}px`;            
            box.style.height = `${boxSize}px`;            
        
        const change = document.querySelector('.box');
            box.addEventListener('mouseover', color);
    
        function color(){
            box.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}`;
        }
container.appendChild(box)
        }

    }

}

const colorClick = document.querySelector('.rgb');
rgb.addEventListener('click', rgbGrid);



