 ## Uma empresa de vendas tem um banco de dados com informações sobre os seus produtos. Ela precisa criar um relatório que faça um levantamento diário da quantidade de produtos comprados por dia. Para ajudar a empresa, crie um procedure para agilizar esse processo.
 
 - Criação do banco de dados e utilização 

        CREATE DATABASE IF NOT EXISTS empresa_vendas;
        USE empresa_vendas;

 - Criação da tabela de vendas 

        CREATE TABLE IF NOT EXISTS vendas (
            id_venda INT AUTO_INCREMENT PRIMARY KEY,
            data_venda DATE,
            quantidade_produtos INT
        );

 - Inserir alguns dados de vendas 

        INSERT INTO vendas (data_venda, quantidade_produtos) VALUES
            ('2024-01-01', 10),
            ('2024-01-01', 5),
            ('2024-01-02', 8),
            ('2024-01-02', 3),
            ('2024-01-02', 7);

 - Criação da procedure para calcular a quantidade de produtos comprados por dia

        DELIMITER //

        CREATE PROCEDURE calcularProdutosPorDia()
        BEGIN
            SELECT data_venda, SUM(quantidade_produtos) AS total_produtos
            FROM vendas
            GROUP BY data_venda;
        END //

        DELIMITER ;

 - Chamando o producere criado

        CALL calcularProdutosPorDia();
