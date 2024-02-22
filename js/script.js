const linda = document.querySelector('.linda')
const pipe = document.querySelector('.pipe')
const jump = () => {
    linda.classList.add('jump');
    setTimeout(() => {
        linda.classList.remove('jump');
    }, 500);

    
}

const loop = setInterval( () => {
    const pipePosition = pipe.offsetLeft;
    const lindaPosition = +window.getComputedStyle(linda).bottom.replace('px', '');
        console.log(lindaPosition);
    if(pipePosition <= 93 && pipePosition > 0 && lindaPosition < 100) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        linda.style.animation = 'none';
        linda.style.bottom = `${lindaPosition}px`;
        alert('GAME OVER')
        clearInterval(loop);
    }
}, 10)


document.addEventListener('keydown', jump)