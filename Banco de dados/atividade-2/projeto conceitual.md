### O desenvolvimento de um projeto de banco de dados passa por fases importantes para a sua implementação, como a de projeto conceitual. Diante disso, crie uma entidade que tenha atributos simples, composto e multivalorado

# ENTIDADE: Pessoa

**Pessoa:**
    //Atributos Simples:
        Nome (String),
        DataNascimento (Date),
        Email (String),

    //Atributo Composto:
         Endereço (Bairro: String, Cidade: String, Estado: String),

    //Atributo Multivalorado:
        NúmerosTelefones ([numero2, numero2, numero3] Integer);