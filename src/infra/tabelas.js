class Tabelas{
    inicializa(conexao){
        this.conexao=conexao
        this.criarTabelaProdutos()
        this.criarTabelaFuncionarios()
    }

    criarTabelaProdutos(){ // metodo é um funcao dentro de uma classe

        const sql = 'CREATE TABLE IF NOT EXISTS produtos (id int NOT NULL AUTO_INCREMENT, nome varchar(50) NOT NULL, laboratorio varchar(50) NOT NULL, preco REAL NOT NULL, numeroProduto int NOT NULL, quantidade int NOT NULL, descricao text NOT NULL,  PRIMARY KEY(id))'
        
        this.conexao.query(sql, msg => {
            if(msg){
                console.log(msg)
            } else {
                console.log("tabela produtos criada com sucesso ou ja existe")
            }

        })
    }

    criarTabelaFuncionarios(){ // metodo é um funcao dentro de uma classe

        const sql = 'CREATE TABLE IF NOT EXISTS funcionarios (id int NOT NULL AUTO_INCREMENT, cpf varchar(20) NOT NULL, telefone varchar(20) NOT NULL, nome varchar(50) NOT NULL, cargo varchar(20) NOT NULL, idade int NOT NULL, email varchar(50) NOT NULL, PRIMARY KEY(id))'
        
        this.conexao.query(sql, msg => {
            if(msg){
                console.log(msg)
            } else {
                console.log("tabela funcionarios criada com sucesso ou ja existe")
            }

        })
    }
}

module.exports = new Tabelas;