var listSumary = document.querySelectorAll('.sumary');

listSumary.forEach(sumary => {
    sumary.onclick = () => {
        sumary.children[1].classList.toggle('show')
    }
});