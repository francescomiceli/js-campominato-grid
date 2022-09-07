console.log('JS OK')

//Bottone
const buttonClick = document.getElementById('clickButton')

//Generazione griglia
buttonClick.addEventListener('click' ,function(){
    console.log('click');
    const grid = document.getElementById('grid');
    grid.innerHTML = ''; 

//Ciclo    
    for (let i = 1 ; i <= 100 ; i++){
        const cell = document.createElement('div');
        cell.innerHTML = i;
        cell.className = 'cell';
        grid.append(cell);


        cell.addEventListener('click', function(){
            console.log('click me' , i)
            
            const odd = isNumberOdd(i);
            if(odd){
                cell.classList.add('dispari');
            }else{
                cell.classList.add('pari');
            }
        })
    }
})

function isNumberOdd(number) {
    return number % 2 === 0;
}

