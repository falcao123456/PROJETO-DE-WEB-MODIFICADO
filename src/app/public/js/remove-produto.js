let tabelaLivros = document.querySelector("#produtos")

tabelaLivros.addEventListener('click', (evento) => {
    let elementoClicado = evento.target;

    if(elementoClicado.dataset.type == 'remocao'){
        let produtoId = elementoClicado.dataset.ref;
        fetch(`http://localhost:3000/produtos/${produtoId}`, {method: 'DELETE'})
            .then( resposta => {
                //funcao para remover linha da tabela
                let tr = elementoClicado.closest(`#livro_${produtoId}`)
                window.location.reload();
                tr.remove()
            })
            .catch( msgErro => {
                console.log(msgErro)
            })

    }
})