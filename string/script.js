const form = {
    string : document.getElementById('string'),
    btn : document.getElementById('btn'),
    resposta : document.getElementById('resposta'),
}

form.btn.addEventListener('click',()=>{
    verificandoString(form.string.value)
    form.string.value = ''
})

function verificandoString(string){
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i].toLowerCase() == 'a') {
            count++;
        }
    }
    if (count > 0) {
        return form.resposta.innerHTML = `A letra 'a' aparece ${count} vezes na string: ${form.string.value}`;
    } else {
        return form.resposta.innerHTML = `A letra 'a' não aparece na string: ${form.string.value};`
    }
}