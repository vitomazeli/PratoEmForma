const searchInput  = document.getElementById ('search-bar');

searchInput.addEventListener('input',(event)=>{
    const value = formatString (event.target.value);

    
    const receitas = document.querySelectorAll('.receita')
    const no_results = document.getElementById('no_results');

    let hasResults = false;

    
    receitas.forEach(receita =>{
      const textoReceita = receita.querySelector('p').textContent;  
        if(formatString(receita.textContent).indexOf(value) !== -1){
           receita.classList.remove('hidden');

           hasResults = true;
        }else{
           receita.classList.add('hidden');
        }
    })

    if(hasResults){
        no_results.style.display = 'none';
    } else{
        no_results.style.display = 'block';
    }

});

function formatString(value){
    return value
    .toLowerCase()
    .trim()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g,'');
}