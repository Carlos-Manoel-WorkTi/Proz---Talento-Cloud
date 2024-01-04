## Uma loja tem um banco de dados que contém todo o controle de vendas de produtos e de cadastro de clientes. Pensando nisso, crie uma função para somar todos os clientes que foram cadastrados na loja durante um dia. 

# mysql

 - Criação do banco de dados e utilização 

        CREATE DATABASE IF NOT EXISTS loja_vendas;
        USE loja_vendas;

 - Criação da tabela de clientes 

        CREATE TABLE IF NOT EXISTS clientes (
            id_cliente INT AUTO_INCREMENT PRIMARY KEY,
            nome VARCHAR(100),
            data_cadastro DATE
        );

 - Inserção de alguns dados de clientes

        INSERT INTO clientes (nome, data_cadastro) VALUES
            ('Cliente Um', '2024-01-01'),
            ('Cliente Dois', '2024-01-01'),
            ('Cliente Três', '2024-01-02'),
            ('Cliente Quatro', '2024-01-02'),
            ('Cliente Cinco', '2024-01-02');

 - Criação da função para contar clientes cadastrados em um dia específico
 
        DELIMITER //

        CREATE FUNCTION contarClientesPorDia(data_pesquisa DATE)
        RETURNS INT
        BEGIN
            DECLARE total_clientes INT;
            
            SELECT COUNT(*) INTO total_clientes
            FROM clientes
            WHERE data_cadastro = data_pesquisa;
            
            RETURN total_clientes;
        END //

        DELIMITER ;
