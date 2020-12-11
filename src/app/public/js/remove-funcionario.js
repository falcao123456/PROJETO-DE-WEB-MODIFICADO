let tabelaLivros = document.querySelector("#funcionarios")

tabelaLivros.addEventListener('click', (evento) => {
    let elementoClicado = evento.target;

    if(elementoClicado.dataset.type == 'remocao'){
        let funcionarioId = elementoClicado.dataset.ref;
        fetch(`http://localhost:3000/funcionarios/${funcionarioId}`, {method: 'DELETE'})
            .then( resposta => {
                //funcao para remover linha da tabela
                let tr = elementoClicado.closest(`#livro_${funcionarioId}`)
                tr.remove()
            })
            .catch( msgErro => {
                console.log(msgErro)
            })

    }
})