const linda = document.querySelector('.linda')

const jump = () => {
    linda.classList.add('jump');
    setTimeout(() => {
        linda.classList.remove('jump');
    }, 500);

    
}

document.addEventListener('keydown', jump)