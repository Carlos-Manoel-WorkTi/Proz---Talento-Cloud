## Crie um banco de dados, adicione tabelas e determine quais são os atributos de cada uma. Em seguida, execute um trigger que se relacione com algum comando, como insert, select, delete ou update.
<div>
- Criação do banco de dados 'exemplo_bd' 

       CREATE DATABASE IF NOT EXISTS exemplo_bd;

 - Usar o banco de dados criado

        USE exemplo_bd;

 - Criar tabela 'clientes'

        CREATE TABLE clientes (
            id_cliente INTEGER PRIMARY KEY,
            nome TEXT NOT NULL,
            email TEXT UNIQUE
        );

 - Criar tabela 'pedidos'

        CREATE TABLE pedidos (
            id_pedido INTEGER PRIMARY KEY,
            id_cliente INTEGER,
            data_pedido DATE,
            valor_total DECIMAL(10, 2),
            FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
        );

 - Criar trigger que exibe uma mensagem após a inserção de um novo pedido

        CREATE TRIGGER after_insert_pedido
        AFTER INSERT ON pedidos
        BEGIN
            SELECT 'Novo pedido inserido. ID do pedido: ', NEW.id_pedido;
        END;
