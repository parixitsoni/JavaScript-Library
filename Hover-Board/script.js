const container = document.getElementById('container');

const SQUARE_NO = 500;

const colors = ['#e74c3c','#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

for( let i=0; i<SQUARE_NO; i++){
    const squre = document.createElement('div');
    squre.classList.add('squre');
    
    squre.addEventListener('mouseover',()=>{
        setColorToEl(squre);
    });

    squre.addEventListener('mouseout',()=>{
        removeColorFromEl(squre);
    });

    container.appendChild(squre);
}

function removeColorFromEl(element){
    element.style.background = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function setColorToEl(element){
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)]
}